#!/usr/bin/env node
/* ============================================================
   devserver.js — Static file server with SSE live reload
   Usage: node devserver.js [port]
   ============================================================ */
'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = parseInt(process.argv[2] || '8080', 10);
const ROOT = __dirname;

/* ── SSE clients waiting for reload signal ──────────────────── */
const clients = new Set();

function broadcast() {
  for (const res of clients) {
    try { res.write('data: reload\n\n'); } catch (_) { clients.delete(res); }
  }
}

/* ── Watch file tree (native, no deps) ─────────────────────── */
const IGNORE = new Set(['node_modules', '.git', 'scripts']);
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

/* ── Request handler ────────────────────────────────────────── */
const server = http.createServer((req, res) => {
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

  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(ROOT, urlPath);

  /* Prevent path traversal */
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
  console.log('  Watching for changes (live reload via SSE)\n');
});
