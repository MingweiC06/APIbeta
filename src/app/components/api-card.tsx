import Link from "next/link";
import type { ApiEntry, AuthType, PricingTier } from "@/lib/types";
import { getCategoryLabel } from "@/lib/categories";

const pricingLabels: Record<PricingTier, string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
};

const authLabels: Record<AuthType, string> = {
  none: "No auth",
  "api-key": "API key",
  oauth: "OAuth",
};

export function PricingBadge({ tier }: { tier: PricingTier }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium text-white/70">
      {pricingLabels[tier]}
    </span>
  );
}

export function AuthBadge({ auth }: { auth: AuthType }) {
  return (
    <span className="rounded-full border border-teal-200/20 bg-teal-300/10 px-2.5 py-0.5 text-[11px] font-medium text-teal-200/90">
      {authLabels[auth]}
    </span>
  );
}

export function ApiCard({ api }: { api: ApiEntry }) {
  return (
    <Link
      href={`/apis/${api.slug}`}
      className="glass-card glow-hover group block rounded-xl p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white transition group-hover:text-teal-200">
          {api.name}
        </h3>
      </div>
      <p className="mt-1 text-xs text-teal-200/70">{getCategoryLabel(api.category)}</p>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
        {api.shortDescription}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <PricingBadge tier={api.pricing} />
        <AuthBadge auth={api.auth} />
      </div>
    </Link>
  );
}
