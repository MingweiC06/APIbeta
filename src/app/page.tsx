import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { SectionHeader } from "./components/section-header";
import { HomeSearch } from "./components/home-search";
import { ApiCard } from "./components/api-card";
import { categories, getCategoryLabel } from "@/lib/categories";
import { allApis, getApiCountByCategory, getFeaturedApis } from "@/data/apis";

export const metadata = {
  title: "APIbeta | API Encyclopedia",
  description:
    "APIbeta is a curated, verified encyclopedia of web APIs. Browse, compare and learn how to use real APIs — weather, maps, finance, AI, payments and more.",
};

export default function Home() {
  const featured = getFeaturedApis();
  const total = allApis.length;

  return (
    <PageShell>
      <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:pb-24 lg:pt-28">
        <div className="hero-orbit" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="fade-up mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/62 backdrop-blur">
              {total} APIs · verified against official docs · free at MVP
            </p>
            <h1 className="fade-up fade-delay-1 gradient-text text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              One encyclopedia for the web&rsquo;s APIs
            </h1>
            <p className="fade-up fade-delay-2 mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
              APIbeta curates a growing catalog of real, production-ready APIs —
              pricing, auth, endpoints and code samples verified against each
              provider&rsquo;s official documentation.
            </p>
            <HomeSearch total={total} />
            <div className="fade-up fade-delay-3 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/apis"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
              >
                Browse the directory
              </Link>
              <Link
                href="/submit"
                className="rounded-lg border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
              >
                Suggest an API
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Categories"
            title="Explore by category"
            description="Every entry is typed into a category, so the catalog scales field by field — no dead links, no invented facts."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((cat) => {
              const count = getApiCountByCategory(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="glass-card glow-hover rounded-xl p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{cat.label}</h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-0.5 text-[11px] text-white/60">
                      {count}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/50">
                    {cat.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured"
            title="Start with the most useful APIs"
            description="A hand-picked selection from the catalog — the APIs most developers reach for first."
          />
          {featured.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((api) => (
                <ApiCard key={api.slug} api={api} />
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-xl p-10 text-center text-sm text-white/55">
              Featured entries are being added to the catalog. Browse the full
              directory in the meantime.
            </div>
          )}
          <div className="mt-10 text-center">
            <Link
              href="/apis"
              className="inline-flex rounded-lg border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
            >
              View all {total} APIs →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="How it works"
            title="From question to first API call"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Browse & filter",
                body: "Search the directory and filter by category, pricing tier and auth type.",
              },
              {
                step: "02",
                title: "Compare & learn",
                body: "Read verified detail pages, compare side by side, and follow our beginner guides.",
              },
              {
                step: "03",
                title: "Make the call",
                body: "Copy a working curl example, get a key, and ship your first request.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-xl p-6">
                <p className="text-xs text-teal-200">{item.step}</p>
                <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
