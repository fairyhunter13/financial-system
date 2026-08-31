---
type: Decision
resource: scripts/db-init.js
title: The search index is rebuilt, never committed, and the server runs without it
description: data/wiki.db was 2.3 MB, about half the repo, and every content edit rewrote the whole binary in the diff. `npm run db:init` regenerates it, and devserver.js already degraded when it was absent.
tags: [sqlite, build-artefact, repo-size]
generated: { by: claude/opus-5, at: 2026-08-31T12:00:00Z }
---

# Why the file left the tree

`data/wiki.db` is a SQLite FTS5 index over the 58 entries in `js/data/entries/`. The entries are
the source. The index is a projection of them.

Tracking it cost twice. It was 2.3 MB against a repo of about 4.6 MB. And a binary rewrites whole,
so a one-word edit to one entry produced a 2.3 MB diff that no reviewer could read.

# Why nothing had to change to make that safe

`devserver.js` loads `better-sqlite3` inside a `try` and skips the search routes when the file is
missing. That degradation was already there, so untracking the file did not need a code change.
A clone that never runs `npm install` still serves `/`, `/wiki.html` and the six graph pages.

# The alternative that was rejected

Keeping the file tracked and adding a check that it matches `js/data/`. That is a second gate for
a file the build reproduces in about a second, and this repo runs no gate at all.

# What a reader has to do

Run `npm run db:init` before search is expected to work. Nothing else reads the file.
