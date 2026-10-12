import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { allApis } from "@/data/apis";

export const metadata: Metadata = {
  title: "About",
  description:
    "APIbeta is a curated, verified encyclopedia of web APIs — built by developers, for developers, free at MVP.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Verified, not scraped",
    body: "Every endpoint, pricing tier and auth method on APIbeta is checked against the provider's official documentation. We link to our sources on each entry.",
  },
  {
    title: "Typed and migration-ready",
    body: "The catalog is plain typed data, one object per API. Pages never hardcode facts — the whole encyclopedia can move to a database later without touching a single layout.",
  },
  {
    title: "Free at MVP",
    body: "No paywalls, no fake rankings. Later, affiliate links or sponsorships may fund the project, and they will always be clearly labeled.",
  },
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="About" title="What is APIbeta?" />
          <div className="glass-card rounded-xl p-7 sm:p-10">
            <p className="text-xl leading-9 text-white/76">
              APIbeta is an API encyclopedia: a curated, verified catalog of real
              web APIs — currently {allApis.length} entries and growing — paired
              with plain-language guides that take you from &ldquo;what is an API&rdquo;
              to your first successful call.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/62">
              The idea is simple. Developers should not have to open a dozen tabs,
              read scattered pricing pages and reverse-engineer example code just to
              answer &ldquo;which API should I use&rdquo;. APIbeta does that organizing
              up front and links out to the official docs for everything that matters.
            </p>
            <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                Mission
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Make the world of APIs one readable, trustworthy catalog.
              </h2>
            </div>
          </div>

          <section className="mt-14">
            <div className="grid gap-4 md:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title} className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 text-center">
            <p className="text-white/55">
              Know an API we are missing?{" "}
              <Link href="/submit" className="text-teal-200 underline underline-offset-2">
                Suggest it
              </Link>{" "}
              — community submissions are how the catalog gets better.
            </p>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
