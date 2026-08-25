# financial-system

An interactive knowledge graph of the US and Indonesian financial systems — instruments,
institutions, macro concepts, strategies and the relationships between them, rendered with
Cytoscape.js. Built for a beginner to navigate visually rather than read linearly.

## Run

```bash
node devserver.js        # or: npm start   — serves on :8080 with live reload
```

`index.html` is the graph, `wiki.html` the article view. Both are static. The dev server exists
for live reload and the optional SQLite-backed wiki API.

```bash
npm install && npm run db:init   # optional: builds data/wiki.db from js/data/
```

`data/wiki.db` is generated, not tracked — `devserver.js` runs fine without it and simply skips
the SQLite routes.

## Layout

```
index.html          graph view          graph/*.html    per-category views
wiki.html           article view        js/data/        nodes, edges, articles (source of truth)
js/graph-engine.js  rendering           scripts/        db-init, fcose precompute
```

## Design

`ARCHITECTURE.md` — why Cytoscape + fcose, the node and edge schema, the visual language.
