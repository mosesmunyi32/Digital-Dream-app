import { trustSignals } from "@/lib/site";

export default function TrustBar() {
  return (
    <div className="border-y border-brand-200 bg-white/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-5 sm:grid-cols-4 sm:px-10">
        {trustSignals.map((t) => (
          <div
            key={t.label}
            className="flex items-center justify-center gap-2 text-center text-sm font-medium text-brand-800"
          >
            <span className="text-lg">{t.icon}</span>
            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
