import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/page-shell";
import { ApiCard } from "../../components/api-card";
import { categories, getCategory } from "@/lib/categories";
import type { CategorySlug } from "@/lib/types";
import { getApisByCategory } from "@/data/apis";

const base = "https://apibeta.vercel.app";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug as CategorySlug);
  if (!cat) return { title: "Category not found" };
  return {
    title: cat.label,
    description: cat.description,
    alternates: { canonical: `/categories/${cat.slug}` },
    openGraph: {
      title: `${cat.label} APIs | APIbeta`,
      description: cat.description,
      url: `${base}/categories/${cat.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCategory(slug as CategorySlug);
  if (!cat) notFound();

  const apis = getApisByCategory(cat.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.label} APIs`,
    description: cat.description,
    url: `${base}/categories/${cat.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: apis.map((api, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/apis/${api.slug}`,
        name: api.name,
      })),
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-6 text-sm text-white/45">
            <Link href="/categories" className="transition hover:text-white">
              Categories
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{cat.label}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200/80">
              Category
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{cat.label}</h1>
            <p className="mt-4 text-lg leading-8 text-white/60">{cat.description}</p>
            <p className="mt-4 text-sm text-white/45">
              {apis.length} {apis.length === 1 ? "entry" : "entries"} in this category
            </p>
          </div>

          {apis.length > 0 ? (
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {apis.map((api) => (
                <ApiCard key={api.slug} api={api} />
              ))}
            </div>
          ) : (
            <div className="glass-card mt-10 rounded-xl p-10 text-center">
              <p className="text-lg font-semibold text-white">
                No entries verified yet in this category
              </p>
              <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
                We are verifying entries against official docs.{" "}
                <Link href="/submit" className="text-teal-200 underline underline-offset-2">
                  Suggest an API here
                </Link>{" "}
                and it will be reviewed for this category.
              </p>
            </div>
          )}

          <div className="mt-12">
            <Link
              href="/categories"
              className="text-sm text-white/50 transition hover:text-white"
            >
              ← All categories
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
