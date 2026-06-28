import Link from "next/link";
import Reveal from "./Reveal";
import { occasions } from "@/lib/site";

// Links to the SEO landing pages — also helps people "shop by occasion".
export default function GiftCategories() {
  return (
    <section id="gift-ideas" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Find the best gift for…
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-brand-800">
          Whoever you&apos;re shopping for, a digital photo album is a gift they&apos;ll
          never forget.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {occasions.map((o, i) => (
          <Reveal key={o.slug} delay={i * 90} className="h-full">
            <Link
              href={`/gifts/${o.slug}`}
              className="group flex h-full flex-col rounded-3xl bg-white/60 p-7 shadow-md ring-1 ring-white/60 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-brand-950 group-hover:text-primary">
                {o.keyword.replace(/^The /, "")}
              </h3>
              <p className="mt-2 flex-1 text-sm text-brand-800">{o.cardText}</p>
              <span className="mt-4 text-sm font-semibold text-primary">
                Explore →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
