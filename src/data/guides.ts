// Beginner guides for the APIbeta encyclopedia. These are generic, evergreen
// explainers — no vendor claims, no fabricated numbers. relatedApiSlugs point
// at catalog slugs and are resolved (and filtered) at render time, so guides
// never break if the catalog changes.

export interface GuideSection {
  heading: string;
  body: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
  tags: string[];
  /** Optional catalog slugs that illustrate this guide. */
  relatedApiSlugs?: string[];
}

export const guides: Guide[] = [
  {
    slug: "how-to-choose-the-right-api",
    title: "How to choose the right API",
    description:
      "A practical decision checklist for picking an API: requirements, constraints, and the questions worth asking before you sign up.",
    tags: ["basics", "choosing", "workflow", "beginners"],
    sections: [
      {
        heading: "Start from the job, not the product",
        body: "Before comparing vendors, write down exactly what the API must do: the data you need, the rate of requests, where the app will run (server, browser, mobile), and who the end user is. An API that looks impressive but solves a different problem is the wrong choice regardless of reviews.",
      },
      {
        heading: "Check the hard constraints first",
        body: "Four constraints usually decide the shortlist: pricing at your expected call volume, authentication method your stack supports, geographic or legal data requirements, and the official SDKs or language support you would actually use. Filter the directory by these first, then compare what remains.",
      },
      {
        heading: "Read the real documentation",
        body: "The vendor's marketing page tells you what they want you to believe. The reference docs tell you the truth: required parameters, error formats, pagination style, and whether the data is current. Try one sample endpoint with a free key before committing to an integration.",
      },
      {
        heading: "Plan for alternatives",
        body: "Any single-vendor lock-in is a risk. Pick an API that has credible alternatives in the same category, and wrap the calls behind a thin layer in your own code so swapping providers later is a small change, not a rewrite.",
      },
    ],
  },
  {
    slug: "api-authentication-basics",
    title: "API authentication: API keys vs OAuth",
    description:
      "What the common auth schemes actually mean, when each one is the right fit, and why leaking a key is worse than leaking a password.",
    tags: ["auth", "api-keys", "oauth", "security"],
    sections: [
      {
        heading: "API keys: simple and everywhere",
        body: "Most web APIs authenticate with a long key you send on every request, usually as a header like Authorization: Bearer YOUR_KEY or as a query parameter. API keys identify your application to the provider and let them meter usage. They are easy to use, but they are not secrets in the browser: anything shipped to a public website's frontend is visible to every visitor.",
      },
      {
        heading: "Where API keys must live",
        body: "Put API keys on your own server, never in browser code or mobile binaries that ship to end users. The browser talks to your backend, and your backend adds the key. If a key does leak, rotate it immediately in the provider dashboard and restrict it by allowed referrers or IP ranges where the provider supports it.",
      },
      {
        heading: "OAuth: acting on behalf of a user",
        body: "OAuth is used when the API needs access to someone's personal account — posting to a user's social profile, reading their drive, or managing their mail. The flow redirects the user to the provider's login page, they approve the request, and your app receives a short-lived access token (usually plus a refresh token). You never handle the user's password.",
      },
      {
        heading: "How to choose",
        body: "If the API serves your own data or your own account (weather, market data, payments processing), an API key is almost always the right model. If the API needs to act as a signed-in third party — a user — OAuth is required. The directory marks each entry, so filter by auth type when that constraint matters.",
      },
    ],
  },
  {
    slug: "understanding-api-pricing",
    title: "Understanding API pricing: free, freemium, paid",
    description:
      "What free, freemium and paid tiers actually mean in practice, and how to estimate your real cost before you build.",
    tags: ["pricing", "freemium", "costs", "planning"],
    sections: [
      {
        heading: "Free tiers: gifts with limits",
        body: "A free tier usually exists to get you building. Limits are expressed as requests per day or per month, concurrent connections, data freshness, or features locked behind a paywall. Read the limit as a number and compare it against your realistic usage — a 'free' tier that throttles after a few hundred calls a day will not survive a launch.",
      },
      {
        heading: "Freemium: the trap is growth",
        body: "Freemium APIs charge nothing at small scale but bill per call once you pass a threshold. This works well for prototyping, but it means your marginal cost grows linearly with traffic. Estimate calls-per-user early: a background refresh loop can silently multiply your volume by ten.",
      },
      {
        heading: "Paid and metered billing",
        body: "Paid APIs price by request, by usage tier, or by subscription. Watch for overage pricing (what happens above the plan cap), minimum commitments, and whether non-successful calls (errors, retries) still count toward your quota. Budget engineering time for caching and request deduplication — they are often cheaper than upgrading the plan.",
      },
      {
        heading: "The honest checklist",
        body: "Before integrating, ask: what is the daily free limit, what happens at 10x that volume, which features are excluded from the free tier, and can I export my data if I leave? Each APIbeta entry records its tier and concrete pricing notes from official sources — treat those as the starting point, then verify on the provider's pricing page before you commit.",
      },
    ],
  },
  {
    slug: "your-first-rest-api-call",
    title: "Your first API call: a REST walkthrough",
    description:
      "From sign-up to a working request: the anatomy of a REST call, how to read the response, and the first five errors every beginner hits.",
    tags: ["rest", "getting-started", "curl", "beginners"],
    sections: [
      {
        heading: "Anatomy of a REST request",
        body: "A REST call is just an HTTP request: a method (GET to read, POST to create, PUT/PATCH to update, DELETE to remove), a URL like https://api.provider.com/v1/resource, a few headers (Content-Type, Authorization), and optional parameters. The response is almost always JSON, the same structured format you would read in code.",
      },
      {
        heading: "Get a key and make the call",
        body: "Sign up on the provider's site, open the API keys dashboard, create a key, and copy it. Most entries on APIbeta include a ready-to-paste curl example: replace YOUR_API_KEY with your key and run it in a terminal. A successful response starts with HTTP 200; the body is the data you asked for.",
      },
      {
        heading: "Read the response like a developer",
        body: "Look at three things: the HTTP status code (200 OK, 401 unauthorized, 404 not found, 429 rate-limited, 500 server error), the JSON structure (nesting, arrays), and the headers (pagination cursors, rate-limit remaining). Tools like curl -i or any HTTP client make the headers visible.",
      },
      {
        heading: "The first five errors",
        body: "401 means the key is missing, wrong or expired. 403 means the key is valid but lacks permission. 404 means the path is wrong — check version prefixes. 429 means you are being rate limited and must back off. 400 usually means a parameter is misspelled or malformed. Fix the status code first; the error body often names the exact field.",
      },
    ],
  },
  {
    slug: "rate-limits-errors-and-retries",
    title: "Rate limits, errors and retries",
    description:
      "How APIs throttle traffic, why naive retries make outages worse, and the backoff strategy that actually works.",
    tags: ["rate-limits", "errors", "retries", "reliability"],
    sections: [
      {
        heading: "What a rate limit is",
        body: "Providers cap traffic per key per window — say 1,000 calls per day or 100 per minute — to keep shared infrastructure fair. When you exceed the cap, the API answers with HTTP 429 Too Many Requests, often plus headers like X-RateLimit-Remaining and Retry-After that tell you exactly when you may call again.",
      },
      {
        heading: "Why blind retries are dangerous",
        body: "Retrying instantly on failure looks defensive but amplifies load: if the provider is slow, every retried call piles on more traffic and lengthens the outage. The rule: never retry a 4xx error except 429, never retry the same request in a tight loop, and always cap total attempts.",
      },
      {
        heading: "Exponential backoff with jitter",
        body: "The standard pattern: wait 1s, then 2s, then 4s, then 8s between attempts, and add a small random 'jitter' to the wait so many clients do not retry in lockstep. Respect the Retry-After header when the provider sends it. Five attempts with backoff handles nearly all transient failures; after that, surface the error to the user.",
      },
      {
        heading: "Design for failure from day one",
        body: "Cache responses that do not change fast, deduplicate identical requests, and treat the API as an optional dependency where possible — show cached data or a graceful message when it is down. Monitor your rate-limit headers: watching X-RateLimit-Remaining over time prevents the surprise 429 on launch day.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

