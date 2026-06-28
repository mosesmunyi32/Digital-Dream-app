// The flower mark from the mockup, drawn as 8 rotated petals.
// Uses `currentColor` so you can color it with a text-* class.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="26"
          rx="10"
          ry="22"
          fill="currentColor"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}
