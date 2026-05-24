'use strict';
/* ============================================================
   precompute.js — Run fcose layout for all 6 graph views
   Usage: cd scripts && npm run precompute
   Output: ../js/data/positions.js
   ============================================================ */

const cytoscape = require('cytoscape');
const fcose     = require('cytoscape-fcose');
const fs        = require('fs');
const path      = require('path');

cytoscape.use(fcose);

/* ── Polyfill browser globals ─────────────────────────────── */
global.window = global;

const ROOT = path.join(__dirname, '..');

function load(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), 'utf8');
  // eslint-disable-next-line no-eval
  eval(code);
}

load('js/config.js');

const dataFiles = [
  'markets', 'institutions', 'instruments', 'concepts',
  'strategies', 'participants', 'metrics', 'events', 'currency',
];
for (const f of dataFiles) load(`js/data/${f}.js`);
load('js/data/edges.js');

/* ── All nodes & edges ────────────────────────────────────── */
const ALL_NODES = [
  ...(global.NODES_MARKETS      || []),
  ...(global.NODES_INSTRUMENTS  || []),
  ...(global.NODES_INSTITUTIONS || []),
  ...(global.NODES_CONCEPTS     || []),
  ...(global.NODES_STRATEGIES   || []),
  ...(global.NODES_PARTICIPANTS || []),
  ...(global.NODES_METRICS      || []),
  ...(global.NODES_EVENTS       || []),
  ...(global.NODES_CURRENCY     || []),
];
const ALL_EDGES = global.EDGES || [];

/* ── View definitions (mirrors HTML nodeFilters) ─────────── */
const VIEWS = [
  { key: 'full',       filter: null },
  { key: 'us',         filter: d => d.country === 'US' || d.country === 'BOTH' },
  { key: 'indonesia',  filter: d => d.country === 'ID' || d.country === 'BOTH' },
  { key: 'instruments',filter: d => ['instruments','markets','concepts','currency','institutions'].includes(d.category) },
  { key: 'strategies', filter: d => ['strategies','metrics','instruments','concepts','participants'].includes(d.category) },
  { key: 'events',     filter: d => ['events','institutions','markets','concepts','currency','instruments'].includes(d.category) },
];

/* ── Layout opts: aggressive repulsion so fcose already spreads nodes ── */
const LAYOUT_OPTS = {
  name:    'fcose',
  quality: 'proof',
  randomize: true,
  animate:   false,
  fit:       false,   // preserve raw coordinate scale; browser fits after
  padding:   200,
  nodeDimensionsIncludeLabels: false,
  uniformNodeDimensions:       false,
  packComponents:              true,
  nodeRepulsion:      250000,  // very high → nodes start well separated
  idealEdgeLength:    380,     // generous edge length
  edgeElasticity:     0.20,
  nestingFactor:      0.1,
  numIter:            8000,
  gravity:            0.03,    // near-zero gravity → clusters can spread freely
  gravityRange:       1.2,
  initialEnergyOnIncremental: 0.5,
};

/* ── Effective bounding-circle radius per node ─────────────────────────
   Mirrors the CSS: width  mapData(importance, 1, 10, 22, 70)
                    text-max-width mapData(importance, 1, 10, 60, 110)
   We take the larger of half-node-size and half-label-width, plus a gap. */
function effectiveRadius(data) {
  const imp = Math.max(1, Math.min(10, data.importance || 5));
  const t   = (imp - 1) / 9;                   // 0..1
  const halfNode  = (22 + t * 48) / 2;         // 11..35 px
  const halfLabel = (60 + t * 50) / 2;         // 30..55 px
  return Math.max(halfNode, halfLabel) + 16;    // +16 px gap
}

/* ── Count overlapping pairs in a position map ──────────────────────── */
function countOverlaps(nodeArr, pos, radii) {
  let count = 0;
  for (let i = 0; i < nodeArr.length; i++) {
    for (let j = i + 1; j < nodeArr.length; j++) {
      const ni = nodeArr[i].id(), nj = nodeArr[j].id();
      const pi = pos[ni], pj = pos[nj];
      if (!pi || !pj) continue;
      const dx = pj.x - pi.x, dy = pj.y - pi.y;
      if (Math.sqrt(dx * dx + dy * dy) < radii[ni] + radii[nj]) count++;
    }
  }
  return count;
}

/* ── Post-processing overlap removal ────────────────────────────────────
   Iteratively pushes overlapping node pairs apart along their connecting
   line until no pair's centres are closer than the sum of their radii.
   Runs max 300 iterations; stops early when no overlap remains. */
function removeOverlaps(nodeArr, pos, radii) {
  const MAX_ITER = 300;

  for (let iter = 0; iter < MAX_ITER; iter++) {
    let anyMoved = false;

    for (let i = 0; i < nodeArr.length; i++) {
      for (let j = i + 1; j < nodeArr.length; j++) {
        const ni = nodeArr[i].id(), nj = nodeArr[j].id();
        const pi = pos[ni], pj = pos[nj];
        if (!pi || !pj) continue;

        let dx = pj.x - pi.x;
        let dy = pj.y - pi.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        /* Coincident nodes: jitter so the push vector has a direction */
        if (dist < 0.1) { dx = Math.random() - 0.5; dy = Math.random() - 0.5; dist = Math.sqrt(dx*dx+dy*dy); }

        const minDist = radii[ni] + radii[nj];
        if (dist < minDist) {
          /* Push each node half the overlap distance outward */
          const half = (minDist - dist) / 2 + 0.5;
          const ux = dx / dist, uy = dy / dist;
          pos[ni] = { x: pi.x - ux * half, y: pi.y - uy * half };
          pos[nj] = { x: pj.x + ux * half, y: pj.y + uy * half };
          anyMoved = true;
        }
      }
    }

    if (!anyMoved) return iter + 1; // converged
  }

  return MAX_ITER; // hit cap — caller will warn
}

/* ── Run fcose + overlap removal for one subset ──────────────────────── */
function runLayout(nodes, edges) {
  return new Promise(resolve => {
    const cy = cytoscape({
      headless:     true,
      styleEnabled: false,
      elements:     [...nodes, ...edges],
    });

    cy.layout(LAYOUT_OPTS).on('layoutstop', () => {
      const nodeArr = cy.nodes().toArray();

      /* Build per-node radii from data */
      const radii = {};
      nodeArr.forEach(n => { radii[n.id()] = effectiveRadius(n.data()); });

      /* Collect raw positions */
      const pos = {};
      nodeArr.forEach(n => {
        const p = n.position();
        pos[n.id()] = { x: p.x, y: p.y };
      });

      /* Validate before */
      const before = countOverlaps(nodeArr, pos, radii);

      /* Post-process */
      const iters = removeOverlaps(nodeArr, pos, radii);

      /* Validate after */
      const after = countOverlaps(nodeArr, pos, radii);

      /* Report */
      const status = after === 0 ? '✓ 0 overlaps' : `⚠ ${after} pairs still overlap`;
      process.stdout.write(
        ` [before:${before} → after:${after} in ${iters} iter] ${status}\n`
      );

      /* Round to 1 decimal */
      const final = {};
      for (const [id, p] of Object.entries(pos)) {
        final[id] = { x: parseFloat(p.x.toFixed(1)), y: parseFloat(p.y.toFixed(1)) };
      }

      resolve(final);
    }).run();
  });
}

/* ── Main ─────────────────────────────────────────────────── */
async function main() {
  const allPositions = {};
  const start = Date.now();

  for (const view of VIEWS) {
    const nodes = view.filter
      ? ALL_NODES.filter(n => view.filter(n.data))
      : ALL_NODES;
    const nodeIdSet = new Set(nodes.map(n => n.data.id));
    const edges = ALL_EDGES.filter(e =>
      nodeIdSet.has(e.data.source) && nodeIdSet.has(e.data.target)
    );

    process.stdout.write(`  [${view.key}]  ${nodes.length} nodes, ${edges.length} edges … `);
    const t = Date.now();
    allPositions[view.key] = await runLayout(nodes, edges);
    process.stdout.write(`  (${((Date.now() - t) / 1000).toFixed(1)}s)\n`);
  }

  const outPath = path.join(ROOT, 'js', 'data', 'positions.js');
  const json    = JSON.stringify(allPositions, null, 2);
  const out     =
    `/* Auto-generated by scripts/precompute.js — do not hand-edit.\n` +
    `   Re-run: cd scripts && npm run precompute */\n` +
    `window.PRECOMPUTED_POSITIONS = ${json};\n`;

  fs.writeFileSync(outPath, out, 'utf8');

  /* Final coordinate-spread report */
  for (const [key, positions] of Object.entries(allPositions)) {
    const xs = Object.values(positions).map(p => p.x);
    const ys = Object.values(positions).map(p => p.y);
    const xSpan = (Math.max(...xs) - Math.min(...xs)).toFixed(0);
    const ySpan = (Math.max(...ys) - Math.min(...ys)).toFixed(0);
    console.log(`  [${key}]  spread: ${xSpan} × ${ySpan} px`);
  }

  const kb    = (fs.statSync(outPath).size / 1024).toFixed(1);
  const total = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✓  ${outPath}  (${kb} KB, ${total}s total)`);
}

main().catch(err => { console.error(err); process.exit(1); });
