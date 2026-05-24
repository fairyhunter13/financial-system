/* ============================================================
   data/concepts.js — Macroeconomic concept nodes (20)
   ============================================================ */

window.NODES_CONCEPTS = [

  makeNode({ id:'inflation', label:'Inflation / Inflasi', category:'concepts', country:'BOTH', importance:9,
    description:'Inflation is the rate at which the general price level of goods and services rises, eroding purchasing power. Measured by CPI, PPI, and PCE. Central banks (Fed, Bank Indonesia) target low stable inflation. High inflation erodes bond returns and hurts consumers. As of 2026, US PCE inflation is ~2.9% and Indonesia\'s CPI is 2.42% (both within target ranges).',
    metadata:{ 'US PCE Inflation (2026 est.)':'~2.9%','Indonesia CPI (Apr 2026)':'2.42%','Fed Target':'~2%','BI Target':'2.5% ±1%','Measured By':'CPI (US/ID), PCE (US focus), PPI','Caused By':'Too much money chasing too few goods, supply shocks' },
    links:[{title:'BLS CPI',url:'https://www.bls.gov/cpi/'},{title:'BI Inflation Data',url:'https://www.bi.go.id/en/statistik/ekonomi-keuangan/seki'}],
    tags:['inflation','cpi','pce','inflasi','harga','deflasi','monetary policy'] }),

  makeNode({ id:'deflation', label:'Deflation / Deflasi', category:'concepts', country:'BOTH', importance:6,
    description:'Deflation is a sustained decrease in the general price level. While falling prices sound good, deflation is dangerous — consumers delay purchases expecting prices to fall further, causing demand to collapse and triggering recession. Japan experienced "Lost Decades" of deflation 1990–2010. Central banks fear deflation more than moderate inflation.',
    metadata:{ 'Danger':'Consumers delay purchases → demand collapse → recession','Example':'Japan "Lost Decades" (1990–2010)','Contrast':'Opposite of inflation','Trigger':'Credit collapse, demand shock, technology-driven (can be benign)','Response':'Central banks cut rates, implement QE' },
    links:[{title:'Deflation Risks',url:'https://www.principlesofeconomics.net/national-income-and-output-inflation-and-deflation'}],
    tags:['deflation','deflasi','prices falling','japan','lost decade','demand collapse','recession'] }),

  makeNode({ id:'gdp', label:'GDP / PDB', category:'concepts', country:'BOTH', importance:8,
    description:'Gross Domestic Product (GDP) measures the total value of all goods and services produced in a country. It\'s the broadest measure of economic health. Growing GDP = healthy economy = generally good for stocks. In 2026, US GDP is expected to grow ~2.2%. Indonesia\'s GDP is expected to grow ~5% — one of Asia\'s fastest growing large economies.',
    metadata:{ 'Full Name':'Gross Domestic Product','US GDP Growth (2026 est.)':'~2.2%','Indonesia GDP Growth (2026 est.)':'~5%','Formula':'C + I + G + (X–M) (consumption + investment + government + net exports)','Frequency':'Reported quarterly (US), quarterly (Indonesia)','Real vs Nominal':'Real GDP adjusted for inflation' },
    links:[{title:'US GDP Data',url:'https://www.bea.gov/data/gdp/gross-domestic-product'},{title:'Indonesia GDP',url:'https://tradingeconomics.com/indonesia/gdp-growth'}],
    tags:['gdp','pdb','gross domestic product','economic growth','economy','output'] }),

  makeNode({ id:'cpi', label:'CPI / IHK', category:'concepts', country:'BOTH', importance:8,
    description:'Consumer Price Index (CPI) measures the average change in prices paid by consumers for a basket of goods and services. The most widely used inflation measure. In the US, the CPI basket includes housing (32%), transportation, food, and healthcare. Indonesia\'s equivalent is IHK (Indeks Harga Konsumen). When CPI rises, the Fed/BI may raise rates.',
    metadata:{ 'US CPI (2026 est.)':'~2.7% annual','Indonesia IHK (Apr 2026)':'2.42%','Components (US)':'Housing 32%, transport, food, medical','Published':'Monthly (BLS in US, BPS in Indonesia)','Core CPI':'Excludes food and energy (more stable measure)','Impact':'Triggers Fed/BI rate decisions' },
    links:[{title:'BLS CPI',url:'https://www.bls.gov/cpi/'},{title:'BPS IHK',url:'https://www.bps.go.id'}],
    tags:['cpi','ihk','consumer price index','indeks harga konsumen','inflation measure','bls','bps'] }),

  makeNode({ id:'ppi', label:'PPI (Producer Price Index)', category:'concepts', country:'US', importance:6,
    description:'Producer Price Index (PPI) measures average changes in prices received by domestic producers for their output. A leading indicator of future CPI — when producers pay more for inputs, they pass costs to consumers. A sustained PPI rise often signals upcoming CPI inflation. Closely watched by the Fed in assessing inflation pipeline.',
    metadata:{ 'What It Measures':'Prices at the producer/wholesale level','Relationship to CPI':'Leads CPI — producer costs eventually become consumer prices','Published By':'BLS (monthly)','Subcategories':'Final demand, processed goods, services','2026 Context':'Elevated energy prices pushing PPI higher' },
    links:[{title:'BLS PPI',url:'https://www.bls.gov/ppi/'}],
    tags:['ppi','producer price index','wholesale prices','inflation pipeline','leading indicator'] }),

  makeNode({ id:'pce', label:'PCE (Personal Consumption Expenditure)', category:'concepts', country:'US', importance:7,
    description:'PCE (Personal Consumption Expenditure deflator) is the Fed\'s preferred inflation measure. Unlike CPI, PCE adjusts for changes in consumer behavior (substitution effect) and has a different weighting. Core PCE (excluding food and energy) is the Fed\'s official 2% inflation target. PCE inflation for 2026 is estimated at ~2.9% due to energy price rises.',
    metadata:{ 'Preferred By':'Federal Reserve (official inflation target)','2026 PCE Estimate':'~2.9% (above 2% target)','Core PCE Target':'2.0%','Difference from CPI':'Adjusts for substitution, broader coverage','Published By':'Bureau of Economic Analysis (BEA)','Key Fact':'Fed\'s 2% target is specifically Core PCE' },
    links:[{title:'BEA PCE',url:'https://www.bea.gov/data/personal-consumption-expenditures-price-index'}],
    tags:['pce','personal consumption expenditure','federal reserve target','core inflation','bea','2 percent'] }),

  makeNode({ id:'interest-rate', label:'Interest Rate / Suku Bunga', category:'concepts', country:'BOTH', importance:9,
    description:'The interest rate is the cost of borrowing money, expressed as a percentage. Central banks set policy rates (Fed Funds Rate in the US, BI Rate in Indonesia) that ripple through the entire economy — affecting mortgage rates, corporate borrowing, bond yields, and stock valuations. Higher rates slow the economy and fight inflation; lower rates stimulate growth.',
    metadata:{ 'US Policy Rate':'3.50–3.75% (Apr 2026, held)','Indonesia Policy Rate (BI Rate)':'5.25% (May 2026, +50bps)','Mortgage Impact':'30Y US mortgage ~6.5–7% (tracks 10Y Treasury + spread)','Bond Impact':'Rate up → bond prices down (inverse relationship)','Stock Impact':'Rate up → stocks may fall (higher discount rate)' },
    links:[{title:'Federal Reserve Rate',url:'https://www.federalreserve.gov/monetarypolicy/fomcminutes20260429.htm'},{title:'BI Rate',url:'https://www.bi.go.id'}],
    tags:['interest rate','suku bunga','fed funds rate','bi rate','monetary policy','borrowing cost'] }),

  makeNode({ id:'federal-funds-rate', label:'Federal Funds Rate', category:'concepts', country:'US', importance:9,
    description:'The federal funds rate is the rate US banks charge each other for overnight loans of reserve balances. Set by the FOMC. It\'s the most powerful single interest rate in the world — it influences all other interest rates globally. As of April 29, 2026 (last FOMC meeting), rate is held at 3.5–3.75%. Two 25bps cuts are expected later in 2026 or early 2027.',
    metadata:{ 'Current Rate (Apr 2026)':'3.50–3.75% (unchanged)','Set By':'FOMC (Federal Open Market Committee)','Expected Cuts':'2× 25bps cuts in late 2026 / early 2027','Historical':'Near 0% in 2021; rose to 5.25–5.50% by 2023; currently declining','Impact':'Ripples through all US and global interest rates' },
    links:[{title:'FOMC Statement Apr 2026',url:'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm'},{title:'Fed Rate History',url:'https://fred.stlouisfed.org/series/DFEDTARU'}],
    tags:['federal funds rate','fomc','fed rate','monetary policy','interest rate','overnight rate'] }),

  makeNode({ id:'bi-rate', label:'BI Rate', category:'concepts', country:'ID', importance:9,
    description:'BI Rate (Bank Indonesia 7-Day Reverse Repo Rate) is Indonesia\'s benchmark policy interest rate. In May 2026, Bank Indonesia raised the BI Rate by a surprise 50bps to 5.25% (the first hike since April 2024) to defend the rupiah against the IDR\'s 2.2% depreciation and pre-emptively contain imported inflation amid global uncertainty.',
    metadata:{ 'Current Rate (May 2026)':'5.25% (+50bps hike)','Deposit Facility':'4.25%','Lending Facility':'6.00%','Last Changed':'May 2026 (hike)','Previous Hike':'April 2024','Trigger':'Rupiah weakness (Rp 17,700/USD) + Middle East tensions + global risk-off' },
    links:[{title:'BI Rate Announcement',url:'https://www.bi.go.id/en/publikasi/ruang-media/news-release/Pages/sp_2810726.aspx'},{title:'BI Rate History',url:'https://tradingeconomics.com/indonesia/interest-rate'}],
    tags:['bi rate','bank indonesia','suku bunga','monetary policy','rupiah','kebijakan moneter'] }),

  makeNode({ id:'monetary-policy', label:'Monetary Policy / Kebijakan Moneter', category:'concepts', country:'BOTH', importance:8,
    description:'Monetary policy refers to central bank actions to manage the money supply and interest rates to achieve goals like price stability, full employment, and economic growth. Tools include setting policy rates (Fed Funds Rate, BI Rate), open market operations (buying/selling bonds), and reserve requirements. Bank Indonesia\'s 2026 stance is "pro-stability" amid rupiah pressure.',
    metadata:{ 'Tools':'Policy rates, open market operations, QE/QT, reserve requirements','US Stance (2026)':'Holding steady; waiting for inflation to ease to 2%','Indonesia Stance (2026)':'Pro-stability (rate hike to defend rupiah)','Expansionary':'Cut rates, buy bonds → stimulate economy','Contractionary':'Raise rates, sell bonds → fight inflation' },
    links:[{title:'Fed Monetary Policy',url:'https://www.federalreserve.gov/monetarypolicy'},{title:'BI Monetary Policy',url:'https://www.bi.go.id'}],
    tags:['monetary policy','kebijakan moneter','central bank','interest rate','money supply','fomc'] }),

  makeNode({ id:'fiscal-policy', label:'Fiscal Policy / Kebijakan Fiskal', category:'concepts', country:'BOTH', importance:8,
    description:'Fiscal policy refers to government use of spending and taxation to influence the economy. Expansionary fiscal policy (more spending, tax cuts) stimulates growth; contractionary (less spending, tax hikes) reduces debt/inflation. The US runs a large fiscal deficit (~$1.7T in FY2025). Indonesia\'s APBN targets a deficit of 2.5% of GDP in 2026.',
    metadata:{ 'US Fiscal Deficit':'~$1.7 Trillion (FY2025)','US National Debt':'~$36 Trillion (and rising)','Indonesia APBN Deficit Target':'~2.5% of GDP (2026)','Tools':'Government spending, taxation, subsidies','US Tariffs as Fiscal Tool':'Trump tariffs = tax on imports (~$1,500 avg per US household in 2026)' },
    links:[{title:'US Budget Office',url:'https://www.cbo.gov'},{title:'Kemenkeu APBN',url:'https://www.kemenkeu.go.id'}],
    tags:['fiscal policy','kebijakan fiskal','government spending','tax','deficit','apbn','budget'] }),

  makeNode({ id:'quantitative-easing', label:'Quantitative Easing (QE)', category:'concepts', country:'US', importance:8,
    description:'QE is an unconventional monetary policy where a central bank buys long-term securities (government bonds, MBS) to inject liquidity into the economy when interest rates are already near zero. The Fed used QE massively after the 2008 crisis and during COVID-2020. Fed\'s balance sheet grew to ~$9 trillion by 2022. QE tends to boost stock and bond prices.',
    metadata:{ 'Used By':'Federal Reserve (post-2008, post-2020)','Mechanism':'Fed buys bonds → banks have more reserves → lending increases','Effect':'Lower long-term rates, higher asset prices (stocks, bonds)','Balance Sheet Peak':'~$9 Trillion (2022)','Risk':'Can cause inflation if done excessively','Status (2026)':'QT ongoing (balance sheet reducing)' },
    links:[{title:'Fed QE Explained',url:'https://www.federalreserve.gov/econres/notes/feds-notes/quantitative-easing-and-direct-lending.htm'}],
    tags:['quantitative easing','qe','asset purchase','fed balance sheet','money printing','stimulus','bonds'] }),

  makeNode({ id:'quantitative-tightening', label:'Quantitative Tightening (QT)', category:'concepts', country:'US', importance:7,
    description:'QT is the reverse of QE — the central bank reduces its balance sheet by letting bonds mature without reinvestment (or by selling bonds). This reduces money supply and puts upward pressure on long-term interest rates. The Fed began QT in 2022 to fight inflation and is still reducing its balance sheet in 2026 (from ~$9T peak to ~$7T).',
    metadata:{ 'Mechanism':'Fed lets bonds mature without re-buying','Effect':'Reduces money supply, pushes long-term rates higher','Fed Balance Sheet':'~$7 Trillion (down from $9T peak)','Started':'2022','Contrast':'Opposite of QE','Impact on Bonds':'Slightly negative (increases bond supply in market)' },
    links:[{title:'Fed Balance Sheet',url:'https://www.federalreserve.gov/releases/h41/'}],
    tags:['quantitative tightening','qt','balance sheet reduction','bond maturity','money supply','fed'] }),

  makeNode({ id:'yield-curve', label:'Yield Curve', category:'concepts', country:'US', importance:8,
    description:'The yield curve plots interest rates on US Treasury bonds of different maturities (3-month to 30-year). A normal yield curve slopes upward (longer = higher yield). An inverted yield curve (short-term > long-term yields) has predicted virtually every US recession since 1960. As of May 2026, the curve is normalizing after a prolonged inversion, but 30Y yields (~5.13%) are at 2007 levels.',
    metadata:{ '10Y Yield (May 2026)':'~4.13% (52-week high)','30Y Yield (May 2026)':'~5.13% (highest since 2007)','Inversion':'2022–2024 (inverted; now normalizing)','Recession Signal':'Inverted curve → recession in 12–18 months','Normal Curve':'Upward sloping (long > short)','Inverted Curve':'Short > long (risk signal)' },
    links:[{title:'Treasury Yield Curve',url:'https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics'},{title:'Yield Curve Analysis',url:'https://westmountfundamentals.com/bond-yield-curve-2026'}],
    tags:['yield curve','inversion','treasury yields','recession signal','10 year yield','30 year yield','fixed income'] }),

  makeNode({ id:'recession', label:'Recession / Resesi', category:'concepts', country:'BOTH', importance:7,
    description:'A recession is typically defined as two consecutive quarters of negative GDP growth. Characterized by rising unemployment, falling business investment, and declining consumer spending. The New York Fed assigns ~21% probability of US recession in 2026. Bear markets often accompany recessions. Indonesia\'s 2020 COVID recession was its first since 1998 Asian Financial Crisis.',
    metadata:{ 'Definition':'2 consecutive quarters of negative GDP growth','NY Fed Recession Probability (2026)':'~21%','Indicators':'Inverted yield curve, rising unemployment, falling PMI','US Last Recession':'2020 (COVID), 2008 (GFC)','Indonesia Last Recession':'2020 (COVID)','Impact':'Stocks fall, unemployment rises, credit tightens' },
    links:[{title:'NY Fed Recession Probability',url:'https://www.newyorkfed.org/research/capital_markets/ycfaq.html'}],
    tags:['recession','resesi','negative growth','bear market','unemployment','economic downturn'] }),

  makeNode({ id:'bull-market', label:'Bull Market / Pasar Bullish', category:'concepts', country:'BOTH', importance:7,
    description:'A bull market is a sustained period of rising asset prices (typically defined as 20%+ rise from recent lows). In bull markets, investor confidence is high, economic conditions are good, and corporate profits are rising. The US has been in a generally bullish trend since 2009, with interruptions. As of May 2026, US markets are near all-time highs (S&P at 7,473).',
    metadata:{ 'Definition':'20%+ price increase from recent lows','Sentiment':'Optimistic, buying pressure dominant','Duration':'Typically 2–5 years','US Current':'S&P 500 near all-time highs (7,473)','Drivers':'Low rates, strong earnings, economic growth','Pasar Bullish':'Indonesian term — investors expecting price to rise (bull → charging upward)' },
    links:[{title:'Bull Market Explained',url:'https://www.investopedia.com/terms/b/bullmarket.asp'}],
    tags:['bull market','pasar naik','bullish','s&p 500 high','uptrend','optimism','rising prices'] }),

  makeNode({ id:'bear-market', label:'Bear Market / Pasar Bearish', category:'concepts', country:'BOTH', importance:7,
    description:'A bear market is a sustained decline of 20%+ from recent highs. Bear markets are driven by recession fears, rising rates, poor earnings, or crisis events. Indonesia\'s IHSG entered bear market territory in early 2026 after the January crash (-11.5% in 2 days, –14% YTD). Bear markets test investor conviction — DCA and buy-and-hold strategies typically perform best.',
    metadata:{ 'Definition':'20%+ price decline from recent highs','IHSG (May 2026)':'~6,162 — down ~14% YTD (bear territory)','US Bear Market':'2022 (rates rising rapidly)','Strategies':'DCA, buy-and-hold tend to work best','Psychology':'Fear dominant; hardest time to buy but often best time','Pasar Bearish':'Indonesian term — investors expecting price to fall (bear → clawing downward)' },
    links:[{title:'Bear Market Explained',url:'https://www.investopedia.com/terms/b/bearmarket.asp'}],
    tags:['bear market','pasar turun','bearish','ihsg crash','downtrend','recession','panic selling'] }),

  makeNode({ id:'liquidity', label:'Liquidity / Likuiditas', category:'concepts', country:'BOTH', importance:7,
    description:'Liquidity is the ease with which an asset can be converted to cash without significantly affecting its price. High liquidity (US Treasuries, large-cap stocks, IDX blue chips) means you can quickly buy/sell large amounts. Low liquidity (small-cap stocks, private equity, real estate) means selling takes time and may require accepting a lower price. Liquidity crises occur when everyone wants to sell simultaneously.',
    metadata:{ 'High Liquidity Examples':'US Treasuries, S&P 500 stocks, IDX LQ45 stocks','Low Liquidity Examples':'Small-cap stocks, private equity, real estate','Crisis Risk':'Liquidity crisis = market freezes (2008, March 2020)','Central Bank Role':'Fed and BI inject liquidity in crises','Indonesia Measure':'Trading volume and bid-ask spread on IDX' },
    links:[{title:'Liquidity Explained',url:'https://www.investopedia.com/terms/l/liquidity.asp'}],
    tags:['liquidity','likuiditas','bid ask spread','trading volume','liquid asset','illiquid','market depth'] }),

  makeNode({ id:'volatility', label:'Volatility / VIX', category:'concepts', country:'BOTH', importance:8,
    description:'Volatility measures the degree of price fluctuation of an asset over time. The VIX (CBOE Volatility Index) is the most famous volatility measure — called the "fear gauge" of the US market. High VIX = fear and uncertainty; low VIX = complacency. The IHSG\'s January 2026 crash saw extreme volatility. In investing, volatility is often used as a proxy for risk.',
    metadata:{ 'VIX':'CBOE Volatility Index (30-day implied volatility of S&P 500 options)','VIX Low (<15)':'Calm market','VIX High (>30)':'High fear/uncertainty','Standard Deviation':'Statistical measure of volatility','Beta':'Measures individual stock volatility relative to market','Indonesia Jan 2026':'IHSG extreme volatility — –11.5% in 2 days' },
    links:[{title:'CBOE VIX',url:'https://www.cboe.com/tradable_products/vix/'},{title:'VIX Data',url:'https://finance.yahoo.com/quote/%5EVIX/'}],
    tags:['volatility','vix','fear gauge','standard deviation','beta','risk measure','cboe','fear index'] }),

  makeNode({ id:'market-cap', label:'Market Capitalization', category:'concepts', country:'BOTH', importance:7,
    description:'Market capitalization (market cap) = share price × total shares outstanding. It represents the total market value of a company. Categories: Mega-cap (>$200B), Large-cap ($10B–$200B), Mid-cap ($2B–$10B), Small-cap ($300M–$2B), Micro-cap (<$300M). Larger cap generally = less volatile, more liquid. BCA (BBCA) is Indonesia\'s largest cap stock.',
    metadata:{ 'Formula':'Share Price × Total Shares Outstanding','Mega Cap (US)':'Apple, Microsoft, NVIDIA (>$2T each)','Large Cap (ID)':'BCA, BRI, Mandiri, Telkom','Market Cap Tiers':'Mega → Large → Mid → Small → Micro','Total US Market':'~$62 Trillion','Total Indonesia Market':'~$500 Billion (varies with IHSG)' },
    links:[{title:'Market Cap Explained',url:'https://www.investopedia.com/terms/m/marketcapitalization.asp'}],
    tags:['market cap','kapitalisasi pasar','large cap','small cap','mega cap','blue chip','company size'] }),

];
