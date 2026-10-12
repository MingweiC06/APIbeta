import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { categories } from "@/lib/categories";
import { getApiCountByCategory } from "@/data/apis";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse the API catalog by category: weather, maps, finance, AI, communications, translation, media, payments, search and social platforms.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Categories"
            title="Browse by category"
            description="The catalog is organized into ten categories. Counts update live from the data as more entries are verified."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const count = getApiCountByCategory(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="glass-card glow-hover rounded-xl p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{cat.label}</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-xs text-white/60">
                      {count} {count === 1 ? "API" : "APIs"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/55">{cat.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
