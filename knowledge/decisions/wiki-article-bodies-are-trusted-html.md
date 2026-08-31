---
type: Decision
resource: wiki.html
title: Wiki article bodies are trusted HTML, and two sinks deliberately skip the escaper
description: An entry's `full` field in `js/data/entries/` holds a whole formatted document, so `wiki.html` renders it raw. The FTS5 `snippet()` string is raw for the same reason, because SQLite writes the `<mark>` tags into it.
tags: [wiki, innerhtml, escaping, authoring]
generated: { by: claude/opus-5, at: 2026-08-31T12:00:00Z }
---

# The rule

`wiki.html` passes every dynamic string through `escapeHtml()`, with two exceptions.
`contentEl.innerHTML = entry.full` renders an article body, and the search list inserts
`r.snippet` unescaped. Both are deliberate.

# Why each one is raw

An entry's `full` field is not text. It is a formatted document of stat boxes, analogy cards and
tables, written as markup that the stylesheet in `wiki.html` matches by class. An escaped body
prints its own tags.

The snippet arrives from `snippet(wiki_fts, 3, '<mark>', '</mark>', …)` in `devserver.js`. SQLite
wraps the matched words in `<mark>` itself, so an escaped snippet prints those tags instead of
highlighting the match.

# What it costs an author

An entry is written as HTML, never as prose. A bare `<` becomes a broken tag.

Nothing between `js/data/entries/` and the page filters the content, so both sinks are safe only
while the 58 entry files stay repo-authored. A value from outside the repo must never reach `full`.
