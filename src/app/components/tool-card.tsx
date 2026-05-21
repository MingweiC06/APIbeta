type ToolCardProps = {
  name: string;
  useCase: string;
  difficulty: string;
  price: string;
  accent: string;
};

export function ToolCard({ name, useCase, difficulty, price, accent }: ToolCardProps) {
  return (
    <article className="glass-card glow-hover rounded-lg p-6">
      <div className={`mb-6 h-1.5 w-20 rounded-full bg-gradient-to-r ${accent}`} />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-white/58">{useCase}</p>
      <div className="mt-6 grid gap-3 text-sm">
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-white/40">Difficulty</span>
          <span className="text-white/78">{difficulty}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/40">Price</span>
          <span className="text-white/78">{price}</span>
        </div>
      </div>
    </article>
  );
}
