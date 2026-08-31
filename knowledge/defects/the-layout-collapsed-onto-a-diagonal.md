---
type: Defect
resource: scripts/precompute.js
title: The precomputed graph layout put every node on one diagonal
description: fcose with randomize false has no 2D seed under headless Node, so all six views were computed as a straight line. The generated positions file looked like ordinary data, and nothing compared it against anything.
tags: [cytoscape, fcose, headless, generated-data]
generated: { by: claude/opus-5, at: 2026-08-31T12:00:00Z }
---

# Symptom

Every node in all six graph views landed on the line y = x. The browser rendered a diagonal
streak rather than a graph.

# Root cause

`scripts/precompute.js` ran fcose with `randomize: false`. In a browser Cytoscape seeds a layout
from the positions the elements already hold. Headless Node has no rendered positions to read, so
the seed was degenerate and the force step never spread the nodes apart. `randomize: true` gives
the algorithm its own starting scatter, and it is what the file uses now, on line 63.

# Why nothing caught it

`js/data/positions.js` is generated and committed. It is a list of plausible numbers, and a
reviewer cannot tell a bad layout from a good one by reading them. The only observer was a human
opening the page.

# What covers it now

`countOverlaps()` runs over the finished positions, `removeOverlaps()` pushes colliding nodes
apart, and `countOverlaps()` runs a second time. The precompute prints the before and after count
per view, so a regeneration that produced a degenerate layout reports a collision count instead of
being silently written.

That is a check on the *result*, not on the option that caused this. A future option change that
produces a different wrong layout with no overlaps still passes.
