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
            title="探索全球 AI 工具"
            description="按用途、难度与价格快速浏览，找到最适合你的第一个工具组合。"
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
