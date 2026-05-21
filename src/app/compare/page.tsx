import { CompareTable } from "../components/compare-table";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

export default function ComparePage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Compare"
            title="Choose quickly with a clear comparison"
            description="Filter by use case, then compare each tool by best fit, difficulty, pricing, and strength."
          />
          <CompareTable />
        </div>
      </section>
    </PageShell>
  );
}
