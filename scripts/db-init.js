'use strict';
/* ============================================================
   db-init.js — Initialize SQLite database with WIKI_DATA
   Usage: node scripts/db-init.js
   Creates: data/wiki.db
   ============================================================ */

const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DB_PATH = path.join(ROOT, 'data', 'wiki.db');

// Ensure data directory exists
if (!fs.existsSync(path.join(ROOT, 'data'))) {
  fs.mkdirSync(path.join(ROOT, 'data'));
}

// Load WIKI_DATA by evaluating wiki.js then all entry files
const sandboxGlobal = { window: {} };

function loadJsFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8')
    .replace(/'use strict';/g, '')
    .replace(/window\.WIKI_DATA/g, 'sandboxGlobal.window.WIKI_DATA');
  // eslint-disable-next-line no-new-func
  new Function('sandboxGlobal', 'console', code)(sandboxGlobal, console);
}

// Initialize the WIKI_DATA object
loadJsFile(path.join(ROOT, 'js', 'data', 'wiki.js'));

// Load all category entry files
const entriesDir = path.join(ROOT, 'js', 'data', 'entries');
const entryFiles = [
  'fundamentals.js', 'markets.js', 'instruments.js',
  'metrics.js', 'strategies.js', 'macro.js',
  'indonesia.js', 'us.js'
];
for (const file of entryFiles) {
  loadJsFile(path.join(entriesDir, file));
  console.log(`  Loaded ${file}`);
}

const WIKI_DATA = sandboxGlobal.window.WIKI_DATA;

if (!WIKI_DATA || typeof WIKI_DATA !== 'object') {
  console.error('ERROR: WIKI_DATA failed to load');
  process.exit(1);
}

const entryCount = Object.keys(WIKI_DATA).length;
console.log(`Loaded ${entryCount} WIKI_DATA entries`);

const db = new Database(DB_PATH);

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS wiki_entries (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    full_html TEXT NOT NULL,
    summary TEXT,
    current_context TEXT,
    country TEXT,
    related_ids TEXT,
    stages TEXT,
    graph_links TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS wiki_extra (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    entry_id TEXT NOT NULL REFERENCES wiki_entries(id),
    type TEXT NOT NULL,
    title TEXT,
    content TEXT NOT NULL,
    source_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS user_progress (
    entry_id TEXT PRIMARY KEY REFERENCES wiki_entries(id),
    is_read INTEGER DEFAULT 0,
    notes TEXT,
    last_viewed DATETIME
  );

  CREATE INDEX IF NOT EXISTS idx_wiki_extra_entry ON wiki_extra(entry_id);
  CREATE INDEX IF NOT EXISTS idx_wiki_category ON wiki_entries(category);
`);

// Insert WIKI_DATA entries
const insert = db.prepare(`
  INSERT OR REPLACE INTO wiki_entries (id, name, category, full_html, current_context, related_ids, stages, graph_links)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

const insertAll = db.transaction(() => {
  for (const [id, entry] of Object.entries(WIKI_DATA)) {
    insert.run(
      id,
      entry.name,
      entry.cat,
      entry.full,
      entry.current || null,
      JSON.stringify(entry.related || []),
      JSON.stringify(entry.stages || []),
      JSON.stringify(entry.graphLinks || [])
    );
  }
});

insertAll();

const count = db.prepare('SELECT COUNT(*) as n FROM wiki_entries').get();
console.log(`Database initialized: ${count.n} wiki entries in ${DB_PATH}`);
db.close();
