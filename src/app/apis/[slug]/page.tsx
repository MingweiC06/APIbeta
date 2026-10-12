import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/page-shell";
import { CodeBlock } from "../../components/code-block";
import { AuthBadge, PricingBadge } from "../../components/api-card";
import { getCategoryLabel } from "@/lib/categories";
import { allApis, getApiBySlug } from "@/data/apis";

const base = "https://apibeta.vercel.app";

export function generateStaticParams() {
  return allApis.map((api) => ({ slug: api.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const api = getApiBySlug(slug);
  if (!api) {
    return { title: "API not found" };
  }
  return {
    title: api.name,
    description: api.shortDescription,
    alternates: { canonical: `/apis/${api.slug}` },
    openGraph: {
      title: `${api.name} | APIbeta`,
      description: api.shortDescription,
      url: `${base}/apis/${api.slug}`,
      type: "website",
    },
  };
}

const methodStyles: Record<string, string> = {
  GET: "border-teal-200/30 bg-teal-300/10 text-teal-200",
  POST: "border-sky-200/30 bg-sky-300/10 text-sky-200",
  PUT: "border-amber-200/30 bg-amber-300/10 text-amber-200",
  PATCH: "border-amber-200/30 bg-amber-300/10 text-amber-200",
  DELETE: "border-rose-200/30 bg-rose-300/10 text-rose-200",
};

export default async function ApiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const api = getApiBySlug(slug);
  if (!api) notFound();

  const alternatives = api.alternatives
    .map((s) => getApiBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "API"],
    name: api.name,
    description: api.shortDescription,
    url: `${base}/apis/${api.slug}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      category: api.pricing,
      price: api.pricing === "free" ? "0" : undefined,
      priceCurrency: "USD",
    },
    documentation: {
      "@type": "CreativeWork",
      url: api.officialDocsUrl,
    },
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 lg:py-20">
        <nav className="mb-6 text-sm text-white/45">
          <Link href="/apis" className="transition hover:text-white">
            Directory
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/categories/${api.category}`} className="transition hover:text-white">
            {getCategoryLabel(api.category)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{api.name}</span>
        </nav>

        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200/80">
              {getCategoryLabel(api.category)}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{api.name}</h1>
            <p className="mt-3 max-w-2xl text-lg text-white/65">{api.shortDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <PricingBadge tier={api.pricing} />
              <AuthBadge auth={api.auth} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={api.officialDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
            >
              Official docs ↗
            </a>
            <a
              href={api.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
            >
              Homepage ↗
            </a>
          </div>
        </header>

        <p className="mt-8 leading-7 text-white/70">{api.longDescription}</p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">At a glance</h2>
          <div className="glass-card mt-4 overflow-hidden rounded-xl">
            <dl className="divide-y divide-white/[0.07]">
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm text-white/45">Pricing</dt>
                <dd className="text-sm text-white/85">
                  <PricingBadge tier={api.pricing} />
                  {api.pricingNotes ? (
                    <span className="mt-1 block text-white/60">{api.pricingNotes}</span>
                  ) : null}
                </dd>
              </div>
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm text-white/45">Authentication</dt>
                <dd className="text-sm text-white/85">
                  <AuthBadge auth={api.auth} />
                </dd>
              </div>
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm text-white/45">Official SDKs</dt>
                <dd className="text-sm text-white/85">
                  {api.sdkLanguages.length > 0 ? (
                    <span className="flex flex-wrap gap-2">
                      {api.sdkLanguages.map((lang) => (
                        <span
                          key={lang}
                          className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-xs text-white/70"
                        >
                          {lang}
                        </span>
                      ))}
                    </span>
                  ) : (
                    "No official SDKs published — use plain HTTP."
                  )}
                </dd>
              </div>
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm text-white/45">Documentation</dt>
                <dd className="text-sm">
                  <a
                    href={api.officialDocsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-200 underline underline-offset-2"
                  >
                    {api.officialDocsUrl.replace(/^https?:\/\//, "")} ↗
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="text-sm text-white/45">Homepage</dt>
                <dd className="text-sm">
                  <a
                    href={api.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-200 underline underline-offset-2"
                  >
                    {api.homepageUrl.replace(/^https?:\/\//, "")} ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Sample endpoints</h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-white/40">
                <tr>
                  <th className="px-4 py-3 font-medium">Method</th>
                  <th className="px-4 py-3 font-medium">Path</th>
                  <th className="hidden px-4 py-3 font-medium sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07]">
                {api.sampleEndpoints.map((ep) => (
                  <tr key={`${ep.method} ${ep.path}`}>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-md border px-2 py-0.5 font-mono text-xs font-semibold ${
                          methodStyles[ep.method] ?? "border-white/15 bg-white/5 text-white/70"
                        }`}
                      >
                        {ep.method}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-teal-100/90">{ep.path}</td>
                    <td className="hidden px-4 py-3 text-white/60 sm:table-cell">
                      {ep.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Try it now</h2>
          <div className="mt-4">
            <CodeBlock
              language={api.codeExample.language}
              code={api.codeExample.code}
              note={api.codeExample.note}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">How to use it</h2>
          <ol className="mt-4 space-y-3">
            {api.howToUse.map((step, i) => (
              <li key={i} className="glass-card flex gap-4 rounded-xl p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-teal-300/15 text-xs font-bold text-teal-200">
                  {i + 1}
                </span>
                <p className="text-sm leading-6 text-white/72">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {alternatives.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-xl font-semibold">Alternatives</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {alternatives.map((alt) => (
                <Link
                  key={alt.slug}
                  href={`/apis/${alt.slug}`}
                  className="glass-card glow-hover rounded-xl p-4"
                >
                  <p className="font-semibold text-white">{alt.name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/55">
                    {alt.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Tags</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {api.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/60"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Verified sources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {api.sources.map((src) => (
              <li key={src}>
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-teal-200 underline underline-offset-2"
                >
                  {src.replace(/^https?:\/\//, "")} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
