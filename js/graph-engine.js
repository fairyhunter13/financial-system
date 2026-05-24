/* ============================================================
   graph-engine.js — Cytoscape initialization & UI logic
   ============================================================ */

(function() {

  /* ── Gather all nodes ───────────────────────────────────── */
  function getAllNodes(filter) {
    const all = [
      ...(window.NODES_MARKETS      || []),
      ...(window.NODES_INSTRUMENTS  || []),
      ...(window.NODES_INSTITUTIONS || []),
      ...(window.NODES_CONCEPTS     || []),
      ...(window.NODES_STRATEGIES   || []),
      ...(window.NODES_PARTICIPANTS || []),
      ...(window.NODES_METRICS      || []),
      ...(window.NODES_EVENTS       || []),
      ...(window.NODES_CURRENCY     || []),
    ];
    if (!filter) return all;
    return all.filter(n => filter(n.data));
  }

  function getAllEdges(nodeIds) {
    const set = new Set(nodeIds);
    return (window.EDGES || []).filter(e =>
      set.has(e.data.source) && set.has(e.data.target)
    );
  }

  /* ── Init ───────────────────────────────────────────────── */
  window.initGraph = function(opts = {}) {
    const {
      containerId = 'cy',
      nodeFilter   = null,
      onReady      = null,
    } = opts;

    const nodes = getAllNodes(nodeFilter);
    const nodeIds = nodes.map(n => n.data.id);
    const edges = getAllEdges(nodeIds);

    const loading = document.getElementById('loading');
    const infoPanel = document.getElementById('info-panel');
    const infoClose = document.getElementById('info-close');

    const cy = cytoscape({
      container: document.getElementById(containerId),
      elements: [...nodes, ...edges],
      style: window.CYTOSCAPE_STYLE,
      layout: window.LAYOUT_CONFIG,
      minZoom: 0.05,
      maxZoom: 4,
      wheelSensitivity: 0.3,
    });

    cy.on('layoutstop', () => {
      if (loading) loading.style.display = 'none';
      updateStats(cy);
      if (onReady) onReady(cy);
    });

    /* ── Node click → info panel ──────────────────────────── */
    cy.on('tap', 'node', function(evt) {
      const node = evt.target;
      showInfoPanel(node, cy);
      highlightNeighborhood(node, cy);
    });

    cy.on('tap', function(evt) {
      if (evt.target === cy) {
        clearHighlight(cy);
        closeInfoPanel();
      }
    });

    /* ── Double-click → fit to neighborhood ──────────────── */
    cy.on('dblclick', 'node', function(evt) {
      const node = evt.target;
      const hood = node.closedNeighborhood();
      cy.fit(hood, 80);
    });

    /* ── Tooltip ──────────────────────────────────────────── */
    const tooltip = document.getElementById('tooltip');
    if (tooltip) {
      cy.on('mouseover', 'node', function(evt) {
        const d = evt.target.data();
        const cat = (window.CATEGORIES[d.category] || {}).label || d.category;
        const pos = evt.target.renderedPosition();
        tooltip.innerHTML = `<div class="t-name">${d.label}</div><div class="t-cat">${cat} · ${d.country || ''}</div>`;
        tooltip.style.display = 'block';
        tooltip.style.left = (pos.x + 20) + 'px';
        tooltip.style.top  = (pos.y - 10) + 'px';
      });
      cy.on('mouseout', 'node', () => { tooltip.style.display = 'none'; });
      cy.on('pan zoom', () => { tooltip.style.display = 'none'; });
    }

    /* ── Zoom controls ────────────────────────────────────── */
    document.getElementById('btn-zoom-in')
      ?.addEventListener('click', () => cy.zoom({ level: cy.zoom() * 1.3, renderedPosition: { x: cy.width()/2, y: cy.height()/2 } }));
    document.getElementById('btn-zoom-out')
      ?.addEventListener('click', () => cy.zoom({ level: cy.zoom() * 0.75, renderedPosition: { x: cy.width()/2, y: cy.height()/2 } }));
    document.getElementById('btn-fit')
      ?.addEventListener('click', () => cy.fit(undefined, 60));
    document.getElementById('btn-layout')
      ?.addEventListener('click', () => {
        if (loading) loading.style.display = 'flex';
        cy.layout(window.LAYOUT_CONFIG).run();
      });

    /* ── Info panel close ─────────────────────────────────── */
    infoClose?.addEventListener('click', () => { closeInfoPanel(); clearHighlight(cy); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeInfoPanel(); clearHighlight(cy); }
    });

    /* ── Search ───────────────────────────────────────────── */
    const searchBox = document.getElementById('search-box');
    const searchResults = document.getElementById('search-results');
    if (searchBox && searchResults) {
      searchBox.addEventListener('input', function() {
        const q = this.value.trim().toLowerCase();
        searchResults.innerHTML = '';
        cy.nodes().removeClass('search-match dimmed');
        if (!q) return;

        const hits = cy.nodes().filter(n => {
          const d = n.data();
          return d.label.toLowerCase().includes(q) ||
                 (d.description || '').toLowerCase().includes(q) ||
                 (d.tags || []).some(t => t.includes(q));
        });

        cy.nodes().addClass('dimmed');
        cy.edges().addClass('dimmed');
        hits.removeClass('dimmed').addClass('search-match');
        hits.connectedEdges().removeClass('dimmed');

        hits.forEach(n => {
          const d = n.data();
          const cat = window.CATEGORIES[d.category] || { color: '#64748b' };
          const div = document.createElement('div');
          div.className = 'search-item';
          div.innerHTML = `
            <span class="dot" style="background:${cat.color}"></span>
            <span class="name">${d.label}</span>
            <span class="country-tag">${d.country}</span>`;
          div.addEventListener('click', () => {
            cy.animate({ center: { eles: n }, zoom: 1.8 }, { duration: 400 });
            showInfoPanel(n, cy);
            highlightNeighborhood(n, cy);
          });
          searchResults.appendChild(div);
        });

        if (hits.length === 0) {
          searchResults.innerHTML = '<div style="font-size:12px;color:#64748b;padding:4px 6px">No matches found</div>';
        }
      });
    }

    /* ── Category filter ─────────────────────────────────── */
    document.querySelectorAll('.cat-filter').forEach(cb => {
      cb.addEventListener('change', function() {
        const cat = this.dataset.cat;
        if (this.checked) {
          cy.nodes(`[category="${cat}"]`).style('display', 'element');
          cy.edges().filter(e =>
            e.source().data('category') === cat || e.target().data('category') === cat
          ).style('display', 'element');
        } else {
          cy.nodes(`[category="${cat}"]`).style('display', 'none');
        }
      });
    });

    /* ── Country filter ──────────────────────────────────── */
    document.querySelectorAll('.country-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.country-btn').forEach(b => b.classList.remove('active-us','active-id','active-all'));
        const c = this.dataset.country;
        if (c === 'US')   this.classList.add('active-us');
        if (c === 'ID')   this.classList.add('active-id');
        if (c === 'ALL')  this.classList.add('active-all');

        cy.nodes().forEach(n => {
          const nc = n.data('country');
          if (c === 'ALL' || nc === c || nc === 'BOTH') {
            n.style('display', 'element');
          } else {
            n.style('display', 'none');
          }
        });
        cy.edges().forEach(e => {
          const sv = e.source().style('display');
          const tv = e.target().style('display');
          e.style('display', sv === 'none' || tv === 'none' ? 'none' : 'element');
        });
        updateStats(cy);
      });
    });

    return cy;
  };

  /* ── Highlight helpers ──────────────────────────────────── */
  function highlightNeighborhood(node, cy) {
    cy.nodes().addClass('dimmed');
    cy.edges().addClass('dimmed');
    node.removeClass('dimmed').addClass('highlighted');
    node.neighborhood().removeClass('dimmed').addClass('highlighted');
    node.connectedEdges().removeClass('dimmed').addClass('highlighted');
  }

  function clearHighlight(cy) {
    cy.nodes().removeClass('dimmed highlighted search-match');
    cy.edges().removeClass('dimmed highlighted');
  }

  /* ── Info panel ─────────────────────────────────────────── */
  function showInfoPanel(node, cy) {
    const d = node.data();
    const panel = document.getElementById('info-panel');
    if (!panel) return;

    const cat  = window.CATEGORIES[d.category] || { label: d.category, color: '#64748b' };
    const cCol = window.COUNTRY_COLORS[d.country] || '#64748b';
    const flagText = { US: '🇺🇸 United States', ID: '🇮🇩 Indonesia', BOTH: '🌐 US + Indonesia' };

    document.getElementById('info-name').textContent = d.label;

    document.getElementById('info-badges').innerHTML = `
      <span class="badge badge-${d.category}" style="background:${cat.color}22;color:${cat.color};border-color:${cat.color}44">${cat.label}</span>
      <span class="badge" style="background:${cCol}22;color:${cCol};border-color:${cCol}44">${flagText[d.country] || d.country}</span>
      <span class="badge" style="background:#33415544;color:#94a3b8;border-color:#47556944">Importance: ${d.importance}/10</span>
    `;

    document.getElementById('info-desc').textContent = d.description || 'No description available.';

    /* metadata */
    const metaEl = document.getElementById('info-metadata');
    if (metaEl) {
      const meta = d.metadata || {};
      metaEl.innerHTML = Object.keys(meta).length
        ? Object.entries(meta).map(([k,v]) =>
            `<div class="meta-item"><div class="meta-key">${k}</div><div class="meta-val">${v}</div></div>`
          ).join('')
        : '<div style="color:#64748b;font-size:12px">No metadata</div>';
    }

    /* related nodes */
    const relEl = document.getElementById('info-related');
    if (relEl) {
      const neighbors = node.neighborhood().nodes();
      relEl.innerHTML = neighbors.length
        ? [...neighbors].map(n => {
            const nd = n.data();
            const nc = window.CATEGORIES[nd.category] || { color: '#64748b' };
            return `<span class="chip" data-id="${nd.id}" style="border-color:${nc.color}44">${nd.label}</span>`;
          }).join('')
        : '<span style="color:#64748b;font-size:12px">No direct connections visible</span>';

      relEl.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const target = cy.getElementById(chip.dataset.id);
          if (target.length) {
            cy.animate({ center: { eles: target }, zoom: 1.8 }, { duration: 400 });
            showInfoPanel(target, cy);
            highlightNeighborhood(target, cy);
          }
        });
      });
    }

    /* links */
    const linksEl = document.getElementById('info-links');
    if (linksEl) {
      const links = d.links || [];
      linksEl.innerHTML = links.length
        ? links.map(l =>
            `<a class="ext-link" href="${l.url}" target="_blank" rel="noopener">
               <span class="ext-link-icon">🔗</span>${l.title}
             </a>`).join('')
        : '<span style="color:#64748b;font-size:12px">No links available</span>';
    }

    panel.classList.add('open');
  }

  function closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    if (panel) panel.classList.remove('open');
  }

  /* ── Stats ───────────────────────────────────────────────── */
  function updateStats(cy) {
    const visible = cy.nodes().filter(n => n.style('display') !== 'none');
    const visEdges = cy.edges().filter(e => e.style('display') !== 'none');
    const s = n => document.getElementById(n);
    if (s('stat-nodes'))  s('stat-nodes').textContent  = visible.length;
    if (s('stat-edges'))  s('stat-edges').textContent  = visEdges.length;
    if (s('stat-us'))     s('stat-us').textContent     = visible.filter(n => n.data('country') === 'US').length;
    if (s('stat-id'))     s('stat-id').textContent     = visible.filter(n => n.data('country') === 'ID').length;
  }

  /* ── Populate sidebar category filters ─────────────────── */
  window.populateFilters = function(cy) {
    const container = document.getElementById('cat-filters');
    if (!container) return;
    container.innerHTML = '';
    const counts = {};
    cy.nodes().forEach(n => { const c = n.data('category'); counts[c] = (counts[c]||0)+1; });
    Object.entries(window.CATEGORIES).forEach(([key, cat]) => {
      const count = counts[key] || 0;
      if (!count) return;
      const row = document.createElement('label');
      row.className = 'filter-row';
      row.innerHTML = `
        <input type="checkbox" class="cat-filter" data-cat="${key}" checked>
        <span class="filter-dot" style="background:${cat.color}"></span>
        ${cat.label}
        <span class="filter-count">${count}</span>`;
      container.appendChild(row);
    });
  };

})();
