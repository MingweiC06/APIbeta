export const featuredTools = [
  {
    name: "GPT",
    useCase: "写作、学习、代码、通用问答",
    difficulty: "入门友好",
    price: "免费 / Pro",
    accent: "from-emerald-300 to-cyan-300",
  },
  {
    name: "Claude",
    useCase: "长文档理解、研究、深度分析",
    difficulty: "中等",
    price: "免费 / Pro",
    accent: "from-orange-200 to-rose-300",
  },
  {
    name: "Gemini",
    useCase: "Google 生态、多模态、搜索辅助",
    difficulty: "入门友好",
    price: "免费 / Advanced",
    accent: "from-blue-300 to-indigo-300",
  },
  {
    name: "Image Generation",
    useCase: "海报、视觉概念、产品图生成",
    difficulty: "中等",
    price: "按量 / 订阅",
    accent: "from-fuchsia-300 to-pink-300",
  },
] as const;

export const exploreTools = [
  ...featuredTools,
  {
    name: "Perplexity",
    useCase: "英文资料搜索、信息验证",
    difficulty: "入门友好",
    price: "免费 / Pro",
    accent: "from-teal-300 to-sky-300",
  },
  {
    name: "Midjourney",
    useCase: "高级图像风格探索",
    difficulty: "进阶",
    price: "订阅",
    accent: "from-violet-300 to-amber-200",
  },
  {
    name: "Runway",
    useCase: "AI 视频生成与编辑",
    difficulty: "中等",
    price: "免费额度 / Pro",
    accent: "from-lime-200 to-emerald-300",
  },
  {
    name: "Cursor",
    useCase: "AI 编程、项目重构",
    difficulty: "进阶",
    price: "免费 / Pro",
    accent: "from-slate-100 to-cyan-200",
  },
] as const;

export const compareRows = [
  {
    label: "Best for",
    gpt: "通用任务、中文表达、代码协作",
    claude: "长文本、严谨分析、文档工作",
    gemini: "搜索、多模态、Google 工作流",
  },
  {
    label: "Speed",
    gpt: "快",
    claude: "稳定",
    gemini: "快",
  },
  {
    label: "Price",
    gpt: "免费 / Pro",
    claude: "免费 / Pro",
    gemini: "免费 / Advanced",
  },
  {
    label: "Learning Curve",
    gpt: "低",
    claude: "低到中",
    gemini: "低",
  },
] as const;
