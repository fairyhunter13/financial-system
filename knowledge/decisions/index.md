# Decision

* [The search index is rebuilt, never committed, and the server runs without it](the-search-index-is-a-build-artefact.md) - data/wiki.db was 2.3 MB, about half the repo, and every content edit rewrote the whole binary in the diff. `npm run db:init` regenerates it, and devserver.js already degraded when it was absent.
* [Wiki article bodies are trusted HTML, and two sinks deliberately skip the escaper](wiki-article-bodies-are-trusted-html.md) - an entry's `full` field holds a whole formatted document, so `wiki.html` renders it raw. The FTS5 `snippet()` string is raw for the same reason, because SQLite writes the `<mark>` tags into it.
