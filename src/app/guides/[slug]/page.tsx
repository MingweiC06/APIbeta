import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/page-shell";
import { getGuideBySlug, guides } from "@/data/guides";
import { getApiBySlug } from "@/data/apis";

const base = "https://apibeta.vercel.app";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | APIbeta`,
      description: guide.description,
      url: `${base}/guides/${guide.slug}`,
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = (guide.relatedApiSlugs ?? [])
    .map((s) => getApiBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <PageShell>
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 lg:py-20">
        <nav className="mb-6 text-sm text-white/45">
          <Link href="/guides" className="transition hover:text-white">
            Guides
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">{guide.title}</span>
        </nav>

        <h1 className="text-4xl font-semibold tracking-tight">{guide.title}</h1>
        <p className="mt-4 text-lg leading-8 text-white/60">{guide.description}</p>

        <div className="mt-10 space-y-10">
          {guide.sections.map((section, i) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-white">
                <span className="mr-2 text-teal-200">0{i + 1}.</span>
                {section.heading}
              </h2>
              <p className="mt-3 leading-7 text-white/72">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {guide.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/55"
            >
              #{tag}
            </span>
          ))}
        </div>

        {related.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-white">In this catalog</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {related.map((api) => (
                <Link
                  key={api.slug}
                  href={`/apis/${api.slug}`}
                  className="glass-card rounded-lg p-4 text-sm transition hover:border-teal-200/30"
                >
                  <span className="font-semibold text-white">{api.name}</span>
                  <span className="mt-1 block text-white/55">{api.shortDescription}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/55">
          Looking for an API to practice on?{" "}
          <Link href="/apis" className="text-teal-200 underline underline-offset-2">
            Browse the directory
          </Link>{" "}
          or{" "}
          <Link href="/compare" className="text-teal-200 underline underline-offset-2">
            compare two APIs side by side
          </Link>
          .
        </div>
      </article>
    </PageShell>
  );
}
