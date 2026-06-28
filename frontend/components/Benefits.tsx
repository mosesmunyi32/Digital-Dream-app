const benefits = [
  {
    icon: "🖼️",
    title: "Preloaded with memories",
    text: "We load it with your chosen photos and videos so it's ready to gift.",
  },
  {
    icon: "🎁",
    title: "The perfect gift",
    text: "Personal, thoughtful and unforgettable — for any person, any occasion.",
  },
  {
    icon: "⚡",
    title: "Zero setup",
    text: "No apps, no accounts, no fuss. Switch it on and the memories play.",
  },
  {
    icon: "💙",
    title: "Made to be treasured",
    text: "A keepsake that grows more meaningful with every passing year.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <h2 className="text-center text-3xl font-extrabold text-brand-950 sm:text-4xl">
        Why people love it
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-3xl bg-white/60 p-7 text-center shadow-md ring-1 ring-white/60 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-4xl">{b.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-brand-950">{b.title}</h3>
            <p className="mt-2 text-sm text-brand-800">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
