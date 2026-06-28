import Reveal from "./Reveal";

const shots = [
  { src: "/media/product-1.png", caption: "Crystal acrylic frame" },
  { src: "/media/product-2.png", caption: "Premium build, gift-ready" },
];

const features = [
  "Transparent crystal acrylic design",
  "Vivid IPS display for photos & video",
  "Compact, lightweight and elegant",
  "Arrives gift-ready",
];

export default function ProductShowcase() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Copy */}
        <Reveal>
          <h2 className="text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Crafted to be admired
          </h2>
          <p className="mt-4 text-lg text-brand-800">
            A crystal-clear acrylic frame with a bright IPS screen that brings
            your photos and videos to life. Premium, lightweight and ready to
            gift — it looks beautiful on any shelf, desk or mantel.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-brand-800">
                <span className="mt-0.5 text-primary">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Product images */}
        <div className="grid grid-cols-2 gap-4">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 120}>
              <figure className="overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-brand-200">
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.caption}
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="px-1 pt-2 text-center text-xs font-medium text-brand-800">
                  {s.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
