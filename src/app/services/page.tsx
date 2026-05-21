import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { SectionHeader } from "../components/section-header";

const services = [
  {
    title: "AI Setup",
    description: "协助完成账号、基础配置、工具入口和中文使用环境设置。",
  },
  {
    title: "Tool Recommendations",
    description: "根据学习、创作、运营、开发或团队需求匹配合适的全球 AI 工具。",
  },
  {
    title: "Workflow Guidance",
    description: "把 AI 工具接入日常工作流，形成可复用的提示词和操作步骤。",
  },
] as const;

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="AI 工具上手服务"
            description="从选择到配置，再到形成稳定工作流，AIbeta 帮你少走弯路。"
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
              预约咨询
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
