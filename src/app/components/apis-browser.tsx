"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { ApiEntry, AuthType, PricingTier } from "@/lib/types";
import type { CategoryMeta } from "@/lib/categories";
import { ApiCard } from "./api-card";

const pricingOptions: { value: PricingTier | "all"; label: string }[] = [
  { value: "all", label: "Any pricing" },
  { value: "free", label: "Free" },
  { value: "freemium", label: "Freemium" },
  { value: "paid", label: "Paid" },
];

const authOptions: { value: AuthType | "all"; label: string }[] = [
  { value: "all", label: "Any auth" },
  { value: "none", label: "No auth" },
  { value: "api-key", label: "API key" },
  { value: "oauth", label: "OAuth" },
];

const selectClass =
  "rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white outline-none transition focus:border-teal-200/50 [&>option]:bg-[#0b0d14]";

export function ApisBrowser({
  apis,
  categories,
}: {
  apis: ApiEntry[];
  categories: CategoryMeta[];
}) {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState("all");
  const [pricing, setPricing] = useState<PricingTier | "all">("all");
  const [auth, setAuth] = useState<AuthType | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apis.filter((api) => {
      if (category !== "all" && api.category !== category) return false;
      if (pricing !== "all" && api.pricing !== pricing) return false;
      if (auth !== "all" && api.auth !== auth) return false;
      if (!q) return true;
      const haystack = [
        api.name,
        api.shortDescription,
        api.longDescription,
        ...api.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [apis, query, category, pricing, auth]);

  const hasFilters =
    query.trim() !== "" || category !== "all" || pricing !== "all" || auth !== "all";

  function clearFilters() {
    setQuery("");
    setCategory("all");
    setPricing("all");
    setAuth("all");
  }

  return (
    <div>
      <div className="glass-card rounded-xl p-4 sm:p-5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, keyword or tag (e.g. weather, payments, oauth)…"
          aria-label="Search APIs"
          className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-teal-200/50"
        />
        <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Filter by category"
            className={selectClass}
          >
            <option value="all">All categories</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
          <select
            value={pricing}
            onChange={(e) => setPricing(e.target.value as PricingTier | "all")}
            aria-label="Filter by pricing"
            className={selectClass}
          >
            {pricingOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <select
            value={auth}
            onChange={(e) => setAuth(e.target.value as AuthType | "all")}
            aria-label="Filter by authentication"
            className={selectClass}
          >
            {authOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <button
            onClick={clearFilters}
            disabled={!hasFilters}
            className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 transition enabled:hover:border-white/25 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Clear
          </button>
        </div>
      </div>

      <p className="mt-6 text-sm text-white/50">
        Showing <span className="font-semibold text-white">{filtered.length}</span> of{" "}
        {apis.length} APIs
      </p>

      {filtered.length === 0 ? (
        <div className="glass-card mt-4 rounded-xl p-10 text-center">
          <p className="text-lg font-semibold text-white">No APIs match your filters</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
            Try a broader search term, clear a filter, or{" "}
            <Link href="/submit" className="text-teal-200 underline underline-offset-2">
              suggest this API to us
            </Link>
            .
          </p>
          <button
            onClick={clearFilters}
            className="mt-5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((api) => (
            <ApiCard key={api.slug} api={api} />
          ))}
        </div>
      )}

    </div>
  );
}
