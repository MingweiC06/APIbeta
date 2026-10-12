import type { CategorySlug } from "./types";

export interface CategoryMeta {
  slug: CategorySlug;
  label: string;
  description: string;
}

export const categories: CategoryMeta[] = [
  {
    slug: "weather",
    label: "Weather",
    description:
      "Current conditions, forecasts, geocoding and historical climate data from weather APIs.",
  },
  {
    slug: "maps-geo",
    label: "Maps & Geolocation",
    description:
      "Mapping, geocoding, routing and location services for apps and websites.",
  },
  {
    slug: "finance",
    label: "Finance & Market Data",
    description:
      "Stock, crypto, forex and macroeconomic data for dashboards and trading tools.",
  },
  {
    slug: "ai-ml",
    label: "AI & Machine Learning",
    description:
      "Large language models, image generation and ML inference APIs.",
  },
  {
    slug: "sms-comms",
    label: "SMS & Communications",
    description:
      "SMS, email, voice and messaging APIs for transactional and marketing comms.",
  },
  {
    slug: "translation",
    label: "Translation",
    description:
      "Machine translation, language detection and glossary services.",
  },
  {
    slug: "images-media",
    label: "Images & Media",
    description:
      "Stock photos, image hosting, transformation and media asset APIs.",
  },
  {
    slug: "payments",
    label: "Payments",
    description:
      "Accept payments, manage payouts, subscriptions and financial accounts.",
  },
  {
    slug: "search",
    label: "Search",
    description:
      "Web search, SERP scraping and news search APIs.",
  },
  {
    slug: "social",
    label: "Social & Developer Platforms",
    description:
      "APIs for GitHub, Spotify, Reddit, YouTube and other developer platforms.",
  },
];

export function getCategory(slug: CategorySlug): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryLabel(slug: CategorySlug): string {
  return getCategory(slug)?.label ?? slug;
}
