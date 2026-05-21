"use client";

import { useMemo, useState } from "react";
import { aiTools, filterCategories, type FilterCategory } from "./data";

export function CompareTable() {
  const [active, setActive] = useState<FilterCategory | "All">("All");

  const filteredTools = useMemo(
    () => aiTools.filter((tool) => active === "All" || tool.category === active),
    [active],
  );

  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
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

      <div className="glass-card overflow-x-auto rounded-lg">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1.4fr] border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
            <div className="p-4">Tool</div>
            <div className="p-4">Best For</div>
            <div className="p-4">Difficulty</div>
            <div className="p-4">Pricing</div>
            <div className="p-4">Strength</div>
          </div>
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1.4fr] border-b border-white/10 text-sm last:border-b-0"
            >
              <div className="p-4 font-semibold text-teal-200">{tool.name}</div>
              <div className="p-4 leading-6 text-white/64">{tool.bestFor}</div>
              <div className="p-4 text-white/64">{tool.difficulty}</div>
              <div className="p-4 text-white/64">{tool.pricing}</div>
              <div className="p-4 leading-6 text-white/64">{tool.strength}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
