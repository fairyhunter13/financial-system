/* ============================================================
   data/events.js — Current event nodes (15) — May 2026
   ============================================================ */

window.NODES_EVENTS = [

  makeNode({ id:'event-fed-rate-hold', label:'Fed Holds 3.5–3.75%', category:'events', country:'US', importance:8,
    description:'At the April 29, 2026 FOMC meeting (the last under Chair Jerome Powell), the Federal Reserve kept the federal funds rate unchanged at 3.5–3.75%. This was Powell\'s final meeting as Chair — his term ended May 15, 2026. The Fed cited solid economic activity, stable unemployment, and still-elevated inflation (~2.9% PCE) as reasons to hold. Market expects 2× 25bps cuts in late 2026 or early 2027.',
    metadata:{ 'Decision':'Hold at 3.50–3.75%','Date':'April 29, 2026','Context':'Powell\'s final meeting as Fed Chair','Inflation Cited':'PCE ~2.9% (above 2% target)','Market Expectation':'2× 25bps cuts in Q3/Q4 2026 or Q1 2027','New Chair':'Appointment pending (May 2026)' },
    links:[{title:'FOMC Statement',url:'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm'},{title:'Al Jazeera Report',url:'https://www.aljazeera.com/economy/2026/4/29/us-fed-holds-rates-steady-in-powells-final-meeting-as-fed-chair'}],
    tags:['fomc','fed rate hold','jerome powell','monetary policy','interest rate','2026','fed chair transition'] }),

  makeNode({ id:'event-bi-rate-hike', label:'BI Rate Hike to 5.25%', category:'events', country:'ID', importance:9,
    description:'In May 2026, Bank Indonesia raised its benchmark BI Rate by a larger-than-expected 50 basis points (markets expected 25bps) to 5.25% — the first rate hike since April 2024. The trigger: rupiah depreciation of 2.2% from end-April to Rp 17,700/USD amid Middle East tensions and global risk-off sentiment. BI also raised the Deposit Facility to 4.25% and Lending Facility to 6.00%.',
    metadata:{ 'New BI Rate':'5.25% (+50bps)','Deposit Facility':'4.25%','Lending Facility':'6.00%','Trigger':'IDR weakened to Rp 17,700/USD (–2.2% from end-April)','Last Hike':'April 2024','Decision':'Surprise 50bps (market expected 25bps)','Goal':'Defend rupiah + pre-empt imported inflation' },
    links:[{title:'BI Rate Announcement',url:'https://www.bi.go.id/en/publikasi/ruang-media/news-release/Pages/sp_2810726.aspx'},{title:'Databoks BI Rate',url:'https://databoks.katadata.co.id/en/monetary/statistics/6a0d94ffe56ef/rupiah-slumps-bank-indonesia-raises-interest-rate-to-525-in-may-2026'}],
    tags:['bi rate','bank indonesia','rate hike','rupiah','idr','monetary policy','50bps','currency defense'] }),

  makeNode({ id:'event-ihsg-crisis', label:'IHSG Crisis Jan 2026 (–$80B)', category:'events', country:'ID', importance:9,
    description:'On January 28–29, 2026, Indonesia\'s IDX Composite (IHSG) plummeted by over 11.5% in two days — one of the worst two-day crashes in the exchange\'s history. Approximately $80 billion in market value was wiped out, triggering a trading halt on the IDX. The crisis led to the resignation of IDX President Director Iman Rachman and the departure of OJK Chair Mahendra Siregar.',
    metadata:{ 'Date':'January 28–29, 2026','Crash Magnitude':'–11.5% in 2 days','Market Value Lost':'~$80 Billion (–Rp 1,200+ Trillion)','Trading Halt':'Triggered on IDX','Resignations':'IDX President Director + OJK Chair resigned','Government Response':'High-level meeting: BI Governor + new OJK leadership mobilized','IHSG (May 22, 2026)':'~6,162 (down ~14% from pre-crash highs)' },
    links:[{title:'Indonesia $80B Wake-Up Call',url:'https://thediplomat.com/2026/02/indonesias-eighty-billion-dollar-wake-up-call/'},{title:'Market Recovery Efforts',url:'https://indonesiabusinesspost.com/6016/markets-and-finance/govt-moves-to-restore-market-confidence-after-ihsg-plunge-idx-leadership-shake-up'}],
    tags:['ihsg crash','jci','idx crisis','bear market','january 2026','market crash','$80 billion','circuit breaker'] }),

  makeNode({ id:'event-msci-risk', label:'MSCI Reclassification Risk', category:'events', country:'ID', importance:8,
    description:'Indonesia faces the risk of being downgraded by MSCI from Emerging Market (EM) status to Frontier Market (FM). Such a demotion would trigger forced outflows of $25–$50 billion as EM-tracking funds would be required to sell their Indonesia holdings. OJK pledged to resolve all MSCI concerns (transparency, foreign ownership, trading rules) by the May 2026 deadline. This risk is the biggest structural threat to Indonesian capital markets in 2026.',
    metadata:{ 'Risk':'Demotion from Emerging Market → Frontier Market','Forced Outflow Estimate':'$25–$50 Billion if downgraded','OJK Deadline':'May 2026 to resolve MSCI concerns','Key Issues':'Market transparency, foreign ownership limits, trading rules','Trigger':'Post–Jan 2026 crash scrutiny of Indonesia\'s market quality','Impact if Downgraded':'Massive IDR and IHSG sell-off' },
    links:[{title:'MSCI Reclassification Risk',url:'https://www.bitget.com/wiki/indonesian-stock'}],
    tags:['msci','emerging market','frontier market','foreign outflow','reclassification','ojk','idx reform'] }),

  makeNode({ id:'event-trump-xi-summit', label:'Trump–Xi Summit (May 2026)', category:'events', country:'US', importance:8,
    description:'US President Donald Trump and Chinese President Xi Jinping met in Beijing in May 2026 for a summit aimed at repairing trade relations damaged by the tariff war. The meeting focused on stabilizing the economic relationship — a trade truce reached in October 2025 was expected to be extended. Modest announcements expected: China buying US soybeans, beef, and Boeing aircraft. Positive impact on US equity markets on summit days.',
    metadata:{ 'Date':'Week of May 13, 2026','Location':'Beijing, China','Key Agenda':'Trade truce extension, commodity purchases (soybeans, beef, Boeing)','Market Impact':'Positive for equities on summit days (Russell 2000 +higher)','Context':'Follows Trump tariff war that raised avg US household tariff burden ~$1,500/year','Expected':'Incremental progress, not full deal resolution' },
    links:[{title:'Trump-Xi Summit',url:'https://www.pbs.org/newshour/economy/u-s-and-china-seek-to-repair-damage-from-tariff-war-that-sent-trade-into-a-freefall'},{title:'Stock Market May 21',url:'https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-may-21-2026'}],
    tags:['trump xi','us china','trade war','beijing summit','tariffs','soybeans','boeing','trade truce'] }),

  makeNode({ id:'event-us-tariffs', label:'US–China Trade Tariffs 2026', category:'events', country:'US', importance:8,
    description:'Trump\'s 2025–2026 tariff program is the largest US tax increase as a share of GDP since 1993. Average household burden: ~$1,500/year. Section 232 tariffs reduce long-run US GDP by ~0.3%. Many US companies (Walmart issued a "Tariff Cliff" warning in Feb 2026) have shifted supply chains from China to Vietnam and India. Tariffs are contributing to above-target PCE inflation (~2.9%).',
    metadata:{ 'Scale':'Largest US tax increase as % of GDP since 1993','Household Impact':'Average $1,500/year per US household (2026)','Walmart Warning':'"Tariff Cliff" warning in Q1 2026 earnings; prices up 3%','GDP Impact':'–0.3% long-run US GDP (Section 232 tariffs)','Supply Chain':'Companies moving from China → Vietnam, India','Inflation Effect':'Contributing to elevated PCE at ~2.9%' },
    links:[{title:'Tariff Tracker 2026',url:'https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/'},{title:'CNBC Tariff Impact',url:'https://www.cnbc.com/2026/04/03/trump-tariffs-trade-war-impact.html'}],
    tags:['tariffs','trade war','trump','china','section 232','inflation','supply chain','walmart','vietnam'] }),

  makeNode({ id:'event-nvidia', label:'Nvidia Earnings Surge (May 2026)', category:'events', country:'US', importance:7,
    description:'Nvidia reported strong quarterly earnings in late May 2026, beating analyst expectations and driving a surge in NASDAQ. Nvidia has become one of the most valuable companies in the world, driven by explosive demand for its H100/H200 AI chips used in data centers for training large language models (LLMs). Nvidia\'s earnings are now a market-moving event for the entire tech sector.',
    metadata:{ 'Report Date':'Late May 2026','Market Impact':'NASDAQ surged on Nvidia beat','Product':'H100/H200/Blackwell AI chips for data center AI training','AI Demand':'Explosive — hyperscalers (Microsoft, Google, Meta, Amazon) buying massively','Nvidia Market Cap':'Among world\'s largest (trillion-dollar club)','Sector Impact':'Semiconductor, AI, and data center stocks moved on results' },
    links:[{title:'Nvidia Earnings May 2026',url:'https://www.thestreet.com/stock-market-today/stock-market-today-nasdaq-dow-jones-sp-500-updates-may-20-2026'}],
    tags:['nvidia','earnings','ai chips','h100','gpu','data center','llm','artificial intelligence','nasdaq'] }),

  makeNode({ id:'event-spacex-ipo', label:'SpaceX IPO Filing (May 2026)', category:'events', country:'US', importance:7,
    description:'SpaceX filed an IPO prospectus in May 2026, generating massive investor interest. SpaceX (valued privately at ~$200B+) is Elon Musk\'s rocket and satellite company, operating Starlink (satellite internet), Falcon 9 (launch vehicle), and Starship. An IPO would be one of the largest in US history and would make SpaceX shares available to retail investors for the first time.',
    metadata:{ 'Filing Date':'May 2026','Private Valuation':'~$200B+ (before IPO pricing)','Key Products':'Starlink satellite internet, Falcon 9, Starship, Dragon spacecraft','IPO Type':'Would be among largest in US history','Retail Access':'First time retail investors could buy SpaceX shares','Comparison':'NASA contracts, Pentagon launch contracts provide revenue base' },
    links:[{title:'SpaceX IPO News',url:'https://www.thestreet.com/stock-market-today/stock-market-today-nasdaq-dow-jones-sp-500-updates-may-20-2026'}],
    tags:['spacex','ipo','elon musk','starlink','rocket','satellite','mega ipo','falcon 9','public offering'] }),

  makeNode({ id:'event-treasury-yield', label:'US 10Y Treasury @ 52-Week High', category:'events', country:'US', importance:8,
    description:'In May 2026, the US 10-Year Treasury yield hit a 52-week high of ~4.13%, while the 20Y and 30Y yields reached ~5.13% — the highest levels since 2007. This was driven by persistent inflation (tariff effects), fiscal concerns ($36T US national debt), and a surge in Treasury supply. High long-term yields put pressure on stock valuations (higher discount rates = lower P/E multiples).',
    metadata:{ '10Y Yield (May 2026)':'~4.13% (52-week high)','20Y/30Y Yield (May 2026)':'~5.13% (highest since 2007)','Key Drivers':'Persistent inflation (tariffs), large fiscal deficit, Treasury supply','Stock Market Impact':'Higher yields → lower equity valuations (higher discount rate)','Mortgage Impact':'30Y US mortgage rate ~6.5–7%','Bond Market':'Negative for existing bond prices (yields up = prices down)' },
    links:[{title:'Treasury Yield 2026',url:'https://westmountfundamentals.com/bond-yield-curve-2026'},{title:'Stock Market May 18',url:'https://www.thestreet.com/latest-news/stock-market-today-may-18-2026-updates'}],
    tags:['10 year treasury','treasury yield','bond yield','interest rate','fiscal deficit','mortgage rate','2007 level'] }),

  makeNode({ id:'event-ori029', label:'ORI029 Bond Offering (Jan–Feb 2026)', category:'events', country:'ID', importance:7,
    description:'The Indonesian government issued ORI029 (Obligasi Negara Ritel series 029) from January 26 to February 19, 2026, targeting Rp 25 trillion. ORI029 comes in two tenors: ORI029T3 (3-year) and ORI029T6 (6-year) — both with fixed coupons paid monthly. Minimum investment: Rp 1 million. Tradable after first coupon payment. All proceeds finance the 2026 state budget (APBN).',
    metadata:{ 'Series':'ORI029','Offering Period':'Jan 26 – Feb 19, 2026','Target':'Rp 25 Trillion','Tenors':'ORI029T3 (3-year) + ORI029T6 (6-year)','Coupon':'Fixed, paid monthly','Minimum Investment':'Rp 1 million','Platforms':'Bibit, Bareksa, Mandiri Online, BCA, BRI, etc.','Use of Proceeds':'Finance 2026 State Budget (APBN)' },
    links:[{title:'ORI029 Jakarta Globe',url:'https://jakartaglobe.id/business/indonesia-offers-new-retail-bonds-with-up-to-58-annual-returns'}],
    tags:['ori029','obligasi negara ritel','retail bond','ori','government bond','monthly coupon','investasi aman'] }),

  makeNode({ id:'event-idx-reform', label:'IDX Free-Float Reform 2026', category:'events', country:'ID', importance:7,
    description:'OJK and IDX are implementing a major structural reform requiring all IDX-listed companies to maintain a minimum 15% public ownership (free-float). This reform changes index calculations from simple market cap to free-float-adjusted market cap (real-world trading value). The March 2026 deadline pressured companies with very low public floats. This is a critical step toward MSCI Emerging Market retention.',
    metadata:{ 'Reform':'Minimum 15% public free-float requirement','Index Change':'Calculations now use free-float-adjusted market cap','OJK Deadline':'March 2026 (initial)','Goal':'Improve market quality, retain MSCI EM status','Impact':'Companies with <15% float must issue new shares or buy back existing','Source':'Post-IHSG crash reform push by OJK/IDX' },
    links:[{title:'IDX Free-Float Reform',url:'https://indonesiabusinesspost.com/5660/markets-and-finance/ihsg-surge-spurs-shift-in-investor-behavior-as-ojk-idx-prepare-free-float-reform'}],
    tags:['free float','idx reform','ojk','msci','public ownership','market reform','ihsg','listed company'] }),

  makeNode({ id:'event-ojk-crypto', label:'OJK Crypto Derivatives Framework', category:'events', country:'ID', importance:7,
    description:'In late 2025, OJK issued a new regulation (OJK Regulation No. 23/2025, amending No. 27/2024) formally introducing a regulatory framework for crypto derivatives trading in Indonesia. This aligns with international best practices and came after OJK took over crypto supervision from BAPPEBTI in January 2025. Indonesia now has one of Asia\'s most comprehensive crypto regulatory frameworks.',
    metadata:{ 'Regulation':'OJK Reg No. 23/2025 (amends 27/2024)','Date':'December 2025','Key Addition':'Crypto derivatives trading framework introduced','Background':'OJK took over from BAPPEBTI (Jan 10, 2025)','Indonesia Crypto Users':'14.16 million (as of April 2025)','Classification':'Crypto = digital financial asset (NOT payment method)' },
    links:[{title:'OJK Crypto Derivatives',url:'https://www.abnrlaw.com/news/indonesia-greenlights-crypto-derivatives-a-look-at-the-new-ojk-framework'},{title:'OJK Crypto Regulation',url:'https://adcolaw.com/blog/the-direction-of-crypto-asset-regulation-in-indonesia-following-the-transfer-of-supervisory-authority-from-bappebti-to-the-ojk/'}],
    tags:['ojk crypto','crypto derivatives','digital asset','bappebti','ojk regulation','kripto','indonesia crypto law'] }),

  makeNode({ id:'event-genius-act', label:'US GENIUS Act (Stablecoin Law)', category:'events', country:'US', importance:7,
    description:'The GENIUS Act (Guiding and Establishing National Innovation for US Stablecoins) is the first comprehensive US stablecoin regulatory law. Full implementation is targeted for 2026, with regulators required to finalize rules by July 18, 2026. Stablecoin issuers must maintain 1:1 reserves, comply with AML/KYC rules, and register with regulators. This brings regulatory clarity to the $150B+ stablecoin market.',
    metadata:{ 'Full Name':'Guiding and Establishing National Innovation for US Stablecoins Act','Implementation Deadline':'July 18, 2026','Requirements':'1:1 USD reserves, AML/KYC, regulator registration','Market Size':'$150B+ stablecoin market cap','Key Issuers Affected':'Tether (USDT), Circle (USDC), Paypal (PYUSD)','Significance':'First comprehensive US stablecoin law — major regulatory milestone' },
    links:[{title:'GENIUS Act',url:'https://finance.yahoo.com/news/top-us-crypto-bills-watch-100215687.html'},{title:'Stablecoin Regulation',url:'https://www.lightspark.com/knowledge/is-crypto-legal-in-usa'}],
    tags:['genius act','stablecoin','usdt','usdc','regulatory','us crypto law','digital dollar','reserve requirement'] }),

  makeNode({ id:'event-clarity-act', label:'US CLARITY Act (Crypto Market Structure)', category:'events', country:'US', importance:7,
    description:'The CLARITY Act (Crypto Legislation and Regulatory Insights for Trade and You Act) establishes the US digital asset market structure. Key provision: CFTC gets exclusive jurisdiction over digital commodity spot markets (Bitcoin, Ethereum). SEC retains authority over digital securities. Platforms can register with either agency based on what they handle. Provides regulatory clarity that the crypto industry has sought since 2017.',
    metadata:{ 'Key Rule':'CFTC regulates digital commodities (BTC, ETH); SEC regulates digital securities','Status (2026)':'Senate Banking Committee markup expected','Impact':'Regulatory certainty for crypto exchanges and DeFi protocols','BTC/ETH Classification':'Commodities (CFTC jurisdiction)','Token Taxonomy':'Defines digital commodities, digital collectibles, digital tools, stablecoins, digital securities','SEC-CFTC MOU':'Signed March 11, 2026 as companion coordination agreement' },
    links:[{title:'CLARITY Act Overview',url:'https://www.lw.com/en/us-crypto-policy-tracker/regulatory-developments'},{title:'SEC Crypto Guidance',url:'https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets'}],
    tags:['clarity act','cftc','sec','bitcoin regulation','ethereum regulation','crypto law','digital asset','market structure'] }),

  makeNode({ id:'event-rupiah-weak', label:'Rupiah Weakens to Rp 17,700/USD', category:'events', country:'ID', importance:8,
    description:'By May 19, 2026, the Indonesian rupiah weakened to Rp 17,700 per US dollar — a 2.2% decline from end-April levels. This was driven by global risk-off sentiment (Middle East tensions, US tariff uncertainty), a stronger USD, and concerns about Indonesia\'s post-IHSG-crash economic stability. The rupiah weakness was the primary trigger for Bank Indonesia\'s surprise 50bps rate hike to 5.25% in May 2026.',
    metadata:{ 'USD/IDR Rate (May 19, 2026)':'Rp 17,700','Depreciation from End-April':'–2.2%','Trigger':'Global risk-off + Middle East tensions + USD strengthening','Central Bank Response':'BI hiked rate by 50bps to 5.25%','Historical Context':'Rp 17,700 is elevated — near March 2020 COVID crisis levels','Impact on Imports':'More expensive imports → higher inflation risk' },
    links:[{title:'Rupiah Weakness',url:'https://databoks.katadata.co.id/en/monetary/statistics/6a0d94ffe56ef/rupiah-slumps-bank-indonesia-raises-interest-rate-to-525-in-may-2026'},{title:'BI Rate Hike',url:'https://www.bi.go.id/en/publikasi/ruang-media/news-release/Pages/sp_2810726.aspx'}],
    tags:['rupiah','idr','currency weakness','usd idr','rp 17700','depresiasi','bank indonesia','nilai tukar'] }),

];
