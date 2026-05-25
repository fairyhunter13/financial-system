#!/usr/bin/env node
/* ============================================================
   devserver.js — Static file server + SQLite wiki API
   Usage: node devserver.js [port]
   ============================================================ */
'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2] || '8080', 10);
const ROOT = __dirname;
const DB_PATH = path.join(ROOT, 'data', 'wiki.db');

/* ── SQLite (optional — only if data/wiki.db exists) ────────── */
let db = null;
function getDB() {
  if (db) return db;
  if (!fs.existsSync(DB_PATH)) return null;
  try {
    const Database = require('better-sqlite3');
    db = new Database(DB_PATH, { readonly: false });
    console.log('  SQLite wiki.db loaded');
    return db;
  } catch (e) {
    console.warn('  SQLite unavailable:', e.message);
    return null;
  }
}
// Try to open on startup
getDB();

/* ── SSE clients waiting for reload signal ──────────────────── */
const clients = new Set();
function broadcast() {
  for (const res of clients) {
    try { res.write('data: reload\n\n'); } catch (_) { clients.delete(res); }
  }
}

/* ── Watch file tree (native, no deps) ─────────────────────── */
const IGNORE = new Set(['node_modules', '.git', 'scripts', 'data']);
fs.watch(ROOT, { recursive: true }, (event, filename) => {
  if (!filename) return;
  const parts = filename.split(path.sep);
  if (parts.some(p => IGNORE.has(p))) return;
  console.log(`  reload  ${filename}`);
  broadcast();
});

/* ── MIME map ───────────────────────────────────────────────── */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

/* ── Live-reload snippet injected before </body> ────────────── */
const INJECT = `
<script>
(function(){
  var es = new EventSource('/__dev');
  es.onmessage = function(e){ if(e.data==='reload') location.reload(); };
  es.onerror   = function(){ setTimeout(function(){ location.reload(); }, 1500); };
})();
</script>`;

/* ── JSON response helper ───────────────────────────────────── */
function sendJSON(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(body);
}

/* ── Read request body ──────────────────────────────────────── */
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

/* ── API routes ─────────────────────────────────────────────── */
async function handleAPI(req, res, urlPath, method) {
  const database = getDB();

  // GET /api/wiki — list all entries (lightweight, no full_html)
  if (urlPath === '/api/wiki' && method === 'GET') {
    if (!database) return sendJSON(res, 503, { error: 'Database not initialized. Run: node scripts/db-init.js' });
    const rows = database.prepare('SELECT id, name, category, current_context, related_ids, stages, graph_links FROM wiki_entries ORDER BY category, name').all();
    rows.forEach(r => {
      r.related = JSON.parse(r.related_ids || '[]');
      r.stages  = JSON.parse(r.stages || '[]');
      r.graphLinks = JSON.parse(r.graph_links || '[]');
      delete r.related_ids; delete r.graph_links;
    });
    return sendJSON(res, 200, rows);
  }

  // GET /api/wiki/search?q=... — FTS5 BM25 full-text search with synonyms + snippets
  if (urlPath === '/api/wiki/search' && method === 'GET') {
    if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
    const qs = new URL('http://x' + req.url).searchParams;
    const raw = (qs.get('q') || '').trim();
    if (!raw) return sendJSON(res, 400, { error: 'Missing q parameter' });

    /* ── Indonesian / English synonym expansion ──────────────────
       Maps common user queries to FTS5 terms that appear in the wiki.
       Entries are plain tokens (no FTS5 special chars). */
    const SYNONYMS = {
      'saham': 'stock equity shares',
      'obligasi': 'bond debt obligasi',
      'reksa dana': 'mutual fund reksa',
      'reksadana': 'mutual fund reksa dana',
      'ihsg': 'IHSG composite IDX index',
      'bi rate': 'interest rate bank indonesia',
      'birate': 'interest rate bank indonesia',
      'inflasi': 'inflation price',
      'rupiah': 'IDR rupiah currency exchange',
      'dolar': 'USD dollar exchange',
      'bunga': 'interest rate yield',
      'pasar': 'market trading',
      'pasar modal': 'stock market capital market IDX',
      'saham idx': 'stock IDX exchange indonesia',
      'investasi': 'invest investing investment',
      'dividen': 'dividend yield',
      'crypto': 'cryptocurrency bitcoin blockchain',
      'kripto': 'cryptocurrency bitcoin blockchain',
      'deposito': 'time deposit certificate',
      'tabungan': 'savings account bank',
      'asuransi': 'insurance protection',
      'beli': 'buy purchase invest',
      'jual': 'sell exit divest',
      'risiko': 'risk return volatility',
      'keuntungan': 'return profit gain',
      'kerugian': 'loss risk bear market',
      'modal': 'capital investment equity',
      'pemerintah': 'government fiscal policy',
      'bank sentral': 'central bank federal reserve bank indonesia',
      'suku bunga': 'interest rate yield BI',
      'kpr': 'mortgage property real estate',
      'inflasi tinggi': 'inflation CPI monetary policy',
      'emas': 'gold commodity',
      'fed': 'federal reserve monetary policy',
      'bearish': 'bear market decline downturn',
      'bullish': 'bull market rally uptrend',
      'diversifikasi': 'diversification portfolio',
    };

    /* ── Build expanded query ──────────────────────────────────── */
    function expandQuery(input) {
      const lower = input.toLowerCase();
      // Check multi-word synonyms first (longest match)
      for (const [k, v] of Object.entries(SYNONYMS)) {
        if (lower.includes(k)) {
          input = input + ' ' + v;
        }
      }
      // Tokenize, escape FTS5 special chars, join with OR for broad matching
      const tokens = input
        .replace(/[*"^()]/g, ' ')   // strip FTS5 special chars from user input
        .split(/\s+/)
        .filter(Boolean)
        .map(t => `"${t}"`)         // quote each token
        .join(' OR ');
      return tokens;
    }

    let rows = [];
    let ftsQuery = '';
    try {
      ftsQuery = expandQuery(raw);
      rows = database.prepare(`
        SELECT
          f.id,
          e.name,
          e.category,
          e.current_context,
          bm25(wiki_fts, 10.0, 1.0, 1.0, 1.0) AS score,
          snippet(wiki_fts, 3, '<mark>', '</mark>', '…', 35) AS snippet
        FROM wiki_fts f
        JOIN wiki_entries e ON e.id = f.id
        WHERE wiki_fts MATCH ?
        ORDER BY score
        LIMIT 15
      `).all(ftsQuery);
    } catch (_) {
      // FTS5 query error (e.g. malformed query) — fall back to LIKE
      rows = database.prepare(
        "SELECT id, name, category, current_context, NULL AS score, NULL AS snippet FROM wiki_entries WHERE lower(name) LIKE ? OR lower(full_html) LIKE ? LIMIT 15"
      ).all(`%${raw.toLowerCase()}%`, `%${raw.toLowerCase()}%`);
    }
    return sendJSON(res, 200, { query: raw, expanded: ftsQuery, count: rows.length, results: rows });
  }

  // Routes with :id
  const wikiMatch = urlPath.match(/^\/api\/wiki\/([^/]+?)(?:\/(extra|progress))?$/);
  if (wikiMatch) {
    const id = wikiMatch[1];
    const sub = wikiMatch[2]; // 'extra', 'progress', or undefined

    // GET /api/wiki/:id — get full entry
    if (!sub && method === 'GET') {
      if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
      const row = database.prepare('SELECT * FROM wiki_entries WHERE id = ?').get(id);
      if (!row) return sendJSON(res, 404, { error: `Wiki entry '${id}' not found` });
      row.related = JSON.parse(row.related_ids || '[]');
      row.stages  = JSON.parse(row.stages || '[]');
      row.graphLinks = JSON.parse(row.graph_links || '[]');
      delete row.related_ids; delete row.graph_links;
      // Also get extra knowledge
      row.extra = database.prepare('SELECT * FROM wiki_extra WHERE entry_id = ? ORDER BY created_at DESC').all(id);
      // Get progress
      row.progress = database.prepare('SELECT * FROM user_progress WHERE entry_id = ?').get(id) || null;
      return sendJSON(res, 200, row);
    }

    // PUT /api/wiki/:id — update entry content
    if (!sub && method === 'PUT') {
      if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
      try {
        const body = await readBody(req);
        const stmt = database.prepare('UPDATE wiki_entries SET full_html=?, current_context=?, updated_at=CURRENT_TIMESTAMP WHERE id=?');
        const result = stmt.run(body.full_html || '', body.current_context || null, id);
        if (result.changes === 0) return sendJSON(res, 404, { error: 'Entry not found' });
        return sendJSON(res, 200, { ok: true });
      } catch (e) { return sendJSON(res, 400, { error: e.message }); }
    }

    // GET /api/wiki/:id/extra — get extra knowledge for entry
    if (sub === 'extra' && method === 'GET') {
      if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
      const rows = database.prepare('SELECT * FROM wiki_extra WHERE entry_id = ? ORDER BY created_at DESC').all(id);
      return sendJSON(res, 200, rows);
    }

    // POST /api/wiki/:id/extra — add knowledge chunk
    if (sub === 'extra' && method === 'POST') {
      if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
      try {
        const body = await readBody(req);
        if (!body.content) return sendJSON(res, 400, { error: 'content is required' });
        const stmt = database.prepare('INSERT INTO wiki_extra (entry_id, type, title, content, source_url) VALUES (?, ?, ?, ?, ?)');
        const result = stmt.run(id, body.type || 'note', body.title || null, body.content, body.source_url || null);
        return sendJSON(res, 201, { id: result.lastInsertRowid, ok: true });
      } catch (e) { return sendJSON(res, 400, { error: e.message }); }
    }

    // PUT /api/wiki/:id/progress — update reading progress
    if (sub === 'progress' && method === 'PUT') {
      if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
      try {
        const body = await readBody(req);
        database.prepare(`INSERT INTO user_progress (entry_id, is_read, notes, last_viewed) VALUES (?, ?, ?, CURRENT_TIMESTAMP)
          ON CONFLICT(entry_id) DO UPDATE SET is_read=excluded.is_read, notes=excluded.notes, last_viewed=CURRENT_TIMESTAMP`
        ).run(id, body.is_read ? 1 : 0, body.notes || null);
        return sendJSON(res, 200, { ok: true });
      } catch (e) { return sendJSON(res, 400, { error: e.message }); }
    }

    // GET /api/wiki/:id/progress
    if (sub === 'progress' && method === 'GET') {
      if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
      const row = database.prepare('SELECT * FROM user_progress WHERE entry_id = ?').get(id);
      return sendJSON(res, 200, row || { entry_id: id, is_read: 0, notes: null });
    }
  }

  // GET /api/stats — overview statistics
  if (urlPath === '/api/stats' && method === 'GET') {
    if (!database) return sendJSON(res, 503, { error: 'Database not initialized' });
    const total = database.prepare('SELECT COUNT(*) as n FROM wiki_entries').get();
    const byCategory = database.prepare('SELECT category, COUNT(*) as n FROM wiki_entries GROUP BY category').all();
    const extras = database.prepare('SELECT COUNT(*) as n FROM wiki_extra').get();
    const read = database.prepare('SELECT COUNT(*) as n FROM user_progress WHERE is_read=1').get();
    return sendJSON(res, 200, { total: total.n, byCategory, extras: extras.n, read: read.n });
  }

  return null; // not an API route
}

/* ── Request handler ────────────────────────────────────────── */
const server = http.createServer(async (req, res) => {
  /* SSE endpoint */
  if (req.url === '/__dev') {
    res.writeHead(200, {
      'Content-Type':  'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection':    'keep-alive',
    });
    res.write('data: connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  const method = req.method.toUpperCase();
  let urlPath = req.url.split('?')[0];

  /* CORS preflight */
  if (method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE', 'Access-Control-Allow-Headers': 'Content-Type' });
    res.end();
    return;
  }

  /* API routes */
  if (urlPath.startsWith('/api/')) {
    const handled = await handleAPI(req, res, urlPath, method);
    if (handled !== null) return;
    return sendJSON(res, 404, { error: 'API route not found' });
  }

  /* Static files */
  if (urlPath === '/') urlPath = '/index.html';
  const filePath = path.join(ROOT, urlPath);

  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Not found: ${urlPath}`);
      return;
    }

    const ext  = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type':  mime,
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    });

    if (ext === '.html') {
      res.end(data.toString().replace(/<\/body>/i, INJECT + '</body>'));
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n  Dev server  →  http://localhost:${PORT}`);
  console.log(`  Wiki API    →  http://localhost:${PORT}/api/wiki`);
  if (fs.existsSync(DB_PATH)) {
    console.log(`  SQLite DB   →  ${DB_PATH}`);
  } else {
    console.log(`  SQLite DB   →  not found — run: node scripts/db-init.js`);
  }
  console.log('  Watching for changes (live reload via SSE)\n');
});
