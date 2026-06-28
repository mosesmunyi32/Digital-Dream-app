import Link from "next/link";
import Logo from "./Logo";
import BuyButton from "./BuyButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-200/70 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 sm:px-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-9 w-9 shrink-0 text-brand-950" />
          <span className="text-lg font-bold leading-tight text-brand-950 sm:text-xl">
            Digital Dream
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-brand-800">
          <Link
            href="/#gift-ideas"
            className="hidden transition-colors hover:text-brand-600 sm:block"
          >
            Gift Ideas
          </Link>
          <Link
            href="/#faq"
            className="hidden transition-colors hover:text-brand-600 sm:block"
          >
            FAQ
          </Link>
          <BuyButton className="px-5 py-2 text-sm">Buy now</BuyButton>
        </div>
      </nav>
    </header>
  );
}
