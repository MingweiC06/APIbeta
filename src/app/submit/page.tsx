import type { Metadata } from "next";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { SubmitForm } from "../components/submit-form";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Suggest an API",
  description:
    "Know an API that should be in the encyclopedia? Send us the details — suggestions are reviewed against official documentation before publication.",
  alternates: { canonical: "/submit" },
};

export default function SubmitPage() {
  return (
    <PageShell>
      <section className="px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="Community"
            title="Suggest an API"
            description="The catalog grows with its readers. Tell us about an API that deserves an entry — we verify it against official docs before publishing."
          />
          <SubmitForm categories={categories} />
        </div>
      </section>
    </PageShell>
  );
}
