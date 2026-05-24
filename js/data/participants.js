/* ============================================================
   data/participants.js — Market participant nodes (10)
   ============================================================ */

window.NODES_PARTICIPANTS = [

  makeNode({ id:'retail-investor', label:'Retail Investor / Investor Ritel', category:'participants', country:'BOTH', importance:8,
    description:'Retail investors are individual non-professional investors who buy/sell securities for personal accounts. They typically trade smaller amounts and have less market power than institutions. In the US, retail participation surged post-COVID (Robinhood effect). In Indonesia, retail investor count hit 19.1 million SIDs by early 2026 — growing rapidly, helped by apps like Bibit, Bareksa, Stockbit, and Ajaib.',
    metadata:{ 'US Participation':'~60% of Americans own stocks (up from 52% in 2016)','Indonesia SIDs (2026)':'19.1 million (target: 20M by 2027)','Indonesia Growth':'Added 4 million investors since start of 2025','Platforms':'Bibit, Bareksa, Stockbit, Ajaib (Indonesia)','Typical Instruments':'Stocks, ETFs, mutual funds, bonds','Advantage':'No institutional constraints; can act faster on info' },
    links:[{title:'IDX Investor Data',url:'https://www.idx.co.id'},{title:'Retail Investor Trends',url:'https://www.mindmathmoney.com/articles/who-trades-in-the-stock-market-exploring-retail-investors-smart-money-and-market-makers'}],
    tags:['retail investor','investor ritel','individual investor','sid','bibit','bareksa','stockbit','robinhood'] }),

  makeNode({ id:'institutional-investor', label:'Institutional Investor', category:'participants', country:'BOTH', importance:8,
    description:'Institutional investors are large organizations that manage money on behalf of others: mutual funds, pension funds, insurance companies, endowments, and sovereign wealth funds. They dominate market volume (~70% of US market trading). They have access to more data, lower transaction costs, and can move markets with large block trades.',
    metadata:{ 'Types':'Mutual funds, pension funds, insurance companies, SWFs, endowments, hedge funds','US Market Share':'~70% of equity trading volume','Access Benefits':'Lower fees, research access, direct market access (DMA)','Fiduciary Duty':'Must act in best interest of beneficiaries','Indonesia Examples':'BPJS Ketenagakerjaan (pension), Taspen, insurance companies' },
    links:[{title:'Institutional Investors',url:'https://www.britannica.com/money/market-makers-institutional-investors'}],
    tags:['institutional investor','mutual fund','pension fund','hedge fund','insurance','sovereign wealth fund','bpjs'] }),

  makeNode({ id:'hedge-fund-participant', label:'Hedge Fund', category:'participants', country:'US', importance:7,
    description:'Hedge funds are private investment partnerships for sophisticated/wealthy investors. They use aggressive, flexible strategies not available to mutual funds: leverage, short selling, derivatives, global macro, quantitative trading. Famous hedge funds: Bridgewater ($150B+), Citadel, Renaissance Technologies (Medallion Fund), Two Sigma. Typical fee: "2 and 20." Not available to retail investors.',
    metadata:{ 'Famous Funds':'Bridgewater Associates, Citadel, Renaissance Technologies (Medallion), Two Sigma, D.E. Shaw','Fee Structure':'"2 and 20" — 2% management fee + 20% performance fee','Access Requirement':'Accredited investor (>$1M net worth or $200K+ income in US)','Strategies':'Long/short equity, global macro, event-driven, quantitative, arbitrage','AUM (industry)':'~$4 Trillion globally' },
    links:[{title:'Hedge Fund Overview',url:'https://www.investopedia.com/terms/h/hedgefund.asp'}],
    tags:['hedge fund','bridgewater','citadel','renaissance','two sigma','2 and 20','accredited','leverage','short selling'] }),

  makeNode({ id:'pension-fund', label:'Pension Fund / Dana Pensiun', category:'participants', country:'BOTH', importance:7,
    description:'Pension funds manage retirement savings for employees. They invest long-term in stocks, bonds, real estate, and alternatives. They are the largest institutional investors globally. In the US: CalPERS ($500B+), Teachers Retirement System. In Indonesia: BPJS Ketenagakerjaan (workers), BPJS Kesehatan (health), Taspen (civil servants), Asabri (military).',
    metadata:{ 'US Largest':'CalPERS ($500B+), CalSTRS, NY Pension Fund','Indonesia':'BPJS Ketenagakerjaan, Taspen (PNS), Asabri (TNI/Police)','Investment Horizon':'Very long (decades)','Asset Allocation':'Typically bonds-heavy (match long-term liabilities)','Indonesia BPJS':'Mandatory contribution from employers and employees','Regulation':'US (ERISA), Indonesia (OJK/Kemenkeu)' },
    links:[{title:'Pension Fund Investing',url:'https://www.investopedia.com/terms/p/pensionplan.asp'},{title:'BPJS TK',url:'https://www.bpjsketenagakerjaan.go.id'}],
    tags:['pension fund','dana pensiun','bpjs','retirement','calpers','taspen','asabri','long term'] }),

  makeNode({ id:'insurance-company', label:'Insurance Company / Asuransi', category:'participants', country:'BOTH', importance:7,
    description:'Insurance companies collect premiums and invest the "float" (pooled premiums) in bonds, stocks, and other assets to generate returns and pay claims. They are major buyers of long-term bonds (matching long-duration liabilities). In Indonesia, top insurance firms include Prudential Indonesia, Allianz Life, AXA Mandiri. Warren Buffett built Berkshire Hathaway around insurance float as a funding source.',
    metadata:{ 'Investment Focus':'Long-duration bonds, investment-grade corporate bonds, stocks','Float Concept':'Premiums collected before claims paid = investable float','US Leaders':'Berkshire Hathaway (insurance + investments), MetLife, Prudential','Indonesia Leaders':'Prudential Indonesia, Allianz Life, Jiwasraya (state)','Regulator':'US (state insurance commissioners), Indonesia (OJK)','Warren Buffett Link':'Berkshire uses insurance float for investments' },
    links:[{title:'Insurance Investing',url:'https://www.investopedia.com/terms/i/insurance-company.asp'}],
    tags:['insurance','asuransi','float','prudential','allianz','berkshire','long duration bond','premium'] }),

  makeNode({ id:'market-maker', label:'Market Maker', category:'participants', country:'BOTH', importance:7,
    description:'Market makers are firms that continuously quote bid (buy) and ask (sell) prices for securities, profiting from the spread between them. They provide liquidity — without market makers, trading would be difficult and spreads would be wide. On NASDAQ, firms like Citadel Securities and Virtu Financial are dominant market makers. Profits from volume, not direction.',
    metadata:{ 'Role':'Provide liquidity by quoting bid/ask at all times','Profit':'Earn the bid-ask spread (small per trade, large in volume)','US Leaders':'Citadel Securities, Virtu Financial, Jane Street','NYSE':'Designated Market Makers (DMMs)','Indonesia':'IDX has "peminjam dana" (dealer) system and institutional market makers','Risk':'Inventory risk; can lose money in fast-moving markets' },
    links:[{title:'Market Makers',url:'https://www.britannica.com/money/market-makers-institutional-investors'}],
    tags:['market maker','liquidity provider','bid ask spread','citadel securities','virtu','dmm','market microstructure'] }),

  makeNode({ id:'broker-dealer', label:'Broker-Dealer / Sekuritas', category:'participants', country:'BOTH', importance:7,
    description:'Broker-dealers execute trades on behalf of clients (broker role) and sometimes trade for their own accounts (dealer role). In the US, regulated by FINRA and SEC. Must be registered to buy/sell securities. In Indonesia, called "perusahaan efek" or "sekuritas" — regulated by OJK. Examples: Mandiri Sekuritas, BCA Sekuritas, Indo Premier Sekuritas, Mirae Asset.',
    metadata:{ 'Broker Role':'Execute trades for clients (for commission/fee)','Dealer Role':'Trade for own account, provide liquidity','US Regulation':'FINRA + SEC','Indonesia Regulation':'OJK','Indonesia Examples':'Mandiri Sekuritas, BCA Sekuritas, Indo Premier, Mirae Asset, Phillip Sekuritas','FINRA Registration':'All US broker-dealers must be FINRA registered' },
    links:[{title:'FINRA Broker Dealer',url:'https://www.finra.org/registration-exams-ce/broker-dealers'}],
    tags:['broker dealer','sekuritas','perusahaan efek','finra','execution','mandiri sekuritas','indo premier'] }),

  makeNode({ id:'investment-bank', label:'Investment Bank', category:'participants', country:'BOTH', importance:8,
    description:'Investment banks help companies raise capital (through IPOs and bond issuances), advise on mergers and acquisitions (M&A), and trade securities. Different from commercial banks (which take deposits and make loans). Key US investment banks: Goldman Sachs, Morgan Stanley, JPMorgan, Bank of America Merrill Lynch, Citigroup. In Indonesia: Mandiri Sekuritas, BCA Sekuritas, and international banks operate as IB arms.',
    metadata:{ 'Core Services':'Capital raising (IPO/bonds), M&A advisory, trading, research','US Leaders':'Goldman Sachs, Morgan Stanley, JPMorgan, BofA Merrill, Citi','Indonesia':'Mandiri Sekuritas, BCA Sekuritas (local); Goldman/JP Morgan (international)','Revenue':'Fee-based (advisory) + spread-based (trading)','Bulge Bracket':'"Bulge bracket" = largest global IB firms','Regulation':'Volcker Rule (2010) limits proprietary trading by banks' },
    links:[{title:'Investment Banking',url:'https://www.investopedia.com/terms/i/investmentbanking.asp'}],
    tags:['investment bank','ipo underwriter','m&a','capital markets','goldman sachs','morgan stanley','advisory'] }),

  makeNode({ id:'central-bank', label:'Central Bank / Bank Sentral', category:'participants', country:'BOTH', importance:9,
    description:'Central banks are the "banks of banks" — they hold reserves, lend to commercial banks, and implement monetary policy. The world\'s most important central banks: Federal Reserve (US), European Central Bank (ECB), Bank of Japan (BoJ), People\'s Bank of China (PBoC), Bank of England (BoE), and Bank Indonesia (BI). They act as "lender of last resort" in financial crises.',
    metadata:{ 'US Central Bank':'Federal Reserve (Fed)','Indonesia Central Bank':'Bank Indonesia (BI)','Key Powers':'Set policy rate, issue currency, regulate banks, manage reserves','Lender of Last Resort':'Provide emergency liquidity to banks in crisis','Global Coordination':'G7/G20 central banks coordinate during global crises','Independence':'Legally independent from government (most developed countries)' },
    links:[{title:'BIS Central Banks',url:'https://www.bis.org/about/member_cb.htm'}],
    tags:['central bank','bank sentral','federal reserve','bank indonesia','lender of last resort','monetary policy'] }),

  makeNode({ id:'foreign-investor', label:'Foreign Investor / Investor Asing', category:'participants', country:'ID', importance:8,
    description:'Foreign investors (asing) play a crucial role in Indonesian capital markets. They own ~20–25% of Indonesia\'s government bonds and are significant IDX equity participants. Foreign capital flows are highly sensitive to: BI Rate differentials vs Fed, rupiah stability, global risk sentiment, and Indonesia\'s MSCI classification. In April 2026, foreigners net sold Rp 2.04 trillion ($130M) in IDX equities, pressuring the IHSG.',
    metadata:{ 'IDX Equity Ownership':'~30–40% of free-float market cap','SBN Ownership':'~20–25% of domestic bonds','Apr 2026 Net Selling':'-Rp 2.04 Trillion ($130M)','Sensitivity':'BI/Fed rate differential, rupiah, MSCI classification','MSCI Risk':'Potential demotion to Frontier Market → $25–50B forced outflows','Key Driver':'Carry trade: borrow cheap USD, invest in high-yield IDR assets' },
    links:[{title:'Foreign Flow IDX',url:'https://indonesiabusinesspost.com/6016/markets-and-finance/govt-moves-to-restore-market-confidence-after-ihsg-plunge-idx-leadership-shake-up'}],
    tags:['foreign investor','investor asing','asing','capital flow','carry trade','msci','rupiah','outflow'] }),

];
