const testimonials = [
  {
    quote:
      "I gifted this to my best friend and she cried happy tears. Best present I've ever given.",
    name: "Wanjiru",
  },
  {
    quote:
      "Got one for my parents' anniversary loaded with old family photos. They adore it.",
    name: "Brian",
  },
  {
    quote:
      "Ordered on WhatsApp, super easy, and my daughter loves watching her birthday videos.",
    name: "Amina",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <h2 className="text-center text-3xl font-extrabold text-brand-950 sm:text-4xl">
        Loved by gift-givers
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-3xl bg-white/60 p-7 shadow-md ring-1 ring-white/60"
          >
            <div className="text-brand-400">★★★★★</div>
            <blockquote className="mt-3 text-brand-950">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-brand-800">
              — {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
