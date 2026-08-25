import { Button } from "./Button";
import { ChatMock } from "./ChatMock";
import { Section } from "./Section";
import { hero, metrics } from "@/lib/content";

export function Hero() {
  return (
    <Section className="relative overflow-hidden bg-ink pb-16 pt-32 text-paper md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.28),transparent_55%)]"
      />
      <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blu-light">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {hero.headline[0]}
            <br />
            <span className="text-blu-light">{hero.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cloud">
            {hero.subhead}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <ChatMock />
      </div>

      <dl className="relative mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-paper/10 pt-10 md:grid-cols-4">
        {metrics.items.map((metric) => (
          <div key={metric.label}>
            <dt className="text-sm leading-snug text-cloud">
              {metric.label}
            </dt>
            <dd className="font-display text-4xl font-semibold text-paper">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="relative mt-6 text-xs text-cloud/60">{metrics.note}</p>
    </Section>
  );
}
