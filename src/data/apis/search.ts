import type { ApiEntry } from "@/lib/types";

export const searchApis: ApiEntry[] = [
  {
    name: "Google Custom Search JSON API",
    slug: "google-search",
    category: "search",
    shortDescription:
      "Programmatic web and image results from a Google Programmable Search Engine, returned as JSON.",
    longDescription:
      "The Custom Search JSON API returns web and image search results from a Programmable Search Engine as JSON, following the OpenSearch 1.1 format. You need both a configured Programmable Search Engine ID (cx) and an API key to call it. Note: Google has closed the API to new customers, with existing customers supported until January 1, 2027.",
    officialDocsUrl: "https://developers.google.com/custom-search/v1/overview",
    homepageUrl: "https://developers.google.com/custom-search/v1/overview",
    pricing: "freemium",
    pricingNotes:
      "100 free queries/day; extra queries at $5 per 1,000 (up to 10,000/day). Closed to new customers; existing customers supported until Jan 1, 2027.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/customsearch/v1",
        description: "Web search (cse.list): returns web results with q, cx (engine ID) and key.",
      },
      {
        method: "GET",
        path: "/customsearch/v1?searchType=image",
        description: "Image search mode: same cse.list operation with searchType=image returns image results.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://www.googleapis.com/customsearch/v1?q=coffee&cx=YOUR_SEARCH_ENGINE_ID&key=YOUR_API_KEY"',
      note: "Returns an 'items' array of results, each with title, link and snippet.",
    },
    howToUse: [
      "Create a Programmable Search Engine in the control panel and note its Search engine ID (cx).",
      "Enable the Custom Search JSON API in Google Cloud and create an API key.",
      "Call GET https://www.googleapis.com/customsearch/v1?q=YOUR_QUERY&cx=YOUR_SEARCH_ENGINE_ID&key=YOUR_API_KEY.",
      "Read the items array for the title, link and snippet of each result.",
      "Stay within 100 free queries/day; enable billing for $5 per 1,000 beyond that.",
    ],
    alternatives: ["brave-search", "serpapi", "newsapi"],
    tags: ["search", "web-search", "google", "json", "open-search"],
    sources: [
      "https://developers.google.com/custom-search/v1/overview",
    ],
    sponsored: false,
  },
  {
    name: "Brave Search API",
    slug: "brave-search",
    category: "search",
    shortDescription:
      "Independent web, news, image and video search results in JSON, built for AI and chatbots.",
    longDescription:
      "The Brave Search API returns independent web, news, image, video and LLM-context search results as JSON, drawn from Brave's own index rather than a reseller of another engine. Authentication uses an X-Subscription-Token header against api.search.brave.com. It includes $5 of free credits each month (around 2,000 requests) and bills at $5 per 1,000 requests after that.",
    officialDocsUrl: "https://brave.com/search/api/",
    homepageUrl: "https://brave.com/search/api/",
    pricing: "freemium",
    pricingNotes:
      "$5 per 1,000 requests, with $5 in free credits added every month (~2,000 free queries); up to 50 queries/second.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/res/v1/web/search",
        description: "Full web search results (URLs, snippets, descriptions).",
      },
      {
        method: "GET",
        path: "/res/v1/news/search",
        description: "News search results for a query.",
      },
      {
        method: "GET",
        path: "/res/v1/images/search",
        description: "Image search results for a query.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl -s --compressed "https://api.search.brave.com/res/v1/web/search?q=coffee" \\\n  -H "Accept: application/json" \\\n  -H "X-Subscription-Token: YOUR_API_KEY"',
      note: "Returns web.results with title, url and description for each hit.",
    },
    howToUse: [
      "Create a Brave Search API account and subscribe to a plan (free credits included).",
      "Copy your API key (the X-Subscription-Token) from the dashboard.",
      "Call GET https://api.search.brave.com/res/v1/web/search?q=YOUR_QUERY.",
      "Send the X-Subscription-Token header and Accept: application/json on every request.",
      "Parse web.results for title, url and description; use /news/search or /images/search for verticals.",
    ],
    alternatives: ["google-search", "serpapi", "newsapi"],
    tags: ["search", "web-search", "news", "independent-index", "ai"],
    sources: [
      "https://brave.com/search/api/",
    ],
    sponsored: false,
  },
  {
    name: "SerpApi",
    slug: "serpapi",
    category: "search",
    shortDescription:
      "Structured JSON search results for Google, Bing, Baidu and more, without managing scrapers.",
    longDescription:
      "SerpApi turns search engine results pages into clean JSON, supporting Google, Bing, Baidu, Yahoo and more, with organic results, ads, knowledge graphs, local packs and shopping blocks. You call a single /search endpoint with an engine parameter and your API key. A free plan covers 250 searches per month and official SDKs exist for Python, Node.js, Ruby, Java, PHP and Go.",
    officialDocsUrl: "https://serpapi.com/search-api",
    homepageUrl: "https://serpapi.com",
    pricing: "freemium",
    pricingNotes:
      "Free plan: 250 searches/month; paid plans add higher search volumes across all supported engines.",
    auth: "api-key",
    sdkLanguages: ["Python", "Node.js", "Ruby", "Java", "PHP", "Go"],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/search?engine=google",
        description: "Structured Google results: organic, ads, knowledge graph, etc.",
      },
      {
        method: "GET",
        path: "/search?engine=google_images",
        description: "Google Images results.",
      },
      {
        method: "GET",
        path: "/search?engine=google_news",
        description: "Google News results.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://serpapi.com/search.json?engine=google&q=coffee&api_key=YOUR_API_KEY"',
      note: "Returns organic_results, ads, knowledge graph and other blocks as JSON.",
    },
    howToUse: [
      "Sign up at serpapi.com and copy your private API key.",
      "Call GET https://serpapi.com/search.json?engine=google&q=YOUR_QUERY&api_key=YOUR_API_KEY.",
      "Read organic_results for the title, link and snippet of each hit.",
      "Switch the engine parameter (e.g. google_images, google_news) for other result types.",
      "Use the free 250 searches/month, or upgrade for higher volume.",
    ],
    alternatives: ["google-search", "brave-search", "newsapi"],
    tags: ["search", "serp", "scraping", "google", "structured-data"],
    sources: [
      "https://serpapi.com/search-api",
    ],
    sponsored: false,
  },
  {
    name: "NewsAPI",
    slug: "newsapi",
    category: "search",
    shortDescription:
      "Search live articles from 150,000+ news sources and blogs by keyword, date, source and language.",
    longDescription:
      "NewsAPI is a simple REST API for searching and retrieving live news articles from over 150,000 sources and blogs, plus top headlines by country, category or publisher. A developer plan is free while you are building, authenticated with an API key. The free tier returns articles with a 24-hour delay and a request cap, while commercial use requires a paid plan.",
    officialDocsUrl: "https://newsapi.org/docs",
    homepageUrl: "https://newsapi.org",
    pricing: "freemium",
    pricingNotes:
      "Free developer plan: 100 requests/day with a 24-hour article delay; commercial use requires a paid plan.",
    auth: "api-key",
    sdkLanguages: [],
    sampleEndpoints: [
      {
        method: "GET",
        path: "/v2/everything",
        description: "Full-text search of articles matching a keyword or phrase.",
      },
      {
        method: "GET",
        path: "/v2/top-headlines",
        description: "Live top headlines by country, category or source.",
      },
      {
        method: "GET",
        path: "/v2/sources",
        description: "List supported news publishers and blogs.",
      },
    ],
    codeExample: {
      language: "curl",
      code: 'curl "https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=YOUR_API_KEY"',
      note: "Returns articles mentioning Apple, sorted by source popularity.",
    },
    howToUse: [
      "Get a free API key at newsapi.org (free while you are in development).",
      "Call GET https://newsapi.org/v2/everything?q=YOUR_KEYWORD&apiKey=YOUR_API_KEY.",
      "Use /v2/top-headlines?country=us for live headlines.",
      "Find source IDs via /v2/sources to filter results by publisher.",
      "Note the free tier caps requests at 100/day and delays articles by 24 hours.",
    ],
    alternatives: ["google-search", "brave-search", "serpapi"],
    tags: ["news", "articles", "search", "media", "headlines"],
    sources: [
      "https://newsapi.org/docs",
      "https://newsapi.org/docs/get-started",
    ],
    sponsored: false,
  },
];
