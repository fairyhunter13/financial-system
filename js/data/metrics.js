/* ============================================================
   data/metrics.js — Financial metric / ratio nodes (15)
   ============================================================ */

window.NODES_METRICS = [

  makeNode({ id:'pe-ratio', label:'P/E Ratio', category:'metrics', country:'BOTH', importance:8,
    description:'Price-to-Earnings Ratio = Stock Price ÷ Earnings Per Share (EPS). It tells you how much investors pay for each $1 of earnings. A P/E of 20 means investors pay $20 for every $1 of annual profit. Lower P/E = potentially cheaper. Compare within the same industry. The S&P 500 average P/E is ~20–25. Warning: low P/E can be a "value trap" if earnings are falling.',
    metadata:{ 'Formula':'Stock Price ÷ EPS','S&P 500 Average P/E':'~20–25x','Low P/E (<15)':'Potentially undervalued (or earnings declining)','High P/E (>30)':'Growth expectations priced in (or overvalued)','Indonesian Context':'IDX average P/E typically 10–15x (lower than US)','Trailing vs Forward':'Trailing uses past 12M earnings; forward uses next 12M forecast' },
    links:[{title:'P/E Ratio Guide',url:'https://www.investopedia.com/terms/p/price-earningsratio.asp'}],
    tags:['pe ratio','price earnings','valuation','earnings','stock analysis','value investing','fundamental'] }),

  makeNode({ id:'eps', label:'EPS (Earnings Per Share)', category:'metrics', country:'BOTH', importance:7,
    description:'Earnings Per Share = Net Profit ÷ Total Shares Outstanding. EPS tells you how much profit a company generates per share owned. Rising EPS is the most important driver of long-term stock price appreciation. EPS growth = engine of investment returns. Analysts forecast forward EPS; companies "beat" or "miss" these forecasts each earnings season.',
    metadata:{ 'Formula':'Net Profit ÷ Total Shares Outstanding','Importance':'Key driver of stock price long-term','Diluted EPS':'Includes effect of stock options and convertibles','Growth Metric':'YoY EPS growth rate is a key screen','Earnings Season':'Quarterly (US), quarterly/semi-annual (Indonesia)','Nvidia EPS (May 2026)':'Strong beat — key catalyst for Nasdaq rally' },
    links:[{title:'EPS Explained',url:'https://www.investopedia.com/terms/e/eps.asp'}],
    tags:['eps','earnings per share','laba per saham','profit','net income','earnings season','valuation'] }),

  makeNode({ id:'dividend-yield', label:'Dividend Yield', category:'metrics', country:'BOTH', importance:7,
    description:'Dividend Yield = Annual Dividend Per Share ÷ Stock Price. Tells you how much cash income you receive relative to your investment. A 4% yield means $40/year for every $1,000 invested. Higher yield can signal value OR distress (yield rises when stock price falls). "Yield trap" = high yield from a company about to cut its dividend.',
    metadata:{ 'Formula':'Annual Dividend ÷ Stock Price','US Market Average Yield':'~1.5–2%','High Yield Caution':'"Yield trap" — high yield may signal dividend cut risk','Dividend Aristocrats':'25+ years of consecutive dividend growth','Indonesia Examples':'BBCA, BBRI, TLKM — consistent dividend payers','Income Strategy':'4% yield × portfolio value = annual passive income estimate' },
    links:[{title:'Dividend Yield',url:'https://www.investopedia.com/terms/d/dividendyield.asp'}],
    tags:['dividend yield','dividen','passive income','yield trap','income investing','shareholder returns'] }),

  makeNode({ id:'pb-ratio', label:'P/B Ratio (Price-to-Book)', category:'metrics', country:'BOTH', importance:7,
    description:'Price-to-Book Ratio = Market Cap ÷ Book Value (Net Assets). Book value = assets minus liabilities — what shareholders would get if the company liquidated. P/B below 1 means you\'re buying $1 of assets for less than $1. Common in bank analysis (BCA trades at 5–7x book; US banks at 1–2x). Benjamin Graham favored P/B < 1.5 for deep value.',
    metadata:{ 'Formula':'Market Cap ÷ Book Value (Total Assets – Total Liabilities)','P/B < 1':'Potentially undervalued (asset value > market price)','Banking Sector':'Most useful for banks (assets are clearly defined)','BCA (BBCA) P/B':'~5–7x (premium for quality)','US Banks':'JPMorgan ~2x, Goldman ~1.3x','Benjamin Graham':'Favored P/B below 1.5 for value stocks' },
    links:[{title:'P/B Ratio',url:'https://www.investopedia.com/terms/p/price-to-bookratio.asp'}],
    tags:['pb ratio','price to book','book value','bank valuation','benjamin graham','asset value','equity'] }),

  makeNode({ id:'ev-ebitda', label:'EV/EBITDA', category:'metrics', country:'BOTH', importance:6,
    description:'Enterprise Value (EV) / EBITDA is a valuation ratio comparing the full takeover cost of a company (including debt) to its operating cash flow proxy. EV = Market Cap + Debt – Cash. EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization. Useful for comparing companies with different capital structures. EV/EBITDA below 10x is considered attractive in many sectors.',
    metadata:{ 'Formula':'(Market Cap + Total Debt – Cash) ÷ EBITDA','Why EV?':'Includes debt — better for comparing capital-structure differences','"Good" Range':'<10x (varies by sector/industry)','Best Used For':'Capital-intensive businesses, M&A deal analysis','Limitation':'Ignores capex (use EV/EBIT or EV/EBITDA–Capex instead)','Context':'Tech companies often trade at 20–40x EV/EBITDA' },
    links:[{title:'EV/EBITDA Guide',url:'https://www.investopedia.com/terms/e/ebitda-ev-multiple.asp'}],
    tags:['ev ebitda','enterprise value','ebitda','valuation','m&a','takeover','capital structure'] }),

  makeNode({ id:'roe', label:'ROE (Return on Equity)', category:'metrics', country:'BOTH', importance:8,
    description:'Return on Equity = Net Profit ÷ Shareholders\' Equity. Measures how efficiently a company generates profit from every dollar of shareholder capital. Warren Buffett requires >15% ROE for investment. Banks with high ROE (BCA ~25%) are very efficiently run. ROE can be inflated by debt (Du Pont analysis decomposes ROE into profit margin × asset turnover × financial leverage).',
    metadata:{ 'Formula':'Net Profit ÷ Shareholders Equity','Warren Buffett Threshold':'>15% ROE (as minimum bar)','BCA ROE':'~25% (very high for banking sector)','US Average ROE':'~15–20% (S&P 500 average)','Du Pont Decomposition':'Profit Margin × Asset Turnover × Equity Multiplier','Limitation':'High leverage can artificially inflate ROE' },
    links:[{title:'ROE Analysis',url:'https://www.investopedia.com/terms/r/returnonequity.asp'}],
    tags:['roe','return on equity','profitability','warren buffett','bca','efficiency','du pont','perbankan'] }),

  makeNode({ id:'roa', label:'ROA (Return on Assets)', category:'metrics', country:'BOTH', importance:7,
    description:'Return on Assets = Net Profit ÷ Total Assets. Measures how efficiently a company generates profit from all its assets. Particularly useful for comparing banks and asset-heavy industries. A ROA of 1%+ is considered good for banks. BCA has ROA of ~3.5% — among the best in Asia. ROA removes the effect of leverage (unlike ROE).',
    metadata:{ 'Formula':'Net Profit ÷ Total Assets','Bank Benchmark':'>1% ROA is good for banks','BCA ROA':'~3.5% (excellent for Asian banking)','Advantage over ROE':'Not affected by leverage levels','Capital-Intensive':'ROA is especially relevant for banks, utilities, manufacturers' },
    links:[{title:'ROA Guide',url:'https://www.investopedia.com/terms/r/returnonassets.asp'}],
    tags:['roa','return on assets','profitability','bank analysis','bca','efficiency','capital'] }),

  makeNode({ id:'nav', label:'NAV / NAB (Net Asset Value)', category:'metrics', country:'BOTH', importance:8,
    description:'Net Asset Value (NAV) in the US (or NAB = Nilai Aktiva Bersih in Indonesia) is the per-unit value of a mutual fund or ETF. NAV = (Total Assets – Total Liabilities) ÷ Number of Units. For open-end mutual funds in Indonesia, NAV is calculated daily after market close. When you buy reksa dana, you pay the next day\'s NAV (forward pricing). Rising NAV = fund is performing well.',
    metadata:{ 'Formula':'(Total Assets – Liabilities) ÷ Total Units','Indonesian Term':'NAB (Nilai Aktiva Bersih)','Calculated':'Daily after market close (for reksa dana)','ETF NAV':'ETF price trades close to NAV (arbitrage keeps it aligned)','Reksa Dana':'Investors buy/sell at NAV price (no trading premium/discount)','Total NAB Industry (2025)':'Rp 679 Trillion (record high)' },
    links:[{title:'NAV Explained',url:'https://www.investopedia.com/terms/n/nav.asp'},{title:'Reksa Dana NAB',url:'https://bibit.id/reksadana'}],
    tags:['nav','nab','nilai aktiva bersih','net asset value','reksa dana','etf','mutual fund','fund value'] }),

  makeNode({ id:'alpha-metric', label:'Alpha (α)', category:'metrics', country:'BOTH', importance:7,
    description:'Alpha measures a portfolio\'s or fund\'s performance relative to a benchmark (after adjusting for risk/beta). Positive alpha means the fund outperformed the benchmark by that amount; negative alpha means underperformance. Active fund managers aim to generate alpha. An alpha of +2% means the fund beat the benchmark by 2% after adjusting for market risk. Most active funds have negative alpha after fees.',
    metadata:{ 'Formula':'Alpha = Actual Return – (Risk-Free Rate + Beta × (Market Return – Risk-Free Rate))','Positive Alpha':'+2% = fund outperformed benchmark by 2% after risk adjustment','Negative Alpha':'Most active funds over long term have negative alpha (after fees)','Context':'Only fund managers who consistently generate alpha justify higher fees','Jensen\'s Alpha':'Quantifies manager skill' },
    links:[{title:'Alpha Explained',url:'https://www.investopedia.com/terms/a/alpha.asp'}],
    tags:['alpha','outperformance','fund manager','active management','capm','benchmark','jensen alpha'] }),

  makeNode({ id:'beta-metric', label:'Beta (β)', category:'metrics', country:'BOTH', importance:8,
    description:'Beta measures a stock\'s sensitivity to market movements. Beta = 1 means the stock moves in line with the market. Beta > 1 = more volatile than the market (e.g., tech stocks). Beta < 1 = less volatile (e.g., utilities, consumer staples). Beta = 0 = no correlation to market (e.g., gold in some periods). Essential for understanding portfolio risk.',
    metadata:{ 'Beta = 1':'Moves with the market (neutral)','Beta > 1':'More volatile than market (e.g., tech, small-caps)','Beta < 1':'Less volatile than market (e.g., utilities, consumer staples)','Beta = 0':'No market correlation (e.g., gold, some alternatives)','Beta < 0':'Moves opposite to market (rare; e.g., inverse ETFs)','Formula':'Covariance(stock, market) ÷ Variance(market)' },
    links:[{title:'Beta Explained',url:'https://www.investopedia.com/terms/b/beta.asp'}],
    tags:['beta','systematic risk','market sensitivity','volatility measure','capm','defensive stock','cyclical'] }),

  makeNode({ id:'sharpe-ratio', label:'Sharpe Ratio', category:'metrics', country:'BOTH', importance:7,
    description:'Sharpe Ratio = (Portfolio Return – Risk-Free Rate) ÷ Standard Deviation. Measures risk-adjusted return — how much excess return do you get per unit of risk taken. Sharpe > 1 is good; >2 is very good; >3 is excellent. The Sharpe ratio lets you compare two portfolios that have different risk levels. A 15% return with high volatility may be worse than a 12% return with low volatility.',
    metadata:{ 'Formula':'(Return – Risk-Free Rate) ÷ Standard Deviation','Good Sharpe':'> 1.0','Great Sharpe':'> 2.0 (hedge funds target this)','Risk-Free Rate':'T-Bill yield (US) or BI Rate (Indonesia)','Use':'Compare risk-adjusted returns across strategies','Limitation':'Assumes normal distribution of returns (fat tails not captured)' },
    links:[{title:'Sharpe Ratio',url:'https://www.investopedia.com/terms/s/sharperatio.asp'}],
    tags:['sharpe ratio','risk adjusted return','standard deviation','portfolio performance','volatility','risk free rate'] }),

  makeNode({ id:'standard-deviation', label:'Standard Deviation (Risk)', category:'metrics', country:'BOTH', importance:7,
    description:'Standard deviation (σ) measures how much an investment\'s returns vary from its average. Higher std dev = more volatile. A stock with 20% annual std dev is much riskier than one with 8%. Used in calculating Sharpe ratio, portfolio risk, and VaR. For an index fund tracking S&P 500, annual std dev is typically 15–20%. Individual stocks can have 30–50%+.',
    metadata:{ 'What It Measures':'Dispersion of returns around the average','Low Std Dev':'Stable, predictable returns','High Std Dev':'Volatile, unpredictable returns','S&P 500 Historical':'~15–20% annual standard deviation','Bond Std Dev':'Lower (~5–10%) than stocks','Tool':'Key input for Sharpe ratio, portfolio optimization' },
    links:[{title:'Standard Deviation in Investing',url:'https://icfs.com/financial-knowledge-center/risk-metrics-explained'}],
    tags:['standard deviation','volatility','risk measure','portfolio risk','dispersion','normal distribution'] }),

  makeNode({ id:'max-drawdown', label:'Maximum Drawdown', category:'metrics', country:'BOTH', importance:7,
    description:'Maximum Drawdown = the largest peak-to-trough decline in portfolio value over a time period. Example: S&P 500 drawdown in 2008–2009 was –57%. It answers: "What\'s the worst loss I could have experienced?" Critical for understanding the real risk of a strategy before committing. A strategy with 15% returns but –60% max drawdown requires enormous conviction to hold through.',
    metadata:{ 'Formula':'(Trough Value – Peak Value) ÷ Peak Value','S&P 500 2008–09 Drawdown':'–57%','COVID Crash 2020':'–34% (fast but recovered)','IHSG Jan 2026':'~–11.5% in 2 days','Recovery Time':'Key question: how long to recover from max drawdown?','Mental Challenge':'Most investors cannot withstand their theoretical max drawdown emotionally' },
    links:[{title:'Max Drawdown',url:'https://www.investopedia.com/terms/m/maximum-drawdown-mdd.asp'}],
    tags:['max drawdown','peak to trough','downside risk','worst case','bear market','mdd','portfolio risk'] }),

  makeNode({ id:'var', label:'VaR (Value at Risk)', category:'metrics', country:'BOTH', importance:6,
    description:'Value at Risk (VaR) estimates the maximum potential loss of a portfolio over a specified time period at a given confidence level. Example: 1-day VaR of $1M at 95% confidence means: "There\'s a 5% chance of losing more than $1M in one day." Used extensively by banks and risk managers. Criticized for underestimating "tail risk" during extreme events like 2008 or COVID.',
    metadata:{ 'Definition':'Max loss at given confidence level and time period','Example':'1-day 99% VaR = $5M: 1% chance of losing >$5M in a day','Time Horizons':'1-day (trading), 10-day (regulatory)','Methods':'Historical simulation, parametric, Monte Carlo','Limitation':'Underestimates tail risk; models failed in 2008','Alternative':'CVaR/Expected Shortfall captures tail risk better' },
    links:[{title:'VaR Explained',url:'https://www.investopedia.com/terms/v/var.asp'}],
    tags:['var','value at risk','tail risk','risk management','confidence interval','financial regulation','basel'] }),

  makeNode({ id:'free-cash-flow', label:'Free Cash Flow (FCF)', category:'metrics', country:'BOTH', importance:8,
    description:'Free Cash Flow = Operating Cash Flow – Capital Expenditures. The cash a company generates after maintaining/expanding its asset base. FCF is what remains to pay dividends, buy back shares, reduce debt, or make acquisitions. Warren Buffett focuses on FCF as the true measure of business value ("owner earnings"). Companies with strong FCF can self-fund growth without taking on debt.',
    metadata:{ 'Formula':'Operating Cash Flow – Capital Expenditures (CapEx)','Why Important?':'Cash is reality; earnings can be manipulated; FCF cannot','Warren Buffett':'Uses FCF as key metric — "owner earnings"','FCF Yield':'FCF ÷ Market Cap = like a P/E but cash-based','High FCF Companies':'Apple, Microsoft, Alphabet — generate $50B+ FCF annually','FCF Negative':'Many startups are FCF negative (burning cash to grow)' },
    links:[{title:'Free Cash Flow',url:'https://www.investopedia.com/terms/f/freecashflow.asp'}],
    tags:['free cash flow','fcf','owner earnings','warren buffett','cash generation','capital expenditure','valuation'] }),

];
