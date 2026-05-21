import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/54 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-white">Mission</p>
          <p className="mt-2 leading-6">
            Help users discover, compare, and choose the right AI workflow without selling APIs, tokens, or noise.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Social</p>
          <div className="mt-3 grid gap-2">
            <Link href="#" className="transition hover:text-white">
              GitHub
            </Link>
            <Link href="#" className="transition hover:text-white">
              X / Twitter
            </Link>
            <Link href="#" className="transition hover:text-white">
              LinkedIn
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Language</p>
          <p className="mt-3">
            <span className="text-white">EN</span>
            <span className="mx-2 text-white/25">|</span>
            <span>中文</span>
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-3 grid gap-2">
            <span>WeChat: AzureTrust</span>
            <span>Email: saveazure@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 md:col-span-4">
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
