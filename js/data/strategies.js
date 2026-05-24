/* ============================================================
   data/strategies.js — Investment strategy nodes (18)
   ============================================================ */

window.NODES_STRATEGIES = [

  makeNode({ id:'value-investing', label:'Value Investing', category:'strategies', country:'BOTH', importance:9,
    description:'Value investing involves buying stocks priced below their intrinsic value (what the business is truly worth) and holding until the market recognizes that value. Pioneered by Benjamin Graham; Warren Buffett is the most famous practitioner. Key metrics: P/E ratio, P/B ratio, free cash flow, and earnings yield. In 2026, value stocks have outperformed growth as interest rates stayed elevated.',
    metadata:{ 'Pioneer':'Benjamin Graham (1930s)','Famous Practitioner':'Warren Buffett (Berkshire Hathaway)','Key Metrics':'P/E ratio, P/B ratio, FCF, earnings yield','Mindset':'"Margin of Safety" — buy at a discount to intrinsic value','2026 Context':'Value outperforming as rates stayed elevated','Indonesia Application':'BBCA, TLKM at reasonable valuations vs earnings' },
    links:[{title:'Warren Buffett Letters',url:'https://www.berkshirehathaway.com/letters/letters.html'}],
    tags:['value investing','warren buffett','benjamin graham','intrinsic value','margin of safety','pe ratio','fundamental analysis'] }),

  makeNode({ id:'growth-investing', label:'Growth Investing', category:'strategies', country:'BOTH', importance:8,
    description:'Growth investing targets companies with above-average revenue/earnings growth potential, even if current P/E ratios are high. These companies reinvest profits back into growth rather than paying dividends. NVIDIA, Tesla, and Amazon in the US; digital banks like Bank Jago or e-commerce like GoTo in Indonesia are growth plays. In May 2026, Nvidia\'s strong earnings supported growth stocks.',
    metadata:{ 'Focus':'High revenue/earnings growth companies','P/E Ratios':'Often high (investors pay premium for future growth)','Dividends':'Usually none (profit reinvested)','Risk':'Higher valuation risk; harder in high-rate environments','US Examples':'Nvidia, Tesla, Amazon','Indonesia Examples':'Bank Jago, GoTo, Merdeka Copper Gold','2026 Context':'Nvidia earnings surge in May 2026 drove Nasdaq higher' },
    links:[{title:'Growth Investing',url:'https://www.investopedia.com/terms/g/growthinvesting.asp'}],
    tags:['growth investing','growth stock','high pe','reinvest','nvidia','tesla','revenue growth'] }),

  makeNode({ id:'index-investing', label:'Index / Passive Investing', category:'strategies', country:'BOTH', importance:9,
    description:'Index (passive) investing means buying a fund that tracks a broad market index (S&P 500, Total Market, MSCI World) rather than trying to pick individual stocks. Studies show 90%+ of active managers underperform their benchmark index over 15 years after fees. Ultra-low costs (0.02–0.1%). In Indonesia, platforms like Bibit offer index-linked reksa dana. The best strategy for most beginners.',
    metadata:{ 'Core Principle':'"Don\'t beat the market — be the market"','Cost':'0.02%–0.1% expense ratio','Research Backing':'~90% of active managers underperform over 15 years','US Instruments':'S&P 500 ETF (VOO/SPY), Total Market (VTI)','Indonesia':'Reksa Dana Indeks tracking IHSG/LQ45','Best For':'Beginners, busy investors, long-term wealth building' },
    links:[{title:'Vanguard Index Investing',url:'https://www.vanguard.com'},{title:'SPIVA Report',url:'https://www.spglobal.com/spdji/en/research-insights/spiva/'}],
    tags:['index investing','passive investing','etf','vanguard','spy','voo','vti','reksa dana indeks','efisien'] }),

  makeNode({ id:'dividend-investing', label:'Dividend Investing', category:'strategies', country:'BOTH', importance:8,
    description:'Dividend investing focuses on building a portfolio of stocks and bonds that pay regular cash income (dividends/coupons). The goal is sustainable passive income. Key metrics: dividend yield, payout ratio, dividend growth history. Dividend aristocrats (US) are companies that raised dividends for 25+ consecutive years. In 2026, rotation to dividend stocks accelerated as growth stocks became expensive.',
    metadata:{ 'Income Source':'Dividends from stocks + coupon from bonds','US Dividend Aristocrats':'Companies with 25+ years of rising dividends (Coca-Cola, JNJ, PG)','Dividend Yield':'Annual dividend ÷ stock price','Payout Ratio':'% of earnings paid as dividends (sustainable <60%)','2026 Trend':'Rotation to dividend stocks as rates stay elevated','Indonesia':'BBCA, BBRI, TLKM known for dividends' },
    links:[{title:'Dividend Aristocrats',url:'https://www.ssga.com/us/en/intermediary/insights/the-value-of-dividend-growth-strategies-to-portfolios-today-and-beyond'}],
    tags:['dividend investing','passive income','dividend yield','dividend aristocrat','payout ratio','income investing','bbca dividend'] }),

  makeNode({ id:'dca', label:'Dollar-Cost Averaging (DCA) / Investasi Berkala', category:'strategies', country:'BOTH', importance:9,
    description:'Dollar-Cost Averaging (DCA) means investing a fixed amount at regular intervals (weekly/monthly) regardless of market conditions. When prices are low, your fixed amount buys more shares; when high, fewer. Over time this averages out your cost per share. The most beginner-friendly and psychologically comfortable strategy. Known in Indonesia as "investasi berkala" — Bibit and Bareksa make this very easy.',
    metadata:{ 'Method':'Invest fixed amount regularly (weekly/monthly)','Key Benefit':'Removes timing risk; no need to predict market','Best For':'Beginners, salary earners, long-term goals','Indonesia':'Bibit "Investasi Berkala" feature — automatic recurring investment','Example':'Invest Rp 500,000/month in reksa dana saham every month','Behavior Benefit':'Removes emotional buying/selling decisions' },
    links:[{title:'DCA Strategy',url:'https://www.mycapitally.com/blog/dividend-investing-strategies-for-beginners'}],
    tags:['dca','dollar cost averaging','investasi berkala','recurring investment','market timing','systematic','bibit'] }),

  makeNode({ id:'buy-and-hold', label:'Buy and Hold / Beli dan Tahan', category:'strategies', country:'BOTH', importance:8,
    description:'Buy and Hold means purchasing quality assets (stocks, ETFs, bonds) and holding them for the long term (5–20+ years), ignoring short-term market fluctuations. Warren Buffett\'s famous quote: "Our favorite holding period is forever." Historically, the S&P 500 has returned ~10%/year over long periods. Minimizes transaction costs and taxes.',
    metadata:{ 'Philosophy':'Buy quality + ignore short-term noise','Famous Proponent':'Warren Buffett','Historical US Return':'S&P 500 ~10%/year (long term average)','Tax Benefit':'Long-term capital gains taxed at lower rate','Key Risk':'Must endure drawdowns without selling','Holding Period':'5+ years ideal (10–20 for full compounding benefit)' },
    links:[{title:'Long-term Investing',url:'https://www.thelandgeek.com/blog-beginner-investing-2026/'}],
    tags:['buy and hold','beli dan tahan','long term','warren buffett','s&p500','compounding','patience'] }),

  makeNode({ id:'swing-trading', label:'Swing Trading', category:'strategies', country:'BOTH', importance:6,
    description:'Swing trading holds positions for days to weeks, capitalizing on short-term price "swings" within a trend. Uses technical analysis (charts, indicators like RSI, MACD, Bollinger Bands) to time entries/exits. More active than buy-and-hold but less intense than day trading. Requires disciplined risk management (stop-loss orders). Available on all platforms for IDX and US stocks.',
    metadata:{ 'Holding Period':'Days to weeks (2–14 days typical)','Tools Used':'Technical analysis: RSI, MACD, support/resistance, Bollinger Bands','Risk Management':'Stop-loss orders essential','Tax':'Short-term capital gains (taxed higher in US)','Indonesia':'Popular on IDX via Stockbit/Ajaib','Key Risk':'Market gaps and sudden news events' },
    links:[{title:'Swing Trading Basics',url:'https://www.investopedia.com/terms/s/swingtrading.asp'}],
    tags:['swing trading','technical analysis','rsi','macd','bollinger band','short term trading','chart'] }),

  makeNode({ id:'day-trading', label:'Day Trading', category:'strategies', country:'BOTH', importance:6,
    description:'Day trading involves buying and selling the same security within a single trading day. No overnight positions. Requires high expertise, real-time data, and tight risk management. 90%+ of day traders lose money over 1 year. In the US, "Pattern Day Trader" rules require $25,000 minimum account if making 4+ day trades in 5 days. In Indonesia, IDX operates 9:00am–3:30pm (MYT).',
    metadata:{ 'Holding Period':'Intraday — no overnight positions','Success Rate':'~90% of day traders lose money over 1 year','US Rule':'Pattern Day Trader (PDT): $25K minimum if 4+ day trades/week','Indonesia':'IDX sessions: Pre-opening 8:45am, Regular 9:00am–3:30pm, Negotiation until 4pm','Tools':'Level 2 quotes, real-time data, direct-access broker','Psychology':'High stress; needs iron discipline' },
    links:[{title:'Day Trading Stats',url:'https://www.finra.org/investors/highlights/day-trading'}],
    tags:['day trading','intraday','day trader','scalping','technical analysis','pdt rule','high risk'] }),

  makeNode({ id:'momentum-investing', label:'Momentum Investing', category:'strategies', country:'BOTH', importance:6,
    description:'Momentum investing buys assets that have been rising (strong recent performance) and sells assets that have been falling. Based on the observation that trending assets tend to continue trending. Involves regularly rotating into the strongest performers. Research by Fama and French showed momentum as a persistent market anomaly. Dangerous in sharp market reversals.',
    metadata:{ 'Core Idea':'"Trend is your friend" — buy winners, avoid losers','Evidence':'Fama-French research confirms persistent momentum factor','Lookback Period':'Typically 3–12 months of past performance','Risk':'Sharp reversals wipe out momentum gains quickly','Tools':'Relative strength, rate of change (ROC)','US Application':'Sector momentum ETFs (iShares MSCI USA Momentum Factor)' },
    links:[{title:'Momentum Factor',url:'https://www.investopedia.com/terms/m/momentum_investing.asp'}],
    tags:['momentum investing','trend following','relative strength','factor investing','winner rotation','mrs'] }),

  makeNode({ id:'income-investing', label:'Income Investing', category:'strategies', country:'BOTH', importance:7,
    description:'Income investing builds a portfolio focused on generating regular cash income: bond coupons, stock dividends, REIT distributions, and preferred stock dividends. The goal is predictable passive income rather than capital gains. Popular among retirees and those seeking financial independence. In Indonesia, government bonds (ORI, SBR) with monthly coupon payments are popular income instruments.',
    metadata:{ 'Income Sources':'Bond coupons, stock dividends, REIT distributions, savings bond','US Examples':'Dividend stocks, T-Bonds, REITs, preferred stock','Indonesia Examples':'ORI (monthly coupon), SBR, Reksa Dana Pendapatan Tetap','Key Metric':'Yield on cost (annual income ÷ purchase price)','Best For':'Retirees, FIRE seekers, capital preservation focus','Risk':'Inflation erodes fixed income; companies can cut dividends' },
    links:[{title:'Income Investing Guide',url:'https://www.merrydiv.com/dividend-investing-for-beginners'}],
    tags:['income investing','passive income','coupon','dividend','ori','sbr','reit','yield','bond'] }),

  makeNode({ id:'contrarian-investing', label:'Contrarian Investing', category:'strategies', country:'BOTH', importance:6,
    description:'Contrarian investing means going against the prevailing market sentiment — buying when others are fearful and selling when others are greedy (as Warren Buffett says: "Be fearful when others are greedy, and greedy when others are fearful"). The January 2026 IHSG crash was a potential contrarian opportunity. Requires strong conviction and patience as the crowd takes time to turn.',
    metadata:{ 'Core Idea':'Buy when others panic sell; sell when others are euphoric','Famous Quote':'Warren Buffett: "Be fearful when others are greedy and greedy when others are fearful"','Key Tool':'Sentiment indicators (VIX, put/call ratio, surveys)','2026 Example':'IHSG crash in Jan 2026 (-11.5%) was a potential entry for contrarians','Risk':'Catching falling knives — assets can keep falling','Patience Required':'High — can take months/years for reversal' },
    links:[{title:'Contrarian Investing',url:'https://www.investopedia.com/terms/c/contrarian.asp'}],
    tags:['contrarian investing','fear and greed','buy the dip','warren buffett','market crash','sentiment'] }),

  makeNode({ id:'esg-investing', label:'ESG Investing', category:'strategies', country:'BOTH', importance:7,
    description:'ESG investing considers Environmental, Social, and Governance factors alongside financial returns. E: carbon footprint, pollution, climate. S: labor practices, human rights, community. G: board independence, executive pay, transparency. Growing globally — BlackRock is a major ESG proponent. IDXCarbon and OJK\'s green bond framework connect ESG to Indonesia\'s markets. ESG funds often have slightly higher fees.',
    metadata:{ 'ESG Components':'E (Environmental), S (Social), G (Governance)','US ESG AUM':'$30+ Trillion (2023 estimate)','Key Providers':'MSCI ESG Ratings, Sustainalytics','Indonesia Connection':'IDXCarbon, OJK green bond framework, ESG index','Critics Say':'ESG can be "greenwashing"; performance mixed','2026 Trend':'Growing demand from institutional and millennial investors' },
    links:[{title:'ESG Investing',url:'https://www.investopedia.com/terms/e/environmental-social-and-governance-esg-criteria.asp'},{title:'IDXCarbon',url:'https://www.idx.co.id/en/products/idx-carbon/'}],
    tags:['esg','environmental social governance','green investing','sustainability','greenwashing','idxcarbon','blackrock'] }),

  makeNode({ id:'sector-rotation', label:'Sector Rotation', category:'strategies', country:'BOTH', importance:6,
    description:'Sector rotation involves shifting portfolio allocation between market sectors based on the economic cycle. Example: early recovery → favor Financials and Consumer Discretionary; late cycle → favor Utilities and Healthcare; recession → favor Consumer Staples and Healthcare. Requires macro awareness. In 2026, US investors rotated from tech to value/defensive sectors as rates stayed high.',
    metadata:{ 'Economic Cycle Phases':'Expansion, Peak, Contraction, Trough','US Sectors (11 GICS)':'Technology, Healthcare, Financials, Energy, Consumer Staples, Consumer Discretionary, Industrials, Utilities, Materials, Real Estate, Communication Services','IDX Sectors':'Industrial, Finance, Consumption, Infrastructure, Agriculture, Mining, Property','2026 US Rotation':'Tech → Defensive/Value as rates elevated' },
    links:[{title:'Sector Rotation Guide',url:'https://www.investopedia.com/terms/s/sectorrotation.asp'}],
    tags:['sector rotation','economic cycle','technology sector','defensive sector','gics','utilities','healthcare'] }),

  makeNode({ id:'short-selling', label:'Short Selling', category:'strategies', country:'US', importance:7,
    description:'Short selling means borrowing shares and immediately selling them, hoping to buy them back later at a lower price (profit from declining prices). High risk — theoretically unlimited loss if the stock rises. Requires margin account. Famous short sellers: Michael Burry (shorted 2008 MBS), Hindenburg Research. In Indonesia, short selling on IDX is strictly regulated.',
    metadata:{ 'Mechanism':'Borrow shares → sell → buy back cheaper → return → keep difference','Risk':'Unlimited (stock can rise infinitely)','Margin':'Requires margin account','Famous Shorts':'Michael Burry (2008 MBS), GameStop short squeeze (2021)','Indonesia':'Very limited short selling on IDX (tight OJK regulation)','Short Squeeze':'If stock rises sharply, shorts are forced to buy → amplifies rise (GameStop 2021)' },
    links:[{title:'Short Selling Explained',url:'https://www.investopedia.com/terms/s/shortselling.asp'}],
    tags:['short selling','shorting','bear trade','margin','short squeeze','gamestop','michael burry'] }),

  makeNode({ id:'hedging', label:'Hedging / Lindung Nilai', category:'strategies', country:'BOTH', importance:7,
    description:'Hedging reduces risk by taking an offsetting position to an existing exposure. Examples: buying put options to protect a stock portfolio, using currency swaps to protect against rupiah depreciation, buying gold as inflation hedge. It\'s like insurance — you pay a cost (premium) to reduce potential losses. Bank Indonesia itself uses currency hedging instruments to manage IDR exposure.',
    metadata:{ 'Purpose':'Reduce or eliminate a specific risk','Common Tools':'Put options, futures, swaps, inverse ETFs, gold','Cost':'Premium (options) or spread (swaps/forwards)','Example 1':'US investor holds stocks + buys S&P 500 put options = protected against market crash','Example 2':'Indonesian exporter uses USD/IDR forward to lock in exchange rate','Indonesia':'OJK regulates hedging instruments on IDX' },
    links:[{title:'Hedging Strategies',url:'https://www.fidelity.com/learning-center/trading-investing/what-are-derivatives'}],
    tags:['hedging','lindung nilai','put option','risk management','insurance','currency hedge','portfolio protection'] }),

  makeNode({ id:'asset-allocation', label:'Asset Allocation / Alokasi Aset', category:'strategies', country:'BOTH', importance:8,
    description:'Asset allocation divides investments among different asset classes (stocks, bonds, cash, real estate, commodities) based on goals, time horizon, and risk tolerance. The classic "60/40" portfolio (60% stocks, 40% bonds) is a benchmark. Modern allocation adds alternatives (real estate, crypto). In 2026, elevated bond yields make bonds more attractive relative to stocks vs recent years.',
    metadata:{ 'Classic Model':'60% stocks / 40% bonds','Risk Levels':'Conservative (more bonds) → Aggressive (more stocks)','Time Horizon':'Younger = more stocks; older = more bonds','2026 Context':'High bond yields make 40% bond allocation more attractive','Indonesia Application':'Mix of IDX saham + SBN + reksa dana + emas','Rebalancing':'Restore target allocation periodically (e.g., annually)' },
    links:[{title:'Asset Allocation Guide',url:'https://www.ishares.com/us/insights/fed-outlook-2026-interest-rate-forecast'}],
    tags:['asset allocation','alokasi aset','60 40 portfolio','diversification','bonds stocks','risk tolerance'] }),

  makeNode({ id:'portfolio-rebalancing', label:'Portfolio Rebalancing', category:'strategies', country:'BOTH', importance:7,
    description:'Portfolio rebalancing restores the target asset allocation after market movements have shifted the actual weights. Example: a 60/40 portfolio shifts to 70/30 after stocks rally — sell some stocks and buy bonds to return to 60/40. Done annually or when a threshold is breached (e.g., any asset class drifts 5%+ from target). Forces disciplined "sell high, buy low" behavior.',
    metadata:{ 'Purpose':'Restore target asset allocation after market drift','Frequency':'Annual (time-based) or when 5%+ threshold exceeded','Benefit':'Enforces disciplined selling of outperformers and buying underperformers','Tax Note':'Rebalancing can trigger taxable events (US)','Indonesia':'Available in Bibit via automated portfolio rebalancing','Key Tool':'Sharpe ratio, alpha, beta used to evaluate portfolio quality after rebalancing' },
    links:[{title:'Rebalancing Guide',url:'https://www.investopedia.com/terms/r/rebalancing.asp'}],
    tags:['rebalancing','portfolio management','alokasi aset','sell high buy low','threshold','annual review'] }),

  makeNode({ id:'diversification', label:'Diversification / Diversifikasi', category:'strategies', country:'BOTH', importance:8,
    description:'Diversification ("don\'t put all eggs in one basket") reduces risk by spreading investments across different assets, sectors, geographies, and asset classes. Correlated assets move together (fail to diversify risk). Uncorrelated assets (e.g., bonds + stocks, gold + stocks) reduce portfolio volatility. Modern Portfolio Theory (MPT) by Harry Markowitz shows the "efficient frontier" of optimal risk/return via diversification.',
    metadata:{ 'Core Principle':'"Don\'t put all eggs in one basket"','Founder':'Harry Markowitz (Modern Portfolio Theory, 1952)','Key Concept':'Correlation — lower correlation = more diversification benefit','Tools':'Index funds, multi-asset funds, global ETFs','Indonesia Application':'IDX stocks + SBN + Reksa Dana + Emas + USD savings','Risk Reduction':'Systematic (market) risk remains; diversification removes unsystematic (individual) risk' },
    links:[{title:'MPT & Diversification',url:'https://www.investopedia.com/terms/m/modernportfoliotheory.asp'}],
    tags:['diversification','diversifikasi','modern portfolio theory','correlation','risk reduction','markowitz','eggs basket'] }),

];
