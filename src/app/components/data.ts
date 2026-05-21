export const filterCategories = ["Study", "Coding", "Video", "Business", "Images"] as const;

export type FilterCategory = (typeof filterCategories)[number];

export type AiTool = {
  name: string;
  category: FilterCategory;
  bestFor: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  pricing: "Free" | "Low" | "Medium" | "High";
  description: string;
  strength: string;
  url: string;
  accent: string;
};

export const aiTools: AiTool[] = [
  {
    name: "ChatGPT",
    category: "Study",
    bestFor: "Everyday learning, writing, brainstorming, and general tasks",
    difficulty: "Beginner",
    pricing: "Low",
    description: "A flexible AI assistant for studying, writing, planning, coding help, and daily productivity.",
    strength: "Best all-around starting point",
    url: "https://chatgpt.com",
    accent: "from-emerald-300 to-cyan-300",
  },
  {
    name: "Claude",
    category: "Coding",
    bestFor: "Deep reasoning, long documents, writing, and coding support",
    difficulty: "Beginner",
    pricing: "Low",
    description: "A thoughtful assistant for complex documents, careful analysis, and structured project work.",
    strength: "Long-context reasoning",
    url: "https://claude.ai",
    accent: "from-orange-200 to-rose-300",
  },
  {
    name: "Gemini",
    category: "Business",
    bestFor: "Google workflows, research, multimodal tasks, and productivity",
    difficulty: "Beginner",
    pricing: "Low",
    description: "Useful for people already working inside Google products and multimodal research workflows.",
    strength: "Google ecosystem fit",
    url: "https://gemini.google.com",
    accent: "from-blue-300 to-indigo-300",
  },
  {
    name: "DeepSeek",
    category: "Coding",
    bestFor: "Coding, technical reasoning, math, and cost-sensitive AI usage",
    difficulty: "Intermediate",
    pricing: "Free",
    description: "A strong option for technical users who want capable reasoning and coding assistance.",
    strength: "Technical value",
    url: "https://www.deepseek.com",
    accent: "from-sky-300 to-teal-300",
  },
  {
    name: "Midjourney",
    category: "Images",
    bestFor: "High-quality image generation, art direction, and visual exploration",
    difficulty: "Intermediate",
    pricing: "Medium",
    description: "A premium image tool for creators who care about style, mood, and visual quality.",
    strength: "Visual style quality",
    url: "https://www.midjourney.com",
    accent: "from-violet-300 to-amber-200",
  },
  {
    name: "Runway",
    category: "Video",
    bestFor: "AI video generation, editing, motion ideas, and creator workflows",
    difficulty: "Intermediate",
    pricing: "Medium",
    description: "A video-focused AI platform for turning creative ideas into moving visuals.",
    strength: "Video creation workflow",
    url: "https://runwayml.com",
    accent: "from-lime-200 to-emerald-300",
  },
];

export const featuredTools = aiTools.slice(0, 4);

export const quizStacks = {
  Study: ["ChatGPT", "NotebookLM", "Notion"],
  Coding: ["Claude", "Cursor", "GitHub"],
  Video: ["ChatGPT", "Runway", "CapCut"],
  Business: ["ChatGPT", "Gemini", "Notion"],
  Images: ["ChatGPT", "Midjourney", "Canva"],
} as const;
