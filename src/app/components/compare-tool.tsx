"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import type { ApiEntry } from "@/lib/types";
import { getCategoryLabel } from "@/lib/categories";

const MAX = 4;
const MIN = 2;

const selectClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none transition focus:border-teal-200/50 [&>option]:bg-[#0b0d14]";

export function CompareTool({ apis }: { apis: ApiEntry[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const selectedSlugs = useMemo(() => {
    const raw = params.get("apis") ?? "";
    const valid = new Set(apis.map((a) => a.slug));
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s && valid.has(s))
      .slice(0, MAX);
  }, [params, apis]);

  const selected = selectedSlugs
    .map((slug) => apis.find((a) => a.slug === slug))
    .filter((a): a is ApiEntry => Boolean(a));

  function update(next: string[]) {
    const unique = Array.from(new Set(next.filter(Boolean))).slice(0, MAX);
    const q = unique.length ? `?apis=${unique.join(",")}` : "";
    router.replace(`${pathname}${q}`, { scroll: false });
  }

  function addSlot(slot: number, value: string) {
    const next = [...selectedSlugs];
    next[slot] = value;
    update(next);
  }

  function removeAt(slot: number) {
    update(selectedSlugs.filter((_, i) => i !== slot));
  }

  const slots = Math.min(Math.max(selectedSlugs.length, MIN), MAX);

  const rows: { label: string; render: (a: ApiEntry) => React.ReactNode }[] = [
    { label: "Category", render: (a) => getCategoryLabel(a.category) },
    { label: "Pricing", render: (a) => a.pricing },
    { label: "Pricing notes", render: (a) => a.pricingNotes ?? "—" },
    { label: "Auth", render: (a) => a.auth },
    { label: "SDKs", render: (a) =>
      a.sdkLanguages.length > 0 ? a.sdkLanguages.join(", ") : "None (plain HTTP)",
    },
    { label: "Sample endpoints", render: (a) => `${a.sampleEndpoints.length} listed` },
    { label: "Summary", render: (a) => a.shortDescription },
  ];

  return (
    <div>
      <div className="glass-card rounded-xl p-5">
        <p className="text-sm font-medium text-white/70">
          Pick {MIN}–{MAX} APIs to compare
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: slots }).map((_, slot) => (
            <div key={slot} className="flex items-center gap-2">
              <select
                value={selectedSlugs[slot] ?? ""}
                onChange={(e) => addSlot(slot, e.target.value)}
                aria-label={`API ${slot + 1}`}
                className={selectClass}
              >
                <option value="">Select an API…</option>
                {apis.map((a) => (
                  <option key={a.slug} value={a.slug}>
                    {a.name}
                  </option>
                ))}
              </select>
              {selectedSlugs[slot] ? (
                <button
                  onClick={() => removeAt(slot)}
                  aria-label="Remove"
                  className="shrink-0 rounded-lg border border-white/10 px-2.5 py-2 text-white/50 transition hover:border-rose-200/40 hover:text-rose-200"
                >
                  ×
                </button>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-white/35">
          The selection lives in the URL — bookmark or share this page to come back to the same comparison.
        </p>
      </div>

      {selected.length < MIN ? (
        <div className="glass-card mt-6 rounded-xl p-10 text-center">
          <p className="text-lg font-semibold text-white">
            Choose at least {MIN} APIs to compare
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
            Use the dropdowns above, or start from the{" "}
            <Link href="/apis" className="text-teal-200 underline underline-offset-2">
              full directory
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="bg-white/[0.04]">
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">
                  Attribute
                </th>
                {selected.map((a) => (
                  <th key={a.slug} className="px-4 py-3">
                    <Link
                      href={`/apis/${a.slug}`}
                      className="font-semibold text-white transition hover:text-teal-200"
                    >
                      {a.name} ↗
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.07]">
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 text-white/45">{row.label}</td>
                  {selected.map((a) => (
                    <td key={a.slug} className="px-4 py-3 align-top text-white/80">
                      {row.render(a)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="px-4 py-3 text-white/45">Docs</td>
                {selected.map((a) => (
                  <td key={a.slug} className="px-4 py-3">
                    <a
                      href={a.officialDocsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-200 underline underline-offset-2"
                    >
                      Official docs ↗
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
