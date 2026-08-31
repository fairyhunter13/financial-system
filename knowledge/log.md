---
type: Log
title: financial-system knowledge history
---

# Bundle history

## 2026-08-31

- **Creation**: two concepts harvested from the 23 commit bodies in the repo. [The search index is a build artefact](decisions/the-search-index-is-a-build-artefact.md) carries the size argument and the degradation that made untracking safe. [The layout collapsed onto a diagonal](defects/the-layout-collapsed-onto-a-diagonal.md) carries a headless-rendering trap that the code cannot show, because the fixed option reads as an ordinary setting.

- **Creation**: three candidates were rejected. The node-overlap tuning constants are in `scripts/precompute.js` with their measured before-and-after counts in the commit body, and a concept would restate them. The plain-English rewrite of the wiki content is a content pass with no rule a reader needs. The stack choice, the node and edge schema and the visual language already have a home in `ARCHITECTURE.md`, and moving them here would give the repo two.

- **Creation**: no gate. The repo runs no CI, no Makefile and no git hook, so there is nothing to wire `okfrules check knowledge` into. Adding one would be a new mechanism rather than a reused one. The check is run by hand.

- **Migration**: the session memory store for this repo was folded in and deleted. One concept survived it. [Wiki article bodies are trusted HTML](decisions/wiki-article-bodies-are-trusted-html.md) restates a note that outlived the file it described, because `learn.html` and its `showWikiDetail()` are gone and the same contract now sits in `wiki.html`.

- **Migration**: the rest of the store was dropped. The file inventory, the node schema and the library list are in `ARCHITECTURE.md` and in the tree. The CDN note is wrong since the libraries were vendored. The `learn.html` status and its escaping rule for single-quoted strings died with the file. All three pending user requests are delivered, and the commit history records them: the SQLite index, the per-country content, and the plain-English rewrite.
