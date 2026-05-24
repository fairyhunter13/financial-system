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
  padding: 120,
  nodeDimensionsIncludeLabels: true,
  uniformNodeDimensions: false,
  packComponents: true,
  step: 'all',
  nodeRepulsion: 80000,
  idealEdgeLength: 220,
  edgeElasticity: 0.30,
  nestingFactor: 0.1,
  numIter: 6000,
  gravity: 0.05,
  gravityRange: 1.8,
  initialEnergyOnIncremental: 0.5,
};

/* Shape per category — adds visual variety without cluttering */
const CATEGORY_SHAPES = {
  markets:      'ellipse',
  instruments:  'round-rectangle',
  institutions: 'barrel',
  concepts:     'ellipse',
  strategies:   'round-hexagon',
  participants: 'ellipse',
  metrics:      'diamond',
  events:       'round-tag',
  currency:     'ellipse',
};

window.CYTOSCAPE_STYLE = [
  {
    selector: 'node',
    style: {
      'shape':            'data(shape)',
      'background-color': 'data(color)',
      'background-opacity': 0.92,
      'label':            'data(label)',
      'text-valign':      'center',
      'text-halign':      'center',
      'color':            '#ffffff',
      'font-size':             'mapData(importance, 1, 10, 10, 16)',
      'min-zoomed-font-size':  8,          // labels vanish when too small to read
      'font-weight':      '600',
      'font-family':      "'Segoe UI', system-ui, sans-serif",
      'text-wrap':        'wrap',
      'text-max-width':   'mapData(importance, 1, 10, 60, 110)',
      'width':            'mapData(importance, 1, 10, 22, 70)',
      'height':           'mapData(importance, 1, 10, 22, 70)',
      'border-width':     2,
      'border-color':     'data(borderColor)',
      'border-style':     'data(borderStyle)',
      'text-outline-color': '#0f172a',
      'text-outline-width': 1.5,
      'shadow-blur':      0,
      'shadow-color':     'data(color)',
      'shadow-opacity':   0,
      'shadow-offset-x':  0,
      'shadow-offset-y':  0,
      'z-index': 10,
      'transition-property': 'background-color, border-color, opacity, shadow-blur, shadow-opacity',
      'transition-duration':  '0.2s',
    }
  },
  {
    selector: 'node:selected',
    style: {
      'border-width':   4,
      'border-color':   '#fbbf24',
      'shadow-blur':    22,
      'shadow-color':   '#fbbf24',
      'shadow-opacity': 0.7,
      'z-index': 100,
    }
  },
  {
    selector: 'node.highlighted',
    style: {
      'border-width':   3,
      'border-color':   '#fbbf24',
      'shadow-blur':    20,
      'shadow-color':   'data(color)',
      'shadow-opacity': 0.85,
      'opacity':  1,
      'z-index': 50,
    }
  },
  {
    selector: 'node.hovered',
    style: {
      'border-width':   2.5,
      'border-color':   'data(color)',
      'shadow-blur':    14,
      'shadow-color':   'data(color)',
      'shadow-opacity': 0.65,
      'z-index': 30,
    }
  },
  {
    selector: 'node.dimmed',
    style: { 'opacity': 0.12 }
  },
  {
    selector: 'node.search-match',
    style: {
      'border-width':   3,
      'border-color':   '#fbbf24',
      'shadow-blur':    16,
      'shadow-color':   '#fbbf24',
      'shadow-opacity': 0.7,
      'opacity': 1,
    }
  },
  {
    selector: 'edge',
    style: {
      'width':                'data(weight)',
      'line-color':           'data(edgeColor)',
      'target-arrow-color':   'data(edgeColor)',
      'target-arrow-shape':   'triangle',
      'arrow-scale':          0.65,
      'curve-style':          'bezier',
      'control-point-step-size': 40,
      'opacity':              0.45,
      'label':                'data(label)',
      'font-size':            9,
      'color':                '#94a3b8',
      'text-opacity':         0,
      'text-background-color': '#1e293b',
      'text-background-opacity': 0.85,
      'text-background-padding': '3px',
      'text-background-shape': 'round-rectangle',
      'z-index': 5,
      'transition-property': 'opacity, width',
      'transition-duration':  '0.2s',
    }
  },
  {
    selector: 'edge:selected, edge.highlighted',
    style: {
      'opacity':      1,
      'text-opacity': 1,
      'width':        'mapData(weight, 1, 3, 2.5, 5)',
      'z-index':      40,
    }
  },
  {
    selector: 'edge.dimmed',
    style: { 'opacity': 0.03 }
  },
];

/* helper: build node data with defaults */
window.makeNode = function(d) {
  const cat    = window.CATEGORIES[d.category] || window.CATEGORIES.concepts;
  const cCol   = window.COUNTRY_COLORS[d.country] || '#64748b';
  const bStyle = d.country === 'BOTH' ? 'dashed' : 'solid';
  const shape  = CATEGORY_SHAPES[d.category] || 'ellipse';
  return {
    data: {
      ...d,
      color:       cat.color,
      borderColor: cCol,
      borderStyle: bStyle,
      weight:      d.importance || 5,
      shape:       shape,
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
