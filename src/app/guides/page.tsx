import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Beginner-friendly guides to APIs: choosing the right API, authentication, pricing, your first REST call, rate limits and retries.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Guides"
            title="Learn APIs from zero"
            description="Short, accurate, evergreen explainers — no fluff, no vendor pitches."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="glass-card glow-hover rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{guide.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] text-white/55"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
