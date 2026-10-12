import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { ApisBrowser } from "../components/apis-browser";
import { categories } from "@/lib/categories";
import { allApis } from "@/data/apis";

export const metadata: Metadata = {
  title: "API Directory",
  description:
    "Browse the APIbeta directory: filter real, verified APIs by category, pricing tier and authentication, then jump into documentation and code samples.",
  alternates: { canonical: "/apis" },
};

export default function ApisPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Directory"
            title="The API catalog"
            description="Every entry below renders from the catalog data — pricing, auth and endpoints verified against official documentation."
          />
          <Suspense
            fallback={
              <p className="py-10 text-center text-sm text-white/40">Loading directory…</p>
            }
          >
            <ApisBrowser apis={allApis} categories={categories} />
          </Suspense>
        </div>
      </section>
    </PageShell>
  );
}
