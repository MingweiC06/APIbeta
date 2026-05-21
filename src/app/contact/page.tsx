import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Request Access"
            title="Join the AIbeta waitlist"
            description="Tell us what you want AIbeta to help you choose. No backend is connected yet, so this is a frontend MVP form."
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
                placeholder="Your name"
                type="text"
              />

              <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="email">
                Email
              </label>
              <input
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50"
                id="email"
                name="email"
                placeholder="saveazure@gmail.com"
                type="email"
              />

              <label className="mt-5 block text-sm font-medium text-white/72" htmlFor="goal">
                Goal
              </label>
              <textarea
                className="mt-2 min-h-36 w-full resize-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50"
                id="goal"
                name="goal"
                placeholder="I want to find the right AI stack for studying, coding, business, images, or video..."
              />

              <button
                className="mt-6 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
                type="submit"
              >
                Join Waitlist
              </button>
            </form>

            <aside className="glass-card rounded-lg p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Contact</h2>
              <div className="mt-6 space-y-3 text-sm text-white/60">
                <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">WeChat: AzureTrust</p>
                <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">Email: saveazure@gmail.com</p>
                <p className="rounded-lg border border-white/10 bg-white/[0.04] p-4">Social: coming soon</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
