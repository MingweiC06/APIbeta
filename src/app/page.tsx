import Link from "next/link";
import { featuredTools } from "./components/data";
import { PageShell } from "./components/page-shell";
import { SectionHeader } from "./components/section-header";
import { ToolCard } from "./components/tool-card";

const whyItems = [
  {
    title: "Fewer tabs, clearer choices",
    body: "Browse AI tools by real use case, compare them side by side, and move toward a practical workflow.",
  },
  {
    title: "Workflow-first recommendations",
    body: "AIbeta is not an API reseller and does not sell tokens. It helps users understand which tool fits the job.",
  },
  {
    title: "Simple enough to start",
    body: "The quiz turns a messy AI landscape into a small stack you can actually try today.",
  },
] as const;

const steps = ["Explore tools", "Compare options", "Find your stack", "Start the workflow"] as const;

const faqs = [
  {
    q: "What is AIbeta?",
    a: "AIbeta is a discovery and recommendation website that helps users find the right AI tools and workflows in one place.",
  },
  {
    q: "Does AIbeta sell API tokens?",
    a: "No. AIbeta is not an API reseller, does not sell tokens, and does not process payments. It helps users choose tools.",
  },
  {
    q: "How should I start?",
    a: "Explore the tool cards, compare the main options, then take the quiz to get a recommended starter stack.",
  },
] as const;

export default function Home() {
  return (
    <PageShell>
      <section className="relative px-5 pb-24 pt-20 sm:px-8 lg:pb-32 lg:pt-28">
        <div className="hero-orbit" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="fade-up mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/62 backdrop-blur">
              Find the right AI in one place
            </p>
            <h1 className="fade-up fade-delay-1 gradient-text text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              Find the right AI workflow
            </h1>
            <p className="fade-up fade-delay-2 mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
              AIbeta helps users discover, compare, and choose AI tools for study, coding, video, business, and image workflows.
            </p>
            <div className="fade-up fade-delay-3 mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
              >
                Explore AI
              </Link>
              <Link
                href="/quiz"
                className="rounded-lg border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
              >
                Find My Stack
              </Link>
            </div>
          </div>

          <div className="fade-up fade-delay-3 mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="glass-card rounded-lg p-5 text-center">
                <p className="text-xs text-white/38">0{index + 1}</p>
                <p className="mt-2 font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured AI Tools"
            title="Featured AI cards"
            description="Start with trusted AI tools and understand where each one fits before choosing your workflow."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why AIbeta" title="More than a list of tools" />
          <div className="grid gap-4 md:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="glass-card glow-hover rounded-lg p-7">
                <div className="mb-8 size-10 rounded-lg bg-teal-300/15 ring-1 ring-teal-200/25" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/56">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="How It Works"
            title="A simple workflow for choosing AI"
            description="User arrives, explores, compares, gets a recommendation, and leaves understanding which AI to use."
          />
          <div className="glass-card rounded-lg p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {["Role", "Model", "Workflow", "Workspace"].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/18 p-5">
                  <p className="text-sm text-teal-200">Step {index + 1}</p>
                  <h3 className="mt-4 font-semibold">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/54">
                    A simple path from user need to the right model and a usable workflow.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Questions people may ask" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="glass-card rounded-lg p-6">
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
