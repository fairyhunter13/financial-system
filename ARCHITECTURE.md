# Financial Knowledge Graph — Architecture

> Why Cytoscape + fcose, how a node and an edge are shaped, and the visual language.
> Node and edge inventories are not repeated here: `js/data/` is the source of truth.

---

## Technology stack

### Chosen: Cytoscape.js (single HTML file)

| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Cytoscape.js** | Purpose-built for knowledge graphs, excellent layouts, rich API, handles 200+ nodes, CDN deployable | None for this use case | ✅ **Chosen** |
| D3.js | Very flexible, beautiful | Complex to code for knowledge graphs | ❌ Too complex |
| Vis.js Network | Simple API | Less powerful layouts | ❌ Less capable |
| Sigma.js | Fast for huge graphs | Overkill for ~200 nodes | ❌ Overkill |
| Observable Plot | Modern | Not graph-focused | ❌ Not suited |

### Layout Algorithm: fcose (Force-directed Compound Spring Embedder)
- Loaded through CDN: `unpkg.com/cytoscape-fcose`
- Best layout for knowledge graphs with 100–500 nodes
- Produces organic, readable clusters by category

### CDN Dependencies (no install required)
```
cytoscape         → unpkg.com/cytoscape/dist/cytoscape.min.js
cytoscape-fcose   → unpkg.com/cytoscape-fcose/cytoscape-fcose.js
```

### Output
- Single file: `index.html`
- Zero dependencies beyond CDN
- Works offline after first load (browser cache)
- Mobile responsive

---

## Knowledge graph model

### Node Categories (9 categories)

| Category | Color | Description |
|----------|-------|-------------|
| **Markets** | `#3b82f6` Blue | Trading venues and market types |
| **Instruments** | `#22c55e` Green | All financial products (stocks, bonds, funds, derivatives, crypto, commodities) |
| **Institutions** | `#f97316` Orange | Regulatory bodies, exchanges, banks, platforms |
| **Concepts** | `#a855f7` Purple | Macroeconomic concepts, market conditions |
| **Strategies** | `#06b6d4` Cyan | Investment strategies and approaches |
| **Participants** | `#eab308` Yellow | Types of market actors |
| **Metrics** | `#94a3b8` Slate | Financial ratios and risk measures |
| **Events** | `#ef4444` Red | Current events (May 2026) |
| **Currency** | `#8b5cf6` Violet | Currency and forex concepts |

### Country Indicators

| Country | Border Style | Label Prefix |
|---------|-------------|--------------|
| 🇺🇸 US Only | `#60a5fa` blue solid border | — |
| 🇮🇩 Indonesia Only | `#f87171` red solid border | — |
| 🌐 Both | `#a78bfa` purple dashed border | — |

### Node Data Structure

```javascript
{
  data: {
    id: 'unique_snake_case_id',
    label: 'Display Name (bilingual for ID nodes)',
    category: 'markets|instruments|institutions|concepts|strategies|participants|metrics|events|currency',
    country: 'US|ID|BOTH',
    importance: 1..10,          // determines node size (28–100px diameter)
    description: '...',         // 2–5 sentence beginner-friendly explanation
    metadata: { key: value },   // current data (rates, dates, amounts, etc.)
    links: [{ title, url }],    // reference links
    tags: ['tag1', 'tag2'],     // searchable keywords
  }
}
```

### Edge Relationship Types

| Relationship | Color | Direction | Example |
|-------------|-------|-----------|---------|
| `regulates` | `#f97316` orange | Institution → Market | SEC → US Equity Market |
| `sets` | `#fb923c` amber | Institution → Rate | Fed → Federal Funds Rate |
| `traded_on` | `#22c55e` green | Instrument → Market | Stock → NYSE |
| `issues` | `#f59e0b` gold | Institution → Instrument | DJPPR → ORI |
| `affects` | `#ef4444` red | Concept → Market | Inflation → Bond Market |
| `is_type_of` | `#64748b` slate | Specific → General | T-Bills → US Treasury |
| `uses` | `#06b6d4` cyan | Strategy → Instrument | Value Investing → Stock |
| `measures` | `#a855f7` purple | Metric → Concept | Beta → Volatility |
| `operates_in` | `#eab308` yellow | Participant → Market | Retail Investor → IDX |
| `related_to` | `#475569` slate-dark | Any ↔ Any | Bull Market ↔ Low Volatility |
| `part_of` | `#3b82f6` blue | Sub → Parent | NYSE → US Equity Market |
| `event_impacts` | `#dc2626` dark-red | Event → Subject | IHSG Crisis → IDX |

---
## Visual language

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  HEADER: Title + Country stats + Toolbar buttons        │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│  LEFT        │         CYTOSCAPE GRAPH                  │
│  SIDEBAR     │         (main interactive area)          │
│  (280px)     │                                    ┌─────┤
│              │                                    │ ▶   │
│  - Search    │                                    │ ⓘ   │
│  - Filters   │                                    │     │
│  - Legend    │                             [zoom] │RIGHT│
│  - Stats     │                                    │PANEL│
│              │                                    │380px│
└──────────────┴────────────────────────────────────┴─────┘
```

### Color Palette (Dark Theme)
```
Background:      #0f172a  (slate-950)
Panel bg:        #1e293b  (slate-800)
Panel border:    #334155  (slate-700)
Text primary:    #f1f5f9  (slate-100)
Text secondary:  #94a3b8  (slate-400)
Text muted:      #64748b  (slate-500)
Accent blue:     #38bdf8  (sky-400)
Accent gradient: #38bdf8 → #818cf8 → #fb923c
```

### Node Visual Encoding
- **Size**: `28px + (importance × 8px)` → range 36px–108px diameter
- **Color**: Category color (filled)
- **Border**: Country indicator (US=blue, ID=red, BOTH=purple dashed)
- **Label**: White text, truncated at 18 chars, size scales with node
- **Shape**: Circle (uniform for readability)

### Edge Visual Encoding
- **Color**: By relationship type
- **Width**: 1–3px based on importance
- **Arrow**: Direction shown
- **Label**: Shown on hover only (to avoid clutter)

### Interaction Design
| Interaction | Behavior |
|-------------|----------|
| Click node | Opens right info panel with full details |
| Click background | Deselects, closes panel |
| Hover node | Shows tooltip with name + category |
| Scroll / pinch | Zoom in/out |
| Drag background | Pan |
| Drag node | Move node (persistent) |
| Double-click node | Fit/zoom to node and neighbors |
| Search box | Live filter — highlight matching nodes, dim rest |
| Category checkbox | Toggle category visibility |
| Country button | Filter to US / Indonesia / Both |
| Escape key | Close info panel |
| Reset button | Restore full graph |
| Layout button | Re-run fcose layout |

### Info Panel Content (per node)
1. **Node name** (large, bold)
2. **Category badge** (colored)
3. **Country flag badge** (🇺🇸 / 🇮🇩 / 🌐)
4. **Description** (2–5 sentences, beginner-friendly, current as of May 2026)
5. **Metadata table** (key facts — rates, dates, amounts, founders, etc.)
6. **Related Nodes** (clickable chips — navigates to that node)
7. **Reference Links** (opens external URLs)

---
## References

### US Financial System
- Federal Reserve Financial Stability Report, May 2026: [federalreserve.gov](https://www.federalreserve.gov/publications/files/financial-stability-report-20260508.pdf)
- FOMC Statement April 29, 2026: [federalreserve.gov](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)
- US Equity & Bond Market Size (MEXC News): [mexc.com](https://www.mexc.com/news/1104838)
- SEC-CFTC MOU March 2026: [sidley.com](https://www.sidley.com/en/insights/newsupdates/2026/03/us-cftc-and-sec-enter-into-historic-memorandum-of-understanding)
- US Crypto CLARITY Act / GENIUS Act: [lw.com](https://www.lw.com/en/us-crypto-policy-tracker/regulatory-developments)
- Stock Market Today May 2026: [thestreet.com](https://www.thestreet.com/stock-market-today/)
- US Tariffs 2026 Impact: [taxfoundation.org](https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/)

### Indonesian Financial System
- Bank Indonesia Rate Hike May 2026: [bi.go.id](https://www.bi.go.id/en/publikasi/ruang-media/news-release/Pages/sp_2810726.aspx)
- IHSG Crisis Jan 2026: [thediplomat.com](https://thediplomat.com/2026/02/indonesias-eighty-billion-dollar-wake-up-call/)
- OJK & IDX Free-Float Reform: [indonesiabusinesspost.com](https://indonesiabusinesspost.com/5660/markets-and-finance/ihsg-surge-spurs-shift-in-investor-behavior-as-ojk-idx-prepare-free-float-reform)
- Indonesia Banking Outlook 2026: [thejakartapost.com](https://www.thejakartapost.com/business/2026/01/06/banking-sector-2026-gaining-altitude.html)
- ORI029 Bond Offering: [jakartaglobe.id](https://jakartaglobe.id/business/indonesia-offers-new-retail-bonds-with-up-to-58-annual-returns)
- OJK Crypto Derivatives Framework: [abnrlaw.com](https://www.abnrlaw.com/news/indonesia-greenlights-crypto-derivatives-a-look-at-the-new-ojk-framework)
- IMF Indonesia 2026 Assessment: [elibrary.imf.org](https://www.elibrary.imf.org/view/journals/002/2026/010/article-A001-en.xml)
- Rupiah / BI Rate May 2026: [databoks.katadata.co.id](https://databoks.katadata.co.id/en/monetary/statistics/6a0d94ffe56ef/rupiah-slumps-bank-indonesia-raises-interest-rate-to-525-in-may-2026)
