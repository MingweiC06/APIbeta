import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Contact"
            title="联系 AIbeta"
            description="告诉我们你的目标、当前工具和卡点，我们会用中文帮你梳理下一步。"
          />
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <form className="glass-card rounded-lg p-6 sm:p-8">
              <label className="block text-sm font-medium text-white/72" htmlFor="name">
                Name
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50"
                id="name"
                name="name"
                placeholder="Mingwei"
                type="text"
              />

              <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="email">
                Email
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50"
                id="email"
                name="email"
                placeholder="hello@aibeta.com"
                type="email"
              />

              <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="message">
                Message
              </label>
              <textarea
                className="mt-2 min-h-36 w-full resize-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50"
                id="message"
                name="message"
                placeholder="我想了解如何选择和使用全球 AI 工具..."
              />

              <button
                className="mt-6 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
                type="submit"
              >
                发送消息
              </button>
            </form>

            <aside className="glass-card rounded-lg p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Social</h2>
              <div className="mt-6 space-y-3 text-sm text-white/60">
                <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">WeChat: coming soon</p>
                <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">X / Twitter: @aibeta</p>
                <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">GitHub: github.com/aibeta</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
