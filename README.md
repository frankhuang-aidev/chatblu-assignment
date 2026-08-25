# ChatBlu landing page — take-home

Redesign of the [chatblu.ai](https://chatblu.ai) landing page as a single static
Next.js page. I kept my working plan in [development-steps.md](./development-steps.md)
and stayed inside the ~4 hour budget.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. For a production build: `npm run build && npm start`.
The page is fully static, so `npx vercel` deploys it with no config.

## Product and design decisions

The spec asks the page to answer five things: what ChatBlu does, who it's for, the
value for hotels and guests, why it's different, and what to do next. I wrote that
messaging first and built one section per answer, in that order down the page.

The main bet is the hero. Instead of claiming "AI agents that act", it shows a fake
WhatsApp thread: a guest asks for late check-in and a bottle of cava, the agent
confirms both, and a small system line shows the room-service ticket landing in the
PMS. That one visual carries most of the pitch, because the honest differentiator here
is that chat widgets answer questions while ChatBlu finishes jobs. The "why different"
section says exactly that, next to a row of PMS/POS integration chips.

The three agent cards (Concierge, Voice, Operations) are written as scenarios rather
than feature lists. A hotel operator recognizes a 2am late-checkout call much faster
than they parse "24/7 omnichannel automation".

There's a single CTA, "Book a demo", repeated in the nav, hero, and the closing band.
No pricing section; a product like this sells through demos at this stage anyway.

Visually: dark navy with one electric blue (it's called ChatBlu, after all), warm
paper background for the light sections, and Fraunces for headlines to get away from
the generic SaaS look. No stock photos. All copy sits in `lib/content.ts` so it can be
edited in one place. Semantic HTML, visible focus states, AA contrast, and the chat
animation respects `prefers-reduced-motion`.

Two honesty calls: the hero metrics are invented and labeled as illustrative, and the
demo form stores nothing and says so. I didn't want fake social proof or a dead-end
form in something carrying a real company's name.

## Left out on purpose

- A form backend. Wiring up Formspree or a Cal.com embed is a quick job that proves
  nothing in a take-home.
- A mobile hamburger menu. The nav is a logo and a CTA, there's nothing to collapse.
- Pricing, customer logos, case studies. I don't have real numbers and didn't want to
  invent them.
- i18n, dark mode, custom OG image. Cut for time.

## What I'd do with more time

- Make the hero interactive: pick a scenario (late check-in, spa upsell, 2am call) and
  watch the ops side update live.
- A case-study section once there are named customers and real numbers behind it.
- Hook the CTA up to actual scheduling and put analytics events on it.
- A proper motion pass. Right now only the chat bubbles animate.

## Tools

Next.js 15, TypeScript, Tailwind v4. Fraunces and Inter via `next/font`, icons are
hand-inlined Lucide paths. I used Claude Code throughout, for planning, implementation,
and checking the responsive breakpoints with headless-browser screenshots.
