import { exploreTools } from "../components/data";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";
import { ToolCard } from "../components/tool-card";

export default function ExplorePage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Explore"
            title="Explore AI models and tools"
            description="Browse the models and AI products that can become part of the AIbeta workspace vision."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {exploreTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
