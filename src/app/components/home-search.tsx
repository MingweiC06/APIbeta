"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function HomeSearch({ total }: { total: number }) {
  const router = useRouter();
  const [term, setTerm] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = term.trim();
    router.push(q ? `/apis?q=${encodeURIComponent(q)}` : "/apis");
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 w-full max-w-2xl">
      <div className="glass-card flex items-center gap-2 rounded-full p-2 pl-5">
        <svg
          className="size-5 shrink-0 text-white/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder={`Search ${total} APIs…`}
          aria-label="Search the API directory"
          className="w-full bg-transparent text-base text-white outline-none placeholder:text-white/35"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
        >
          Search
        </button>
      </div>
      <p className="mt-3 text-xs text-white/35">
        Try &ldquo;weather&rdquo;, &ldquo;payment&rdquo;, &ldquo;translation&rdquo; or an API name.
      </p>
    </form>
  );
}
