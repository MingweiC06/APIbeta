import type { ApiEntry, CategorySlug } from "@/lib/types";
import { weatherApis } from "./weather";
import { mapsApis } from "./maps";
import { financeApis } from "./finance";
import { aiApis } from "./ai";
import { smsApis } from "./sms";
import { translationApis } from "./translation";
import { mediaApis } from "./media";
import { paymentsApis } from "./payments";
import { searchApis } from "./search";
import { socialApis } from "./social";

export const allApis: ApiEntry[] = [
  ...weatherApis,
  ...mapsApis,
  ...financeApis,
  ...aiApis,
  ...smsApis,
  ...translationApis,
  ...mediaApis,
  ...paymentsApis,
  ...searchApis,
  ...socialApis,
];

export function getApiBySlug(slug: string): ApiEntry | undefined {
  return allApis.find((api) => api.slug === slug);
}

export function getApisByCategory(category: CategorySlug): ApiEntry[] {
  return allApis.filter((api) => api.category === category);
}

export function getFeaturedApis(): ApiEntry[] {
  return allApis.filter((api) => api.featured).slice(0, 6);
}

export function getApiCountByCategory(category: CategorySlug): number {
  return allApis.filter((api) => api.category === category).length;
}
