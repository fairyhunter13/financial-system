/* ============================================================
   data/institutions.js — Institution nodes (38)
   Regulatory bodies, exchanges, banks, platforms
   ============================================================ */

window.NODES_INSTITUTIONS = [

  /* ── US Regulatory (9) ─────────────────────────────────── */
  makeNode({ id:'fed', label:'Federal Reserve', category:'institutions', country:'US', importance:10,
    description:'The central bank of the United States, created by Congress in 1913. Sets monetary policy via the FOMC (Federal Open Market Committee), which meets 8 times/year. As of April 29, 2026 (last meeting under Chair Powell), the federal funds rate is held at 3.5–3.75%. Powell\'s term ended May 15, 2026; a new chair is being appointed. Has 12 regional Federal Reserve Banks.',
    metadata:{ 'Fed Funds Rate (Apr 2026)':'3.50–3.75%','FOMC Meetings':'8× per year','Chair (until May 2026)':'Jerome Powell','Regional Banks':'12','Founded':'1913','HQ':'Washington D.C.' },
    links:[{title:'Federal Reserve',url:'https://www.federalreserve.gov'},{title:'FOMC Apr 2026',url:'https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm'}],
    tags:['federal reserve','fed','fomc','monetary policy','interest rate','jerome powell','central bank'] }),

  makeNode({ id:'us-treasury', label:'US Treasury Dept.', category:'institutions', country:'US', importance:9,
    description:'The US Department of the Treasury manages government finances, issues currency, collects taxes (via IRS), and borrows money by issuing Treasury securities. It also oversees financial sanctions (OFAC) and financial stability (via FSOC). The Treasury is the largest single issuer of debt in the world (~$28 trillion outstanding).',
    metadata:{ 'Treasury Debt Outstanding':'~$28 Trillion','Key Bureaus':'IRS, OCC, OFAC, Mint','FSOC Role':'Secretary chairs FSOC','Securities Issued':'T-Bills, T-Notes, T-Bonds, TIPS','HQ':'Washington D.C.' },
    links:[{title:'US Treasury',url:'https://home.treasury.gov'}],
    tags:['treasury','t-bills','t-bonds','national debt','irs','fiscal policy'] }),

  makeNode({ id:'sec', label:'SEC', category:'institutions', country:'US', importance:9,
    description:'Securities and Exchange Commission — the primary US federal regulator of securities markets. Protects investors, maintains fair markets, and facilitates capital formation. Oversees stock exchanges, broker-dealers, investment advisors, and mutual funds. In March 2026, signed an MOU with CFTC to coordinate crypto regulation.',
    metadata:{ 'Full Name':'Securities and Exchange Commission','Founded':'1934','Chair (2026)':'Paul Atkins','Jurisdiction':'Stocks, bonds, ETFs, mutual funds, investment advisors','Key 2026 Action':'SEC-CFTC MOU on crypto (Mar 11, 2026)' },
    links:[{title:'SEC Official',url:'https://www.sec.gov'},{title:'SEC Crypto Guidance',url:'https://www.sec.gov/newsroom/press-releases/2026-30-sec-clarifies-application-federal-securities-laws-crypto-assets'}],
    tags:['sec','securities','regulator','investor protection','stocks','bonds','etf'] }),

  makeNode({ id:'finra', label:'FINRA', category:'institutions', country:'US', importance:8,
    description:'Financial Industry Regulatory Authority — a non-governmental self-regulatory organization (SRO) that oversees broker-dealers and their registered representatives. FINRA writes and enforces rules for the ~3,400 registered broker-dealer firms and ~620,000 registered brokers. Operates BrokerCheck for investor due diligence.',
    metadata:{ 'Full Name':'Financial Industry Regulatory Authority','Type':'Self-Regulatory Organization (SRO)','Registered Firms':'~3,400 broker-dealers','Registered Brokers':'~620,000','Tool':'BrokerCheck' },
    links:[{title:'FINRA Official',url:'https://www.finra.org'},{title:'BrokerCheck',url:'https://brokercheck.finra.org'}],
    tags:['finra','broker dealer','self regulatory','securities','brokers'] }),

  makeNode({ id:'fdic', label:'FDIC', category:'institutions', country:'US', importance:8,
    description:'Federal Deposit Insurance Corporation — insures bank deposits up to $250,000 per depositor per bank. Created after the Great Depression to prevent bank runs. Also supervises and examines banks for safety. If a bank fails, FDIC steps in to protect depositors. Critical safety net for the US banking system.',
    metadata:{ 'Insurance Limit':'$250,000 per depositor per bank','Founded':'1933','Banks Covered':'Thousands of FDIC-insured banks','Purpose':'Prevent bank runs, protect depositors','Funding':'Banks pay premiums to FDIC' },
    links:[{title:'FDIC Official',url:'https://www.fdic.gov'}],
    tags:['fdic','deposit insurance','bank safety','great depression','banking regulation'] }),

  makeNode({ id:'cftc', label:'CFTC', category:'institutions', country:'US', importance:8,
    description:'Commodity Futures Trading Commission — regulates US derivatives markets, including futures, options on futures, and swaps. In 2026, also has jurisdiction over Bitcoin and Ethereum as commodities. The CLARITY Act gives CFTC exclusive jurisdiction over digital commodity spot markets. Signed MOU with SEC in March 2026.',
    metadata:{ 'Full Name':'Commodity Futures Trading Commission','Founded':'1974','Jurisdiction':'Futures, options, swaps, commodity spot markets','Crypto Role':'Regulates BTC/ETH as commodities','Key 2026':'CLARITY Act + SEC-CFTC MOU' },
    links:[{title:'CFTC Official',url:'https://www.cftc.gov'},{title:'SEC-CFTC MOU',url:'https://www.sidley.com/en/insights/newsupdates/2026/03/us-cftc-and-sec-enter-into-historic-memorandum-of-understanding'}],
    tags:['cftc','futures','derivatives','commodities','bitcoin','ethereum','swaps'] }),

  makeNode({ id:'occ', label:'OCC', category:'institutions', country:'US', importance:7,
    description:'Office of the Comptroller of the Currency — an independent bureau of the US Treasury that charters, regulates, and supervises national banks (those with "National" or "N.A." in their name) and federal savings associations. Ensures banks operate safely and comply with consumer protection laws.',
    metadata:{ 'Full Name':'Office of the Comptroller of the Currency','Parent':'US Treasury Dept.','Jurisdiction':'National banks (e.g. JPMorgan National Bank, Citibank N.A.)','Focus':'Safe, sound banking practices' },
    links:[{title:'OCC Official',url:'https://www.occ.gov'}],
    tags:['occ','national bank','bank regulation','treasury','comptroller'] }),

  makeNode({ id:'cfpb', label:'CFPB', category:'institutions', country:'US', importance:7,
    description:'Consumer Financial Protection Bureau — created by the Dodd-Frank Act (2010) to protect consumers from abusive financial practices. Oversees mortgages, credit cards, student loans, payday loans, and other consumer financial products. Enforces consumer financial laws and handles complaints.',
    metadata:{ 'Full Name':'Consumer Financial Protection Bureau','Created':'2010 (Dodd-Frank Act)','Focus':'Consumer protection','Products':'Mortgages, credit cards, loans','Complaint Portal':'consumerfinance.gov/complaint' },
    links:[{title:'CFPB Official',url:'https://www.consumerfinance.gov'}],
    tags:['cfpb','consumer protection','mortgage','credit card','dodd frank'] }),

  makeNode({ id:'fsoc', label:'FSOC', category:'institutions', country:'US', importance:6,
    description:'Financial Stability Oversight Council — created by Dodd-Frank (2010) to identify and monitor systemic risks to US financial stability. Chaired by Treasury Secretary; members include heads of all major financial regulators (Fed, SEC, CFTC, FDIC, OCC, CFPB). Can designate non-bank financial firms as systemically important.',
    metadata:{ 'Full Name':'Financial Stability Oversight Council','Chair':'Treasury Secretary','Members':'10 voting members (major regulators)','Purpose':'Identify systemic risk','Created':'2010 (Dodd-Frank)' },
    links:[{title:'FSOC Official',url:'https://home.treasury.gov/policy-issues/financial-markets-financial-institutions-and-fiscal-service/fsoc'}],
    tags:['fsoc','systemic risk','too big to fail','financial stability','dodd frank'] }),

  /* ── Indonesia Regulatory (7) ──────────────────────────── */
  makeNode({ id:'bank-indonesia', label:'Bank Indonesia', category:'institutions', country:'ID', importance:10,
    description:'Indonesia\'s central bank, founded 1953. Sets the BI Rate (currently 5.25% as of May 2026, after a surprise 50bps hike to defend the rupiah). Also manages Indonesia\'s foreign reserves, oversees the payment system, and maintains monetary and financial system stability. Its pro-stability policy prioritizes exchange rate stability.',
    metadata:{ 'BI Rate (May 2026)':'5.25% (+50bps hike)','Deposit Facility':'4.25%','Lending Facility':'6.00%','Founded':'1953','Governor':'Perry Warjiyo','HQ':'Jakarta','Inflation Target':'2.5% ±1%' },
    links:[{title:'Bank Indonesia',url:'https://www.bi.go.id'},{title:'BI Rate Hike May 2026',url:'https://www.bi.go.id/en/publikasi/ruang-media/news-release/Pages/sp_2810726.aspx'}],
    tags:['bank indonesia','bi','bi rate','suku bunga','rupiah','monetary policy','kebijakan moneter'] }),

  makeNode({ id:'ojk', label:'OJK', category:'institutions', country:'ID', importance:10,
    description:'Otoritas Jasa Keuangan (OJK) — Indonesia\'s integrated financial services authority, established 2011. Regulates and supervises all financial sectors: banking, capital markets, insurance, pensions, and since January 2025, crypto assets. OJK replaced BAPPEBTI as crypto regulator and introduced crypto derivatives in late 2025. Spearheading IDX free-float reform (15% minimum public ownership).',
    metadata:{ 'Full Name':'Otoritas Jasa Keuangan','Established':'2011','Scope':'Banks, Capital Markets, Insurance, Pensions, Crypto','Crypto Takeover':'Jan 10, 2025 (from BAPPEBTI)','Key 2026 Action':'IDX free-float reform, crypto derivatives framework','Chair (resigned Jan 2026)':'Mahendra Siregar' },
    links:[{title:'OJK Official',url:'https://www.ojk.go.id'},{title:'OJK Crypto Framework',url:'https://www.abnrlaw.com/news/indonesia-greenlights-crypto-derivatives-a-look-at-the-new-ojk-framework'}],
    tags:['ojk','otoritas jasa keuangan','regulator','keuangan','pasar modal','perbankan','asuransi','crypto'] }),

  makeNode({ id:'lps', label:'LPS', category:'institutions', country:'ID', importance:7,
    description:'Lembaga Penjamin Simpanan (LPS) — Indonesia\'s deposit insurance agency, equivalent to the US FDIC. Insures bank deposits up to Rp 2 billion per depositor per bank. Also has resolution authority for failing banks. Ensures public confidence in the banking system.',
    metadata:{ 'Full Name':'Lembaga Penjamin Simpanan','Insurance Limit':'Rp 2 Billion per depositor per bank','Established':'2004','Authority':'Deposit insurance + bank resolution','Equivalent':'US FDIC' },
    links:[{title:'LPS Official',url:'https://www.lps.go.id'}],
    tags:['lps','deposit insurance','penjamin simpanan','bank safety','perbankan'] }),

  makeNode({ id:'kemenkeu', label:'Kementerian Keuangan', category:'institutions', country:'ID', importance:8,
    description:'Indonesia\'s Ministry of Finance — manages state finances, taxation (via DJP), customs (via DJBC), and sovereign debt issuance (via DJPPR). The Ministry sets the national budget (APBN) and fiscal policy. Under current policy, ORI029 and other SBN are issued to finance the state budget.',
    metadata:{ 'Full Name':'Kementerian Keuangan','Key Directorates':'DJP (tax), DJBC (customs), DJPPR (debt)','Role':'State budget, fiscal policy, debt issuance','Budget Instrument':'APBN (Anggaran Pendapatan dan Belanja Negara)' },
    links:[{title:'Kemenkeu Official',url:'https://www.kemenkeu.go.id'}],
    tags:['kemenkeu','kementerian keuangan','apbn','fiskal','pajak','djp','djppr'] }),

  makeNode({ id:'djppr', label:'DJPPR', category:'institutions', country:'ID', importance:7,
    description:'Directorate General of Financing and Risk Management (DJPPR) under Kemenkeu. Issues all government bonds (SBN) including retail instruments like ORI, SBR, SR (Sukuk Ritel), and ST (Sukuk Tabungan). Also manages Indonesia\'s sovereign debt portfolio and foreign exchange risk.',
    metadata:{ 'Full Name':'Direktorat Jenderal Pengelolaan Pembiayaan dan Risiko','Parent':'Ministry of Finance','Issues':'ORI, SBR, SR, ST, FR bonds','ORI029 Target':'Rp 25 Trillion' },
    links:[{title:'DJPPR Official',url:'https://www.djppr.kemenkeu.go.id'}],
    tags:['djppr','sbn','ori','sbr','sukuk','pengelolaan utang','sovereign debt'] }),

  makeNode({ id:'ksei', label:'KSEI', category:'institutions', country:'ID', importance:7,
    description:'PT Kustodian Sentral Efek Indonesia — Indonesia\'s central securities depository (CSD). Holds all securities (stocks, bonds) on behalf of investors. Each investor has a unique Single Investor Identification (SID). KSEI also records all investor data and ensures settlement of securities transactions.',
    metadata:{ 'Full Name':'Kustodian Sentral Efek Indonesia','Role':'Central Securities Depository (CSD)','Key Function':'Holds securities, issues SID','Registered Investors (2026)':'19.1 million SIDs','Settlement':'T+2 for equities' },
    links:[{title:'KSEI Official',url:'https://www.ksei.co.id'}],
    tags:['ksei','sid','kustodian','depository','settlement','efek','custodian'] }),

  makeNode({ id:'kpei', label:'KPEI', category:'institutions', country:'ID', importance:7,
    description:'PT Kliring Penjaminan Efek Indonesia — Indonesia\'s central clearing counterparty (CCP) for exchange-traded securities. Guarantees settlement and manages counterparty risk on the IDX. Acts as buyer to every seller and seller to every buyer to ensure transactions complete even if one party defaults.',
    metadata:{ 'Full Name':'Kliring Penjaminan Efek Indonesia','Role':'Central Clearing Counterparty (CCP)','Key Function':'Guarantees trade settlement, manages counterparty risk','Parent':'Subsidiary of IDX group' },
    links:[{title:'KPEI Official',url:'https://www.kpei.co.id'}],
    tags:['kpei','kliring','clearing','settlement','counterparty risk','efek'] }),

  /* ── Market Operators (4) ──────────────────────────────── */
  makeNode({ id:'cme-group', label:'CME Group', category:'institutions', country:'US', importance:8,
    description:'CME Group is the world\'s largest and most diverse derivatives exchange. Operates CME, CBOT, NYMEX, and COMEX. Offers futures and options on interest rates, equity indices, foreign exchange, energy, agricultural commodities, and metals. Also offers Bitcoin and Ether futures.',
    metadata:{ 'Exchanges Operated':'CME, CBOT, NYMEX, COMEX','Products':'Futures & options on rates, FX, energy, metals, crypto','HQ':'Chicago, Illinois','Bitcoin Futures':'Yes (CME Bitcoin Futures)' },
    links:[{title:'CME Group',url:'https://www.cmegroup.com'}],
    tags:['cme','cbot','nymex','comex','futures','derivatives','chicago'] }),

  makeNode({ id:'cboe', label:'CBOE', category:'institutions', country:'US', importance:7,
    description:'Chicago Board Options Exchange — the world\'s largest options exchange. Created the VIX (CBOE Volatility Index), the market\'s "fear gauge." Offers options on stocks, ETFs, and stock indices. CBOE also operates the C2 exchange and acquired Bats Global Markets in 2017.',
    metadata:{ 'Full Name':'Chicago Board Options Exchange','Known For':'World\'s largest options exchange','VIX':'Creator of the Volatility Index (VIX)','HQ':'Chicago, Illinois','Products':'Equity & ETF options, index options' },
    links:[{title:'CBOE Official',url:'https://www.cboe.com'}],
    tags:['cboe','options','vix','volatility index','chicago','equity options'] }),

  makeNode({ id:'dtcc', label:'DTCC', category:'institutions', country:'US', importance:7,
    description:'Depository Trust & Clearing Corporation — provides clearing, settlement, and information services for virtually all broker-to-broker equity, corporate/municipal bond, government, and mortgage-backed securities trades in the US. Processes trillions of dollars of transactions daily.',
    metadata:{ 'Full Name':'Depository Trust & Clearing Corporation','Role':'Central clearing & settlement for US markets','Volume':'Trillions in daily transactions','Subsidiaries':'DTC (depository), NSCC (equities clearing), FICC (fixed income)' },
    links:[{title:'DTCC Official',url:'https://www.dtcc.com'}],
    tags:['dtcc','clearing','settlement','dtc','nscc','post-trade'] }),

  makeNode({ id:'ice', label:'ICE', category:'institutions', country:'US', importance:7,
    description:'Intercontinental Exchange — a global network of exchanges, clearing houses, and data services. Owns NYSE (acquired 2013), and major commodity exchanges. ICE also provides data and analytics services widely used across the financial industry. One of the most powerful financial infrastructure companies globally.',
    metadata:{ 'Full Name':'Intercontinental Exchange','Owns':'NYSE, ICE Futures US, ICE Clear, various data services','NYSE Acquisition':'2013','Products':'Equity, commodity, currency, credit markets','HQ':'Atlanta, Georgia' },
    links:[{title:'ICE Official',url:'https://www.theice.com'}],
    tags:['ice','intercontinental exchange','nyse','exchange','infrastructure'] }),

  /* ── Major US Banks (6) ────────────────────────────────── */
  makeNode({ id:'jpmorgan', label:'JPMorgan Chase', category:'institutions', country:'US', importance:8,
    description:'JPMorgan Chase is the largest US bank by assets (~$4 trillion). Provides investment banking, commercial banking, asset management, and consumer banking. A systemically important financial institution (SIFI). Its investment banking division (J.P. Morgan) consistently ranks #1 globally in many categories.',
    metadata:{ 'Assets':'~$4 Trillion','HQ':'New York City','CEO':'Jamie Dimon','Divisions':'Consumer Banking, Investment Bank, Asset Management, Commercial Banking','Status':'G-SIB (Global Systemically Important Bank)' },
    links:[{title:'JPMorgan',url:'https://www.jpmorganchase.com'}],
    tags:['jpmorgan','jp morgan','chase','bank','investment banking','wall street'] }),

  makeNode({ id:'bank-of-america', label:'Bank of America', category:'institutions', country:'US', importance:7,
    description:'Bank of America is the second-largest US bank (~$3.3 trillion assets). Provides consumer banking, investment banking (Merrill Lynch), and wealth management. Has one of the largest US retail branch networks.',
    metadata:{ 'Assets':'~$3.3 Trillion','HQ':'Charlotte, North Carolina','CEO':'Brian Moynihan','Investment Banking':'Merrill Lynch (subsidiary)','Status':'G-SIB' },
    links:[{title:'Bank of America',url:'https://www.bankofamerica.com'}],
    tags:['bank of america','boa','merrill lynch','banking','g-sib'] }),

  makeNode({ id:'goldman-sachs', label:'Goldman Sachs', category:'institutions', country:'US', importance:8,
    description:'Goldman Sachs is a leading global investment bank and financial services company. Known for M&A advisory, securities underwriting, trading, asset management, and private equity. Consistently ranked among the most powerful financial firms globally.',
    metadata:{ 'Founded':'1869','HQ':'New York City','CEO':'David Solomon','Core':'Investment banking, securities, asset management','Status':'G-SIB' },
    links:[{title:'Goldman Sachs',url:'https://www.goldmansachs.com'}],
    tags:['goldman sachs','investment bank','wall street','m&a','trading','private equity'] }),

  makeNode({ id:'morgan-stanley', label:'Morgan Stanley', category:'institutions', country:'US', importance:7,
    description:'Morgan Stanley is a major US investment bank and financial services firm. Offers investment banking, equities trading, wealth management (E*Trade acquired 2020), and investment management. One of the "Big Four" US investment banks alongside Goldman Sachs, JPMorgan, and Bank of America.',
    metadata:{ 'Founded':'1935','HQ':'New York City','CEO':'Ted Pick','Core':'Investment banking, wealth management, trading','E*Trade':'Acquired 2020','Status':'G-SIB' },
    links:[{title:'Morgan Stanley',url:'https://www.morganstanley.com'}],
    tags:['morgan stanley','investment bank','wealth management','etrade','wall street'] }),

  makeNode({ id:'citigroup', label:'Citigroup', category:'institutions', country:'US', importance:7,
    description:'Citigroup (Citi) is a major US and global bank with extensive international operations in 160+ countries. Provides consumer banking, investment banking, and institutional services. Known for its global transaction banking and treasury services.',
    metadata:{ 'Assets':'~$2.4 Trillion','HQ':'New York City','CEO':'Jane Fraser','Presence':'160+ countries','Status':'G-SIB' },
    links:[{title:'Citigroup',url:'https://www.citigroup.com'}],
    tags:['citigroup','citi','bank','global','international banking','g-sib'] }),

  makeNode({ id:'wells-fargo', label:'Wells Fargo', category:'institutions', country:'US', importance:7,
    description:'Wells Fargo is the fourth-largest US bank by assets, focused primarily on consumer and commercial banking in the US. Known for its large mortgage business and extensive branch network. Was under Federal Reserve-imposed asset cap since 2018 scandal; restrictions eased in recent years.',
    metadata:{ 'Assets':'~$1.9 Trillion','HQ':'San Francisco, California','CEO':'Charlie Scharf','Focus':'Consumer & commercial banking, mortgage','Fed Asset Cap':'Imposed 2018 (easing)' },
    links:[{title:'Wells Fargo',url:'https://www.wellsfargo.com'}],
    tags:['wells fargo','banking','mortgage','consumer banking','california'] }),

  /* ── Major Indonesia Banks (4) ─────────────────────────── */
  makeNode({ id:'bca', label:'Bank Central Asia (BCA)', category:'institutions', country:'ID', importance:9,
    description:'Bank Central Asia (BCA) is Indonesia\'s most profitable private bank and the country\'s largest bank by profit in 2025 (net profit Rp 57.5 trillion). Ranked 30th globally among the strongest banking brands. BCA is known for digital banking dominance — its m-BCA app is considered the most reliable. Listed on IDX (BBCA).',
    metadata:{ 'Net Profit (2025)':'Rp 57.5 Trillion (#1 in Indonesia)','Global Rank':'30th (Brand Finance 2025)','App':'m-BCA (most reliable)','IDX Ticker':'BBCA','Ownership':'Djarum Group (Hartono family)' },
    links:[{title:'BCA Official',url:'https://www.bca.co.id'},{title:'BCA Brand Finance',url:'https://brandfinance.com/press-releases/bca-remains-the-worlds-strongest-banking-brand-despite-a-drop-in-brand-value'}],
    tags:['bca','bank central asia','bbca','perbankan','saham','blue chip','digital banking'] }),

  makeNode({ id:'bri', label:'Bank Rakyat Indonesia (BRI)', category:'institutions', country:'ID', importance:9,
    description:'Bank Rakyat Indonesia (BRI) is Indonesia\'s largest bank by total assets, state-owned (Persero). Focuses on micro, small, and medium enterprise (MSME) lending and financial inclusion across Indonesia\'s vast archipelago. BRImo is the most popular mobile banking app in Indonesia. Listed on IDX (BBRI).',
    metadata:{ 'Total Assets (2025)':'Largest by assets','Ownership':'State-owned (Persero)','Focus':'MSME, microfinance, financial inclusion','App':'BRImo (most popular)','IDX Ticker':'BBRI' },
    links:[{title:'BRI Official',url:'https://www.bri.co.id'}],
    tags:['bri','bank rakyat indonesia','bbri','bumn','perbankan','msme','microfinance','brimo'] }),

  makeNode({ id:'bank-mandiri', label:'Bank Mandiri', category:'institutions', country:'ID', importance:9,
    description:'Bank Mandiri is Indonesia\'s largest bank by total assets (Rp 2,515 trillion as of June 2025). State-owned (Persero), ranked 36th globally. Net profit Rp 56.3 trillion in 2025. Livin\' app is the second most popular banking app. Dominant in corporate and transactional banking.',
    metadata:{ 'Total Assets (Jun 2025)':'Rp 2,515 Trillion','Net Profit (2025)':'Rp 56.3 Trillion','Global Rank':'36th','App':'Livin\' by Mandiri','IDX Ticker':'BMRI','Ownership':'State-owned (Persero)' },
    links:[{title:'Bank Mandiri',url:'https://www.bankmandiri.co.id'}],
    tags:['bank mandiri','bmri','bumn','perbankan','blue chip','livin','saham'] }),

  makeNode({ id:'bni', label:'Bank Negara Indonesia (BNI)', category:'institutions', country:'ID', importance:8,
    description:'Bank Negara Indonesia (BNI) is one of Indonesia\'s Big Four state-owned banks. Focuses on corporate, retail, and international banking. BNI is historically Indonesia\'s first state bank (1946) and is known for its overseas presence. Listed on IDX (BBNI).',
    metadata:{ 'Founded':'1946 (Indonesia\'s first state bank)','Ownership':'State-owned (Persero)','Focus':'Corporate, retail, international banking','IDX Ticker':'BBNI','CR4 Share':'Part of Indonesia\'s 52–55% top-4 concentration' },
    links:[{title:'BNI Official',url:'https://www.bni.co.id'}],
    tags:['bni','bank negara indonesia','bbni','bumn','perbankan','blue chip'] }),

  /* ── Platforms & Asset Managers (8) ───────────────────── */
  makeNode({ id:'vanguard', label:'Vanguard', category:'institutions', country:'US', importance:8,
    description:'The Vanguard Group is the world\'s largest mutual fund company and second-largest ETF provider (~$9 trillion AUM). Pioneer of index investing and low-cost funds. Founded by John Bogle in 1975 who invented the first retail index fund. Its core philosophy: low costs + diversification = better long-term returns.',
    metadata:{ 'AUM':'~$9 Trillion','Founded':'1975 (John Bogle)','Known For':'Index investing pioneer, ultra-low fees','Flagship':'Vanguard Total Stock Market ETF (VTI)','Ownership':'Owned by its funds (and by fund investors)' },
    links:[{title:'Vanguard',url:'https://www.vanguard.com'}],
    tags:['vanguard','index fund','passive investing','etf','john bogle','low cost','vti'] }),

  makeNode({ id:'blackrock', label:'BlackRock', category:'institutions', country:'US', importance:8,
    description:'BlackRock is the world\'s largest asset manager (~$10+ trillion AUM). The dominant force in ETFs via its iShares brand. Uses its Aladdin risk management platform, which manages risk for trillions in assets globally. Often called the "world\'s largest shadow bank."',
    metadata:{ 'AUM':'$10+ Trillion','ETF Brand':'iShares (world\'s largest ETF issuer)','Risk Platform':'Aladdin','CEO':'Larry Fink','Founded':'1988','Known For':'ETFs, fixed income, alternative investments' },
    links:[{title:'BlackRock',url:'https://www.blackrock.com'},{title:'iShares',url:'https://www.ishares.com'}],
    tags:['blackrock','ishares','etf','aum','larry fink','aladdin','asset management'] }),

  makeNode({ id:'fidelity', label:'Fidelity Investments', category:'institutions', country:'US', importance:7,
    description:'Fidelity Investments is one of the largest US brokerage and asset management firms (~$15 trillion in customer assets). Known for active mutual fund management and its ZERO fee index funds. Also offers 401(k) plan services, IRA accounts, and retirement planning tools.',
    metadata:{ 'Customer Assets':'~$15 Trillion','Known For':'Mutual funds, retirement (401k/IRA), zero-fee index funds','Founded':'1946','HQ':'Boston, Massachusetts','Ownership':'Privately held (Johnson family)' },
    links:[{title:'Fidelity',url:'https://www.fidelity.com'}],
    tags:['fidelity','mutual funds','401k','ira','retirement','brokerage','zero fee'] }),

  makeNode({ id:'charles-schwab', label:'Charles Schwab', category:'institutions', country:'US', importance:7,
    description:'Charles Schwab is a leading US brokerage and banking firm. Pioneer of discount brokerage (since 1975). Acquired TD Ameritrade in 2020. Offers commission-free trading, ETFs, robo-advisory (Schwab Intelligent Portfolios), and banking services.',
    metadata:{ 'Founded':'1971','AUM':'~$9 Trillion','Key Move':'Acquired TD Ameritrade (2020)','Known For':'Discount brokerage, commission-free trading','Robo-Advisor':'Schwab Intelligent Portfolios' },
    links:[{title:'Charles Schwab',url:'https://www.schwab.com'}],
    tags:['schwab','brokerage','td ameritrade','commission free','discount brokerage','robo advisor'] }),

  makeNode({ id:'bibit', label:'Bibit', category:'institutions', country:'ID', importance:7,
    description:'Bibit is one of Indonesia\'s most popular robo-advisory investment platforms. Allows retail investors to buy reksa dana (mutual funds), SBN (government bonds like ORI and sukuk), and stocks. Uses AI-driven portfolio recommendations ("Bibit Pintar"). Supervised by OJK. Over 10 million users.',
    metadata:{ 'Type':'Robo-advisory / investment platform','Products':'Reksa dana, SBN, saham','Regulator':'OJK','Users':'10+ million','Feature':'Bibit Pintar (AI recommendations)','Min Investment':'Rp 10,000' },
    links:[{title:'Bibit',url:'https://bibit.id'}],
    tags:['bibit','reksa dana','robo advisor','investasi','ojk','retail investor','aplikasi investasi'] }),

  makeNode({ id:'bareksa', label:'Bareksa', category:'institutions', country:'ID', importance:7,
    description:'Bareksa is Indonesia\'s leading mutual fund marketplace and financial supermarket. Sells reksa dana from many investment managers, government bonds (SBN including ORI), and insurance products. Provides the "Bareksa Barometer" performance ratings for funds. Supervised by OJK.',
    metadata:{ 'Type':'Mutual fund marketplace','Products':'Reksa dana, SBN, insurance','Regulator':'OJK','Known For':'Bareksa Barometer fund ratings','SBN Sales':'Authorized distribution partner for ORI/SR' },
    links:[{title:'Bareksa',url:'https://www.bareksa.com'}],
    tags:['bareksa','reksa dana','sbn','ori','investasi','marketplace','fund rating'] }),

  makeNode({ id:'stockbit', label:'Stockbit', category:'institutions', country:'ID', importance:7,
    description:'Stockbit is Indonesia\'s largest stock investment app and social investing community. Part of the Stockbit-Bibit ecosystem. Allows retail investors to trade IDX-listed stocks, analyze financials, and follow other investors\' portfolios. Features social feeds for investment discussions.',
    metadata:{ 'Type':'Stock trading app + social investing community','Market':'IDX (Indonesia Stock Exchange)','Parent':'Same ecosystem as Bibit','Regulator':'OJK','Feature':'Social investing, portfolio tracking' },
    links:[{title:'Stockbit',url:'https://stockbit.com'}],
    tags:['stockbit','saham','trading','idx','social investing','portfolio','indonesia'] }),

  makeNode({ id:'ajaib', label:'Ajaib', category:'institutions', country:'ID', importance:6,
    description:'Ajaib is an Indonesian fintech investment platform offering stocks and mutual fund investing. Popular among young/first-time investors due to its simple UI and low minimum investments. OJK-regulated. Part of Indonesia\'s growing retail investor base which reached 19.1 million SIDs in 2026.',
    metadata:{ 'Type':'Stocks + mutual fund investment platform','Products':'IDX stocks, reksa dana','Min Investment':'Rp 10,000 for reksa dana','Target':'Young/first-time investors','Regulator':'OJK' },
    links:[{title:'Ajaib',url:'https://ajaib.co.id'}],
    tags:['ajaib','investasi','saham','reksa dana','fintech','milenial','aplikasi'] }),

];
