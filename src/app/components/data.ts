export const featuredTools = [
  {
    name: "GPT",
    useCase: "General reasoning, writing, coding, and everyday assistants",
    difficulty: "Beginner",
    price: "Free / Pro",
    accent: "from-emerald-300 to-cyan-300",
  },
  {
    name: "Claude",
    useCase: "Long documents, careful analysis, research, and planning",
    difficulty: "Easy",
    price: "Free / Pro",
    accent: "from-orange-200 to-rose-300",
  },
  {
    name: "Gemini",
    useCase: "Google workflows, multimodal tasks, and search support",
    difficulty: "Beginner",
    price: "Free / Advanced",
    accent: "from-blue-300 to-indigo-300",
  },
  {
    name: "Image Generation",
    useCase: "Concept art, product visuals, ads, and social creative",
    difficulty: "Medium",
    price: "Usage / Subscription",
    accent: "from-fuchsia-300 to-pink-300",
  },
] as const;

export const exploreTools = [
  ...featuredTools,
  {
    name: "Perplexity",
    useCase: "Research, source discovery, and fast fact checking",
    difficulty: "Beginner",
    price: "Free / Pro",
    accent: "from-teal-300 to-sky-300",
  },
  {
    name: "Midjourney",
    useCase: "Premium image style exploration and visual direction",
    difficulty: "Advanced",
    price: "Subscription",
    accent: "from-violet-300 to-amber-200",
  },
  {
    name: "Runway",
    useCase: "AI video generation, editing, and motion concepts",
    difficulty: "Medium",
    price: "Free credits / Pro",
    accent: "from-lime-200 to-emerald-300",
  },
  {
    name: "Cursor",
    useCase: "AI coding, refactoring, and project navigation",
    difficulty: "Advanced",
    price: "Free / Pro",
    accent: "from-slate-100 to-cyan-200",
  },
] as const;

export const compareRows = [
  {
    label: "Best for",
    gpt: "General tasks, writing, coding collaboration",
    claude: "Long context, careful analysis, document work",
    gemini: "Search, multimodal tasks, Google workflows",
  },
  {
    label: "Speed",
    gpt: "Fast",
    claude: "Steady",
    gemini: "Fast",
  },
  {
    label: "Price",
    gpt: "Free / Pro",
    claude: "Free / Pro",
    gemini: "Free / Advanced",
  },
  {
    label: "Learning Curve",
    gpt: "Low",
    claude: "Low to medium",
    gemini: "Low",
  },
] as const;
