import { Section } from "./Section";
import { value, why } from "@/lib/content";

function CheckList({
  points,
  dark = false,
}: {
  points: string[];
  dark?: boolean;
}) {
  return (
    <ul className="mt-6 space-y-4">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-3">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`mt-1 h-5 w-5 shrink-0 ${dark ? "stroke-blu-light" : "stroke-blu"}`}
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className={`leading-relaxed ${dark ? "text-cloud" : "text-mist"}`}>
            {point}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Value() {
  return (
    <>
      <Section className="bg-paper pb-24">
        <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          {value.headline}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-ink p-8 text-paper md:p-10">
            <h3 className="font-display text-2xl font-semibold">
              {value.hotel.title}
            </h3>
            <CheckList points={value.hotel.points} dark />
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-8 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink">
              {value.guests.title}
            </h3>
            <CheckList points={value.guests.points} />
          </div>
        </div>
      </Section>

      <Section id="why" className="bg-navy py-24 text-paper">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blu-light">
          {why.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {why.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cloud">
          {why.body}
        </p>
        <p className="mt-12 text-sm font-semibold text-cloud">
          {why.integrationsLabel}
        </p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {why.integrations.map((integration) => (
            <li
              key={integration}
              className="rounded-full border border-paper/20 px-4 py-1.5 text-sm text-cloud"
            >
              {integration}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
