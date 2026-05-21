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
            title="GPT、Claude、Gemini 对比"
            description="用中文快速理解三个主流平台的定位，减少选择成本。"
          />
          <div className="glass-card overflow-x-auto rounded-lg">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                <div className="p-4 text-white/50">维度</div>
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
