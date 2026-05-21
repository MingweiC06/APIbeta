import { compareRows } from "../components/data";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

export default function ComparePage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Compare"
            title="GPT vs Claude vs Gemini"
            description="A quick model comparison for users who want to choose with less noise."
          />
          <div className="glass-card overflow-x-auto rounded-lg">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                <div className="p-4 text-white/50">Category</div>
                <div className="p-4">GPT</div>
                <div className="p-4">Claude</div>
                <div className="p-4">Gemini</div>
              </div>
              {compareRows.map((row) => (
                <div key={row.label} className="grid grid-cols-4 border-b border-white/10 text-sm last:border-b-0">
                  <div className="bg-white/[0.03] p-4 font-semibold text-teal-200">{row.label}</div>
                  <div className="p-4 leading-6 text-white/64">{row.gpt}</div>
                  <div className="p-4 leading-6 text-white/64">{row.claude}</div>
                  <div className="p-4 leading-6 text-white/64">{row.gemini}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
