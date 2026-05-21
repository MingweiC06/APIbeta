import type { AiTool } from "./data";

type ToolCardProps = Pick<
  AiTool,
  "name" | "category" | "bestFor" | "difficulty" | "pricing" | "description" | "url" | "accent"
>;

export function ToolCard({
  name,
  category,
  bestFor,
  difficulty,
  pricing,
  description,
  url,
  accent,
}: ToolCardProps) {
  return (
    <article className="glass-card glow-hover flex h-full flex-col rounded-lg p-6">
      <div className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200/70">{category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/58">
          {pricing}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-white/58">{description}</p>
      <p className="mt-4 text-sm font-medium leading-6 text-white/78">{bestFor}</p>
      <div className="mt-6 grid gap-3 text-sm">
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-white/40">Difficulty</span>
          <span className="text-white/78">{difficulty}</span>
        </div>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex w-full justify-center rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/10"
      >
        Visit
      </a>
    </article>
  );
}
