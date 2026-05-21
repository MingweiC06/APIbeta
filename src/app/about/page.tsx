import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

const timeline = [
  ["Year 1", "Started using AI tools for school, coding, writing, and learning faster."],
  ["Year 2", "Noticed that most people were losing time switching tools, comparing models, and reading scattered advice."],
  ["Year 3", "Began shaping AIbeta as a global platform for choosing and using AI models from one place."],
] as const;

export default function AboutPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="About" title="Built by Mingwei." />
          <div className="glass-card rounded-lg p-7 sm:p-10">
            <p className="text-xl leading-9 text-white/76">
              AIbeta is built by Mingwei, a third-year college student who kept seeing the same problem:
              AI models are powerful, but the experience is scattered. People open too many tabs, compare too
              many subscriptions, and still do not know which model fits their actual work.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/62">
              The idea behind AIbeta is simple: make AI easier to use by organizing models, guidance, and workflows
              around the user instead of forcing every person to figure out the AI ecosystem alone.
            </p>
            <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-200/80">
                Mission
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Help people use the AI model they want, from one focused website.
              </h2>
            </div>
          </div>

          <section className="mt-20">
            <SectionHeader eyebrow="Timeline" title="From student problem to product vision" />
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
