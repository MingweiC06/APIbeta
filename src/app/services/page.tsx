import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

const services = [
  {
    title: "For Students",
    description:
      "Choose AI models for studying, research, writing, coding homework, language learning, and building better learning habits.",
  },
  {
    title: "For Creators",
    description:
      "Set up model workflows for scripts, content planning, image generation, video ideas, thumbnails, and publishing systems.",
  },
  {
    title: "For Builders and Teams",
    description:
      "Compare models, design workflows, and reduce tool switching for founders, developers, and small teams.",
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Different AI help for different people"
            description="AIbeta can guide users by role, because a student, creator, founder, and developer should not receive the same AI setup."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glass-card glow-hover rounded-lg p-7">
                <p className="text-sm text-teal-200">AIbeta Service</p>
                <h2 className="mt-5 text-2xl font-semibold">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/58">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
