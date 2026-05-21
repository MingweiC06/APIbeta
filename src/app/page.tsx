import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { SectionHeader } from "./components/section-header";
import { ToolCard } from "./components/tool-card";
import { featuredTools } from "./components/data";

const whyItems = [
  "中文语境解读全球 AI 产品",
  "按真实工作流推荐工具组合",
  "从账号、订阅到提示词一起梳理",
] as const;

const steps = ["用户", "发现工具", "学习", "开始使用"] as const;

const faqs = [
  {
    q: "AIbeta 适合谁？",
    a: "适合想使用全球 AI 工具但被语言、支付、场景选择或学习成本卡住的中文用户。",
  },
  {
    q: "你们会替用户做设置吗？",
    a: "服务页提供 AI Setup、工具推荐和工作流指导，可用于个人学习、创作者和小团队。",
  },
  {
    q: "内容默认是什么语言？",
    a: "默认中文，保留英文术语和二级英文入口，方便用户对应原始工具界面。",
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
              Global AI access for Chinese users
            </p>
            <h1 className="fade-up fade-delay-1 gradient-text text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              连接全球 AI
            </h1>
            <p className="fade-up fade-delay-2 mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
              帮助中文用户理解、发现并使用全球 AI 工具
            </p>
            <div className="fade-up fade-delay-3 mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/explore"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
              >
                开始探索
              </Link>
              <Link
                href="/services"
                className="rounded-lg border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
              >
                了解服务
              </Link>
            </div>
          </div>

          <div className="fade-up fade-delay-3 mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="glass-card rounded-lg p-5 text-center">
                <p className="text-xs text-white/38">0{index + 1}</p>
                <p className="mt-2 font-medium text-white">{step}</p>
                {index < steps.length - 1 ? (
                  <p className="mt-3 hidden text-teal-200/70 sm:block">↓</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured AI Tools"
            title="精选 AI 工具"
            description="从最常用的全球 AI 平台开始，快速理解它们适合什么、如何选择。"
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
          <SectionHeader eyebrow="Why AIbeta" title="把复杂选择变成清晰路径" />
          <div className="grid gap-4 md:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item} className="glass-card glow-hover rounded-lg p-7">
                <div className="mb-8 size-10 rounded-lg bg-teal-300/15 ring-1 ring-teal-200/25" />
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="mt-4 text-sm leading-6 text-white/56">
                  面向中文用户的实际问题：看懂、选对、配置好，并把工具放进日常学习与工作。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="How It Works" title="从发现到上手" />
          <div className="glass-card rounded-lg p-6 sm:p-8">
            <div className="grid gap-4 md:grid-cols-4">
              {["定位需求", "筛选工具", "学习用法", "搭建工作流"].map((item, index) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/18 p-5">
                  <p className="text-sm text-teal-200">Step {index + 1}</p>
                  <h3 className="mt-4 font-semibold">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/54">
                    以中文场景解释每一步，减少试错和信息噪音。
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="常见问题" />
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
