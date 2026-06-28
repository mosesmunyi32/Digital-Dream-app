import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10">
      <h2 className="text-center text-3xl font-extrabold text-brand-950 sm:text-4xl">
        Frequently asked questions
      </h2>
      <div className="mt-10 flex flex-col gap-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl bg-white/60 p-6 shadow-sm ring-1 ring-white/60"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-brand-950 marker:hidden">
              {f.q}
            </summary>
            <p className="mt-3 text-brand-800">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
