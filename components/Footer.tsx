import { footer, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink py-10 text-sm text-cloud">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 px-6 md:flex-row md:items-center">
        <p>
          <span className="font-display text-lg font-semibold text-paper">
            Chat<span className="text-blu-light">Blu</span>
          </span>
          <span className="ml-3">{footer.tagline}</span>
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="outline-offset-4 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-blu-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="text-cloud/60">{footer.copyright}</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
