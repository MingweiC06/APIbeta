import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with APIbeta: report an error in an entry, suggest an API, or open an issue on GitHub.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Contact"
            title="Reach the APIbeta maintainers"
            description="APIbeta is a small, community-driven project. The fastest way to reach us is public, on GitHub."
          />
          <div className="space-y-4">
            <div className="glass-card rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">Found a wrong fact?</h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                If an entry lists an endpoint, price or auth method that no longer matches
                the provider&rsquo;s docs, please open an issue and point at the page. We
                correct entries quickly.
              </p>
              <a
                href="https://github.com/MingweiC06/APIbeta/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
              >
                Open a GitHub issue ↗
              </a>
            </div>

            <div className="glass-card rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">Want an API added?</h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Use the suggestion form — it prepares a pre-filled GitHub issue for you.
              </p>
              <Link
                href="/submit"
                className="mt-4 inline-block rounded-lg border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
              >
                Suggest an API
              </Link>
            </div>

            <div className="glass-card rounded-xl p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-white">About this site</h2>
              <p className="mt-2 text-sm leading-6 text-white/60">
                APIbeta is free at MVP, has no backend, and stores nothing about you.
                Read more on the{" "}
                <Link href="/about" className="text-teal-200 underline underline-offset-2">
                  about page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
