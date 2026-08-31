# Decision

* [The search index is rebuilt, never committed, and the server runs without it](the-search-index-is-a-build-artefact.md) - data/wiki.db was 2.3 MB, about half the repo, and every content edit rewrote the whole binary in the diff. `npm run db:init` regenerates it, and devserver.js already degraded when it was absent.
