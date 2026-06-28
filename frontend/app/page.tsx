import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductShowcase from "@/components/ProductShowcase";
import ProductVersions from "@/components/ProductVersions";
import Gallery from "@/components/Gallery";
import Benefits from "@/components/Benefits";
import GiftCategories from "@/components/GiftCategories";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { productJsonLd, faqJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Structured data for Google rich results */}
      <JsonLd data={productJsonLd()} />
      <JsonLd data={faqJsonLd()} />

      <Hero />
      <TrustBar />
      <ProductShowcase />
      <ProductVersions />
      <Gallery />
      <Benefits />
      <GiftCategories />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
