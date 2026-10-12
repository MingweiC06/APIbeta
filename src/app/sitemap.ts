import type { MetadataRoute } from "next";
import { allApis } from "@/data/apis";
import { categories } from "@/lib/categories";
import { guides } from "@/data/guides";

const base = "https://apibeta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/apis",
    "/categories",
    "/guides",
    "/compare",
    "/submit",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const apiRoutes: MetadataRoute.Sitemap = allApis.map((api) => ({
    url: `${base}/apis/${api.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${base}/categories/${cat.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${base}/guides/${guide.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...apiRoutes, ...categoryRoutes, ...guideRoutes];
}
