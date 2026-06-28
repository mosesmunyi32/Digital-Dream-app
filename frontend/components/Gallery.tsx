import { galleryMedia } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <h2 className="text-center text-3xl font-extrabold text-brand-950 sm:text-4xl">
        See it in action
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-brand-800">
        Real photos and videos of the digital photo album — with and without
        scrolling text.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryMedia.map((m) => (
          <figure
            key={m.src}
            className="overflow-hidden rounded-2xl bg-white p-2 shadow-md ring-1 ring-brand-200"
          >
            {/* Dark matte so any video/photo fits the frame without cropping */}
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-brand-950">
              {m.type === "video" ? (
                <video
                  src={m.src}
                  controls
                  muted
                  preload="metadata"
                  playsInline
                  className="h-full w-full object-contain"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.src}
                  alt={m.label}
                  className="h-full w-full object-contain"
                />
              )}
            </div>
            <figcaption className="px-2 pt-3 text-sm font-medium text-brand-800">
              {m.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
