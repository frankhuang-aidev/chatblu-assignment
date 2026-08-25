import type { ReactNode } from "react";

const variants = {
  primary: "bg-blu text-white hover:bg-blu-deep",
  light: "bg-paper text-ink hover:bg-sand",
  ghost: "border border-cloud/40 text-paper hover:border-paper/80",
} as const;

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-blu-light ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
