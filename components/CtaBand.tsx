import { Section } from "./Section";
import { DemoForm } from "./DemoForm";
import { cta } from "@/lib/content";

export function CtaBand() {
  return (
    <Section id="demo" className="bg-ink py-24 text-center text-paper">
      <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        {cta.headline}
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cloud">
        {cta.subhead}
      </p>
      <DemoForm />
    </Section>
  );
}
