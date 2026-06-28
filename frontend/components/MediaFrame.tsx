// The tilted "acrylic glass" frame that showcases the product / a photo / a video.
type MediaFrameProps = {
  imageSrc?: string; // optional photo
  videoSrc?: string; // optional video (autoplays muted, loops) — takes priority
  alt?: string;
  label?: string; // placeholder caption when nothing is set
  showPlay?: boolean; // show the play button overlay (ignored when a video is set)
  className?: string;
};

export default function MediaFrame({
  imageSrc,
  videoSrc,
  alt = "Digital photo album preview",
  label = "Your photos & videos",
  showPlay = true,
  className = "",
}: MediaFrameProps) {
  return (
    <div className={className}>
      {/* Tilted acrylic frame: rotates slightly upright on hover */}
      <div className="relative rotate-6 rounded-3xl bg-white/70 p-3 shadow-2xl shadow-brand-800/30 ring-1 ring-white/60 backdrop-blur-sm transition-transform duration-500 ease-out hover:rotate-2">
        {/* Four corner "screws" like the product */}
        <span className="absolute left-3 top-3 h-3 w-3 rounded-full bg-brand-300/70 shadow-inner" />
        <span className="absolute right-3 top-3 h-3 w-3 rounded-full bg-brand-300/70 shadow-inner" />
        <span className="absolute bottom-3 left-3 h-3 w-3 rounded-full bg-brand-300/70 shadow-inner" />
        <span className="absolute bottom-3 right-3 h-3 w-3 rounded-full bg-brand-300/70 shadow-inner" />

        {/* The media area — landscape for video, portrait for photos */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-200 via-brand-400 to-brand-800 ${
            videoSrc
              ? "aspect-video w-80 sm:w-[28rem] md:w-[34rem] lg:w-[38rem]"
              : "aspect-[3/4] w-64 sm:w-72 md:w-80"
          }`}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageSrc} alt={alt} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center px-4 text-center text-on-primary/80">
              <span className="text-sm font-medium">{label}</span>
            </div>
          )}

          {showPlay && !videoSrc && (
            <span
              aria-hidden="true"
              className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/30 ring-1 ring-white/70 backdrop-blur-md"
            >
              {/* CSS triangle = play icon */}
              <span className="ml-1 block h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-white" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
