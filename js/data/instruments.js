/* ============================================================
   data/instruments.js — All instrument nodes (54)
   Equities, Fixed Income, Funds, Derivatives, Alternatives
   ============================================================ */

window.NODES_INSTRUMENTS = [

  /* ── Equities (8) ──────────────────────────────────────── */
  makeNode({ id:'common-stock', label:'Common Stock / Saham', category:'instruments', country:'BOTH', importance:9,
    description:'A share of common stock represents partial ownership of a company. Shareholders may receive dividends (profit distributions) and vote on corporate decisions. Stock prices fluctuate based on company performance, economic conditions, and market sentiment. In the US, stocks are the most popular investment vehicle. In Indonesia (IDX), stocks are called "saham".',
    metadata:{ 'Traded On':'NYSE, NASDAQ (US) / IDX (Indonesia)','Return':'Capital gains + dividends','Risk':'Medium-High','Indonesian Term':'Saham Biasa','Minimum (IDX)':'1 lot = 100 shares' },
    links:[{title:'Investor.gov Stocks',url:'https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks'}],
    tags:['stock','saham','equity','shares','dividend','capital gain','ownership'] }),

  makeNode({ id:'preferred-stock', label:'Preferred Stock', category:'instruments', country:'BOTH', importance:6,
    description:'Preferred stock is a hybrid between common stock and bonds. Preferred shareholders receive fixed dividends before common shareholders and have priority in liquidation. However, they typically don\'t have voting rights. Often issued by financial companies and utilities.',
    metadata:{ 'Dividend':'Fixed (before common stock)','Voting Rights':'Usually none','Priority in Bankruptcy':'Above common, below bondholders','Risk':'Lower than common stock, higher than bonds','Indonesian Term':'Saham Preferen' },
    links:[{title:'Preferred Stock Explained',url:'https://www.investopedia.com/terms/p/preferredstock.asp'}],
    tags:['preferred stock','saham preferen','fixed dividend','hybrid','priority'] }),

  makeNode({ id:'adr', label:'ADR', category:'instruments', country:'US', importance:6,
    description:'American Depositary Receipt (ADR) allows US investors to buy shares of foreign companies on US exchanges. For example, Alibaba (BABA) or Samsung trade on NYSE/NASDAQ as ADRs. Each ADR represents one or more shares of the foreign company. Denominated in USD, making international investing easier for US investors.',
    metadata:{ 'Purpose':'Trade foreign shares in USD on US exchanges','Examples':'Alibaba (BABA), Toyota (TM), Samsung','Currency':'USD (underlying is foreign currency)','Dividends':'Paid in USD after foreign currency conversion','Regulator':'SEC' },
    links:[{title:'SEC ADR Info',url:'https://www.sec.gov/investor/alerts/adr-bulletin.pdf'}],
    tags:['adr','american depositary receipt','foreign stocks','international investing','usd'] }),

  makeNode({ id:'ipo', label:'IPO / Penawaran Umum Perdana', category:'instruments', country:'BOTH', importance:7,
    description:'An Initial Public Offering (IPO) is when a private company first sells shares to the public on a stock exchange. IPOs allow companies to raise capital. In May 2026, SpaceX filed for a major IPO, attracting huge investor attention. In Indonesia, IPOs on IDX are called "Penawaran Umum Perdana (IPO)" and regulated by OJK.',
    metadata:{ 'US Notable (May 2026)':'SpaceX IPO Filing','Indonesia IPOs':'Regulated by OJK','Lock-up Period':'Usually 180 days for insiders','Underwriters':'Investment banks lead the process','Risk':'High volatility in early trading' },
    links:[{title:'SpaceX IPO (May 2026)',url:'https://www.thestreet.com/stock-market-today/stock-market-today-nasdaq-dow-jones-sp-500-updates-may-20-2026'}],
    tags:['ipo','penawaran umum perdana','initial public offering','new listing','go public'] }),

  makeNode({ id:'rights-issue', label:'Rights Issue / HMETD', category:'instruments', country:'BOTH', importance:5,
    description:'A rights issue allows existing shareholders to purchase additional shares at a discounted price before they are offered to the public. Companies use this to raise more capital without taking on debt. In Indonesia, it\'s called "Hak Memesan Efek Terlebih Dahulu (HMETD)." If you don\'t exercise your rights, your ownership stake is diluted.',
    metadata:{ 'Purpose':'Companies raise additional capital','Price':'Usually below current market price','Risk for Holders':'Dilution if rights not exercised','Indonesian Term':'HMETD','Subscription Period':'Usually 5 business days' },
    links:[{title:'Rights Issue Basics',url:'https://www.investopedia.com/terms/r/rightsoffering.asp'}],
    tags:['rights issue','hmetd','hak memesan efek','dilution','capital raise','saham baru'] }),

  makeNode({ id:'stock-warrant', label:'Stock Warrant', category:'instruments', country:'BOTH', importance:5,
    description:'A warrant gives the holder the right (but not obligation) to buy a company\'s stock at a set price (exercise price) before an expiration date. Similar to call options but issued directly by the company and typically longer-dated. Common in Indonesia as sweeteners bundled with bonds or new share issuances.',
    metadata:{ 'Right':'Buy shares at exercise price before expiry','Issuer':'The company itself (unlike options)','Duration':'Usually 1–5 years','Common Use (Indonesia)':'Bundled with IPO/rights issue','Traded On':'IDX (in Indonesia)' },
    links:[{title:'Warrants Explained',url:'https://www.investopedia.com/terms/w/warrant.asp'}],
    tags:['warrant','waran','hak beli saham','exercise price','derivative','call warrant'] }),

  makeNode({ id:'blue-chip', label:'Blue Chip Stock', category:'instruments', country:'BOTH', importance:7,
    description:'Blue chip stocks are shares in large, well-established, financially sound companies with a long track record. They tend to be stable, pay dividends, and hold up better in downturns. In the US: Apple, Microsoft, JPMorgan. In Indonesia (IDX): BCA (BBCA), BRI (BBRI), Mandiri (BMRI), Telkom (TLKM). Indonesia\'s LQ45 and IDX30 indices track blue chips.',
    metadata:{ 'US Examples':'Apple (AAPL), Microsoft (MSFT), JPMorgan (JPM)','Indonesia Examples':'BBCA, BBRI, BMRI, TLKM','Indonesia Index':'LQ45, IDX30, IDX80','Characteristics':'Large cap, stable, dividend-paying','Risk':'Lower than growth/small-cap stocks' },
    links:[{title:'IDX Blue Chips',url:'https://www.indonesia-investments.com/tag/item31?tag=978'}],
    tags:['blue chip','lq45','idx30','large cap','stable','dividend','bbca','bbri','bmri'] }),

  makeNode({ id:'etf', label:'ETF', category:'instruments', country:'BOTH', importance:9,
    description:'An Exchange-Traded Fund (ETF) is a basket of securities (stocks, bonds, commodities) that trades on an exchange like a single stock. ETFs typically track an index (e.g., S&P 500 via SPY or VOO). They offer diversification, low fees, and easy trading. BlackRock\'s iShares and Vanguard dominate the US ETF market. IDX has ETFs tracking IHSG indices.',
    metadata:{ 'US Largest ETF':'SPDR S&P 500 ETF (SPY) - ~$600B AUM','US 2nd Largest':'Vanguard S&P 500 ETF (VOO)','Indonesia':'IDX ETFs available but small market','Fee':'Typically 0.03%–0.5% expense ratio','Traded':'Like stocks, intraday on exchange' },
    links:[{title:'iShares ETFs',url:'https://www.ishares.com'},{title:'Vanguard ETFs',url:'https://www.vanguard.com/us/portal/site/etfs'}],
    tags:['etf','exchange traded fund','index fund','spy','voo','diversification','low cost','reksa dana etf'] }),

  /* ── Fixed Income — US (10) ─────────────────────────────── */
  makeNode({ id:'t-bills', label:'US Treasury Bills', category:'instruments', country:'US', importance:8,
    description:'Treasury Bills (T-Bills) are short-term US government debt with maturities from 4 weeks to 52 weeks. Sold at a discount; at maturity you receive face value. The safest short-term investment — backed by the full faith and credit of the US government. T-Bill yields are the baseline "risk-free rate" for all financial calculations.',
    metadata:{ 'Maturity':'4-week, 13-week, 26-week, 52-week','Return Type':'Discount (buy low, receive face value)','Risk':'Near-zero (US government backed)','Tax':'Federal tax; exempt from state/local tax','Use in Finance':'Risk-free rate benchmark' },
    links:[{title:'TreasuryDirect',url:'https://www.treasurydirect.gov'}],
    tags:['t-bills','treasury bills','risk free rate','short term','government debt','safe haven'] }),

  makeNode({ id:'t-notes', label:'US Treasury Notes', category:'instruments', country:'US', importance:8,
    description:'Treasury Notes have maturities of 2, 3, 5, 7, or 10 years. They pay a fixed coupon (interest) twice per year. The 10-Year T-Note yield is the most-watched bond in the world — it benchmarks mortgage rates, corporate bond spreads, and global capital costs. As of May 2026, the 10Y yield hit ~4.13%, a 52-week high.',
    metadata:{ 'Maturity':'2, 3, 5, 7, 10 years','Coupon':'Fixed, paid semi-annually','10Y Yield (May 2026)':'~4.13% (52-week high)','Key Benchmark':'Mortgage rates, corporate bond pricing','Auction':'Regular Treasury auctions' },
    links:[{title:'TreasuryDirect',url:'https://www.treasurydirect.gov'}],
    tags:['treasury notes','10 year treasury','t-notes','yield','benchmark','fixed income','coupon'] }),

  makeNode({ id:'t-bonds', label:'US Treasury Bonds', category:'instruments', country:'US', importance:8,
    description:'Treasury Bonds have the longest maturities: 20 or 30 years. They pay semi-annual coupons. The 30-year "long bond" is used by pension funds and insurance companies to match long-term liabilities. As of May 2026, the 30Y yield is ~5.13%, the highest since 2007, driven by persistent inflation and tariff concerns.',
    metadata:{ 'Maturity':'20 or 30 years','Coupon':'Fixed, paid semi-annually','30Y Yield (May 2026)':'~5.13% (highest since 2007)','Main Buyers':'Pension funds, insurance companies, foreign governments','Risk':'Duration risk (sensitive to interest rate changes)' },
    links:[{title:'TreasuryDirect',url:'https://www.treasurydirect.gov'}],
    tags:['treasury bonds','30 year treasury','long bond','t-bonds','duration risk','pension fund'] }),

  makeNode({ id:'tips', label:'TIPS', category:'instruments', country:'US', importance:7,
    description:'Treasury Inflation-Protected Securities (TIPS) are US government bonds whose principal is adjusted with inflation (CPI). If inflation rises, your principal rises — protecting your purchasing power. Real yields on TIPS (after inflation) are a key market signal. Useful for investors worried about inflation eroding bond returns.',
    metadata:{ 'Full Name':'Treasury Inflation-Protected Securities','Inflation Protection':'Principal adjusts with CPI','Maturity':'5, 10, 30 years','Real Yield':'Nominal yield minus expected inflation','Coupon':'Fixed %, but applied to CPI-adjusted principal' },
    links:[{title:'TIPS Info',url:'https://www.treasurydirect.gov/marketable-securities/tips/'}],
    tags:['tips','inflation protected','real yield','cpi','treasury','inflation hedge'] }),

  makeNode({ id:'corporate-bond', label:'Corporate Bond', category:'instruments', country:'US', importance:8,
    description:'Corporate bonds are debt issued by companies. Investors lend money to the company and receive regular coupon payments plus principal at maturity. Higher yield than Treasuries, but carry credit risk (company may default). Rated by agencies: Moody\'s, S&P, Fitch. Investment-grade (BBB- and above) vs high-yield (below BBB-).',
    metadata:{ 'US Market Size':'~$11 Trillion outstanding','Rating Agencies':'Moody\'s, S&P, Fitch','Investment Grade':'BBB- and above (S&P)','High Yield':'Below BBB- (junk bonds)','Key Metric':'Credit spread over Treasuries' },
    links:[{title:'FINRA Bond Info',url:'https://www.finra.org/investors/investing/investment-products/bonds'}],
    tags:['corporate bond','credit risk','investment grade','high yield','coupon','debt','obligasi korporasi'] }),

  makeNode({ id:'municipal-bond', label:'Municipal Bond', category:'instruments', country:'US', importance:6,
    description:'Municipal bonds (munis) are issued by US state and local governments to fund public projects (schools, roads, hospitals). The major benefit: interest income is typically exempt from federal taxes (and often state/local taxes for residents). Popular with high-income investors in high tax brackets.',
    metadata:{ 'Issuers':'US state/local governments','Tax Benefit':'Federal tax-exempt interest (usually)','US Market':'~$4.2 Trillion outstanding','Risk':'Generally low, but varies by issuer','Types':'General Obligation (GO) and Revenue bonds' },
    links:[{title:'Municipal Bond Info',url:'https://www.investopedia.com/terms/m/municipalbond.asp'}],
    tags:['municipal bond','munis','tax exempt','state bond','local government','general obligation'] }),

  makeNode({ id:'agency-bond', label:'Agency Bond', category:'instruments', country:'US', importance:6,
    description:'Agency bonds are issued by US government-sponsored enterprises (GSEs) like Fannie Mae (FNMA) and Freddie Mac (FHLMC). They fund the mortgage market by buying mortgages from banks and packaging them into securities. Not fully guaranteed by the US government (except Ginnie Mae), but considered very safe. Slightly higher yield than Treasuries.',
    metadata:{ 'Major Issuers':'Fannie Mae (FNMA), Freddie Mac (FHLMC), FHLB, Ginnie Mae','Purpose':'Fund the US mortgage market','US Outstanding':'~Hundreds of billions','Guarantee':'Implicit (Fannie/Freddie) or explicit (Ginnie Mae)','Connection':'Closely tied to mortgage-backed securities' },
    links:[{title:'Agency Bonds',url:'https://www.investopedia.com/terms/a/agencybonds.asp'}],
    tags:['agency bond','fannie mae','freddie mac','gse','mortgage market','government sponsored'] }),

  makeNode({ id:'mbs', label:'MBS (Mortgage-Backed Securities)', category:'instruments', country:'US', importance:7,
    description:'Mortgage-Backed Securities are bonds backed by a pool of home loans. When homeowners make mortgage payments, that cash flows to MBS investors. Created the "securitization" market. MBS played a central role in the 2008 financial crisis when subprime mortgages packaged into MBS turned toxic. Now more heavily regulated.',
    metadata:{ 'US Outstanding':'~$12.5 Trillion','Cash Flow Source':'Homeowner mortgage payments','Issuers':'Fannie Mae, Freddie Mac, Ginnie Mae, private banks','Risk':'Prepayment risk + credit risk','2008 Crisis':'Subprime MBS triggered global financial crisis' },
    links:[{title:'MBS Explained',url:'https://www.investopedia.com/terms/m/mbs.asp'}],
    tags:['mbs','mortgage backed securities','securitization','housing','fannie mae','2008 crisis','prepayment'] }),

  makeNode({ id:'high-yield-bond', label:'High-Yield Bond (Junk Bond)', category:'instruments', country:'US', importance:7,
    description:'High-yield bonds (also called "junk bonds") are corporate bonds rated below investment grade (below BBB- by S&P). They pay higher interest to compensate for higher default risk. Popular among investors seeking higher income. Companies that issue junk bonds are typically smaller, financially weaker, or highly leveraged (e.g., leveraged buyout companies).',
    metadata:{ 'Rating':'Below BBB- (S&P) / Below Baa3 (Moody\'s)','Also Called':'Junk bonds','Yield Premium':'Typically 3–7% above Treasuries (credit spread)','Risk':'Higher default risk','Market':'US ~$1.5 Trillion outstanding' },
    links:[{title:'High Yield Bonds',url:'https://www.investopedia.com/terms/h/high_yield_bond.asp'}],
    tags:['junk bond','high yield','credit risk','speculative grade','leveraged finance','spread'] }),

  makeNode({ id:'investment-grade-bond', label:'Investment-Grade Bond', category:'instruments', country:'US', importance:7,
    description:'Investment-grade bonds are corporate bonds rated BBB-/Baa3 or above by major rating agencies. These are companies with strong balance sheets and lower default probability. They form the backbone of most institutional bond portfolios (pension funds, insurance companies). Lower yield than junk bonds but significantly safer.',
    metadata:{ 'Rating':'BBB-/Baa3 and above','Examples':'Apple, Microsoft, JPMorgan bonds','Typical Yield':'0.5–2% above Treasuries','Main Buyers':'Pension funds, insurance companies, bond ETFs','Market':'US ~$9 Trillion outstanding' },
    links:[{title:'Investment Grade Bonds',url:'https://www.investopedia.com/terms/i/investmentgrade.asp'}],
    tags:['investment grade','ig bond','bbb','safe bond','corporate debt','pension fund'] }),

  /* ── Fixed Income — Indonesia (8) ──────────────────────── */
  makeNode({ id:'sbn', label:'SBN (Surat Berharga Negara)', category:'instruments', country:'ID', importance:9,
    description:'Surat Berharga Negara (SBN) is the umbrella term for all Indonesian government bonds. Issued by the Ministry of Finance (via DJPPR) to finance the state budget (APBN). Divided into conventional (SUN) and sharia-compliant (SBSN). Retail SBN types (ORI, SBR, SR, ST) are designed specifically for individual retail investors.',
    metadata:{ 'Full Name':'Surat Berharga Negara','Category':'Conventional (SUN) + Sharia (SBSN)','Retail Types':'ORI, SBR, SR (Sukuk Ritel), ST (Sukuk Tabungan)','Guarantee':'100% guaranteed by the state by law','Minimum':'Rp 1 million (retail)','Issuer':'Ministry of Finance / DJPPR' },
    links:[{title:'SBN Info',url:'https://www.djppr.kemenkeu.go.id'},{title:'Retail Bonds',url:'https://www.jenius.com/en/faq/tabungan-investasi/surat-berharga-negara-sbn'}],
    tags:['sbn','surat berharga negara','obligasi negara','government bond','indonesia','ori','sbr','sukuk'] }),

  makeNode({ id:'ori', label:'ORI (Obligasi Negara Ritel)', category:'instruments', country:'ID', importance:9,
    description:'ORI (Obligasi Negara Ritel) is the most popular conventional retail government bond in Indonesia. Offers fixed monthly coupons, principal guaranteed by the state, and can be traded on the secondary market after the first coupon payment. The latest series, ORI029 (Jan–Feb 2026), targeted Rp 25 trillion with 3-year and 6-year tenors. Minimum investment: Rp 1 million.',
    metadata:{ 'Latest Series':'ORI029 (Jan–Feb 2026)','ORI029 Target':'Rp 25 Trillion','Tenors':'ORI029T3 (3yr) + ORI029T6 (6yr)','Coupon':'Fixed, paid monthly','Min Investment':'Rp 1 million','Secondary Market':'Tradable after 1 coupon payment','Guarantee':'100% state-guaranteed' },
    links:[{title:'ORI029 Info',url:'https://jakartaglobe.id/business/indonesia-offers-new-retail-bonds-with-up-to-58-annual-returns'},{title:'ORI vs Sukuk',url:'https://aei.or.id/en/press-release/understanding-ori-and-sukri-in-the-capital-market'}],
    tags:['ori','obligasi negara ritel','ori029','bond retail','kupon','fixed rate','safe investment','investasi'] }),

  makeNode({ id:'sbr', label:'SBR (Savings Bond Ritel)', category:'instruments', country:'ID', importance:7,
    description:'SBR (Savings Bond Ritel) is a government savings bond for Indonesian retail investors. Unlike ORI, SBR is not tradable on the secondary market (non-tradable) — it\'s like a savings deposit. It offers floating coupon rates tied to the BI Rate, providing some protection against rising interest rates. Guaranteed by the state.',
    metadata:{ 'Type':'Government savings bond (non-tradable)','Coupon':'Floating — based on BI Rate + spread','Min Investment':'Rp 1 million','Max Investment':'Rp 5 billion per SID','Secondary Market':'Non-tradable (held to maturity or early redemption)','Guarantee':'State-guaranteed' },
    links:[{title:'SBR Info',url:'https://www.djppr.kemenkeu.go.id'}],
    tags:['sbr','savings bond ritel','floating rate','bi rate','obligasi tabungan','non-tradable'] }),

  makeNode({ id:'sukuk-ritel', label:'SR (Sukuk Ritel)', category:'instruments', country:'ID', importance:8,
    description:'SR (Sukuk Ritel) is Indonesia\'s most popular sharia-compliant retail government bond. Based on the ijarah (lease) or wakalah (agency) structure — investors "lease" an underlying government asset. Pays fixed monthly imbalan (yield) instead of "interest" (as interest is prohibited in Islamic finance). Tradable on secondary market.',
    metadata:{ 'Sharia Structure':'Ijarah or Wakalah (not interest-based)','Return':'Fixed monthly imbalan (yield)','Min Investment':'Rp 1 million','Secondary Market':'Tradable after first imbalan','Guarantee':'State-guaranteed','Indonesia\'s Majority':'Muslim majority country makes this very popular' },
    links:[{title:'Sukuk Ritel Info',url:'https://aei.or.id/en/press-release/understanding-ori-and-sukri-in-the-capital-market'}],
    tags:['sukuk ritel','sr','obligasi syariah','sharia bond','ijarah','imbalan','investasi syariah'] }),

  makeNode({ id:'sukuk-tabungan', label:'ST (Sukuk Tabungan)', category:'instruments', country:'ID', importance:6,
    description:'ST (Sukuk Tabungan) is Indonesia\'s sharia-compliant government savings bond — the Islamic equivalent of SBR. Non-tradable (savings product). Floating return tied to the BI Rate. Targeted at long-term savers seeking sharia-compliant instruments with government guarantee. Very accessible — min Rp 1 million.',
    metadata:{ 'Type':'Sharia savings bond (non-tradable)','Return':'Floating imbalan based on BI Rate','Min Investment':'Rp 1 million','Max Investment':'Rp 5 billion','Sharia':'Yes (no interest, wakalah structure)','Secondary Market':'Non-tradable' },
    links:[{title:'Sukuk Tabungan',url:'https://www.djppr.kemenkeu.go.id'}],
    tags:['sukuk tabungan','st','tabungan syariah','sharia savings','imbalan','floating rate','non tradable'] }),

  makeNode({ id:'fr-bonds', label:'FR Bonds (Surat Utang Negara)', category:'instruments', country:'ID', importance:7,
    description:'FR series bonds (Fixed Rate SUN) are conventional Indonesian government bonds for institutional and retail investors. Fixed coupon rate paid semi-annually. The backbone of Indonesia\'s government bond market. Foreign investors hold a significant portion, making the FR bond market sensitive to global risk sentiment and rupiah movements.',
    metadata:{ 'Series':'FR (Fixed Rate) + VR (Variable Rate) SUN','Coupon':'Fixed, paid semi-annually','Buyers':'Banks, insurance, pension funds, foreign investors','Foreign Ownership':'~20–25% of domestic bonds','Sensitivity':'Highly sensitive to rupiah and global yields' },
    links:[{title:'Indonesia Bonds',url:'https://tradingeconomics.com/indonesia/government-bond-yield'}],
    tags:['fr bonds','surat utang negara','sun','fixed rate','government bond','indonesia','obligasi pemerintah'] }),

  makeNode({ id:'id-corporate-bond', label:'Obligasi Korporasi', category:'instruments', country:'ID', importance:7,
    description:'Corporate bonds (obligasi korporasi) listed on the IDX. Companies issue these to raise capital. Regulated by OJK. Rating by PEFINDO and Fitch Ratings Indonesia. Yields are higher than SBN to compensate for credit risk. Banks (BCA, Mandiri) and infrastructure companies (Jasa Marga, PLN) are major issuers.',
    metadata:{ 'Regulator':'OJK','Rating Agencies':'PEFINDO, Fitch Indonesia','Traded On':'IDX bond market','Major Issuers':'Banks, state-owned enterprises (BUMN)','Yield':'Higher than SBN (credit spread)','Risk':'Credit risk of the issuing company' },
    links:[{title:'IDX Bonds',url:'https://www.idx.co.id/en/market-data/bonds/'}],
    tags:['obligasi korporasi','corporate bond','pefindo','idx','kredit','perusahaan','bumn'] }),

  makeNode({ id:'sukuk-korporasi', label:'Sukuk Korporasi', category:'instruments', country:'ID', importance:6,
    description:'Corporate sukuk (sukuk korporasi) are sharia-compliant corporate bonds issued by Indonesian companies. Based on mudharabah, musyarakah, or ijarah structures. As Indonesia has the world\'s largest Muslim population, the sukuk market has grown significantly. Companies issuing sukuk include BCA Finance, Astra Sedaya Finance, and Merdeka Copper Gold.',
    metadata:{ 'Sharia Structures':'Mudharabah, Musyarakah, Ijarah','Regulator':'OJK','Key Feature':'No interest — profit sharing or asset-backed','Indonesia Context':'World\'s largest sukuk issuer (government + corporate)','Growing Market':'ESG and Islamic finance overlap driving growth' },
    links:[{title:'Sukuk Korporasi',url:'https://www.idx.co.id/en/market-data/bonds/'}],
    tags:['sukuk korporasi','sukuk','syariah','mudharabah','ijarah','islamic finance','sharia'] }),

  /* ── Funds (10) ─────────────────────────────────────────── */
  makeNode({ id:'index-fund', label:'Index Fund', category:'instruments', country:'BOTH', importance:9,
    description:'An index fund passively tracks a market index (e.g., S&P 500) by holding all or most of its constituent stocks. No active management — just mirrors the index. Pioneered by Vanguard\'s John Bogle in 1975. Studies show most actively managed funds underperform their index over 10+ years. Ultra-low fees (0.02–0.1% expense ratio).',
    metadata:{ 'Strategy':'Passive — track an index','Expense Ratio':'0.02%–0.1% (very low)','Benchmark Examples':'S&P 500, Total Market, MSCI World','Best For':'Long-term investors, beginners','Inventor':'John Bogle (Vanguard, 1975)','Key Stat':'~90% of active funds underperform over 15 years' },
    links:[{title:'Vanguard Index Funds',url:'https://www.vanguard.com'}],
    tags:['index fund','passive investing','s&p500','low cost','vanguard','john bogle','reksa dana indeks'] }),

  makeNode({ id:'active-mutual-fund', label:'Active Mutual Fund', category:'instruments', country:'BOTH', importance:7,
    description:'Actively managed mutual funds employ professional fund managers who pick securities aiming to beat a benchmark index. Higher fees (0.5–1.5%) than index funds. In Indonesia, mutual funds are called "Reksa Dana." The mutual fund industry had Rp 679 trillion in AUM as of 2025, a record high.',
    metadata:{ 'Management':'Professional fund managers','Expense Ratio':'0.5%–1.5% (higher than index funds)','Indonesia AUM (2025)':'Rp 679 Trillion (record)','NAV':'Net Asset Value (priced daily in Indonesia; per share in US)','Regulator (ID)':'OJK + Investment Manager license' },
    links:[{title:'Reksa Dana Info',url:'https://www.bareksa.com/reksadana'}],
    tags:['mutual fund','reksa dana','active management','fund manager','nav','nab'] }),

  makeNode({ id:'reksa-dana-saham', label:'Reksa Dana Saham', category:'instruments', country:'ID', importance:8,
    description:'Reksa Dana Saham (equity mutual fund) invests at least 80% of its assets in stocks listed on the IDX. Highest potential return among mutual fund types, but also highest risk. Suitable for investors with a long time horizon (5+ years). Performance tracked by Bareksa Barometer. Available on platforms like Bibit and Bareksa.',
    metadata:{ 'Asset Allocation':'≥80% in IDX stocks','Risk Level':'High','Time Horizon':'5+ years recommended','Return Type':'Capital gain + dividends','Regulator':'OJK','Available on':'Bibit, Bareksa, Ajaib, Stockbit' },
    links:[{title:'Top Reksa Dana Saham',url:'https://www.bareksa.com/berita/reksa-dana/2026-05-06/daftar-top-5-reksa-dana-terbaik-versi-bareksa-barometer-kinerja-april-referensi-mei-2026'}],
    tags:['reksa dana saham','equity fund','reksa dana','manajer investasi','bibit','bareksa','saham'] }),

  makeNode({ id:'reksa-dana-campuran', label:'Reksa Dana Campuran', category:'instruments', country:'ID', importance:7,
    description:'Reksa Dana Campuran (balanced/mixed mutual fund) invests in a combination of stocks, bonds, and money market instruments. The allocation is flexible, allowing fund managers to shift between assets based on market conditions. Moderate risk and return — suitable for investors with 3–5 year time horizons.',
    metadata:{ 'Asset Mix':'Stocks + bonds + money market (flexible)','Risk Level':'Medium','Time Horizon':'3–5 years','Advantage':'Flexible allocation, manager can shift with market','Regulator':'OJK' },
    links:[{title:'Reksa Dana Info',url:'https://www.mandirisekuritas.co.id/id/siaran-pers-artikel/artikel/Mengenal-Perbedaan-Saham-Obligasi-dan-Reksa-Dana-Mana-yang-Cocok'}],
    tags:['reksa dana campuran','balanced fund','mixed fund','campuran','reksa dana','manajer investasi'] }),

  makeNode({ id:'reksa-dana-pendapatan-tetap', label:'Reksa Dana Pendapatan Tetap', category:'instruments', country:'ID', importance:7,
    description:'Reksa Dana Pendapatan Tetap (fixed income mutual fund) invests at least 80% in bonds (government and corporate). Lower risk than equity funds, but higher than money market funds. Suitable for investors seeking regular income with moderate risk, time horizon 1–3 years. Returns are affected by interest rate movements.',
    metadata:{ 'Asset Allocation':'≥80% in bonds (SBN + corporate)','Risk Level':'Low-Medium','Time Horizon':'1–3 years','Sensitivity':'Interest rate risk (when rates rise, bond prices fall)','Regulator':'OJK' },
    links:[{title:'Fixed Income Reksa Dana',url:'https://www.mandirisekuritas.co.id/id/siaran-pers-artikel/artikel/Mengenal-Perbedaan-Saham-Obligasi-dan-Reksa-Dana-Mana-yang-Cocok'}],
    tags:['reksa dana pendapatan tetap','fixed income fund','obligasi','reksa dana','low risk','bonds'] }),

  makeNode({ id:'reksa-dana-pasar-uang', label:'Reksa Dana Pasar Uang', category:'instruments', country:'ID', importance:7,
    description:'Reksa Dana Pasar Uang (money market mutual fund) invests 100% in money market instruments with maturities under 1 year (deposits, SBI, short-term bonds). Lowest risk and lowest return. Liquid — can be redeemed in 1–2 business days. Suitable for emergency funds or short-term parking of cash. Return slightly above bank deposits.',
    metadata:{ 'Asset Allocation':'100% money market instruments (<1 year maturity)','Risk Level':'Very Low','Liquidity':'1–2 business days for redemption','Return':'Slightly above bank deposit rates','Best For':'Emergency fund, short-term cash','Min Investment':'Rp 10,000 (on platforms like Bibit)' },
    links:[{title:'Reksa Dana Pasar Uang',url:'https://bibit.id/reksadana'}],
    tags:['reksa dana pasar uang','money market fund','likuid','risiko rendah','darurat','short term'] }),

  makeNode({ id:'reit', label:'REIT (Real Estate Investment Trust)', category:'instruments', country:'US', importance:7,
    description:'REITs are companies that own income-producing real estate (offices, malls, apartments, data centers, hospitals). Trade on stock exchanges. Required by law to distribute 90%+ of taxable income as dividends. Allow retail investors to access real estate returns without the hassle of directly owning property.',
    metadata:{ 'Dividend Requirement':'Distribute 90%+ of taxable income','Asset Types':'Offices, retail, residential, data centers, healthcare','US REIT Market':'~$1.3 Trillion total market cap','Tax Treatment':'Dividends taxed as ordinary income','Key REITs':'Prologis (industrial), Equinix (data centers), American Tower (cell towers)' },
    links:[{title:'NAREIT',url:'https://www.reit.com'}],
    tags:['reit','real estate','dividend','property','passive income','data center','warehouse'] }),

  makeNode({ id:'dire', label:'DIRE (Dana Investasi Real Estat)', category:'instruments', country:'ID', importance:5,
    description:'DIRE (Dana Investasi Real Estat) is Indonesia\'s equivalent of a REIT. Traded on the IDX, it allows investors to access real estate returns (rental income) through exchange-listed instruments. The DIRE market is still small in Indonesia compared to the US REIT market, but growing with OJK\'s support for capital market deepening.',
    metadata:{ 'Full Name':'Dana Investasi Real Estat','Traded On':'IDX','Equivalent':'US REIT','Dividend':'Must distribute most of income','Regulator':'OJK','Status':'Small but growing market in Indonesia' },
    links:[{title:'IDX DIRE',url:'https://www.idx.co.id'}],
    tags:['dire','dana investasi real estat','reit indonesia','properti','idx','real estate'] }),

  makeNode({ id:'hedge-fund', label:'Hedge Fund', category:'instruments', country:'US', importance:7,
    description:'Hedge funds are private investment partnerships for sophisticated/wealthy investors. They use aggressive strategies: leverage, short selling, derivatives, arbitrage, and alternative assets. Not available to ordinary retail investors. Known for complex strategies and high fees ("2 and 20" — 2% management + 20% performance fee). Famous hedge funds: Bridgewater, Citadel, Two Sigma, Renaissance Technologies.',
    metadata:{ 'Fee Structure':'"2 and 20" (2% mgmt + 20% performance)','Access':'Accredited investors only (US: >$1M net worth or $200K income)','Strategies':'Long/short, arbitrage, macro, quant, event-driven','Examples':'Bridgewater, Citadel, Renaissance','Regulation':'Less regulated than mutual funds' },
    links:[{title:'Hedge Funds Explained',url:'https://www.investopedia.com/terms/h/hedgefund.asp'}],
    tags:['hedge fund','alternative investment','accredited investor','short selling','leverage','citadel','bridgewater'] }),

  makeNode({ id:'money-market-fund', label:'Money Market Fund', category:'instruments', country:'US', importance:6,
    description:'US money market funds invest in short-term, highly liquid instruments: T-Bills, commercial paper, repos. Designed to maintain a stable $1 NAV. Used by investors as a near-cash alternative. As of May 2026, money market fund yields remain attractive (4–5%) given the Fed\'s elevated 3.5–3.75% funds rate.',
    metadata:{ 'NAV Target':'$1.00 per share (stable)','Instruments':'T-Bills, commercial paper, repos','Yield (May 2026)':'~4–5% (tracks Fed Funds Rate)','Regulation':'SEC Rule 2a-7','Risk':'Near-zero; not FDIC insured but very safe' },
    links:[{title:'SEC Money Market Rules',url:'https://www.sec.gov'}],
    tags:['money market fund','cash equivalent','t-bills','commercial paper','stable nav','near cash'] }),

  /* ── Derivatives (8) ────────────────────────────────────── */
  makeNode({ id:'call-option', label:'Call Option', category:'instruments', country:'US', importance:8,
    description:'A call option gives the buyer the right (but NOT obligation) to buy 100 shares of a stock at the strike price before expiration. Buyers pay a premium. If the stock rises above the strike price, the call option becomes profitable. Used for leverage (control more shares with less money) or hedging.',
    metadata:{ 'Right':'Buy 100 shares at strike price','Premium':'Cost to buy the option','Profit Condition':'Stock price > strike price (for buyers)','Max Loss for Buyer':'Premium paid','Leverage':'Control 100 shares with a fraction of the cost','Traded On':'CBOE, NASDAQ Options' },
    links:[{title:'FINRA Options',url:'https://www.finra.org/investors/investing/investment-products/options'}],
    tags:['call option','options','strike price','premium','leverage','bullish','cboe'] }),

  makeNode({ id:'put-option', label:'Put Option', category:'instruments', country:'US', importance:8,
    description:'A put option gives the buyer the right to SELL 100 shares at the strike price before expiration. Buyers profit when the stock price falls below the strike price. Used to hedge against stock price declines ("portfolio insurance") or to speculate on downward moves.',
    metadata:{ 'Right':'Sell 100 shares at strike price','Profit Condition':'Stock price < strike price (for buyers)','Use as Hedge':'Buying puts protects against stock decline','Max Loss for Buyer':'Premium paid','Strategy':'Protective put = own stock + buy put (downside protection)','Traded On':'CBOE, NASDAQ Options' },
    links:[{title:'FINRA Options',url:'https://www.finra.org/investors/investing/investment-products/options'}],
    tags:['put option','options','hedge','bearish','portfolio insurance','strike price','downside protection'] }),

  makeNode({ id:'futures-contract', label:'Futures Contract', category:'instruments', country:'BOTH', importance:8,
    description:'A futures contract is a standardized agreement to buy or sell an asset at a predetermined price on a future date. Traded on exchanges (CME in the US). Used by farmers to lock in crop prices, airlines to hedge fuel costs, and investors to speculate. Both parties are obligated — unlike options where the buyer has a choice.',
    metadata:{ 'Obligation':'Both parties must fulfill the contract (unlike options)','Standardized':'Exchange-listed (CME, CBOE)','Uses':'Hedging, speculation, arbitrage','Margin Requirement':'Small % of contract value (leverage)','Examples':'S&P 500 futures (/ES), WTI Crude Oil futures (/CL), Gold futures (/GC)','Indonesia':'IDX Futures (KBIE/IDX Futures)' },
    links:[{title:'CME Futures',url:'https://www.cmegroup.com'},{title:'Futures Explained',url:'https://analystprep.com/study-notes/frm/part-1/financial-markets-and-products/introduction-options-futures-and-other-derivatives/'}],
    tags:['futures','futures contract','hedging','cme','leverage','commodity futures','index futures'] }),

  makeNode({ id:'forward-contract', label:'Forward Contract', category:'instruments', country:'BOTH', importance:6,
    description:'A forward contract is a customized agreement between two parties to buy/sell an asset at a set price on a future date. Unlike futures, forwards are OTC (not exchange-traded) and customized. Widely used in forex (FX forwards) to hedge currency risk. Indonesian exporters use USD/IDR forwards to lock in exchange rates.',
    metadata:{ 'Market':'OTC (not exchange-traded)','Customization':'Flexible — amount, date, asset can be customized','Counterparty Risk':'Higher than futures (no clearing house)','Common Use':'FX forwards (currency hedging)','Indonesia':'Exporters use USD/IDR forwards to hedge rupiah risk' },
    links:[{title:'Forward Contracts',url:'https://www.investopedia.com/terms/f/forwardcontract.asp'}],
    tags:['forward contract','otc','fx forward','currency hedge','customized','bilateral'] }),

  makeNode({ id:'interest-rate-swap', label:'Interest Rate Swap', category:'instruments', country:'BOTH', importance:7,
    description:'An interest rate swap is an agreement where two parties exchange interest payment streams — typically one pays fixed rate and the other pays floating rate (e.g., SOFR or BI JIBOR). Companies use swaps to convert floating-rate debt to fixed (or vice versa). The most widely traded derivative globally by notional value.',
    metadata:{ 'Structure':'Fixed vs floating interest payments exchanged','Key Rate (US)':'SOFR (replaced LIBOR in 2023)','Key Rate (ID)':'JIBOR or BI Repo Rate','Purpose':'Convert fixed debt to floating (or vice versa)','Market':'OTC; massive global market ($300T+ notional)','Regulator':'CFTC (US), OJK (ID)' },
    links:[{title:'Interest Rate Swaps',url:'https://www.investopedia.com/terms/i/interestrateswap.asp'}],
    tags:['interest rate swap','irs','fixed floating','sofr','jibor','libor','derivative','hedging'] }),

  makeNode({ id:'currency-swap', label:'Currency Swap', category:'instruments', country:'BOTH', importance:6,
    description:'A currency swap exchanges principal and interest payments in one currency for equivalent amounts in another currency. Used by multinational companies and central banks. Bank Indonesia has bilateral currency swap arrangements (BSA) with key central banks (Federal Reserve, Bank of Japan, People\'s Bank of China) to access liquidity in times of rupiah stress.',
    metadata:{ 'Purpose':'Exchange cash flows in different currencies','Users':'Multinationals, central banks','BI Swap Lines':'With Fed, BoJ, PBoC, other central banks','Benefit':'Access foreign currency without open market risk','Indonesia':'BSA (Bilateral Swap Arrangement) with 8+ central banks' },
    links:[{title:'Currency Swaps',url:'https://www.investopedia.com/terms/c/currencyswap.asp'}],
    tags:['currency swap','fx swap','bilateral swap','bank indonesia','bsa','cross currency','hedging'] }),

  makeNode({ id:'cds', label:'CDS (Credit Default Swap)', category:'instruments', country:'US', importance:7,
    description:'A Credit Default Swap (CDS) is insurance against a bond defaulting. The CDS buyer pays regular premiums to the seller; if the underlying company/government defaults, the seller pays the face value. Used to hedge credit risk or speculate on creditworthiness. CDS played a major role in the 2008 financial crisis (AIG\'s CDS exposure collapsed).',
    metadata:{ 'Function':'Insurance against bond default','Buyer\'s Cost':'Regular premium payments (like insurance)','Seller\'s Obligation':'Pay if default occurs','Famous Failure':'AIG\'s CDS book (2008 financial crisis)','Sovereign CDS':'Also for country default risk (e.g., Indonesia sovereign CDS)','Regulation':'CFTC (US)' },
    links:[{title:'CDS Explained',url:'https://www.investopedia.com/terms/c/creditdefaultswap.asp'}],
    tags:['cds','credit default swap','default risk','insurance','aig','2008 crisis','sovereign risk'] }),

  makeNode({ id:'structured-product', label:'Structured Product', category:'instruments', country:'BOTH', importance:5,
    description:'Structured products are pre-packaged investments that combine a traditional instrument (bond) with a derivative component. Examples: principal-protected notes (guarantee return of principal + some upside), reverse convertibles (high coupon but risk of converting to stock). Sold to retail investors by banks; often complex and opaque.',
    metadata:{ 'Components':'Typically bond + derivative (option)','Example':'Principal-protected note: get 100% principal back + 50% of S&P 500 upside','Risk':'Often complex; embedded costs may be high','Suitability':'Usually for sophisticated investors','Indonesia':'Offered by banks, regulated by OJK' },
    links:[{title:'Structured Products',url:'https://www.investopedia.com/terms/s/structuredproduct.asp'}],
    tags:['structured product','principal protected','derivative','bank product','complex','note'] }),

  /* ── Alternative Investments (10) ──────────────────────── */
  makeNode({ id:'bitcoin', label:'Bitcoin (BTC)', category:'instruments', country:'BOTH', importance:9,
    description:'Bitcoin is the world\'s first and largest cryptocurrency by market cap. Created in 2009 by the pseudonymous Satoshi Nakamoto. Fixed supply of 21 million BTC. In the US, Bitcoin is classified as a commodity under CFTC regulation. CME offers Bitcoin futures. In Indonesia, it\'s a legal tradable asset regulated by OJK. As of May 2026, Bitcoin remains the dominant crypto asset.',
    metadata:{ 'Created':'2009 (Satoshi Nakamoto)','Max Supply':'21 million BTC','US Regulation':'Commodity (CFTC)','Indonesia':'Legal digital asset (OJK)','CME Futures':'Yes','4th Halving':'April 2024 (supply cut in half every ~4 years)','Use':'Store of value, speculative, payment' },
    links:[{title:'Bitcoin.org',url:'https://bitcoin.org'},{title:'US Crypto Regulation',url:'https://www.lightspark.com/knowledge/is-crypto-legal-in-usa'}],
    tags:['bitcoin','btc','cryptocurrency','crypto','satoshi','digital gold','cftc','halving'] }),

  makeNode({ id:'ethereum', label:'Ethereum (ETH)', category:'instruments', country:'BOTH', importance:8,
    description:'Ethereum is the world\'s second-largest cryptocurrency and the leading blockchain for smart contracts and decentralized applications (dApps). Powers DeFi (decentralized finance) and NFTs. In the US, classified as a commodity after the PoS transition ("Merge" in 2022). In Indonesia, legal digital asset under OJK. CME offers ETH futures.',
    metadata:{ 'Created':'2015 (Vitalik Buterin)','Consensus':'Proof of Stake (since "Merge" 2022)','Key Uses':'Smart contracts, DeFi, NFTs, Layer 2s','US Regulation':'Commodity (CFTC, post-Merge)','Indonesia':'Legal digital asset (OJK)','Gas Fees':'Transaction fees paid in ETH' },
    links:[{title:'Ethereum.org',url:'https://ethereum.org'}],
    tags:['ethereum','eth','smart contract','defi','nft','proof of stake','blockchain','vitalik'] }),

  makeNode({ id:'stablecoin', label:'Stablecoin (USDT/USDC)', category:'instruments', country:'BOTH', importance:8,
    description:'Stablecoins are cryptocurrencies pegged to stable assets (typically USD). The most popular: Tether (USDT) and USD Coin (USDC). Used for trading without converting to fiat, remittances, and DeFi protocols. The US GENIUS Act (2026) establishes a full regulatory framework for stablecoins. In Indonesia, stablecoins are regulated by OJK. Stablecoin market cap grew ~50% in 2025.',
    metadata:{ 'Most Popular':'USDT (Tether), USDC (Circle)','Peg':'1:1 to USD (most common)','US Regulation':'GENIUS Act (2026) — full regulatory framework by Jul 2026','Indonesia':'OJK regulated','Market Cap Growth':'~50% in 2025','Use Cases':'Trading, DeFi, cross-border remittance' },
    links:[{title:'GENIUS Act',url:'https://finance.yahoo.com/news/top-us-crypto-bills-watch-100215687.html'}],
    tags:['stablecoin','usdt','usdc','tether','stable','dollar peg','genius act','defi','remittance'] }),

  makeNode({ id:'defi', label:'DeFi (Decentralized Finance)', category:'instruments', country:'BOTH', importance:7,
    description:'DeFi (Decentralized Finance) refers to financial services built on blockchain (primarily Ethereum) without banks or intermediaries. Users can lend, borrow, trade, and earn yield directly via smart contracts. Protocols: Uniswap (decentralized exchange), Aave/Compound (lending), Curve (stablecoin swaps). High risk but high potential return. DeFi TVL (Total Value Locked) has grown significantly in 2025–2026.',
    metadata:{ 'Powered By':'Ethereum and other blockchains','Key Protocols':'Uniswap (DEX), Aave/Compound (lending), MakerDAO (stablecoin)','TVL':'Hundreds of billions (growing)','Risk':'Smart contract bugs, rug pulls, regulatory','Access':'Anyone with a crypto wallet','DeFi vs CeFi':'No bank, no KYC required (on-chain)' },
    links:[{title:'DeFi Explained',url:'https://www.investopedia.com/terms/d/decentralized-finance-defi.asp'}],
    tags:['defi','decentralized finance','uniswap','aave','smart contract','yield farming','liquidity pool','ethereum'] }),

  makeNode({ id:'nft', label:'NFT', category:'instruments', country:'BOTH', importance:5,
    description:'Non-Fungible Tokens (NFTs) are unique digital assets recorded on a blockchain. Unlike Bitcoin or ETH (fungible), each NFT is one-of-a-kind. Used for digital art, gaming, music, and collectibles. NFT market boomed 2021–2022 and collapsed 80–90% in 2023–2024. As of 2026, NFT utility evolves into gaming, RWA tokenization, and identity.',
    metadata:{ 'Technology':'ERC-721 standard on Ethereum (mainly)','Boom/Bust':'2021–22 boom, 2023–24 crash (–80–90%)','2026 Evolution':'Gaming, Real-World Asset (RWA) tokenization','Famous':'Bored Ape Yacht Club, CryptoPunks','Utility':'Digital art, gaming items, membership, identity' },
    links:[{title:'NFT Overview',url:'https://www.investopedia.com/terms/n/nonfungible-token-nft.asp'}],
    tags:['nft','non fungible token','digital art','blockchain','gaming','collectible','rwa'] }),

  makeNode({ id:'gold', label:'Gold / Emas', category:'instruments', country:'BOTH', importance:8,
    description:'Gold is the world\'s premier safe-haven asset and inflation hedge. Traded as spot gold, futures (COMEX), gold ETFs (GLD, IAU), and physical gold. In Indonesia, gold is extremely popular — PT Antam and Pegadaian sell physical gold. Emas Antam is one of the most trusted gold brands. Central banks hold gold reserves. Gold tends to rise during uncertainty, dollar weakness, and inflation.',
    metadata:{ 'Safe Haven':'Rises during crises, war, inflation','US Gold ETF':'SPDR Gold Shares (GLD)','Indonesia':'Antam gold, Pegadaian, digital gold apps','Central Banks':'Hold gold reserves globally','2026 Context':'Middle East tensions supporting gold prices','Correlation':'Negative with USD; positive with inflation' },
    links:[{title:'World Gold Council',url:'https://www.gold.org'}],
    tags:['gold','emas','safe haven','inflation hedge','antam','pegadaian','gold etf','commodity'] }),

  makeNode({ id:'silver', label:'Silver / Perak', category:'instruments', country:'BOTH', importance:5,
    description:'Silver is both a precious metal (store of value) and an industrial metal (solar panels, electronics, medical). More volatile than gold. Traded on COMEX (futures), silver ETFs (SLV), and physical silver. The gold-to-silver ratio is a key valuation metric. Industrial demand from green energy (solar panels) is driving growing long-term interest.',
    metadata:{ 'Dual Role':'Precious metal + industrial metal','US Silver ETF':'iShares Silver Trust (SLV)','Key Industrial Use':'Solar panels, electronics, medical','Volatility':'Higher than gold','Gold/Silver Ratio':'Gold price ÷ Silver price (historical avg ~60)' },
    links:[{title:'Silver Institute',url:'https://www.silverinstitute.org'}],
    tags:['silver','perak','precious metal','industrial metal','solar panel','commodity','slv'] }),

  makeNode({ id:'crude-oil', label:'Crude Oil / Minyak', category:'instruments', country:'BOTH', importance:8,
    description:'Crude oil is the world\'s most traded commodity. WTI (West Texas Intermediate) and Brent Crude are the key benchmarks. Oil prices affect inflation, transportation costs, and the profitability of energy companies. In 2026, Middle East tensions and the Trump-Xi summit are key factors driving oil price uncertainty. Indonesia is a net oil importer.',
    metadata:{ 'Key Benchmarks':'WTI Crude (US), Brent Crude (global)','Traded On':'NYMEX (CME Group)','Inflation Impact':'Energy prices are 8% of CPI basket','OPEC+':'Cartel controls ~40% of supply','Indonesia':'Net oil importer; fuel subsidies are a budget burden','2026 Driver':'Middle East tensions + US-China trade resolution' },
    links:[{title:'EIA Oil Data',url:'https://www.eia.gov'}],
    tags:['crude oil','minyak','wti','brent','nymex','opec','energy','commodity','inflation'] }),

  makeNode({ id:'commodity', label:'Agricultural Commodities', category:'instruments', country:'US', importance:6,
    description:'Agricultural commodities include corn, wheat, soybeans, coffee, sugar, cotton, and others. Traded as futures on CME (CBOT division). Prices are affected by weather, geopolitics, and supply/demand. The 2026 US tariff war with China has disrupted soybean exports — a key flashpoint in US-China trade negotiations (China buying American soybeans was part of the Trump-Xi summit agenda).',
    metadata:{ 'Key Commodities':'Corn, wheat, soybeans, coffee, sugar, cotton','Traded On':'CBOT (part of CME Group)','2026 Issue':'US-China tariffs disrupting soybean trade','Weather Impact':'El Niño/La Niña affect prices significantly','ETF':'Invesco DB Agriculture Fund (DBA)' },
    links:[{title:'CME Agriculture',url:'https://www.cmegroup.com/markets/agriculture.html'}],
    tags:['agricultural commodity','corn','wheat','soybean','coffee','cbot','cme','food prices','tariff'] }),

  makeNode({ id:'private-equity', label:'Private Equity / Venture Capital', category:'instruments', country:'US', importance:7,
    description:'Private equity (PE) invests in private companies not listed on public exchanges. Venture capital (VC) is a subset focused on early-stage startups. PE firms buy companies, improve them, and sell at profit (often via IPO or sale). Famous PE: Blackstone, KKR, Carlyle. Famous VC: Sequoia, Andreessen Horowitz. Very high returns but illiquid and only for accredited investors.',
    metadata:{ 'PE Examples':'Blackstone, KKR, Carlyle, Apollo','VC Examples':'Sequoia, a16z, Kleiner Perkins','Access':'Accredited investors only (high net worth)','Liquidity':'Very illiquid (5–10 year lock-up)','Return':'Target 20%+ IRR','Indonesia':'OJK regulates private placements' },
    links:[{title:'PE Explained',url:'https://www.investopedia.com/terms/p/privateequity.asp'}],
    tags:['private equity','venture capital','pe','vc','startup','buyout','blackstone','kkr','illiquid'] }),

];
