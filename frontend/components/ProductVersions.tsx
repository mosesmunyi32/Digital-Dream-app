import BuyButton from "./BuyButton";
import Reveal from "./Reveal";
import { variants, site } from "@/lib/site";

export default function ProductVersions() {
  return (
    <section id="versions" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <Reveal>
        <h2 className="text-center text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Choose your version
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-brand-800">
          Two beautiful options — pick the one that fits your gift.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {variants.map((v, i) => (
          <Reveal key={v.id} delay={i * 120} className="h-full">
          <div
            className={`flex h-full flex-col overflow-hidden rounded-3xl bg-white/70 shadow-lg ring-1 ${
              v.highlight ? "ring-2 ring-primary" : "ring-white/60"
            }`}
          >
            {/* Media preview — same height for both. A blurred copy fills the
                side space so there's no empty matte, while the real video
                stays fully visible (nothing cropped). */}
            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-brand-950 sm:h-60 md:h-72">
              {v.media.type === "video" ? (
                <>
                  <video
                    src={v.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-60"
                  />
                  <video
                    src={v.media.src}
                    controls
                    muted
                    preload="metadata"
                    playsInline
                    className="relative max-h-full max-w-full"
                  />
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.media.src}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-60"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.media.src}
                    alt={v.name}
                    className="relative max-h-full max-w-full"
                  />
                </>
              )}
              {v.badge && (
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {v.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-xl font-bold text-brand-950">{v.name}</h3>
              {site.showPrice && (
                <p className="mt-1 text-2xl font-extrabold text-primary">
                  {v.price.display}
                </p>
              )}
              <p className="mt-3 text-brand-800">{v.description}</p>

              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {v.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-brand-800"
                  >
                    <span className="mt-0.5 text-primary">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <BuyButton
                  message={`Hi! I'd like to order the ${v.name} (${v.price.display}) digital photo album. Please help me place my order.`}
                  className="w-full"
                >
                  Order this version
                </BuyButton>
              </div>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
