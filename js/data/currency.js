/* ============================================================
   data/currency.js — Currency and forex concept nodes (5)
   ============================================================ */

window.NODES_CURRENCY = [

  makeNode({ id:'usd', label:'US Dollar (USD)', category:'currency', country:'US', importance:9,
    description:'The US Dollar (USD) is the world\'s reserve currency — used in ~88% of global forex transactions, ~59% of global foreign exchange reserves, and the currency for global commodity pricing (oil, gold, etc.). A strong USD makes US exports expensive and imports cheap, hurting US corporate earnings from overseas. The Fed\'s policy rate is the primary driver of USD strength.',
    metadata:{ 'Reserve Currency Share':'~59% of global FX reserves','Forex Transaction Share':'~88% of all trades involve USD','Commodity Pricing':'Oil, gold, most commodities priced in USD','Fed Funds Rate Impact':'Higher rates → stronger USD','Dollar Index (DXY)':'Measures USD vs basket of 6 major currencies','2026 Context':'Staying strong amid elevated Fed rates (3.5–3.75%)' },
    links:[{title:'Federal Reserve USD',url:'https://www.federalreserve.gov'},{title:'DXY Index',url:'https://www.investopedia.com/terms/u/usdx.asp'}],
    tags:['usd','us dollar','reserve currency','dxy','dollar index','petrodollar','global currency'] }),

  makeNode({ id:'idr', label:'Indonesian Rupiah (IDR)', category:'currency', country:'ID', importance:9,
    description:'The Indonesian Rupiah (IDR) is Indonesia\'s national currency. As of May 19, 2026, USD/IDR = Rp 17,700 — near the weakest levels since the COVID crisis. The rupiah is vulnerable to: US interest rate differentials (carry trade reversal), global risk-off sentiment, commodity export prices, and current account balances. BI defends the rupiah through forex intervention and rate hikes.',
    metadata:{ 'USD/IDR (May 2026)':'Rp 17,700','Depreciation from End-Apr':'–2.2%','Historical Low':'~Rp 16,000 (post-COVID recovery)','Key Risks':'Capital outflows, USD strengthening, commodity prices','BI Defense Tools':'FX intervention, rate hikes, BSA swap lines','Indonesia CA Balance':'Current account deficit (oil importer)' },
    links:[{title:'Rupiah Data',url:'https://tradingeconomics.com/indonesia/currency'},{title:'BI FX Data',url:'https://www.bi.go.id'}],
    tags:['rupiah','idr','indonesia currency','usd idr','nilai tukar','depresiasi','bank indonesia','devisa'] }),

  makeNode({ id:'eur', label:'Euro (EUR)', category:'currency', country:'BOTH', importance:6,
    description:'The Euro (EUR) is the world\'s second most traded currency and the official currency of 20 EU member states (the Eurozone). The European Central Bank (ECB) manages EUR monetary policy. EUR/USD is the most-traded forex pair in the world. The Euro is also held as a reserve currency. ECB policy divergence from the Fed in 2026 creates EUR/USD volatility.',
    metadata:{ 'Used By':'20 EU member states (Eurozone)','Managed By':'European Central Bank (ECB)','EUR/USD':'Most-traded forex pair globally','Reserve Currency Share':'~20% of global FX reserves','2026 Context':'ECB-Fed policy divergence driving EUR/USD volatility','Historical':'Launched 1999 (coins/notes in 2002)' },
    links:[{title:'ECB',url:'https://www.ecb.europa.eu'}],
    tags:['euro','eur','european central bank','ecb','eurozone','eur usd','reserve currency'] }),

  makeNode({ id:'forex-concept', label:'Forex (Foreign Exchange) Market', category:'currency', country:'BOTH', importance:8,
    description:'The foreign exchange (forex / FX) market is the world\'s largest financial market — daily trading volume exceeds $7 trillion. It\'s a decentralized OTC market where currencies are traded 24 hours/day, 5 days/week. Major participants: commercial banks (60%+ of volume), central banks, hedge funds, corporations, and retail traders. Currency pairs are quoted as one currency vs another (e.g., USD/IDR, EUR/USD, USD/JPY).',
    metadata:{ 'Daily Volume':'$7+ Trillion','Market Type':'OTC (decentralized)','Hours':'24 hours/day, 5 days/week','Major Participants':'Banks (60%+), central banks, hedge funds, corporations, retail','Major Pairs':'EUR/USD, USD/JPY, GBP/USD, USD/CHF','Indonesia':'USD/IDR pair — most impactful for Indonesian investors' },
    links:[{title:'BIS Forex Triennial Survey',url:'https://www.bis.org/statistics/rpfx22.htm'}],
    tags:['forex','foreign exchange','currency trading','usd','eur','jpy','otc market','24 hour market'] }),

  makeNode({ id:'exchange-rate-risk', label:'Exchange Rate Risk', category:'currency', country:'BOTH', importance:8,
    description:'Exchange rate risk (currency risk) is the possibility of loss due to changes in the exchange rate between two currencies. For Indonesian investors buying US stocks, a strengthening USD increases returns; a weakening USD reduces them (and vice versa). Indonesian companies importing from the US face higher costs when IDR weakens. Hedging tools: currency forwards, currency swaps, and natural hedging (matching revenue and cost currencies).',
    metadata:{ 'Also Called':'Currency risk, FX risk','Impact on IDX':'Foreign investors sell IDX if IDR weakens too much (capital flight)','Impact on Importers':'Weaker IDR = higher import costs = inflation','Impact on Exporters':'Weaker IDR = better export revenues (in IDR terms)','Hedging Tools':'Currency forwards, swaps, natural hedge','Indonesian Context':'IDR at Rp 17,700/USD in May 2026 — elevated risk environment' },
    links:[{title:'Currency Risk',url:'https://www.investopedia.com/terms/c/currencyrisk.asp'}],
    tags:['exchange rate risk','currency risk','fx risk','hedging','idr','usd','import cost','capital flight'] }),

];
