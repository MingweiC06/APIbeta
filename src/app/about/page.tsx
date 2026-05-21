import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

const timeline = [
  ["2024", "开始系统研究全球 AI 工具与中文用户使用障碍。"],
  ["2025", "整理工具选择、提示词学习和跨语言工作流方法。"],
  ["2026", "AIbeta 成为面向中文用户的全球 AI 发现平台。"],
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="About" title="Built by Mingwei." />
          <div className="glass-card rounded-lg p-7 sm:p-10">
            <p className="text-xl leading-9 text-white/76">
              AIbeta 源于一个简单观察：优秀的全球 AI 工具越来越多，但中文用户常常卡在英文信息、
              工具选择、订阅理解和真实工作流落地之间。
            </p>
            <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                Mission
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Make global AI easier for Chinese users.
              </h2>
            </div>
          </div>

          <section className="mt-20">
            <SectionHeader eyebrow="Timeline" title="成长时间线" />
            <div className="space-y-4">
              {timeline.map(([year, text]) => (
                <div key={year} className="glass-card grid gap-4 rounded-lg p-6 sm:grid-cols-[120px_1fr]">
                  <p className="text-2xl font-semibold text-teal-200">{year}</p>
                  <p className="leading-7 text-white/64">{text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PageShell>
  );
}
