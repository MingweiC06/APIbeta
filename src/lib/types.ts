// APIbeta content model.
// Every API entry is a plain typed object so the catalog can later be migrated
// to Postgres (each field maps 1:1 to a column) without page code depending on
// the storage layer. See CONTENT_SPEC.md at the repo root.

export const categorySlugs = [
  "weather",
  "maps-geo",
  "finance",
  "ai-ml",
  "sms-comms",
  "translation",
  "images-media",
  "payments",
  "search",
  "social",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type PricingTier = "free" | "freemium" | "paid";

export type AuthType = "none" | "api-key" | "oauth";

export interface SampleEndpoint {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  /** Path as it appears in official docs, e.g. "/data/2.5/weather". */
  path: string;
  /** What this endpoint does. */
  description: string;
}

export interface CodeExample {
  /** e.g. "curl", "JavaScript", "Python". */
  language: string;
  /** Literal copy-paste example using a YOUR_... placeholder for the key. */
  code: string;
  note?: string;
}

export interface ApiEntry {
  /** Official product name, e.g. "OpenWeatherMap". */
  name: string;
  /** Unique URL slug (see the catalog list in CONTENT_SPEC.md). */
  slug: string;
  category: CategorySlug;
  /** <= 140 chars; used on cards, directory rows, and meta/OG. */
  shortDescription: string;
  /** 2–4 sentences; used on the detail page. */
  longDescription: string;
  /** Official documentation URL (verified live). */
  officialDocsUrl: string;
  /** Official homepage URL (verified live). */
  homepageUrl: string;
  pricing: PricingTier;
  /** Concrete tier detail, e.g. "Free tier: 1,000 calls/day". */
  pricingNotes?: string;
  auth: AuthType;
  /** Official SDKs/libraries; [] if none are published. */
  sdkLanguages: string[];
  /** 2–4 endpoints, each matching official docs. */
  sampleEndpoints: SampleEndpoint[];
  /** Copy-paste example; curl preferred. */
  codeExample: CodeExample;
  /** 3–8 concise steps from sign-up to first successful call. */
  howToUse: string[];
  /** Slugs of other entries in this catalog only. */
  alternatives: string[];
  /** 3–6 lowercase keywords for search/filter. */
  tags: string[];
  /** Official/authoritative URLs used to verify this entry. */
  sources: string[];
  /** Surfaced on the home page. */
  featured?: boolean;
  /** Reserved for later monetization; always false at MVP. */
  sponsored?: boolean;
}
