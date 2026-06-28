import Link from "next/link";
import Button from "./Button";
import BuyButton from "./BuyButton";
import MediaFrame from "./MediaFrame";
import { site, variants } from "@/lib/site";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-12 sm:px-10 md:flex-row md:gap-8 md:py-20">
      {/* Left column: headline + value prop + CTA */}
      <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        <span className="rounded-full bg-brand-200 px-4 py-1 text-sm font-semibold text-brand-800">
          Gift a friend or yourself 🎁
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
          Gift a Friend or Yourself a Digital Photo Album
        </h1>

        <p className="mt-6 max-w-md text-lg text-brand-800">
          Surprise someone you love with a beautiful digital photo album —
          preloaded with your favourite photos and videos. The best gift for a
          friend, child, family, or birthday.
        </p>

        {site.showPrice && (
          <p className="mt-5 text-2xl font-bold text-brand-950">
            From {variants[0].price.display}
            <span className="ml-2 align-middle text-sm font-medium text-brand-800">
              · 2 versions available
            </span>
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <BuyButton>Buy on WhatsApp</BuyButton>
          <Link href="#gift-ideas">
            <Button variant="secondary">See gift ideas</Button>
          </Link>
        </div>

        <p className="mt-4 text-sm text-brand-800">
          💬 Tap to order — we usually reply within minutes.
        </p>
      </div>

      {/* Right column: the product showcase frame (primary video) */}
      <div className="flex flex-1 items-center justify-center">
        <MediaFrame
          videoSrc="/media/primary.mp4"
          alt="Digital photo album in action"
        />
      </div>
    </section>
  );
}
