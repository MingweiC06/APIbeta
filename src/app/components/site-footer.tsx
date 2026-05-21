import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-white/54 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">AIbeta</p>
          <p className="mt-2">One focused place for discovering, comparing, and using the AI models you choose.</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="#" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link href="#" className="transition hover:text-white">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
