import BuyButton from "./BuyButton";
import { site, variants } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center shadow-xl">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to gift unforgettable memories?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Order your digital photo album today and we&apos;ll help you fill it
          with the moments that matter most.
        </p>
        {site.showPrice && (
          <p className="mt-4 text-2xl font-bold text-white">
            From {variants[0].price.display}
          </p>
        )}
        <div className="mt-8 flex justify-center">
          <BuyButton>Order on WhatsApp</BuyButton>
        </div>
      </div>
    </section>
  );
}
