# APIbeta Content Spec — API Encyclopedia

This document defines the content model, the catalog plan, and the verification
standards for every API entry on APIbeta. Page code never hardcodes API facts —
everything renders from the typed data modules in `src/data/apis/`, so the catalog
can later be migrated to Postgres field-by-field without touching any page.

## Brand

- Site name: **APIbeta — API Encyclopedia** (Chinese pages: **APIbeta API 百科**).
- Every public page, meta title/description, header and footer must use this brand.

## Content model

Schema lives in `src/lib/types.ts`. One file per category in `src/data/apis/`,
each exporting `const <category>Apis: ApiEntry[]`. The loader
`src/data/apis/index.ts` aggregates them.

Fields (all required unless marked optional):

| Field | Type | Notes |
|---|---|---|
| `name` | string | Official product name, e.g. "OpenWeatherMap" |
| `slug` | string | URL slug, unique across the whole catalog (list below) |
| `category` | one of the 10 slugs | See categories list |
| `shortDescription` | string | ≤ 140 chars; used on cards, directory, OG/meta |
| `longDescription` | string | 2–4 sentences; used on the detail page |
| `officialDocsUrl` | string | Official documentation URL (verified live) |
| `homepageUrl` | string | Official homepage URL (verified live) |
| `pricing` | `"free" \| "freemium" \| "paid"` | Judgment per entry |
| `pricingNotes` | string (optional) | Concrete detail, e.g. "Free tier: 1,000 calls/day" |
| `auth` | `"none" \| "api-key" \| "oauth"` | How developers authenticate |
| `sdkLanguages` | string[] | Official SDKs/libraries; `[]` if none |
| `sampleEndpoints` | 2–4 items | `{ method, path, description }` — must match official docs |
| `codeExample` | `{ language, code, note? }` | Copy-paste example; curl preferred, one SDK variant optional |
| `howToUse` | string[] | 3–8 concise numbered steps, from sign-up to first successful call |
| `alternatives` | string[] | Slugs of other entries in this catalog only |
| `tags` | string[] | 3–6 lowercase keywords for search/filter |
| `sources` | string[] | The official/authoritative URLs that verify this entry |
| `featured` | boolean (optional) | Surfaced on the home page; ~2–3 per category max, ~6 total |
| `sponsored` | boolean (optional) | Reserved for later monetization; always `false` at MVP |

## Categories and planned catalog (41 entries)

Slugs are final — `alternatives` must only reference slugs from this list.

| Category file | Category slug | Entries |
|---|---|---|
| `weather.ts` | `weather` | `openweathermap`, `open-meteo`, `weatherapi`, `tomorrow-io` |
| `maps.ts` | `maps-geo` | `google-maps-platform`, `mapbox`, `nominatim`, `here` |
| `finance.ts` | `finance` | `alpha-vantage`, `finnhub`, `twelvedata`, `coingecko` |
| `translation.ts` | `translation` | `google-translate`, `deepl`, `microsoft-translator` |
| `ai.ts` | `ai-ml` | `openai`, `anthropic`, `gemini-api`, `hugging-face`, `stability-ai` |
| `sms.ts` | `sms-comms` | `twilio`, `vonage`, `plivo`, `sendgrid` |
| `social.ts` | `social` | `github`, `spotify`, `reddit`, `youtube-data` |
| `media.ts` | `images-media` | `unsplash`, `pexels`, `giphy`, `cloudinary`, `flickr` |
| `payments.ts` | `payments` | `stripe`, `paypal`, `square`, `plaid` |
| `search.ts` | `search` | `google-search`, `brave-search`, `serpapi`, `newsapi` |

## Verification standards (non-negotiable)

- Every fact — endpoints, auth method, pricing tier, SDK languages, docs URL —
  must be verified against the API provider's **official** documentation or a
  first-party authoritative source, fetched live during research. No invented
  details, no recalled-from-memory prices or endpoints.
- `sampleEndpoints` paths must appear in official docs. `codeExample` must be
  syntactically valid and use the real base URL / auth scheme.
- If something cannot be verified, omit it or state it in `pricingNotes` /
  `longDescription` as uncertain — never fabricate a value to fill the schema.
- Each entry lists its verification `sources` (official docs, pricing page,
  changelog, etc.).
- `slug`, `name`, `category`, `officialDocsUrl` and `sources` are mandatory for
  every entry; `howToUse` must be concrete (real sign-up → real key → real call).

## Migration readiness

Data modules are plain typed objects with no runtime imports of pages. When
Postgres is introduced later, each field maps 1:1 to a column and the loader is
replaced by a DB query; page code stays unchanged.
