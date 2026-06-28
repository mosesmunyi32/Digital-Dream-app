import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Benefits from "@/components/Benefits";
import TrustBar from "@/components/TrustBar";
import ProductVersions from "@/components/ProductVersions";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import BuyButton from "@/components/BuyButton";
import MediaFrame from "@/components/MediaFrame";
import JsonLd from "@/components/JsonLd";
import {
  occasions,
  getOccasion,
  productJsonLd,
  faqJsonLd,
  site,
} from "@/lib/site";

type Props = { params: Promise<{ occasion: string }> };

// Pre-build a static page for every occasion (fast + great for SEO).
export function generateStaticParams() {
  return occasions.map((o) => ({ occasion: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { occasion } = await params;
  const o = getOccasion(occasion);
  if (!o) return {};
  return {
    title: o.metaTitle,
    description: o.metaDescription,
    alternates: { canonical: `/gifts/${o.slug}` },
    openGraph: {
      title: o.metaTitle,
      description: o.metaDescription,
      url: `/gifts/${o.slug}`,
      type: "website",
      images: ["/og.jpg"],
    },
  };
}

export default async function OccasionPage({ params }: Props) {
  const { occasion } = await params;
  const o = getOccasion(occasion);
  if (!o) notFound();

  return (
    <>
      <JsonLd data={productJsonLd()} />
      <JsonLd data={faqJsonLd()} />

      {/* Hero for this occasion */}
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-12 sm:px-10 md:flex-row md:py-20">
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <Link
            href="/#gift-ideas"
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← All gift ideas
          </Link>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
            {o.keyword}
          </h1>
          <p className="mt-6 max-w-md text-lg text-brand-800">{o.intro}</p>

          <ul className="mt-6 flex max-w-md flex-col gap-3 text-left">
            {o.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-brand-800">
                <span className="mt-1 text-primary">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {site.showPrice && (
            <p className="mt-6 text-2xl font-bold text-brand-950">
              {site.price.display}
            </p>
          )}

          <div className="mt-8">
            <BuyButton
              message={`Hi! I'm interested in the ${site.productName} as ${o.keyword.toLowerCase()}. Please help me place my order.`}
            >
              Buy on WhatsApp
            </BuyButton>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <MediaFrame imageSrc={o.image} alt={o.keyword} showPlay={false} />
        </div>
      </section>

      <TrustBar />
      <ProductVersions />
      <Gallery />
      <Benefits />
      <FAQ />
      <CTASection />
    </>
  );
}
