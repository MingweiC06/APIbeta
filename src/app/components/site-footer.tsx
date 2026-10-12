import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 text-sm text-white/54 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 font-semibold text-white">
              <span className="grid size-7 place-items-center rounded-md border border-teal-200/30 bg-teal-300/10 text-[10px] font-bold text-teal-200">
                API
              </span>
              APIbeta · API Encyclopedia
            </p>
            <p className="mt-3 leading-6">
              A curated, verified encyclopedia of web APIs — so developers can
              discover, compare and learn how to use real APIs without
              scattered docs and dead links. Free at MVP.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white">Directory</p>
            <div className="mt-3 grid gap-2">
              <Link href="/apis" className="transition hover:text-white">
                All APIs
              </Link>
              <Link href="/categories" className="transition hover:text-white">
                Categories
              </Link>
              <Link href="/guides" className="transition hover:text-white">
                Guides
              </Link>
              <Link href="/compare" className="transition hover:text-white">
                Compare
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Community</p>
            <div className="mt-3 grid gap-2">
              <Link href="/submit" className="transition hover:text-white">
                Suggest an API
              </Link>
              <Link
                href="https://github.com/MingweiC06/APIbeta/issues"
                className="transition hover:text-white"
              >
                GitHub Issues
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white">Project</p>
            <div className="mt-3 grid gap-2">
              <Link
                href="https://github.com/MingweiC06/APIbeta"
                className="transition hover:text-white"
              >
                GitHub repository
              </Link>
              <Link href="https://github.com/MingweiC06/APIbeta/issues/new" className="transition hover:text-white">
                Request a change
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} APIbeta · API Encyclopedia. Entries are verified against official provider documentation.</p>
          <p>MVP — no paywalls, no fake numbers.</p>
        </div>
      </div>
    </footer>
  );
}
