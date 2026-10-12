import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { CompareTool } from "../components/compare-tool";
import { allApis } from "@/data/apis";

export const metadata: Metadata = {
  title: "Compare APIs",
  description:
    "Compare up to 4 real APIs side by side: pricing, authentication, SDKs, endpoints and documentation. Selection is shareable via URL.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Compare"
            title="APIs side by side"
            description="Pick 2–4 entries from the catalog and compare the details that actually decide your choice."
          />
          <Suspense
            fallback={
              <p className="py-10 text-center text-sm text-white/40">Loading comparator…</p>
            }
          >
            <CompareTool apis={allApis} />
          </Suspense>
        </div>
      </section>
    </PageShell>
  );
}
