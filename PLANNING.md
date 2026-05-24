# Financial Knowledge Graph — Planning Document
**Project:** Interactive Financial Knowledge Graph (US & Indonesia)
**Audience:** Complete beginners aiming to become elite investors
**Research Date:** May 2026
**Version:** 1.0

---

## 1. Project Goal

Build a **self-contained, interactive knowledge graph** (single HTML file, no server required) that serves as a complete visual encyclopedia of the financial systems of the **United States** and **Indonesia** as of May 2026.

A beginner with zero financial knowledge should be able to:
- Open the file in any browser
- Navigate visually between interconnected financial concepts
- Click any node for a full description, current data, metadata, and reference links
- Search, filter by category and country
- Understand relationships between instruments, institutions, events, and strategies
- Build a mental model that prepares them to invest as an elite investor

---

## 2. Technology Stack Decision

### Chosen: Cytoscape.js (single HTML file)

| Option | Pros | Cons | Decision |
|--------|------|------|----------|
| **Cytoscape.js** | Purpose-built for knowledge graphs, excellent layouts, rich API, handles 200+ nodes, CDN deployable | None for this use case | ✅ **Chosen** |
| D3.js | Very flexible, beautiful | Complex to code for knowledge graphs | ❌ Too complex |
| Vis.js Network | Simple API | Less powerful layouts | ❌ Less capable |
| Sigma.js | Fast for huge graphs | Overkill for ~200 nodes | ❌ Overkill |
| Observable Plot | Modern | Not graph-focused | ❌ Not suited |

### Layout Algorithm: fcose (Force-directed Compound Spring Embedder)
- Loaded via CDN: `unpkg.com/cytoscape-fcose`
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

## 3. Knowledge Graph Architecture

### 3.1 Node Categories (9 categories)

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

### 3.2 Country Indicators

| Country | Border Style | Label Prefix |
|---------|-------------|--------------|
| 🇺🇸 US Only | `#60a5fa` blue solid border | — |
| 🇮🇩 Indonesia Only | `#f87171` red solid border | — |
| 🌐 Both | `#a78bfa` purple dashed border | — |

### 3.3 Node Data Structure

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

### 3.4 Edge Relationship Types

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

## 4. Complete Node Inventory (191 nodes planned)

### 4.1 Markets (16 nodes)
| ID | Label | Country |
|----|-------|---------|
| `us-equity-market` | US Equity Market | US |
| `us-bond-market` | US Bond Market | US |
| `us-money-market` | US Money Market | US |
| `us-derivatives-market` | US Derivatives Market | US |
| `us-forex-market` | US Forex Market | US |
| `us-commodities-market` | US Commodities Market | US |
| `us-crypto-market` | US Crypto Market | US |
| `us-real-estate-market` | US Real Estate Market | US |
| `idx` | IDX / Bursa Efek Indonesia | ID |
| `id-bond-market` | Indonesia Bond Market | ID |
| `id-money-market` | Indonesia Money Market | ID |
| `id-forex-market` | Indonesia Forex Market | ID |
| `id-crypto-market` | Indonesia Crypto Market | ID |
| `idxcarbon` | IDXCarbon (Carbon Exchange) | ID |
| `nyse` | NYSE (New York Stock Exchange) | US |
| `nasdaq-exchange` | NASDAQ | US |

### 4.2 Instruments — Equities (8 nodes)
`common-stock`, `preferred-stock`, `adr`, `ipo`, `rights-issue`, `stock-warrant`, `blue-chip`, `etf`

### 4.3 Instruments — Fixed Income US (10 nodes)
`t-bills`, `t-notes`, `t-bonds`, `tips`, `corporate-bond`, `municipal-bond`, `agency-bond`, `mbs`, `high-yield-bond`, `investment-grade-bond`

### 4.4 Instruments — Fixed Income Indonesia (8 nodes)
`sbn`, `ori`, `sbr`, `sukuk-ritel`, `sukuk-tabungan`, `fr-bonds`, `id-corporate-bond`, `sukuk-korporasi`

### 4.5 Instruments — Funds (10 nodes)
`index-fund`, `active-mutual-fund`, `reksa-dana-saham`, `reksa-dana-campuran`, `reksa-dana-pendapatan-tetap`, `reksa-dana-pasar-uang`, `reit`, `dire`, `hedge-fund`, `money-market-fund`

### 4.6 Instruments — Derivatives (8 nodes)
`call-option`, `put-option`, `futures-contract`, `forward-contract`, `interest-rate-swap`, `currency-swap`, `cds`, `structured-product`

### 4.7 Instruments — Alternative (10 nodes)
`bitcoin`, `ethereum`, `stablecoin`, `defi`, `nft`, `gold`, `silver`, `crude-oil`, `commodity`, `private-equity`

### 4.8 Institutions — US Regulatory (9 nodes)
`fed`, `us-treasury`, `sec`, `finra`, `fdic`, `cftc`, `occ`, `cfpb`, `fsoc`

### 4.9 Institutions — Indonesia Regulatory (7 nodes)
`bank-indonesia`, `ojk`, `lps`, `kemenkeu`, `djppr`, `ksei`, `kpei`

### 4.10 Institutions — Market Operators (4 nodes)
`cme-group`, `cboe`, `dtcc`, `ice`

### 4.11 Institutions — Major US Banks (6 nodes)
`jpmorgan`, `bank-of-america`, `goldman-sachs`, `morgan-stanley`, `citigroup`, `wells-fargo`

### 4.12 Institutions — Major Indonesia Banks (4 nodes)
`bca`, `bri`, `bank-mandiri`, `bni`

### 4.13 Institutions — Platforms & Asset Managers (8 nodes)
`vanguard`, `blackrock`, `fidelity`, `charles-schwab`, `bibit`, `bareksa`, `stockbit`, `ajaib`

### 4.14 Macroeconomic Concepts (20 nodes)
`inflation`, `deflation`, `gdp`, `cpi`, `ppi`, `pce`, `interest-rate`, `federal-funds-rate`, `bi-rate`, `monetary-policy`, `fiscal-policy`, `quantitative-easing`, `quantitative-tightening`, `yield-curve`, `recession`, `bull-market`, `bear-market`, `liquidity`, `volatility`, `market-cap`

### 4.15 Currency & Forex (5 nodes)
`usd`, `idr`, `eur`, `forex-concept`, `exchange-rate-risk`

### 4.16 Market Metrics (15 nodes)
`pe-ratio`, `eps`, `dividend-yield`, `pb-ratio`, `ev-ebitda`, `roe`, `roa`, `nav`, `alpha-metric`, `beta-metric`, `sharpe-ratio`, `standard-deviation`, `max-drawdown`, `var`, `free-cash-flow`

### 4.17 Investment Strategies (18 nodes)
`value-investing`, `growth-investing`, `index-investing`, `dividend-investing`, `dca`, `buy-and-hold`, `swing-trading`, `day-trading`, `momentum-investing`, `income-investing`, `contrarian-investing`, `esg-investing`, `sector-rotation`, `short-selling`, `hedging`, `asset-allocation`, `portfolio-rebalancing`, `diversification`

### 4.18 Market Participants (10 nodes)
`retail-investor`, `institutional-investor`, `hedge-fund-participant`, `pension-fund`, `insurance-company`, `market-maker`, `broker-dealer`, `investment-bank`, `central-bank`, `foreign-investor`

### 4.19 Current Events — May 2026 (15 nodes)
| ID | Event |
|----|-------|
| `event-fed-rate-hold` | Fed Rate Hold @ 3.5–3.75% (Apr 2026) |
| `event-bi-rate-hike` | BI Rate Hike to 5.25% (May 2026) |
| `event-ihsg-crisis` | IHSG Crisis Jan 2026 — $80B Wiped |
| `event-msci-risk` | Indonesia MSCI Reclassification Risk |
| `event-trump-xi-summit` | Trump–Xi Summit Beijing (May 2026) |
| `event-us-tariffs` | US–China Trade Tariffs 2026 |
| `event-nvidia` | Nvidia Earnings Surge (May 2026) |
| `event-spacex-ipo` | SpaceX IPO Filing (May 2026) |
| `event-treasury-yield` | US 10Y Treasury @ 52-week High (~4.13%) |
| `event-ori029` | ORI029 Bond Offering (Jan–Feb 2026) |
| `event-idx-reform` | IDX Free-Float Reform 2026 |
| `event-ojk-crypto` | OJK Crypto Derivatives Framework |
| `event-genius-act` | US GENIUS Act (Stablecoin Regulation) |
| `event-clarity-act` | US CLARITY Act (Crypto Market Structure) |
| `event-rupiah-weak` | Rupiah Weakens to Rp 17,700/USD (May 2026) |

**Total planned nodes: 191**

---

## 5. Key Edge Relationships (350+ edges planned)

### 5.1 Regulatory Relationships (~25 edges)
- SEC → us-equity-market, us-bond-market, us-crypto-market
- FINRA → us-equity-market, broker-dealer
- CFTC → us-derivatives-market, us-commodities-market, us-crypto-market
- FDIC → major US banks (insures)
- OJK → idx, id-bond-market, id-crypto-market, all reksa-dana types
- Bank Indonesia → id-forex-market, id-money-market
- KSEI / KPEI → idx (custody & clearing)

### 5.2 Instruments Traded On Markets (~40 edges)
- All equity instruments → us-equity-market, idx
- All US bonds → us-bond-market (or sub-markets)
- All Indonesia bonds → id-bond-market
- Derivatives → us-derivatives-market
- Commodities → us-commodities-market
- Crypto → us-crypto-market, id-crypto-market
- REIT → us-equity-market + us-real-estate-market

### 5.3 Macro Concepts Affect Markets (~30 edges)
- Inflation → bond market, equity market, currency
- Fed Funds Rate → US bond market, equity market, USD
- BI Rate → IDX, id-bond-market, IDR
- Recession → bear market, equity markets
- QE → liquidity, bond market
- Yield Curve → US bond market, recession

### 5.4 Strategy Uses Instruments (~30 edges)
- Value Investing → common-stock (+ PE ratio, PB ratio, FCF metrics)
- Dividend Investing → common-stock + dividend-yield metric
- Index Investing → etf, index-fund
- DCA → etf, reksa-dana-saham, common-stock
- Income Investing → corporate-bond, ORI, REIT
- Hedging → put-option, futures-contract, currency-swap

### 5.5 Metrics Measure Instruments/Concepts (~25 edges)
- PE Ratio, EPS, PB Ratio, ROE, ROA, FCF → common-stock
- NAV → ETF, all reksa-dana types
- Alpha, Beta, Sharpe Ratio → portfolio strategies
- Beta, Standard Deviation → volatility concept
- VaR → hedging strategy

### 5.6 Current Events Impact Subjects (~30 edges)
- Fed Rate Hold → federal-funds-rate, us-bond-market
- BI Rate Hike → bi-rate, IDR, idx
- IHSG Crisis → idx, foreign-investor, MSCI risk
- US Tariffs → inflation, GDP, us-equity-market
- SpaceX IPO → IPO concept, us-equity-market
- ORI029 → ORI, retail-investor

### 5.7 Institutional Relationships (~25 edges)
- NYSE/NASDAQ → us-equity-market (operates)
- CME Group/CBOE → us-derivatives-market (operates)
- IDX Big 4 banks (BCA, BRI, Mandiri, BNI) listed on IDX
- Vanguard → index-fund; BlackRock → ETF
- Bibit, Bareksa, Ajaib → reksa-dana types
- Stockbit, Ajaib → IDX (stock trading platforms)

**Total planned edges: ~355**

---

## 6. UI/UX Design Specification

### 6.1 Layout
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

### 6.2 Color Palette (Dark Theme)
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

### 6.3 Node Visual Encoding
- **Size**: `28px + (importance × 8px)` → range 36px–108px diameter
- **Color**: Category color (filled)
- **Border**: Country indicator (US=blue, ID=red, BOTH=purple dashed)
- **Label**: White text, truncated at 18 chars, size scales with node
- **Shape**: Circle (uniform for readability)

### 6.4 Edge Visual Encoding
- **Color**: By relationship type
- **Width**: 1–3px based on importance
- **Arrow**: Direction shown
- **Label**: Shown on hover only (to avoid clutter)

### 6.5 Interaction Design
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

### 6.6 Info Panel Content (per node)
1. **Node name** (large, bold)
2. **Category badge** (colored)
3. **Country flag badge** (🇺🇸 / 🇮🇩 / 🌐)
4. **Description** (2–5 sentences, beginner-friendly, current as of May 2026)
5. **Metadata table** (key facts — rates, dates, amounts, founders, etc.)
6. **Related Nodes** (clickable chips — navigates to that node)
7. **Reference Links** (opens external URLs)

---

## 7. Current Market Data (May 2026) to Embed

### US Key Data Points
| Item | Value |
|------|-------|
| S&P 500 | 7,473 (+0.37% daily) |
| Dow Jones | 50,580 |
| NASDAQ | 26,344 |
| Russell 2000 | 2,869 |
| Fed Funds Rate | 3.50–3.75% (held Apr 29, 2026) |
| 10Y Treasury Yield | ~4.13% (52-week high) |
| 20Y/30Y Treasury | ~5.13% (highest since 2007) |
| US Equity Market Cap | ~$62 trillion |
| US Bond Market | ~$58 trillion outstanding |
| Inflation (PCE) | ~2.9% (2026 estimate) |
| GDP Growth | ~2.2% (2026 estimate) |
| Crypto (stablecoins) | +50% market cap growth in 2025 |
| Fed Chair | Transitioning (Powell's term ended May 15, 2026) |

### Indonesia Key Data Points
| Item | Value |
|------|-------|
| IDX Composite (JCI) | ~6,162 (May 22, 2026) |
| IHSG Jan 2026 crash | -11.5% in 2 days, -$80B wiped |
| BI Rate | 5.25% (hiked +50bps May 2026) |
| IDR/USD | Rp 17,700 (weakened 2.2% from end-April) |
| Inflation (April 2026) | 2.42% (within 2.5% ±1% target) |
| Registered investors (SID) | 19.1 million (target: 20M by 2027) |
| Mutual Fund AUM | Rp 679 trillion (record high 2025) |
| ORI029 Target | Rp 25 trillion |
| ORI029 coupon | Fixed, monthly, two tenors (3yr, 6yr) |
| MSCI EM risk | Potential demotion to Frontier Market |
| IDX Free-Float Reform | Min 15% public ownership required |
| OJK Crypto regulation | Transferred from BAPPEBTI Jan 2025 |

---

## 8. Feature Implementation Checklist

### Core Features
- [x] Cytoscape.js graph with fcose layout
- [x] 191 nodes with full metadata and descriptions
- [x] 355 edges with relationship types
- [x] Dark theme UI (slate/blue palette)
- [x] Node color coding by category
- [x] Node size by importance (1–10)
- [x] Country border indicators (US/ID/BOTH)

### Navigation & Interaction
- [x] Click node → info panel slides in from right
- [x] Close panel button + Escape key
- [x] Double-click → zoom to node + neighbors
- [x] Zoom in/out buttons
- [x] Reset zoom/pan button
- [x] Re-layout button

### Search & Filter
- [x] Live search box (highlights matching nodes)
- [x] Category filter checkboxes (toggle visibility)
- [x] Country filter (US / Indonesia / Both / All)
- [x] "Show only neighbors" on selection

### Info Panel
- [x] Node name + category badge + country badge
- [x] Full beginner-friendly description
- [x] Metadata key-value grid
- [x] Related nodes as clickable chips (navigate to)
- [x] External reference links

### Visual Polish
- [x] Animated panel open/close
- [x] Hover tooltip (node name + category)
- [x] Selected node highlight (golden ring)
- [x] Neighbor highlight on selection
- [x] Non-neighbor dim on selection
- [x] Smooth zoom/pan
- [x] Graph statistics in sidebar

---

## 9. File Structure

```
financial-system/
├── index.html        ← Single-file interactive graph (EXECUTION)
├── PLANNING.md       ← This planning document
└── README.md         ← Project overview
```

All code (HTML, CSS, JavaScript, graph data) is in `index.html`.
No build step, no server required — open directly in browser.

---

## 10. Planning vs Execution Sync

This section tracks deviations between plan and implementation.

| # | Planned | Implemented | Status | Notes |
|---|---------|-------------|--------|-------|
| 1 | 191 nodes | see index.html | 🔄 Building | |
| 2 | 355 edges | see index.html | 🔄 Building | |
| 3 | fcose layout | see index.html | 🔄 Building | |
| 4 | Dark theme | see index.html | 🔄 Building | |
| 5 | Search + filter | see index.html | 🔄 Building | |
| 6 | Info panel | see index.html | 🔄 Building | |
| 7 | Country filter | see index.html | 🔄 Building | |
| 8 | Current May 2026 data | see index.html | 🔄 Building | |

*This table will be updated after execution is complete.*

---

## 11. References & Sources

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
