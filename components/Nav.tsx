import { Button } from "./Button";
import { site } from "@/lib/content";

export function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-20 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#"
          className="font-display text-2xl font-semibold tracking-tight text-paper outline-offset-4 focus-visible:outline-2 focus-visible:outline-blu-light"
          aria-label={`${site.name} — ${site.tagline}`}
        >
          Chat<span className="text-blu-light">Blu</span>
        </a>
        <Button href="#demo" variant="light">
          Book a demo
        </Button>
      </div>
    </header>
  );
}
