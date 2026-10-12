import type { ApiEntry } from "@/lib/types";

export const financeApis: ApiEntry[] = [
  {
    name: "Alpha Vantage",
    slug: "alpha-vantage",
    category: "finance",
    shortDescription:
      "Free stock, forex and crypto time-series plus technical indicators through one query-based REST endpoint.",
    longDescription:
      "Alpha Vantage serves global stock, ETF, forex and cryptocurrency OHLC time series, fundamental data and 50+ technical indicators through a single query-based REST endpoint. A free key allows 25 API requests per day, and premium plans raise throughput to hundreds of requests per minute. Almost every call goes to the same /query path with a function= parameter, which makes it trivial to try from a browser or curl.",
    officialDocsUrl: "https://www.alphavantage.co/documentation/",
    homepageUrl: "https://www.alphavantage.co",
    pricing: "freemium",
    pricingNotes:
      "Free tier: 25 API requests/day; premium plans from $49.99/month for 75 requests/minute and higher throughput.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/query?function=TIME_SERIES_DAILY",
        description: "Daily OHLC time series for a symbol such as IBM.",
      },
      {
        method: "GET",
        path: "/query?function=GLOBAL_QUOTE",
        description: "Latest price, change and volume snapshot for a symbol.",
      },
      {
        method: "GET",
        path: "/query?function=SYMBOL_SEARCH",
        description: "Find matching stock/ETF symbols by keyword.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=YOUR_API_KEY"',
      note: "Returns daily OHLC bars for IBM as JSON (a 'Meta Data' object plus a time series).",
    },
    howToUse: [
      "Request a free API key at alphavantage.co/support/#api-key and confirm your email.",
      "Open the documentation and pick a function such as TIME_SERIES_DAILY.",
      "Append function, symbol and apikey=YOUR_API_KEY to https://www.alphavantage.co/query.",
      "Run the curl example above and confirm JSON with a 'Meta Data' object and a time series.",
      "Stay within the free limit of 25 requests/day; upgrade to premium for higher throughput.",
    ],
    alternatives: ["finnhub", "twelvedata", "coingecko"],
    tags: ["stocks", "market-data", "time-series", "forex", "technical-indicators"],
    sources: [
      "https://www.alphavantage.co/documentation/",
      "https://www.alphavantage.co/premium/",
    ],
    sponsored: false,
  },
  {
    name: "Finnhub",
    slug: "finnhub",
    category: "finance",
    shortDescription:
      "Real-time stock quotes, company news, earnings and fundamentals via a REST API with websocket streams.",
    longDescription:
      "Finnhub is a REST API for real-time US stock quotes, company news, earnings estimates, fundamentals and websocket market data. The free personal plan allows 60 calls/minute with US coverage, and higher tiers add global fundamentals, long history and unlimited websocket symbols. Requests authenticate with a token passed as a query parameter or an X-Finnhub-Token header.",
    officialDocsUrl: "https://finnhub.io/docs/api",
    homepageUrl: "https://finnhub.io",
    pricing: "freemium",
    pricingNotes:
      "Free plan: $0/month, 60 API calls/minute (personal use, US coverage); paid All-in-One plan for global fundamentals and higher limits.",
    auth: "api-key",
    sdkLanguages: ["Python", "JavaScript", "Go", "Java"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/quote?symbol=AAPL",
        description: "Real-time quote: current price, change and high/low for a US symbol.",
      },
      {
        method: "GET",
        path: "/news?category=general",
        description: "Latest market news across the general, forex, crypto and merger categories.",
      },
      {
        method: "GET",
        path: "/company-news?symbol=AAPL&from=2026-01-01&to=2026-01-31",
        description: "Latest news articles for a company over a date range.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://finnhub.io/api/v1/quote?symbol=AAPL&token=YOUR_API_KEY"',
      note: "Returns c (current price), d (change), dp (percent change) and high/low fields for AAPL.",
    },
    howToUse: [
      "Sign up at finnhub.io and copy your API key from the dashboard.",
      "Call GET https://finnhub.io/api/v1/quote?symbol=AAPL&token=YOUR_API_KEY.",
      "Alternatively send the key in the X-Finnhub-Token request header.",
      "Read the c (current price), d (change) and dp (percent change) fields from the JSON.",
      "Try /news and /company-news for headlines; expect a 429 when exceeding 60 calls/minute.",
    ],
    alternatives: ["alpha-vantage", "twelvedata", "coingecko"],
    tags: ["stocks", "quotes", "market-data", "fundamentals", "earnings", "websocket"],
    sources: [
      "https://finnhub.io/docs/api",
      "https://finnhub.io/pricing",
    ],
    sponsored: false,
  },
  {
    name: "Twelve Data",
    slug: "twelvedata",
    category: "finance",
    shortDescription:
      "Stocks, forex, crypto and ETF market data with official SDKs and a free 800-credit daily allowance.",
    longDescription:
      "Twelve Data provides real-time and historical price, time-series, technical-indicator and fundamental data across stocks, forex, cryptocurrencies and ETFs. The free Basic plan grants 800 API credits per day, while paid plans add more credits, markets and remove daily limits. It publishes official SDKs for Python, Node.js, Go, Java and R, and accepts the key as a query parameter or an Authorization header.",
    officialDocsUrl: "https://twelvedata.com/docs",
    homepageUrl: "https://twelvedata.com",
    pricing: "freemium",
    pricingNotes:
      "Free Basic plan: 8 API credits (800 per day); paid Grow/Pro/Ultra plans from $29/month add credits, markets and no daily limits.",
    auth: "api-key",
    sdkLanguages: ["Python", "Node.js", "Go", "Java", "R", ".NET"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/price?symbol=AAPL",
        description: "Latest price for a single symbol.",
      },
      {
        method: "GET",
        path: "/time_series?symbol=AAPL&interval=1day",
        description: "Historical OHLCV bars at a chosen interval.",
      },
      {
        method: "GET",
        path: "/quote?symbol=AAPL",
        description: "Full quote snapshot with open, high, low, close and volume.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.twelvedata.com/price?symbol=AAPL&apikey=YOUR_API_KEY"',
      note: 'Returns {"price": "..."} with the latest available price for AAPL.',
    },
    howToUse: [
      "Create a free account at twelvedata.com and open the API dashboard.",
      "Copy your unique API key from the dashboard.",
      "Call GET https://api.twelvedata.com/price?symbol=AAPL&apikey=YOUR_API_KEY.",
      "Or use the official Python SDK: TDClient(apikey='YOUR_API_KEY').price(symbol='AAPL').as_json().",
      "Move to /time_series for historical bars; watch the 800 credits/day free allowance.",
    ],
    alternatives: ["alpha-vantage", "finnhub", "coingecko"],
    tags: ["stocks", "forex", "crypto", "time-series", "market-data", "sdk"],
    sources: [
      "https://twelvedata.com/docs",
      "https://twelvedata.com/pricing",
    ],
    sponsored: false,
  },
  {
    name: "CoinGecko",
    slug: "coingecko",
    category: "finance",
    shortDescription:
      "Independent crypto market data: prices, market caps and volumes for thousands of coins across exchanges.",
    longDescription:
      "CoinGecko aggregates crypto market data from 1,500+ exchanges and 18,000+ coins, exposing prices, market caps, volumes and category data over a REST API. It offers a free Demo API with limited endpoints and rate limits, and paid Pro plans that unlock higher throughput and richer data. Authentication uses an API key sent as the x-cg-demo-api-key (demo) or x-cg-pro-api-key (pro) header, with official TypeScript and Python SDKs.",
    officialDocsUrl: "https://docs.coingecko.com/reference/introduction",
    homepageUrl: "https://www.coingecko.com",
    pricing: "freemium",
    pricingNotes:
      "Free Demo API tier with limited endpoints and rate limits; paid Pro plans raise limits and unlock more data.",
    auth: "api-key",
    sdkLanguages: ["TypeScript", "Python"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/api/v3/simple/price",
        description: "Prices for one or more coins by id, symbol or name.",
      },
      {
        method: "GET",
        path: "/api/v3/coins/markets",
        description: "Paginated coin list with price, market cap, volume and 24h change.",
      },
      {
        method: "GET",
        path: "/api/v3/coins/list",
        description: "Lookup of all supported coin IDs.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin" \\\n  -H "x-cg-demo-api-key: YOUR_DEMO_API_KEY"',
      note: "Returns the current USD price of Bitcoin. Paid Pro plans use the pro-api.coingecko.com base and x-cg-pro-api-key.",
    },
    howToUse: [
      "Create a free CoinGecko account and generate a Demo API key.",
      "Send the key as the x-cg-demo-api-key header (use x-cg-pro-api-key on paid plans).",
      "Call GET https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin.",
      "Use /api/v3/coins/markets?vs_currency=usd for a paginated market overview.",
      "Look up a coin's id via /api/v3/coins/list before querying prices by id.",
    ],
    alternatives: ["alpha-vantage", "finnhub", "twelvedata"],
    tags: ["crypto", "market-data", "prices", "defi", "coins"],
    sources: [
      "https://docs.coingecko.com/reference/introduction",
      "https://docs.coingecko.com/reference/simple-price",
      "https://docs.coingecko.com/reference/coins-markets",
    ],
    sponsored: false,
  },
];
