import Link from "next/link";
import { occasions, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-brand-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3 sm:px-10">
        <div>
          <p className="text-lg font-bold text-brand-950">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-brand-800">
            {site.productName} — the thoughtful gift that keeps memories alive.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-950">Gift ideas</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-brand-800">
            {occasions.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/gifts/${o.slug}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {o.keyword.replace(/^The /, "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-950">Order</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-brand-800">
            <li>
              <Link href="/#faq" className="transition-colors hover:text-brand-600">
                FAQ
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand-600"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-200 py-5 text-center text-sm text-brand-800">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
