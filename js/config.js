/* ============================================================
   config.js — Graph configuration: categories, colors, layout
   ============================================================ */

window.CATEGORIES = {
  markets:      { label: 'Markets',       color: '#3b82f6', textColor: '#fff' },
  instruments:  { label: 'Instruments',   color: '#22c55e', textColor: '#fff' },
  institutions: { label: 'Institutions',  color: '#f97316', textColor: '#fff' },
  concepts:     { label: 'Concepts',      color: '#a855f7', textColor: '#fff' },
  strategies:   { label: 'Strategies',    color: '#06b6d4', textColor: '#fff' },
  participants: { label: 'Participants',  color: '#eab308', textColor: '#000' },
  metrics:      { label: 'Metrics',       color: '#94a3b8', textColor: '#fff' },
  events:       { label: 'Events',        color: '#ef4444', textColor: '#fff' },
  currency:     { label: 'Currency/FX',   color: '#8b5cf6', textColor: '#fff' },
};

window.COUNTRY_COLORS = {
  US:   '#60a5fa',
  ID:   '#f87171',
  BOTH: '#a78bfa',
};

window.EDGE_COLORS = {
  regulates:    '#f97316',
  sets:         '#fb923c',
  traded_on:    '#22c55e',
  issues:       '#f59e0b',
  affects:      '#ef4444',
  is_type_of:   '#64748b',
  uses:         '#06b6d4',
  measures:     '#a855f7',
  operates_in:  '#eab308',
  related_to:   '#475569',
  part_of:      '#3b82f6',
  event_impacts:'#dc2626',
  listed_on:    '#34d399',
  managed_by:   '#f472b6',
  owns:         '#fbbf24',
};

window.LAYOUT_CONFIG = {
  name: 'fcose',
  quality: 'proof',
  randomize: true,
  animate: true,
  animationDuration: 1200,
  animationEasing: 'ease-out',
  fit: true,
  padding: 60,
  nodeDimensionsIncludeLabels: false,
  uniformNodeDimensions: false,
  packComponents: true,
  step: 'all',
  /* spring */
  nodeRepulsion: 6500,
  idealEdgeLength: 90,
  edgeElasticity: 0.45,
  nestingFactor: 0.1,
  numIter: 2500,
  gravity: 0.25,
  gravityRange: 3.8,
  initialEnergyOnIncremental: 0.5,
};

window.CYTOSCAPE_STYLE = [
  {
    selector: 'node',
    style: {
      'background-color': 'data(color)',
      'label': 'data(label)',
      'text-valign': 'center',
      'text-halign': 'center',
      'color': '#ffffff',
      'font-size': 'mapData(importance, 1, 10, 9, 14)',
      'font-weight': '600',
      'font-family': "'Segoe UI', system-ui, sans-serif",
      'text-wrap': 'wrap',
      'text-max-width': 'mapData(importance, 1, 10, 60, 100)',
      'width':  'mapData(importance, 1, 10, 28, 88)',
      'height': 'mapData(importance, 1, 10, 28, 88)',
      'border-width': 2,
      'border-color': 'data(borderColor)',
      'border-style': 'data(borderStyle)',
      'text-outline-color': '#0f172a',
      'text-outline-width': 1,
      'z-index': 10,
      'transition-property': 'background-color, border-color, opacity, width, height',
      'transition-duration': '0.15s',
    }
  },
  {
    selector: 'node:selected',
    style: {
      'border-width': 4,
      'border-color': '#fbbf24',
      'z-index': 100,
    }
  },
  {
    selector: 'node.highlighted',
    style: {
      'border-width': 3,
      'border-color': '#fbbf24',
      'opacity': 1,
      'z-index': 50,
    }
  },
  {
    selector: 'node.dimmed',
    style: { 'opacity': 0.15 }
  },
  {
    selector: 'node.search-match',
    style: {
      'border-width': 3,
      'border-color': '#fbbf24',
      'opacity': 1,
    }
  },
  {
    selector: 'edge',
    style: {
      'width': 'data(weight)',
      'line-color': 'data(edgeColor)',
      'target-arrow-color': 'data(edgeColor)',
      'target-arrow-shape': 'triangle',
      'arrow-scale': 0.7,
      'curve-style': 'bezier',
      'opacity': 0.55,
      'label': 'data(label)',
      'font-size': 9,
      'color': '#94a3b8',
      'text-opacity': 0,
      'z-index': 5,
      'transition-property': 'opacity',
      'transition-duration': '0.15s',
    }
  },
  {
    selector: 'edge:selected, edge.highlighted',
    style: {
      'opacity': 1,
      'text-opacity': 1,
      'width': 'mapData(weight, 1, 3, 2, 4)',
      'z-index': 40,
    }
  },
  {
    selector: 'edge.dimmed',
    style: { 'opacity': 0.04 }
  },
];

/* helper: build node data with defaults */
window.makeNode = function(d) {
  const cat   = window.CATEGORIES[d.category] || window.CATEGORIES.concepts;
  const cCol  = window.COUNTRY_COLORS[d.country] || '#64748b';
  const bStyle = d.country === 'BOTH' ? 'dashed' : 'solid';
  return {
    data: {
      ...d,
      color:       cat.color,
      borderColor: cCol,
      borderStyle: bStyle,
      weight:      d.importance || 5,
    }
  };
};

/* helper: build edge data */
window.makeEdge = function(source, target, rel, weight) {
  return {
    data: {
      id: `${source}__${target}__${rel}`,
      source, target,
      label: rel.replace(/_/g,' '),
      edgeColor: window.EDGE_COLORS[rel] || '#475569',
      weight: weight || 1.5,
    }
  };
};
