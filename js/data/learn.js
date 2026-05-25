/* ── ELI5 + Quiz data for interactive learning ──────────────
   ELI5: age-10 simple explanation + analogy for every entry.
   QUIZZES: 3 MCQ per key entry, with explanation on each answer.
   ─────────────────────────────────────────────────────────── */

window.ELI5 = {
  "compound-interest": {
    emoji: "🌱",
    simple: "Imagine you plant Rp 1,000,000 in a bank at 10% interest. After year 1 you get Rp 100,000 extra — now you have Rp 1,100,000. In year 2 you earn 10% of Rp 1,100,000 = Rp 110,000. Your interest is growing! That is compound interest: you earn interest on your interest.",
    analogy: "🏔️ Like a snowball rolling downhill — the bigger it gets, the faster it grows. Start early and let it roll for decades!"
  },
  "inflation": {
    emoji: "🍜",
    simple: "Inflation means prices go up over time. If a bowl of mie goreng costs Rp 10,000 today but Rp 11,000 next year, prices inflated 10%. Your Rp 10,000 now only buys what Rp 9,090 used to buy. Money sitting in a jar 'shrinks' because of inflation.",
    analogy: "🧊 Like ice melting — leave your cash alone and it slowly becomes worth less, even though the number on the bills does not change."
  },
  "liquidity": {
    emoji: "💧",
    simple: "Liquidity = how quickly you can turn something into cash. Money in your wallet? Instant. Savings account? Minutes. A house? Months — you need a buyer, a lawyer, and paperwork. High liquidity = fast to turn into cash.",
    analogy: "🚰 Think of it like a tap. A liquid asset flows instantly when you open it. An illiquid asset is like concrete in the tap — it takes time and effort to turn into cash."
  },
  "opportunity-cost": {
    emoji: "🚪",
    simple: "Every choice has a hidden cost. If you spend Rp 100,000 on a video game today, the opportunity cost is what that money could have grown into — maybe Rp 200,000 in 5 years if invested. You always give up the next-best option when you choose something.",
    analogy: "🍕 If your family orders pizza, the opportunity cost is the fried chicken you could have had instead. Money choices work the same way — every yes is a no to something else!"
  },
  "purchasing-power": {
    emoji: "🛒",
    simple: "Purchasing power = how much stuff your money can actually buy. Rp 100,000 today might buy 10 kg of rice. In 5 years with inflation, that same Rp 100,000 might only buy 8 kg. Your money's 'buying strength' shrank even though the number stayed the same.",
    analogy: "📏 Like a ruler that slowly shrinks every year. The number '100,000' looks the same, but it measures less and less value each year inflation runs."
  },
  "risk-vs-return": {
    emoji: "⚖️",
    simple: "Higher rewards almost always come with higher risk. A savings account gives 3-4% return — very safe, almost zero risk. Stocks might give 10-15% return — but could also crash 30%. You decide: how much risk can you handle for how much reward?",
    analogy: "🎯 Like a dart contest. Throwing from 1 metre = easy to hit, tiny prize. Throwing from 10 metres = hard, might miss, but huge prize. Distance is risk. Prize is return."
  },
  "rule-of-72": {
    emoji: "🔢",
    simple: "A magic shortcut: divide 72 by your interest rate to find how many years to double your money. At 6% per year: 72 ÷ 6 = 12 years. At 9%: 72 ÷ 9 = 8 years. Works for inflation too — at 4% inflation, prices double in 72 ÷ 4 = 18 years.",
    analogy: "⏰ It is a cheat code for estimating growth. No calculator needed — just divide 72 by the percentage and you get a very accurate answer!"
  },
  "diversification": {
    emoji: "🧺",
    simple: "Diversification means spreading your money across many different investments. If all your money is in one company and it collapses, you lose everything. But spread across 20 companies and one failing only costs you 5%.",
    analogy: "🥚 Jangan taruh semua telur di satu keranjang! If you drop one basket, you still have eggs in all the others. Spreading investments is exactly the same idea."
  },
  "stock-saham": {
    emoji: "📈",
    simple: "When you buy a stock (saham), you buy a tiny piece of ownership in a real company. If Tokopedia has 1 billion shares and you buy 1,000, you own 0.0001% of it. When the company grows and earns more profit, other people want your piece — price goes up!",
    analogy: "🍕 Like buying 1 slice of a giant pizza restaurant. If the restaurant gets famous and super profitable, your 1 slice becomes more and more valuable."
  },
  "bond-obligasi": {
    emoji: "📜",
    simple: "A bond is like lending money to the government or a company. They promise to pay you regular interest (called coupon) and return your full money after a set time. Safer than stocks, but lower returns.",
    analogy: "📝 Like being the bank for someone else. You lend Rp 1,000,000 and they pay you Rp 60,000/year interest, then return your Rp 1,000,000 after 5 years. Simple and predictable!"
  },
  "reksa-dana": {
    emoji: "📦",
    simple: "A mutual fund (reksa dana) collects money from thousands of investors and a professional manager invests it all together. You do not need to know which stocks to buy — the manager does it for you. Like a food court where you pay one fee and a chef picks all the best meals.",
    analogy: "🍱 Imagine 100 friends pool Rp 1,000,000 each (= Rp 100 million total) and hire a chef (fund manager) to shop and cook the best meals. You own 1/100th of everything he buys."
  },
  "etf": {
    emoji: "🧺",
    simple: "An ETF (Exchange Traded Fund) is a basket of many stocks you can buy as one single item on the stock exchange. Instead of buying 500 individual US companies, you buy one S&P 500 ETF and instantly own a tiny piece of all 500. Super easy diversification!",
    analogy: "🍱 Like a bento box — instead of buying rice, fish, and vegetables from 500 different restaurants, you buy one box that has a bit of everything perfectly prepared."
  },
  "cryptocurrency": {
    emoji: "🔐",
    simple: "Cryptocurrency is digital money that exists only on computers and uses complex math (called blockchain) to work without any bank or government controlling it. Bitcoin was the first. Very risky — prices can triple in a year or crash 80% in months.",
    analogy: "🎰 Like a digital casino chip. Sometimes worth a lot, sometimes nearly nothing. Exciting but very risky. Only use money you can afford to completely lose without crying."
  },
  "options": {
    emoji: "🎟️",
    simple: "An options contract gives you the RIGHT (not the obligation) to buy or sell something at a set price before a deadline. Like buying a ticket to maybe watch a concert — you can use it or throw it away. Very complex — most beginners lose money with options.",
    analogy: "🏠 Imagine paying Rp 5 million for the right to buy a house at Rp 1 billion within 1 year. If prices rise to Rp 1.5 billion, you profit big. If prices fall, you only lose the Rp 5 million deposit."
  },
  "reit-dire": {
    emoji: "🏢",
    simple: "A REIT (called DIRE in Indonesia) lets you invest in buildings — offices, malls, hospitals — without buying the whole building yourself. You earn rental income as regular dividends. Real estate investing for anyone with as little as Rp 100,000!",
    analogy: "🏗️ Like owning one brick of a skyscraper. As the whole building earns rent from tenants, you get your tiny share of the rental income every quarter."
  },
  "sbn-ori": {
    emoji: "🇮🇩",
    simple: "SBN/ORI are bonds sold by the Indonesian government directly to ordinary citizens online. The government needs money to build roads, schools, hospitals — they borrow from you and pay you interest. Very safe because the government guarantees it.",
    analogy: "🏛️ Like lending money to your school to build a new library. The school promises to pay you back with interest. The government is even more reliable than your school — it has the whole country's tax revenues!"
  },
  "ihsg": {
    emoji: "📊",
    simple: "IHSG (Indeks Harga Saham Gabungan) is Indonesia's stock market index — a single number representing hundreds of Indonesian companies combined. When IHSG goes from 6,000 to 7,000, most Indonesian stocks rose about 17%. It is the temperature gauge of Indonesia's economy.",
    analogy: "📋 Like a class report card for all Indonesian companies combined. One number tells you whether the whole class did well (index up) or badly (index down) on that day."
  },
  "bi-rate": {
    emoji: "🏦",
    simple: "BI Rate is the interest rate set by Bank Indonesia — Indonesia's central bank. When BI Rate goes UP, borrowing gets more expensive, people spend less, the economy slows, but inflation falls. When it goes DOWN, borrowing is cheaper, economy speeds up, but inflation may rise.",
    analogy: "🚗 The BI Rate is like the accelerator/brake pedal for the whole Indonesian economy. High rate = brakes. Low rate = accelerate."
  },
  "rupiah-idr": {
    emoji: "💰",
    simple: "The Rupiah (Rp) is Indonesia's money. When people say 'Rupiah weakened' (e.g., from Rp 15,000 to Rp 17,700 per US Dollar), it means you need MORE Rupiah to buy 1 Dollar. This makes imported goods like iPhones, fuel, and food more expensive for Indonesians.",
    analogy: "🍎 Imagine an apple costs $1. At Rp 15,000 per dollar, you pay Rp 15,000. At Rp 17,700 per dollar, same apple now costs Rp 17,700 — 18% more expensive because of the weaker Rupiah!"
  },
  "lps": {
    emoji: "🛡️",
    simple: "LPS (Lembaga Penjamin Simpanan) protects your savings in Indonesian banks. If a bank goes bankrupt, LPS pays you back up to Rp 2 billion. Like insurance for your bank account. That is why your money at a licensed Indonesian bank is safe even if the bank collapses.",
    analogy: "🦺 Like a life jacket on a boat. You hope you never need it, but if the boat sinks LPS saves your savings up to Rp 2 billion. Always check that your bank is registered with LPS!"
  },
  "ojk": {
    emoji: "👮",
    simple: "OJK (Otoritas Jasa Keuangan) is Indonesia's financial services regulator. They make sure banks, insurance companies, and investment apps follow the rules and do not cheat you. Always check if an investment platform is registered with OJK before putting in any money!",
    analogy: "🏫 Like a school principal for all financial companies. OJK sets the rules, monitors behaviour, and punishes those who cheat or break the law to protect ordinary investors like you."
  },
  "idx-bei": {
    emoji: "🏛️",
    simple: "IDX (Indonesia Stock Exchange / Bursa Efek Indonesia) is the marketplace where you buy and sell Indonesian company shares. Like a giant online marketplace, but for stocks instead of products. Open Mon-Fri during trading hours.",
    analogy: "🏪 Like a traditional market (pasar) with thousands of stalls. Each stall is a company. You can walk in and buy/sell pieces of any company. IDX is the building that hosts all these stalls and makes sure trades are fair."
  },
  "msci-reclassification": {
    emoji: "🌍",
    simple: "MSCI creates global indexes that huge international investment funds follow. When MSCI upgrades Indonesia's market status, billions of dollars of foreign investment automatically flows in because global funds must match the index. Like getting promoted to a higher league!",
    analogy: "🏆 Like a football team being promoted from Liga 1 to the Asian Champions League. Suddenly bigger audiences watch you, more money flows in, and your profile rises worldwide."
  },
  "cpi": {
    emoji: "🛒",
    simple: "CPI (Consumer Price Index) is the government's official inflation measurement. They track the price of hundreds of common items (rice, fuel, medicine, rent) every month. If this basket costs 3% more than last year, CPI inflation = 3%.",
    analogy: "🧾 Like your family's monthly grocery bill. If the same groceries cost Rp 2,000,000 this month but cost Rp 1,940,000 last year, prices went up 3% — that is your personal CPI!"
  },
  "gdp": {
    emoji: "🗺️",
    simple: "GDP (Gross Domestic Product) counts the total value of everything a country makes in a year — all goods (phones, rice, cars) and services (haircuts, banking, teaching). GDP growth of 5% means the whole economy made 5% more value this year than last year.",
    analogy: "📊 Like your family's total income. If your family earned Rp 100 million last year and Rp 105 million this year, your 'family GDP' grew 5%. More income = more to spend, invest, and save!"
  },
  "interest-rate": {
    emoji: "💳",
    simple: "Interest rate = the price of borrowing money. Borrow Rp 1,000,000 at 10% per year and you pay Rp 100,000 extra per year. High rates = expensive to borrow = people spend less = economy slows. Low rates = cheap to borrow = economy speeds up.",
    analogy: "🚕 Like a taxi fare. When taxis are cheap (low rate), everyone takes taxis everywhere. When expensive (high rate), people walk or stay home. Low interest rates = more economic activity happening."
  },
  "monetary-policy": {
    emoji: "🎮",
    simple: "Monetary policy is how the central bank (Bank Indonesia or US Federal Reserve) controls the economy using interest rates and money supply. Economy too hot (high inflation)? Raise rates to cool it. Economy too cold (recession)? Lower rates to heat it up.",
    analogy: "🌡️ Like a home thermostat. Economy too hot (inflation)? Turn up the AC (raise rates). Too cold (recession)? Turn on the heater (lower rates, add money to the system)."
  },
  "fiscal-policy": {
    emoji: "🏛️",
    simple: "Fiscal policy = the government's decisions about how much to tax and how much to spend. When the economy is struggling, the government spends more on infrastructure and gives people money to create jobs. When inflation is high, they might cut spending to cool things down.",
    analogy: "🍳 The government is like a chef. Fiscal policy is adjusting the recipe — add more money (spending) when the economy needs fuel, reduce ingredients when things get overcooked (inflation)."
  },
  "qe-qt": {
    emoji: "🖨️",
    simple: "Quantitative Easing (QE) = the central bank creates new money digitally and uses it to buy bonds from banks, pumping money into the economy. QT (Quantitative Tightening) = the opposite — removing money to fight inflation. The Fed used both massively in 2020-2024.",
    analogy: "🌊 QE is like opening a dam to flood the economy with money. QT is closing the dam to drain some away and prevent floods (runaway inflation). Too much flooding = inflation; too much draining = recession."
  },
  "yield-curve": {
    emoji: "📈",
    simple: "The yield curve shows interest rates for bonds of different time periods. Normally 10-year bonds pay more than 1-year bonds (you deserve more for waiting longer). When short-term rates exceed long-term rates — called an 'inverted yield curve' — it has predicted every US recession in 50+ years!",
    analogy: "⏳ Like salary at work: you normally earn more if you commit to working longer. But if short-term workers suddenly earn more than long-term workers, something weird is happening — that is the yield curve inversion warning signal."
  },
  "bear-market": {
    emoji: "🐻",
    simple: "A bear market = prices have fallen 20% or more from their recent peak and fear rules. Bears swipe their claws DOWNWARD. Most stocks fall, news is scary, and many investors panic-sell. Usually lasts 9-16 months on average.",
    analogy: "❄️ Like winter. Everything is cold, dark, and scary. But spring (bull market) always comes eventually. Patient investors who buy cheap in winter profit the most when spring arrives!"
  },
  "bull-market": {
    emoji: "🐂",
    simple: "A bull market = prices have risen 20% or more from their bottom and optimism is high. Bulls toss their horns UPWARD. Stocks rise, economic news is positive, and investors feel confident. Usually lasts 2-5 years on average.",
    analogy: "☀️ Like summer. Everything is warm, bright, and growing. Prices rise, profits are easy, optimism is everywhere. Enjoy it — but always prepare for winter (bear market) eventually coming back!"
  },
  "circuit-breaker": {
    emoji: "⚡",
    simple: "A circuit breaker is an automatic pause in stock trading when prices fall too fast. On IDX, if IHSG falls 5% in a day, trading pauses for 30 minutes. This prevents panic selling from spiraling completely out of control — like a timeout during a heated argument.",
    analogy: "🚦 Like emergency traffic lights at a chaotic intersection. When things get dangerously fast, the lights go red, everyone stops, calms down, then restarts more carefully and orderly."
  },
  "ipo": {
    emoji: "🚀",
    simple: "IPO (Initial Public Offering) = when a private company first sells shares to the public on the stock exchange. Before IPO only founders and private investors own it. After IPO anyone can buy shares. It is how companies raise big money to grow fast.",
    analogy: "🏫 Like a private school going public. Before: only a few wealthy families attend. After opening to the public: anyone can enrol (buy shares). The school gets money to expand, students (investors) get ownership."
  },
  "market-cap": {
    emoji: "💎",
    simple: "Market Cap = the total value of all a company's shares added together. If a company has 1 billion shares each worth Rp 5,000, market cap = Rp 5 trillion. It is the market's answer to 'how big is this company?' BBCA, Indonesia's biggest bank, has a market cap over Rp 800 trillion!",
    analogy: "⚖️ Like weighing all slices of a pizza together. If each of 8 slices is worth Rp 10,000, the whole pizza is worth Rp 80,000. Market cap = price per share × total number of shares in existence."
  },
  "price-discovery": {
    emoji: "🔍",
    simple: "Price discovery = the stock market's process of finding the 'right' price through millions of buyers and sellers negotiating every second. If 1,000 people want to buy at Rp 9,000 and 1,000 want to sell at Rp 9,000 — deal done, price discovered!",
    analogy: "🛍️ Like haggling at a traditional market (pasar). Seller says Rp 50,000. Buyer says Rp 30,000. They meet at Rp 40,000. That negotiated price IS the discovered price — the market works the same way but with millions of people simultaneously."
  },
  "trading-volume": {
    emoji: "📊",
    simple: "Trading volume = how many shares were bought and sold in a given day. High volume means many people are trading = price moves are more meaningful and trustworthy. Low volume means few people care about this stock today — price moves may be misleading.",
    analogy: "📢 If 1 person says 'this food is great' (low volume), maybe ignore it. If 1,000 people say it (high volume), the opinion is trustworthy. High trading volume = price movement has real market conviction behind it."
  },
  "alpha": {
    emoji: "⭐",
    simple: "Alpha measures how much better (or worse) your investment did compared to the overall market. If IHSG rose 10% and your portfolio rose 14%, your alpha is +4%. Positive alpha = you beat the market. Every professional fund manager's goal is to generate consistent positive alpha.",
    analogy: "🏃 If your class average exam score is 75 and you scored 85, your 'alpha' is +10. You outperformed the average by 10 points. In investing, positive alpha means you beat the market benchmark."
  },
  "beta": {
    emoji: "🎢",
    simple: "Beta measures how much your investment moves compared to the market. Beta = 1: moves exactly with market. Beta = 2: moves TWICE as much (double gain or double loss). Beta = 0.5: moves half as much. High beta = exciting roller coaster. Low beta = smooth kiddie ride.",
    analogy: "🎢 The market is a regular roller coaster. A beta-2 stock is an extreme roller coaster — twice the thrills AND twice the drops. A beta-0.5 stock is a gentle carousel. You choose based on how strong your stomach is!"
  },
  "dividend-yield": {
    emoji: "💵",
    simple: "Dividend = 'thank you money' a company pays shareholders from its profits. Dividend yield = that payment as a percentage of stock price. If stock costs Rp 10,000 and pays Rp 500/year dividend, yield = 5%. It is your passive income rate from that stock.",
    analogy: "🏠 Exactly like rental yield on a house. If your house costs Rp 1 billion and rents for Rp 50 million/year, rental yield = 5%. Stocks with dividends work identically — you earn income just for owning them!"
  },
  "eps": {
    emoji: "💰",
    simple: "EPS (Earnings Per Share) = how much profit a company made for each share in existence. Company earns Rp 10 billion profit. Has 100 million shares. EPS = Rp 100 per share. Higher EPS = more profit generated per share = often more valuable investment.",
    analogy: "🍕 If a pizza shop earns Rp 10 million profit and has 10 equal partners, each partner's 'EPS' = Rp 1 million. The more profit the shop makes, the higher each partner's EPS — and the more valuable their partnership."
  },
  "nav": {
    emoji: "📦",
    simple: "NAV (Net Asset Value) = the price of one unit in a mutual fund. If a reksa dana owns assets worth Rp 100 billion and has 50 million units outstanding, NAV = Rp 2,000 per unit. NAV is recalculated every trading day as investments rise and fall.",
    analogy: "🍕 If a whole pizza is worth Rp 80,000 and is cut into 8 equal slices, each slice's NAV = Rp 10,000. If the pizza's ingredients become more expensive, the pizza is worth Rp 96,000 — each slice NAV rises to Rp 12,000."
  },
  "pe-ratio": {
    emoji: "⚖️",
    simple: "P/E Ratio = stock price divided by annual earnings per share. P/E of 20 means you pay 20 years of current profits to own the stock. Low P/E can mean cheap/undervalued. High P/E often means investors expect fast future growth (like tech companies).",
    analogy: "🏠 If you buy a food stall for Rp 200 million and it earns Rp 20 million/year profit, your payback period is 10 years = P/E of 10. Cheaper stalls (lower P/E) recover your investment faster!"
  },
  "roe": {
    emoji: "💡",
    simple: "ROE (Return on Equity) = how efficiently a company uses shareholder money to generate profit. ROE of 20% means for every Rp 100 of shareholder money, the company earns Rp 20 profit. Higher ROE = more efficient business = usually better investment quality.",
    analogy: "🏭 Factory A uses Rp 100 million to produce Rp 120 million worth of goods (ROE 20%). Factory B uses Rp 100 million to produce Rp 105 million (ROE 5%). Factory A is clearly the better-run business!"
  },
  "sharpe-ratio": {
    emoji: "⚖️",
    simple: "Sharpe ratio measures return relative to risk taken. A Sharpe ratio above 1 is good — you earned solid returns without taking excessive risk. Below 1 means the risk was not worth the reward. Formula: (your return − safe return) ÷ your volatility.",
    analogy: "🍕 Not just how much pizza you ate — how much per calorie consumed. Eating 5 slices but gaining 5 kg (low Sharpe). Eating 3 slices and gaining 0.3 kg (high Sharpe). Efficiency of reward vs cost is what matters!"
  },
  "buy-and-hold": {
    emoji: "🐢",
    simple: "Buy and hold = buy quality investments and keep them for years or decades without panicking and selling during market crashes. Warren Buffett's favourite strategy. Simple, low cost, requires patience. History shows it beats most active trading strategies over 20+ years.",
    analogy: "🌳 Like planting a mango tree. You do not dig it up every time it fails to bear fruit. You water it, wait years, and eventually harvest an abundant crop every season — year after year."
  },
  "dca": {
    emoji: "📅",
    simple: "DCA (Dollar Cost Averaging / cicil investasi) = invest a fixed amount every month regardless of price. When price is high you buy fewer units. When price is low you buy more. Over time you average out price swings and remove the stress of trying to 'time the market perfectly.'",
    analogy: "🛒 Like buying 1 kg of rice every month no matter the price. When rice is cheap you get full value; when expensive you still buy 1 kg. Your average cost over time beats people who try to buy only at the lowest price."
  },
  "growth-investing": {
    emoji: "🚀",
    simple: "Growth investing = buying shares of companies growing revenues fast, even if they are not profitable yet. Hope: they grow huge and your investment multiplies 10x. Risk: they might fail. Early Amazon investors made 1,000x returns. Many others lost everything on failed startups.",
    analogy: "🌱 Like investing in a talented young footballer. Pay a lot now because they might become a superstar. Very risky — most players never make it to the top league — but the reward if they do is extraordinary."
  },
  "index-investing": {
    emoji: "🗺️",
    simple: "Index investing = buy ALL the companies in a market through one index fund or ETF. Instead of trying to pick winners (and often picking wrong), you ride the whole market. Over 20 years, index funds beat 90%+ of professional fund managers. Simple, cheap, and powerful!",
    analogy: "🎰 Instead of betting on one number at roulette, index investing is like owning the entire casino. You profit as long as people keep playing, regardless of who wins or loses on any given day."
  },
  "portfolio-rebalancing": {
    emoji: "⚖️",
    simple: "Rebalancing = adjusting your investments back to your target mix periodically. If you want 60% stocks / 40% bonds, but stocks grew to 70%, you sell some stocks and buy bonds to restore 60/40. This automatically sells high and buys low — smart discipline!",
    analogy: "🧁 Like a recipe that calls for 60% flour and 40% sugar. If someone accidentally added too much flour, you add more sugar to rebalance the recipe. Regular rebalancing keeps your portfolio 'recipe' consistent."
  },
  "value-investing": {
    emoji: "🔍",
    simple: "Value investing = finding great companies whose stock is temporarily 'on sale' (trading below their real intrinsic worth). Like Warren Buffett — find undervalued companies, buy a lot, and wait patiently for the market to recognise their true value. Requires deep research and patience.",
    analogy: "🛍️ Like finding a Rp 500,000 branded shirt being sold for Rp 200,000 at clearance. You buy it because you KNOW its real value. Wait for someone else to realise it — then sell at a huge profit!"
  },
  "federal-reserve": {
    emoji: "🏦",
    simple: "The Federal Reserve (Fed) is America's central bank — the most powerful financial institution on Earth. When the Fed changes US interest rates, money flows worldwide change. Every central bank, including Bank Indonesia, must respond to Fed decisions that affect the entire global economy.",
    analogy: "🌊 The Fed is like a giant rock dropped in a lake. Its ripples spread to every shore — including Indonesia. When the Fed makes a big move, every country's economy and currency feels the waves."
  },
  "sp500": {
    emoji: "📈",
    simple: "S&P 500 tracks the 500 biggest US companies (Apple, Microsoft, Amazon, NVIDIA, Google, etc.). It is the world's most watched market benchmark. If your investment beats the S&P 500 over 10 years, you genuinely outperformed most professional fund managers. Very hard to do consistently!",
    analogy: "🏆 Like a scoreboard showing the combined score of the 500 best US company teams. If your portfolio grows faster than this scoreboard over many years, you beat the pros. Most people — and even most professionals — cannot do it reliably."
  },
  "sec": {
    emoji: "👮",
    simple: "The SEC (Securities and Exchange Commission) is America's stock market police. They force public companies to publish honest financial reports, prosecute insider traders, and protect regular investors from fraud. Indonesia's OJK was modeled partly on the SEC.",
    analogy: "🏛️ Like a referee in a sport. The SEC makes sure all players follow the rules, checks for cheating, and penalises those who break the law — keeping the stock market fair for everyone, not just the powerful."
  },
  "cftc": {
    emoji: "⚖️",
    simple: "CFTC (Commodity Futures Trading Commission) regulates US futures and derivatives markets — contracts for oil, gold, wheat, currencies, and cryptocurrency futures. They prevent market manipulation in these complex markets that ordinary investors rarely touch directly.",
    analogy: "👮 Like the SEC but for 'bets on future prices' rather than stocks. If someone tries to corner the market for oil futures and manipulate prices globally, the CFTC investigates, sues, and stops them."
  },
  "fdic": {
    emoji: "🛡️",
    simple: "FDIC (Federal Deposit Insurance Corporation) insures US bank accounts up to $250,000 per person per bank. If your US bank goes bankrupt (like Silicon Valley Bank did in 2023), FDIC pays you back immediately — no waiting, no loss up to the limit.",
    analogy: "🏦 Like a guarantee sticker on your bank. 'FDIC insured' means your money is protected even if the bank fails. Indonesia's equivalent is LPS. Both protect ordinary savers from losing their hard-earned deposits."
  },
  "us-treasuries": {
    emoji: "📋",
    simple: "US Treasury bonds are IOUs from the US government — the safest investment in the world (the US has never defaulted on its debt). Lower returns than stocks because the risk is near-zero. The yield on 10-year US Treasuries is used worldwide as the 'risk-free rate' benchmark.",
    analogy: "🏠 Like lending money to the wealthiest, most reliable person in the world. You earn less interest than from a stranger because the risk is essentially zero. Treasuries are the gold standard for safety in global finance."
  },
  "genius-act": {
    emoji: "📜",
    simple: "The GENIUS Act (2025) was America's first major law regulating stablecoins — digital tokens pegged 1:1 to the US Dollar (like USDC). It set rules for who can issue them, how they must be backed by real money, and how to protect users. A huge milestone for crypto legitimacy.",
    analogy: "📏 Like creating traffic laws for a new type of vehicle. Before the GENIUS Act, stablecoins were digital cars driving with no traffic rules at all. Now there are speed limits, licenses, and safety standards that protect everyone."
  }
};

/* ── Quiz questions (3 per key entry) ────────────────────── */
window.QUIZZES = {
  "compound-interest": { questions: [
    { q: "You save Rp 1,000,000 at 10% compound interest for 2 years. How much do you have?",
      options: ["Rp 1,100,000","Rp 1,200,000","Rp 1,210,000","Rp 2,000,000"], correct: 2,
      exp: "Year 1: Rp 1,000,000 × 1.10 = Rp 1,100,000. Year 2: Rp 1,100,000 × 1.10 = Rp 1,210,000. The extra Rp 10,000 vs simple interest is 'interest on interest' — the magic of compounding!" },
    { q: "What is the KEY difference between compound and simple interest?",
      options: ["Compound is only for savings","With compound, you earn interest on previous interest too","Simple interest grows faster long-term","They produce the same result"], correct: 1,
      exp: "Simple interest: you only earn on the original amount every year. Compound interest: your interest also earns interest, creating exponential growth over time. This is the most powerful force in personal finance!" },
    { q: "Why is starting to invest at age 20 much better than age 30?",
      options: ["Young people get higher rates","Prices are lower when young","More years of compounding = exponential difference in final amount","It is not actually better to start early"], correct: 2,
      exp: "At 8% return: starting at 20 gives 45 years of compounding (money grows ~32×). Starting at 30 gives 35 years (grows ~14×). Those 10 extra early years MORE THAN DOUBLED the final wealth — start as early as possible!" }
  ]},
  "inflation": { questions: [
    { q: "Inflation is 5%. You keep Rp 1,000,000 in a jar for 1 year. What can it buy?",
      options: ["More — inflation helps money grow","Exactly the same","About 5% less in goods","Rp 1,050,000 worth of goods"], correct: 2,
      exp: "Inflation means prices rose 5%, so your Rp 1,000,000 now only buys what used to cost Rp 952,381 at last year's prices. Your money's buying power shrank by about 5% — even though the number did not change." },
    { q: "Savings account earns 4% interest. Inflation is 6%. What is your REAL return?",
      options: ["+10%","+4%","-2%","0%"], correct: 2,
      exp: "Real return = nominal rate − inflation = 4% − 6% = −2%. Your bank balance increased, but your actual purchasing power DECREASED 2%. This is why your investment return must beat inflation to grow real wealth." },
    { q: "What is the PRIMARY cause of inflation?",
      options: ["Banks charging too much interest","Too much money chasing too few goods/services","Stock market going up","People saving too much"], correct: 1,
      exp: "When more money circulates in the economy but the supply of goods/services has not kept up, prices rise as everyone competes to buy the same limited things. Central banks fight this by reducing money supply or raising rates." }
  ]},
  "rule-of-72": { questions: [
    { q: "At 8% annual return, how many years to double your money? (Use Rule of 72)",
      options: ["5 years","9 years","14 years","18 years"], correct: 1,
      exp: "72 ÷ 8 = 9 years. The Rule of 72 is a quick approximation — the mathematically precise answer is 9.01 years. Very accurate for rates between 4-12%!" },
    { q: "You want to double your money in 6 years. What annual return do you need?",
      options: ["6%","9%","12%","14%"], correct: 2,
      exp: "Rule of 72 reversed: rate = 72 ÷ years = 72 ÷ 6 = 12%. You need about 12% annual return to double in 6 years. Indonesian stocks (IHSG) have historically averaged about 10-12% annually over long periods." },
    { q: "At 3% annual inflation, how long until prices DOUBLE?",
      options: ["12 years","24 years","36 years","6 years"], correct: 1,
      exp: "72 ÷ 3 = 24 years. The Rule of 72 works for inflation too! At 3% inflation, prices double every 24 years. This shows exactly why long-term investing — not just saving — is critical for preserving wealth." }
  ]},
  "diversification": { questions: [
    { q: "You invest all Rp 10,000,000 in one company. It goes bankrupt. How much do you lose?",
      options: ["0% — diversification protects you","25%","50%","100% of your investment"], correct: 3,
      exp: "100% loss! With no diversification, one company's failure destroys your entire portfolio. Spreading across 10 companies means one bankruptcy only costs you 10%. Spread across 50 companies = only 2% loss from one failure." },
    { q: "Which portfolio is the MOST diversified?",
      options: ["5 Indonesian tech stocks","1 Indonesian stock + 1 US stock + 1 gold ETF + 1 bond fund","10 different cryptocurrencies","3 different Indonesian bank stocks"], correct: 1,
      exp: "True diversification requires different asset TYPES (stocks, bonds, gold), different COUNTRIES (Indonesia, US), and different INDUSTRIES. Multiple assets of the same type (all crypto, all tech) are highly correlated — they all crash together!" },
    { q: "What is the risk of OVER-diversification?",
      options: ["You lose all your money","Returns converge to the market average — no chance to beat it","You cannot rebalance","Transaction fees become negative"], correct: 1,
      exp: "Owning every stock means you get exactly market returns — no better, no worse. That is actually fine for most investors! But focused investors who research deeply may prefer fewer positions to have a chance of outperforming the index." }
  ]},
  "stock-saham": { questions: [
    { q: "You buy 1,000 shares of BBCA at Rp 9,000. BBCA rises to Rp 11,000. What is your profit?",
      options: ["Rp 1,000,000","Rp 2,000,000","Rp 9,000,000","Rp 11,000,000"], correct: 1,
      exp: "Profit = (Rp 11,000 − Rp 9,000) × 1,000 shares = Rp 2,000 × 1,000 = Rp 2,000,000. Plus any dividends paid while you held. A 22% gain in share price turned your Rp 9,000,000 into Rp 11,000,000!" },
    { q: "What does owning stock actually mean legally?",
      options: ["You lent money to the company","You have a partial ownership stake with voting rights","The company must pay guaranteed returns","You can replace the CEO whenever you want"], correct: 1,
      exp: "Stockholders are part-owners of the company — you can vote on major decisions, receive dividends from profits, and your share value rises/falls with company performance. If the company grows, you grow too!" },
    { q: "Safest way for a beginner to invest in stocks?",
      options: ["Pick the hottest trending stock on social media","Invest all at once in the company you like most","Invest regularly in a diversified stock index ETF (LQ45 or MSCI ETF)","Buy stocks that rose the most last month"], correct: 2,
      exp: "For beginners, a diversified index ETF automatically spreads risk across many companies, charges very low fees, and historically grows over long periods without requiring any stock-picking expertise. Simple and proven!" }
  ]},
  "ihsg": { questions: [
    { q: "IHSG falls from 7,300 to 5,840. What percentage did it fall?",
      options: ["10%","15%","20%","25%"], correct: 2,
      exp: "(7,300 − 5,840) ÷ 7,300 = 1,460 ÷ 7,300 = exactly 20%. This is the official bear market definition! A 20%+ decline from recent peak = bear market territory." },
    { q: "Foreign investors selling Indonesian stocks typically causes:",
      options: ["IHSG and Rupiah both strengthen","IHSG falls AND Rupiah weakens (USD/IDR rises)","Only IHSG falls, Rupiah unaffected","Only Rupiah weakens, IHSG unaffected"], correct: 1,
      exp: "Foreign investors selling converts Rupiah back to USD — increasing USD demand and Rupiah supply → Rupiah weakens. Simultaneously, their stock selling drives share prices down → IHSG falls. Both happen together, amplifying each other." },
    { q: "IHSG at 6,162 in 2026 is down 14% from its 2024 peak. Primary cause?",
      options: ["Indonesian companies became unprofitable","Strong USD at Rp 17,700+ triggered capital outflows from emerging markets","Too many IPOs flooded the market","Government banned foreign investment"], correct: 1,
      exp: "When USD strengthens (high Fed rates, global uncertainty), emerging market assets become less attractive vs USD-denominated US assets. Foreign capital flows OUT of Indonesia → both IHSG falls and Rupiah weakens simultaneously." }
  ]},
  "bi-rate": { questions: [
    { q: "Bank Indonesia raises BI Rate from 5.25% to 6%. What typically happens to stocks?",
      options: ["Stocks always surge upward","Stocks often fall — borrowing costs more, company profits compress","Nothing changes","Stocks must rise by exactly the rate increase"], correct: 1,
      exp: "Higher BI Rate → more expensive for companies to borrow → lower future profits → lower valuations → stocks typically fall. Also, bonds become more attractive vs stocks at higher rates. The relationship is usually: rates up = stocks down." },
    { q: "BI Rate at 5.25% in 2026. Why did BI keep rates elevated?",
      options: ["To cool an overheating economy","To defend Rupiah against USD strength and anchor inflation expectations","Because IHSG was too high","To copy the US Fed exactly"], correct: 1,
      exp: "With USD/IDR at Rp 17,700+, BI maintained higher rates to make Rupiah-denominated assets more attractive and slow capital outflow to the US. Lower rates would accelerate Rupiah depreciation, worsening inflation on imported goods." },
    { q: "How does BI Rate directly affect your savings account interest?",
      options: ["No relationship at all","Banks typically pay savings rates BELOW the BI Rate","Banks must pay savings rates above BI Rate","Savings rates are fixed at 10% by law"], correct: 1,
      exp: "Banks borrow from BI (or interbank market) around the BI Rate, then: charge borrowers MORE (to profit from the spread) and pay savers LESS. BI Rate is the floor that anchors the entire banking system's interest rate structure." }
  ]},
  "interest-rate": { questions: [
    { q: "Borrow Rp 10,000,000 at 12% annual interest for 1 year. Total repayment?",
      options: ["Rp 10,120,000","Rp 11,200,000","Rp 12,000,000","Rp 10,012,000"], correct: 1,
      exp: "Interest = Rp 10,000,000 × 12% = Rp 1,200,000. Total = Rp 10,000,000 + Rp 1,200,000 = Rp 11,200,000. This is why avoiding high-interest debt (credit cards often charge 24-36%!) is so critical for financial health." },
    { q: "When a central bank LOWERS interest rates, what typically follows?",
      options: ["Economy slows immediately","Borrowing gets cheaper → spending rises → economic activity stimulated","Inflation falls immediately","Stock markets always crash"], correct: 1,
      exp: "Lower rates = cheaper for businesses to borrow and invest, cheaper for people to get mortgages → more economic activity. Risk: if overdone, too much money chasing goods = inflation rises. Central banks constantly balance this equation." },
    { q: "Which statement about interest rates is MOST accurate?",
      options: ["Higher rates always cause recessions immediately","Interest rates simultaneously affect bonds, stocks, currency, and economic growth","Only banks are affected by rate changes","Low rates are always good for everyone"], correct: 1,
      exp: "Interest rates are the most powerful single lever in finance. They affect: bond prices (inverse relationship), stock valuations (compression when rates rise), currency values (higher rates attract capital inflow), and growth (borrowing costs change business investment decisions)." }
  ]},
  "reksa-dana": { questions: [
    { q: "Invest Rp 1,000,000 in reksa dana with NAV = Rp 2,000. How many units?",
      options: ["200 units","500 units","2,000 units","1,000 units"], correct: 1,
      exp: "Units = Investment ÷ NAV = Rp 1,000,000 ÷ Rp 2,000 = 500 units. If NAV later rises to Rp 2,400, your investment is worth 500 × Rp 2,400 = Rp 1,200,000. A 20% gain on your investment!" },
    { q: "Main ADVANTAGE of reksa dana for a complete beginner?",
      options: ["Guaranteed returns with zero risk","Professional management + instant diversification + low minimum investment","Always beats individual stock picking","Zero management fees"], correct: 1,
      exp: "Reksa dana combines three things beginners need: professional fund managers pick the investments, instant diversification spreads risk, and you can start with as little as Rp 10,000-100,000 on apps like Bibit or Bareksa." },
    { q: "Which type of reksa dana has the MOST risk and potential return?",
      options: ["Reksa Dana Pasar Uang (money market)","Reksa Dana Pendapatan Tetap (fixed income bonds)","Reksa Dana Saham (equity/stocks)","All have equal risk"], correct: 2,
      exp: "Reksa Dana Saham invests mainly in stocks → highest risk AND highest potential return. Reksa Dana Pendapatan Tetap holds bonds → medium risk. Reksa Dana Pasar Uang holds short-term instruments → lowest risk and lowest return. Match to your goals and risk tolerance!" }
  ]},
  "bond-obligasi": { questions: [
    { q: "Bond: face value Rp 1,000,000, coupon 7%, maturity 5 years. Annual interest received?",
      options: ["Rp 7,000","Rp 35,000","Rp 70,000","Rp 700,000"], correct: 2,
      exp: "Annual coupon = Rp 1,000,000 × 7% = Rp 70,000 per year. Over 5 years: Rp 350,000 total interest PLUS your Rp 1,000,000 face value returned at maturity = Rp 1,350,000 total received." },
    { q: "Interest rates RISE after you buy a fixed-rate bond. What happens to your bond's market price?",
      options: ["Market price rises","Market price falls — new higher-rate bonds make yours less attractive","Price stays the same","You receive higher coupon payments"], correct: 1,
      exp: "Bond prices and interest rates move OPPOSITE. New bonds now pay higher rates → investors prefer new bonds over yours → your bond's market price must fall to make its yield competitive. This is called 'interest rate risk' — the main risk of owning bonds." },
    { q: "Government bond vs corporate bond — main difference?",
      options: ["Government bonds always pay more interest","Corporate bonds carry higher default risk but typically offer higher yields","Corporate bonds are risk-free","Only institutions can buy government bonds"], correct: 1,
      exp: "A company CAN go bankrupt (bond becomes worthless). The Indonesian government almost certainly will not default (tax revenues + central bank backstop). Extra risk in corporate bonds = compensated with higher yields. Always ask: is the extra yield worth the extra risk?" }
  ]},
  "dca": { questions: [
    { q: "DCA: invest Rp 500,000/month. Month 1: price Rp 1,000/unit. Month 2: price Rp 500/unit. Average cost per unit?",
      options: ["Rp 750","Rp 667","Rp 500","Rp 1,000"], correct: 1,
      exp: "Month 1: buy 500 units at Rp 1,000. Month 2: buy 1,000 units at Rp 500. Total: 1,500 units for Rp 1,000,000. Average = Rp 667/unit. CHEAPER than the arithmetic average of (1,000+500)÷2 = Rp 750! Low prices buy you more units — DCA's natural advantage." },
    { q: "Main PSYCHOLOGICAL benefit of DCA for beginners?",
      options: ["You always buy at the lowest possible price","Eliminates anxiety of trying to time the market perfectly","Returns are guaranteed positive","You never experience any losses"], correct: 1,
      exp: "Nobody consistently knows when prices are lowest. DCA removes the impossible need to guess — you invest the same amount every month regardless, removing stress. Even professional fund managers cannot consistently time the market correctly!" },
    { q: "When does DCA tend to UNDERPERFORM lump sum investing?",
      options: ["In volatile markets","When markets trend steadily upward during your DCA period","When investing monthly vs. weekly","DCA always beats lump sum"], correct: 1,
      exp: "If markets rise steadily, a lump sum at the start captures all the gains from day one. DCA spreads purchases over time at gradually higher prices. BUT in volatile or falling markets, DCA wins by buying more units cheaply on the way down." }
  ]},
  "etf": { questions: [
    { q: "Key ADVANTAGE of ETF over buying individual stocks?",
      options: ["ETFs are guaranteed to profit","Instant diversification across many companies with one low-cost purchase","ETFs have zero fees always","ETF prices never fall"], correct: 1,
      exp: "One S&P500 ETF purchase gives exposure to 500 companies instantly. Compare to buying 500 stocks individually: enormous research time, 500 transaction fees, and much more complex rebalancing. ETFs make diversification effortless and affordable." },
    { q: "You buy 100 units of IDX30 ETF at Rp 2,000/unit. IDX30 rises 15%. Investment worth?",
      options: ["Rp 180,000","Rp 200,000","Rp 230,000","Rp 300,000"], correct: 2,
      exp: "Initial investment: 100 × Rp 2,000 = Rp 200,000. After 15% gain: Rp 200,000 × 1.15 = Rp 230,000. You gained Rp 30,000 = 15% on your investment, mirroring the index performance." },
    { q: "ETF vs Reksa Dana: which is easier to trade in real-time during market hours?",
      options: ["Reksa Dana — trade anytime 24/7","ETF — traded on stock exchange like shares, real-time price all day","They are equally easy","Neither can be traded during market hours"], correct: 1,
      exp: "ETFs trade on IDX like regular stocks — real-time pricing, buy/sell any time from 9:00-15:00 WIB. Reksa Dana transactions process ONCE per day at end-of-day NAV. ETFs give more control; Reksa Dana is simpler for automation." }
  ]},
  "pe-ratio": { questions: [
    { q: "Stock price: Rp 10,000. Annual EPS: Rp 500. What is the P/E ratio?",
      options: ["5","10","20","50"], correct: 2,
      exp: "P/E = Price ÷ EPS = Rp 10,000 ÷ Rp 500 = 20. You are paying 20 years of current earnings to own 1 share. Whether that is cheap or expensive depends on growth prospects and industry comparison!" },
    { q: "Company A P/E = 8. Company B P/E = 35, same industry. What does this suggest?",
      options: ["Company A is definitely the better investment","Company B likely has higher expected growth, OR Company A may be undervalued","Company B is guaranteed to grow faster","P/E ratio has no practical meaning"], correct: 1,
      exp: "High P/E = investors pay premium for expected future growth (like tech companies). Low P/E = may be cheap/undervalued OR market expects slow growth / problems ahead. Never judge by P/E alone — always combine with growth rate (PEG ratio), ROE, and debt levels." },
    { q: "During recessions, P/E ratios often RISE despite falling stock prices. Why?",
      options: ["Stock prices rise in recessions","Earnings (denominator) fall faster than stock prices, making P/E appear high","Companies pay more dividends in recessions","P/E is not calculated during recessions"], correct: 1,
      exp: "P/E = Price ÷ Earnings. If company profits collapse in recession faster than the stock falls, the P/E rises — making stocks look 'expensive' when actually earnings are temporarily depressed. Use 'forward P/E' (expected future earnings) for a better picture during recessions." }
  ]},
  "federal-reserve": { questions: [
    { q: "US Federal Reserve raises rates. What typically happens to the Indonesian Rupiah?",
      options: ["Rupiah strengthens — higher US rates mean more tourists","Rupiah weakens — capital flows toward better US returns, leaving Indonesia","Rupiah stays exactly unchanged","Bank Indonesia must immediately lower its rates"], correct: 1,
      exp: "Higher US rates = better returns in USD → global investors move capital FROM emerging markets (Indonesia) TO US assets → increased USD demand, increased Rupiah supply → Rupiah weakens vs USD. This is why Indonesia watches the Fed so closely!" },
    { q: "What is the Federal Funds Rate?",
      options: ["Rate regular Americans pay for bank loans","Overnight borrowing rate between US banks, set by the Federal Reserve","The annual US stock market return","Rate the US government pays on Treasury bonds"], correct: 1,
      exp: "The Fed Funds Rate is what banks charge each other for overnight cash loans. It is the base rate the Fed controls directly. All other rates — mortgages, credit cards, business loans, savings accounts — are priced above this foundation." },
    { q: "Fed cut rates from 5.25-5.50% (2023) to 3.50-3.75% (2026). What does this signal?",
      options: ["US inflation is out of control","Fed easing policy to support growth as inflation cooled toward its 2% target","US economy is growing too fast and needs slowing","Rate cuts always cause recessions immediately"], correct: 1,
      exp: "After aggressive 2022-2023 rate hikes to fight post-COVID inflation, the Fed cut rates as CPI fell toward its 2% target. Cuts signal: inflation is controlled AND the Fed wants to support economic growth, not crush it with unnecessarily high rates." }
  ]},
  "sp500": { questions: [
    { q: "S&P 500 at 7,473 (May 2026) vs 4,800 (Jan 2023). Approximate % gain?",
      options: ["25%","36%","55%","80%"], correct: 2,
      exp: "(7,473 − 4,800) ÷ 4,800 = 2,673 ÷ 4,800 ≈ 55.7%. Over 3 years, long-term investors who stayed in the S&P 500 gained over 55% despite multiple scares (bank crises, Fed hikes, geopolitics). Staying invested beats trying to time exits." },
    { q: "Why compare portfolios to the S&P 500 as a benchmark?",
      options: ["The S&P 500 always goes up without exception","It represents achievable broad market returns — beating it means you added real value","It is required by Indonesian law","The S&P 500 is risk-free like a savings account"], correct: 1,
      exp: "You can buy an S&P 500 index fund at ~0.03% annual fee and get the full market return. If your actively managed fund (charging 1-2% annual fee) does not beat the S&P 500 consistently, why not just buy the cheap index instead?" },
    { q: "S&P 500 crashed 34% in March 2020 (COVID). Best long-term investor action?",
      options: ["Sell everything to stop further losses","Stay invested or buy more — history shows recovery to new highs soon after","Move all to gold","Close investment account and wait years"], correct: 1,
      exp: "The COVID crash recovered to ALL-TIME HIGHS within just 5 months! Investors who panic-sold in March 2020 locked in losses and missed the fastest recovery in market history. Patient, stay-invested investors were richly rewarded." }
  ]},
  "bear-market": { questions: [
    { q: "IHSG falls from 7,300 to 5,840. Is this technically a bear market?",
      options: ["No — only a 10% fall","Yes — exactly a 20% fall (the official threshold)","No — only Western markets have bear markets","More information needed"], correct: 1,
      exp: "(7,300 − 5,840) ÷ 7,300 = 1,460 ÷ 7,300 = 20.0%. Exactly at the official bear market threshold — a 20% or greater decline from recent peak. Below 10% = correction. 10-20% = deep correction. 20%+ = bear market." },
    { q: "Best strategy for a long-term investor DURING a bear market?",
      options: ["Sell everything and wait for recovery","Continue DCA investing — you buy many more units at lower prices","Only invest in gold during downturns","Bear markets last 10+ years, avoid stocks forever"], correct: 1,
      exp: "Bear markets are when long-term investors accumulate cheaply! If you invest Rp 500,000/month and prices are 30% lower, you buy 43% MORE units. When recovery arrives, those cheap units generate exceptional returns. As Buffett says: 'Be greedy when others are fearful.'" },
    { q: "How long do bear markets typically last vs bull markets?",
      options: ["Bear markets last longer (5+ years)","About equal duration","Bull markets much longer (years) vs bear markets (months on average)","Markets are bearish 80% of the time"], correct: 2,
      exp: "Historical average: bear markets last 9-16 months. Bull markets last 2-5+ years. Markets are rising the MAJORITY of the time. Despite being painful when they occur, bear markets are the minority of total market time — patience is rewarded." }
  ]},
  "gdp": { questions: [
    { q: "Indonesia GDP grows 5.0% in 2026. For most Indonesians this typically means:",
      options: ["Every person's income rose exactly 5%","More economic activity → generally more jobs and higher incomes across the economy","Prices fell 5% everywhere","Nothing — GDP only matters to economists"], correct: 1,
      exp: "GDP growth means the economy produced 5% more value — more goods manufactured, more services provided, more jobs created. While distribution varies, higher GDP generally lifts wages, employment, and living standards across society." },
    { q: "Which of these COUNTS in Indonesia's GDP?",
      options: ["Only factory and manufacturing output","All goods + all services produced within Indonesia during the year","Only exports to other countries","Only government spending on infrastructure"], correct: 1,
      exp: "GDP = Consumption + Investment + Government Spending + (Exports − Imports). A Gojek driver earning Rp 5 million, a factory worker, a teacher, a bank teller — all their economic activity contributes to Indonesia's total GDP." },
    { q: "Two consecutive quarters of NEGATIVE GDP growth is called a:",
      options: ["Bull market","Strong correction","Recession","Hyperinflation"], correct: 2,
      exp: "Two consecutive quarters (6 months) of shrinking GDP = technical recession. The economy is producing less → unemployment typically rises → consumer confidence falls → spending declines further (a negative spiral). Central banks and governments respond with rate cuts and stimulus." }
  ]},
  "yield-curve": { questions: [
    { q: "Why do 10-year bonds normally pay MORE interest than 1-year bonds?",
      options: ["Short-term bonds are always riskier","Investors need more compensation for locking money up longer + bearing more uncertainty","Government has more money for 10-year bonds","It is required by law to be this way"], correct: 1,
      exp: "Tying up your money for 10 years = more inflation uncertainty, more credit risk, more opportunity cost (what else could you do with that money?). Investors demand higher yield as compensation for longer commitment. This normal shape = healthy economy." },
    { q: "Yield curve inverts: 2-year Treasury yields 5%, 10-year yields 4.5%. What does history say?",
      options: ["Strong growth ahead","Recession likely within 6-18 months — this has predicted every US recession since 1970","Inflation will immediately fall","Stock market crash next month guaranteed"], correct: 1,
      exp: "An inverted yield curve means investors expect rates to FALL in future (central bank cutting rates to fight recession) → they lock in today's higher long rates. This signal has preceded every single US recession for 50+ years, though timing varies." },
    { q: "What does 'bond yield' mean?",
      options: ["The bond's face value at maturity","The effective annual return considering both coupon and price paid","The bond's expiry date","The bond issuer's credit rating"], correct: 1,
      exp: "Yield = your actual annual return accounting for both the coupon payments AND any gain/loss from buying above/below face value. Buy a Rp 1,000,000 bond at Rp 900,000 with 5% coupon → your yield is ABOVE 5% because you got it below face value at a discount." }
  ]},
  "rupiah-idr": { questions: [
    { q: "iPhone 16 Pro: $1,200. USD/IDR goes from Rp 15,000 to Rp 17,700. New price in IDR?",
      options: ["Rp 15,000,000","Rp 18,000,000","Rp 21,240,000","Rp 12,000,000"], correct: 2,
      exp: "At Rp 17,700 per dollar: $1,200 × 17,700 = Rp 21,240,000. At Rp 15,000 per dollar it was $1,200 × 15,000 = Rp 18,000,000. The 18% weaker Rupiah made the iPhone 18% more expensive for Indonesians — this is currency risk in everyday life." },
    { q: "Stronger USD / weaker Rupiah is GOOD for which Indonesian business?",
      options: ["Importers buying raw materials from abroad in USD","Exporters selling products abroad and earning USD","Domestic retailers selling only local goods","Everyone equally — there are no losers"], correct: 1,
      exp: "Indonesian coal, palm oil, rubber, and nickel exporters earn USD. Converting USD back to Rupiah at Rp 17,700 (vs Rp 15,000) gives them MORE Rupiah per sale. Exporters WIN from weak Rupiah. Importers LOSE (raw materials cost more IDR)." },
    { q: "Main tool Bank Indonesia uses to DEFEND the Rupiah:",
      options: ["Print more Rupiah","Raise interest rates to attract capital + sell USD from forex reserves","Legally ban USD transactions","Set the exchange rate by government decree"], correct: 1,
      exp: "BI raises rates to make Rupiah deposits more attractive globally (better return) AND sells USD from its ~$150 billion forex reserves to increase USD supply in the market → supports Rupiah. These two tools work simultaneously to defend the exchange rate." }
  ]},
  "market-cap": { questions: [
    { q: "Company: 500 million shares. Price: Rp 8,000/share. Market cap?",
      options: ["Rp 4 billion","Rp 400 billion","Rp 4 trillion","Rp 40 trillion"], correct: 2,
      exp: "500,000,000 × Rp 8,000 = Rp 4,000,000,000,000 = Rp 4 trillion. For reference: BBCA (BCA Bank) has a market cap of over Rp 800 trillion — making it Indonesia's most valuable listed company." },
    { q: "Which statement about market cap is MOST accurate?",
      options: ["Market cap equals the company's total physical assets","Market cap reflects what investors collectively believe the company is worth TODAY","Higher market cap always means more profit","Market cap equals the company's total cash in bank"], correct: 1,
      exp: "Market cap is a market valuation — it reflects collective investor belief about current and future value, not just current assets or profits. A startup with no profit can have a huge market cap if investors believe in its future growth potential." },
    { q: "If a stock price rises 20%, what happens to market cap?",
      options: ["Market cap stays the same","Market cap also rises 20% (same proportional change)","Market cap falls 20%","Market cap depends only on earnings, not price"], correct: 1,
      exp: "Market cap = Price per share × Total shares outstanding. Total shares do not change just because the price changes. So if price rises 20%, market cap also rises exactly 20%. They move in perfect lockstep." }
  ]},
  "monetary-policy": { questions: [
    { q: "Inflation at 7% (above BI's 2.5-3.5% target). Expected BI policy action?",
      options: ["Cut rates to stimulate more growth","Raise rates to reduce borrowing/spending and cool inflation","Print more Rupiah (QE)","Do nothing and wait"], correct: 1,
      exp: "High inflation = money losing value too fast. BI raises rates → borrowing costs more → people borrow and spend less → demand for goods falls → price pressure eases → inflation falls. This is 'contractionary' monetary policy." },
    { q: "What is 'Quantitative Easing (QE)' exactly?",
      options: ["Central bank raises rates very aggressively and quickly","Central bank creates new money digitally and buys bonds to inject liquidity into banks","Government cuts taxes during a recession","Banks increase lending requirements to reduce risk"], correct: 1,
      exp: "In QE, the central bank creates new digital money and buys bonds from banks, injecting cash directly into the financial system. Banks now have excess cash to lend → interest rates fall → more borrowing → more economic activity. Used when normal rate cuts are not enough." },
    { q: "Monetary policy vs Fiscal policy — key difference?",
      options: ["They are the same thing managed by the same institution","Monetary = central bank controls rates and money supply; Fiscal = government controls taxes and spending","Only monetary policy affects inflation","Fiscal policy is more powerful in all situations"], correct: 1,
      exp: "Monetary policy (BI/Fed): adjusts interest rates and money supply — fast to implement, works through financial system. Fiscal policy (government): adjusts taxes and spending — requires political approval, works directly on jobs and incomes. Both fight recessions but through different channels." }
  ]},
  "diversification": { questions: [
    { q: "You invest all Rp 10,000,000 in one company. It goes bankrupt. How much do you lose?",
      options: ["0% — diversification protects you","25%","50%","100% of your investment"], correct: 3,
      exp: "100% loss! With no diversification, one company's failure destroys your entire portfolio. Spreading across 10 companies means one bankruptcy only costs you 10%. Spread across 50 companies = only 2% loss from one failure." },
    { q: "Which portfolio is the MOST diversified?",
      options: ["5 Indonesian tech stocks","1 Indonesian stock + 1 US stock + 1 gold ETF + 1 bond fund","10 different cryptocurrencies","3 different Indonesian bank stocks"], correct: 1,
      exp: "True diversification requires different asset TYPES (stocks, bonds, gold), different COUNTRIES (Indonesia, US), and different INDUSTRIES. Multiple assets of the same type (all crypto, all tech) are highly correlated — they all crash together!" },
    { q: "What is the risk of OVER-diversification?",
      options: ["You lose all your money","Returns converge to the market average — no chance to beat it","You cannot rebalance","Transaction fees become negative"], correct: 1,
      exp: "Owning every stock means you get exactly market returns — no better, no worse. That is actually fine for most investors! But focused investors who research deeply may prefer fewer positions to have a chance of outperforming the index." }
  ]}
};

/* ── Interactive calculator configs ────────────────────────── */
window.CALCULATORS = {
  "compound-interest": { type: "compound" },
  "rule-of-72":        { type: "rule72" },
  "inflation":         { type: "inflation" },
  "dca":               { type: "dca" },
  "purchasing-power":  { type: "inflation" }
};
