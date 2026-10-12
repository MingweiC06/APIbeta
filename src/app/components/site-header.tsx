import Link from "next/link";

const navItems = [
  { href: "/apis", label: "Directory" },
  { href: "/categories", label: "Categories" },
  { href: "/guides", label: "Guides" },
  { href: "/compare", label: "Compare" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-lg border border-teal-200/30 bg-teal-300/10 text-xs font-bold tracking-wide text-teal-200 shadow-[0_0_28px_rgba(45,212,191,0.18)]">
              API
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-semibold tracking-tight">APIbeta</span>
              <span className="block text-[11px] text-white/45">API Encyclopedia</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/68 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/submit"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#05060a] transition hover:bg-teal-100 md:block"
          >
            Suggest an API
          </Link>
        </div>

        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/68 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/submit"
            className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#05060a]"
          >
            Suggest
          </Link>
        </nav>
      </div>
    </header>
  );
}
