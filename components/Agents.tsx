import { Section } from "./Section";
import { agents } from "@/lib/content";

const icons = {
  concierge: <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />,
  voice: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  operations: (
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
} as const;

export function Agents() {
  return (
    <Section id="agents" className="bg-paper py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blu">
        {agents.eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        {agents.headline}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
        {agents.subhead}
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {agents.cards.map((card) => (
          <article
            key={card.name}
            className="rounded-3xl border border-ink/10 bg-white p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blu/10">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 stroke-blu"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {icons[card.icon]}
              </svg>
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
              {card.name}
            </h3>
            <p className="mt-2 text-sm font-semibold text-blu">{card.role}</p>
            <p className="mt-4 leading-relaxed text-mist">{card.scenario}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
