"use client";

import { useMemo, useState } from "react";
import { aiTools, filterCategories, type FilterCategory } from "./data";
import { ToolCard } from "./tool-card";

export function ExploreFilter() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<FilterCategory | "All">("All");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return aiTools.filter((tool) => {
      const matchesCategory = active === "All" || tool.category === active;
      const searchable = `${tool.name} ${tool.category} ${tool.bestFor} ${tool.description}`.toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [active, query]);

  return (
    <div>
      <div className="glass-card mb-8 grid gap-4 rounded-lg p-4 lg:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="tool-search">
          Search AI tools
        </label>
        <input
          id="tool-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by tool, use case, or workflow"
          className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-teal-200/50"
        />
        <div className="flex flex-wrap gap-2">
          {(["All", ...filterCategories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === category
                  ? "border-teal-200/50 bg-teal-200/12 text-white"
                  : "border-white/10 bg-white/[0.04] text-white/58 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>

      {filteredTools.length === 0 ? (
        <div className="glass-card mt-6 rounded-lg p-8 text-center text-white/58">
          No tools match that search yet.
        </div>
      ) : null}
    </div>
  );
}
