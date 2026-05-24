/* ============================================================
   data/markets.js — Market nodes (16)
   US and Indonesian trading markets and exchanges
   ============================================================ */

window.NODES_MARKETS = [

  makeNode({ id:'us-equity-market', label:'US Equity Market', category:'markets', country:'US', importance:9,
    description:'The world\'s largest stock market (~$62 trillion market cap). Investors buy/sell ownership shares in publicly listed US companies. Key indices: S&P 500 (7,473 as of May 2026), Dow Jones (50,580), and NASDAQ Composite (26,344). It serves as the global benchmark for equity performance.',
    metadata:{ 'Market Cap':'~$62 Trillion','S&P 500 (May 2026)':'7,473','Dow Jones':'50,580','NASDAQ':'26,344','Trading Hours':'9:30am–4:00pm ET' },
    links:[{title:'NYSE Official',url:'https://www.nyse.com'},{title:'NASDAQ Official',url:'https://www.nasdaq.com'}],
    tags:['stocks','equities','s&p500','dow jones','nasdaq','shares'] }),

  makeNode({ id:'us-bond-market', label:'US Bond Market', category:'markets', country:'US', importance:9,
    description:'The US bond market (~$58 trillion outstanding) is where debt securities are traded. Investors lend money to governments or corporations in exchange for regular interest payments. US Treasuries are considered the world\'s safest assets. As of May 2026, the 10Y yield hit a 52-week high of ~4.13%.',
    metadata:{ 'Total Outstanding':'~$58 Trillion','10Y Treasury Yield':'~4.13% (52wk high)','20Y/30Y Yield':'~5.13%','Treasury Debt':'~$28 Trillion','Corporate Bonds':'~$11 Trillion' },
    links:[{title:'Treasury Dept',url:'https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service'}],
    tags:['bonds','treasuries','fixed income','debt','yield','coupon'] }),

  makeNode({ id:'us-money-market', label:'US Money Market', category:'markets', country:'US', importance:7,
    description:'Short-term debt instruments with maturities under one year. Used to manage short-term cash needs by governments, banks, and corporations. Instruments include T-Bills, commercial paper, and repos. Very low risk and low return — seen as near-cash equivalents.',
    metadata:{ 'Instruments':'T-Bills, Commercial Paper, Repos','Maturity':'< 1 Year','Risk Level':'Very Low','Return':'Slightly above savings rate' },
    links:[{title:'Federal Reserve',url:'https://www.federalreserve.gov'}],
    tags:['t-bills','commercial paper','repo','short-term','cash equivalent'] }),

  makeNode({ id:'us-derivatives-market', label:'US Derivatives Market', category:'markets', country:'US', importance:8,
    description:'Derivatives derive value from an underlying asset (stock, bond, currency, commodity). Used for hedging risk or speculation. Includes options, futures, forwards, and swaps. CME Group and CBOE are the major US exchanges. The notional value of global derivatives exceeds $600 trillion.',
    metadata:{ 'Major Exchanges':'CME Group, CBOE','Instruments':'Options, Futures, Swaps, Forwards','Regulation':'CFTC (primarily)','Use Cases':'Hedging, Speculation, Arbitrage' },
    links:[{title:'CME Group',url:'https://www.cmegroup.com'},{title:'CBOE',url:'https://www.cboe.com'}],
    tags:['options','futures','derivatives','hedging','swaps','cme','cboe'] }),

  makeNode({ id:'us-forex-market', label:'US Forex Market', category:'markets', country:'US', importance:7,
    description:'The foreign exchange market is where currencies are bought and sold. The US dollar (USD) is the world\'s reserve currency, accounting for ~88% of all forex transactions. The US forex market operates 24 hours/day, 5 days/week. Daily global forex turnover exceeds $7 trillion.',
    metadata:{ 'USD Share of FX':'~88% of transactions','Daily Global Volume':'$7+ Trillion','Market Type':'OTC (decentralized)','Major Pairs':'EUR/USD, USD/JPY, GBP/USD' },
    links:[{title:'BIS Forex Data',url:'https://www.bis.org/statistics/rpfx22.htm'}],
    tags:['forex','currency','exchange rate','usd','fx','currency pair'] }),

  makeNode({ id:'us-commodities-market', label:'US Commodities Market', category:'markets', country:'US', importance:7,
    description:'Physical goods (gold, oil, silver, grains) and their derivative contracts are traded here. CME Group operates NYMEX and COMEX. Commodity prices are key inflation drivers. In May 2026, energy prices have risen, contributing to elevated PCE inflation of ~2.9%.',
    metadata:{ 'Major Exchanges':'CME/NYMEX, COMEX','Key Commodities':'WTI Crude, Gold, Silver, Corn, Wheat','Regulation':'CFTC','Inflation Impact':'Major driver of CPI/PPI' },
    links:[{title:'CME Group',url:'https://www.cmegroup.com'}],
    tags:['gold','oil','commodities','crude','silver','grain','cme','nymex'] }),

  makeNode({ id:'us-crypto-market', label:'US Crypto Market', category:'markets', country:'US', importance:8,
    description:'Digital assets including Bitcoin, Ethereum, and stablecoins are traded in the US crypto market. Under dual SEC/CFTC regulation as of 2026 following the CLARITY Act. Bitcoin and Ethereum are classified as commodities under CFTC; securities-like tokens fall under SEC. Stablecoin volume grew 50% in 2025.',
    metadata:{ 'Regulation':'SEC (securities) + CFTC (commodities)','Key Law 2026':'CLARITY Act + GENIUS Act (stablecoins)','Bitcoin Regulator':'CFTC','Stablecoin Growth':'~50% in 2025' },
    links:[{title:'SEC Crypto Guidance',url:'https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets'},{title:'CLARITY Act',url:'https://www.lw.com/en/us-crypto-policy-tracker/regulatory-developments'}],
    tags:['bitcoin','ethereum','crypto','digital assets','defi','stablecoin','blockchain'] }),

  makeNode({ id:'us-real-estate-market', label:'US Real Estate Market', category:'markets', country:'US', importance:6,
    description:'Residential and commercial property market. REITs (Real Estate Investment Trusts) let retail investors access real estate without buying property directly. Closely linked to mortgage rates — as Fed rates stay elevated at 3.5–3.75%, mortgage rates remain high, pressuring housing affordability.',
    metadata:{ 'REIT Access':'Via stock exchange','Connection to Fed Rate':'High — mortgage rates track fed funds','Key Instrument':'REITs, MBS, CMBS','Residential vs Commercial':'Both sub-segments' },
    links:[{title:'NAREIT',url:'https://www.reit.com'}],
    tags:['real estate','reit','property','mortgage','housing','commercial'] }),

  makeNode({ id:'idx', label:'IDX / Bursa Efek Indonesia', category:'markets', country:'ID', importance:9,
    description:'Indonesia Stock Exchange (IDX / BEI), based in Jakarta, is Southeast Asia\'s second-largest exchange. Lists ~900+ companies. The benchmark IHSG (IDX Composite) sits at ~6,162 as of May 22, 2026, down 14% YoY after the historic January 2026 crash (-11.5% in two days, -$80B wiped). Facing potential MSCI reclassification from Emerging to Frontier Market.',
    metadata:{ 'IHSG (May 22 2026)':'6,162','Jan 2026 Crash':'–11.5% in 2 days, –$80B','Listed Companies':'~900+','Registered Investors':'19.1 million SIDs','Regulator':'OJK','Key Indices':'IHSG, LQ45, IDX30, IDX80' },
    links:[{title:'IDX Official',url:'https://www.idx.co.id'},{title:'IDX Stats',url:'https://sectors.app/indonesia'}],
    tags:['ihsg','jci','bursa','saham','indonesia','idx','bei','ihsg','lq45'] }),

  makeNode({ id:'id-bond-market', label:'Indonesia Bond Market', category:'markets', country:'ID', importance:8,
    description:'Indonesia\'s bond market includes government bonds (SBN) and corporate bonds (obligasi korporasi). Retail investors can buy ORI, SBR, Sukuk Ritel, and Sukuk Tabungan directly via online platforms like Bibit and Bareksa. ORI029 (Jan–Feb 2026) targeted Rp 25 trillion with fixed monthly coupons for 3-year and 6-year tenors.',
    metadata:{ 'Regulator':'OJK / Ministry of Finance','Government Bonds':'SBN (ORI, SBR, SR, ST)','Min Investment ORI':'Rp 1 million','ORI029 Target':'Rp 25 Trillion','Coupon':'Fixed, paid monthly' },
    links:[{title:'DJPPR SBN',url:'https://www.djppr.kemenkeu.go.id'},{title:'ORI Info',url:'https://jakartaglobe.id/business/indonesia-offers-new-retail-bonds-with-up-to-58-annual-returns'}],
    tags:['sbn','ori','obligasi','bond','sukuk','obligasi negara','surat utang'] }),

  makeNode({ id:'id-money-market', label:'Indonesia Money Market', category:'markets', country:'ID', importance:6,
    description:'Short-term liquidity market in Indonesia. Includes overnight interbank lending (PUAB), Bank Indonesia Certificates (SBI), and money market mutual funds (Reksa Dana Pasar Uang). Bank Indonesia uses this market to implement monetary policy and maintain rupiah liquidity. BI Rate now at 5.25%.',
    metadata:{ 'Instruments':'SBI, PUAB, SBDK, repo','BI Rate (May 2026)':'5.25%','Regulator':'Bank Indonesia','Key Function':'BI monetary policy transmission' },
    links:[{title:'Bank Indonesia',url:'https://www.bi.go.id'}],
    tags:['sbi','pasar uang','bi rate','money market','likuiditas','sertifikat bank indonesia'] }),

  makeNode({ id:'id-forex-market', label:'Indonesia Forex Market', category:'markets', country:'ID', importance:7,
    description:'Indonesia\'s foreign exchange market where the rupiah (IDR) is traded against major currencies. Bank Indonesia intervenes to stabilize the IDR. As of May 19, 2026, USD/IDR = Rp 17,700, after rupiah weakened 2.2% from end-April, prompting BI\'s surprise 50bps rate hike to 5.25%.',
    metadata:{ 'USD/IDR (May 2026)':'Rp 17,700','Weakening from Apr-end':'–2.2%','BI Role':'Active intervention','Trigger':'Global risk-off + Middle East tensions' },
    links:[{title:'Bank Indonesia FX',url:'https://www.bi.go.id/en/statistik/ekonomi-keuangan/seki/Default.aspx'}],
    tags:['rupiah','idr','usd/idr','forex','nilai tukar','devisa','kurs'] }),

  makeNode({ id:'id-crypto-market', label:'Indonesia Crypto Market', category:'markets', country:'ID', importance:7,
    description:'Indonesia has 14+ million crypto users. Crypto is legal to trade as a financial asset but cannot be used as payment (rupiah remains sole legal tender). OJK took over crypto regulation from BAPPEBTI in January 2025. OJK\'s late 2025 framework introduced crypto derivatives. Major platforms: Pintu, Indodax, Tokocrypto.',
    metadata:{ 'Crypto Users (Apr 2025)':'14.16 million','Regulator':'OJK (since Jan 2025)','Key Rule':'OJK Reg No. 27/2024 (amended 2025)','Legal Status':'Trade = legal; Payment = illegal','Derivatives':'Introduced late 2025' },
    links:[{title:'OJK Crypto Framework',url:'https://www.abnrlaw.com/news/indonesia-greenlights-crypto-derivatives-a-look-at-the-new-ojk-framework'},{title:'Crypto Regulation Overview',url:'https://www.lightspark.com/knowledge/is-crypto-legal-in-indonesia'}],
    tags:['kripto','bitcoin','ethereum','crypto','blockchain','aset digital','pintu','indodax'] }),

  makeNode({ id:'idxcarbon', label:'IDXCarbon', category:'markets', country:'ID', importance:5,
    description:'IDXCarbon is Indonesia\'s carbon credit exchange, launched by IDX in 2023. Companies buy and sell carbon credits to offset greenhouse gas emissions. Part of Indonesia\'s commitment to achieve Net Zero by 2060. Still a nascent market but important for ESG-focused investors and corporations needing carbon offsets.',
    metadata:{ 'Launched':'2023','Purpose':'Carbon credit trading','Net Zero Target':'Indonesia 2060','Asset Type':'Carbon credits (offset units)','ESG Connection':'Key for sustainability goals' },
    links:[{title:'IDX Carbon',url:'https://www.idx.co.id/en/products/idx-carbon/'}],
    tags:['carbon','esg','sustainability','net zero','emisi','karbon','green'] }),

  makeNode({ id:'nyse', label:'NYSE', category:'markets', country:'US', importance:9,
    description:'New York Stock Exchange, founded 1792, is the world\'s largest exchange by market cap (~$28 trillion). Located on Wall Street, New York. Operated by NYSE Group, a subsidiary of Intercontinental Exchange (ICE). Home to Berkshire Hathaway, JPMorgan, Walmart, and most Fortune 500 companies.',
    metadata:{ 'Founded':'1792','Market Cap':'~$28 Trillion','Listed Companies':'2,400+','Parent':'Intercontinental Exchange (ICE)','Trading Hours':'9:30am–4:00pm ET','Location':'Wall Street, New York City' },
    links:[{title:'NYSE Official',url:'https://www.nyse.com'}],
    tags:['nyse','new york stock exchange','wall street','ice','listed companies','s&p500'] }),

  makeNode({ id:'nasdaq-exchange', label:'NASDAQ', category:'markets', country:'US', importance:9,
    description:'NASDAQ (National Association of Securities Dealers Automated Quotations), founded 1971, is the world\'s second-largest exchange (~$23 trillion market cap). The first fully electronic stock exchange. Known as the tech exchange — home to Apple, Microsoft, Amazon, Google, Nvidia, and Meta. The NASDAQ Composite closed at 26,344 in May 2026.',
    metadata:{ 'Founded':'1971','Market Cap':'~$23 Trillion','Listed Companies':'3,300+','NASDAQ Composite (May 2026)':'26,344','Trading Hours':'9:30am–4:00pm ET','Known For':'Technology stocks' },
    links:[{title:'NASDAQ Official',url:'https://www.nasdaq.com'}],
    tags:['nasdaq','tech stocks','apple','microsoft','nvidia','meta','amazon','google','faang'] }),

];
