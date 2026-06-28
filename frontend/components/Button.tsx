import { ButtonHTMLAttributes, ReactNode } from "react";

// What the component accepts:
//  - children: the text/content inside the button
//  - variant: "primary" (filled blue) or "secondary" (outline)
//  - ...plus every normal <button> prop (onClick, type, disabled, etc.)
type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  // Styles shared by every button
  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-3 " +
    "text-base font-medium tracking-wide transition-all duration-200 ease-out " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 " +
    "focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Styles that differ per variant
  const variants = {
    primary:
      "bg-primary text-on-primary shadow-lg shadow-brand-600/20 " +
      "hover:bg-primary-hover hover:-translate-y-0.5",
    secondary:
      "bg-transparent text-brand-950 border border-brand-300 " +
      "hover:bg-brand-200/50",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
