# Development Plan — ChatBlu Landing Page Redesign

---

## Product context (from research)

ChatBlu (chatblu.ai) sells **autonomous AI agents for hotels** — agents that connect
guest channels (WhatsApp, email, voice) and hotel departments (reception, housekeeping,
F&B, spa) with the hotel's backend systems. Examples from their current messaging:
pre-arrival concierge, voice agents answering calls in under two seconds, live
housekeeping dispatch, spa/F&B upsell outreach.

The five questions the page must answer (from spec.md):

| Question | One-line answer the page communicates |
|---|---|
| What does ChatBlu do? | AI agents that handle guest communication and hotel operations end-to-end, 24/7 |
| Who is it for? | Hotel GMs / owners / operations leaders |
| Value to hotels | Fewer missed calls & requests, leaner ops, more upsell revenue |
| Value to guests | Instant, personal answers on the channels they already use |
| Why different | Not a chatbot widget — autonomous agents wired into the hotel's real systems, acting across departments |
| Next step | Book a demo (single primary CTA, repeated top and bottom) |

---

## Core path

### 1. Setup & decisions — done

- [x] Stack: **Next.js + TypeScript + Tailwind**, target deploy: **Vercel**. Static
      one-pager, no backend; CTA is a stub with a success state (noted in README).
- [x] Visual direction: deep navy/ink + one electric blue accent + warm neutral
      background; large type, whitespace, visuals built in code (no stock photos).
- [x] `git init` + scaffold, first commit. *(Scaffolded by hand instead of
      `create-next-app`, which refuses a non-empty directory.)*

### 2. Copy & structure — done

All copy written before building, as plain constants in `lib/content.ts`.
**Five sections**, each mapped to the spec questions:

1. [x] **Hero** — headline + subhead (what + who), primary CTA "Book a demo", a mock
       WhatsApp exchange resolving a guest request, and a metric row with
       clearly-marked illustrative numbers. *(Divergence: also added a secondary
       "Meet the agents" anchor button — cheap, aids scanning.)*
2. [x] **The agents** — 3 cards (Concierge, Voice, Operations), each a concrete
       scenario, not a feature list. *(what it does)*
3. [x] **Value & difference** — split "for your hotel / for your guests" columns,
       then the differentiation block (agents vs. chatbot widgets; integrated with
       PMS/POS) with a text-chip integration row. *(value + why different)*
4. [x] **Final CTA band** — "Book a demo", low-friction framing. *(next step)*
5. [x] **Footer** — logo, contact, legal placeholders.

### 3. Design tokens & primitives — done

- [x] Colors and fonts as Tailwind v4 `@theme` tokens in `globals.css`; Fraunces +
      Inter via `next/font`; `Button` + `Section` primitives.

### 4. Build sections — done

- [x] Nav + Hero incl. chat mock and metric row. Nav = logo + CTA button only.
- [x] Agent cards.
- [x] Value & difference section.
- [x] Final CTA (client-side form stub with success state) + footer.
- [x] Commit per milestone.

### 5. Polish — done

- [x] Responsive check at 390 / 768 / 1280 px — done with headless-Chrome screenshots
      rather than manual resizing. One fix came out of it: agent cards were cramped at
      768, switched from `md:grid-cols-3` to `lg:grid-cols-3`.
- [x] Accessibility basics: semantic landmarks, single `h1`, skip link, focus states,
      AA contrast on accent-on-navy, `prefers-reduced-motion` handling.
- [x] Meta: title + description + basic OG tags + favicon (`app/icon.svg`). No custom
      OG image — cut as planned.
- [x] Post-review fix: `suppressHydrationWarning` on `<body>` — browser extensions
      (Grammarly) inject attributes before React hydrates.

### 6. Ship & README — done

- [x] Deploy to Vercel and push to a public GitHub repo — done.
- [x] `README.md` covers the four required submission points: decisions, intentional
      omissions, what more time would buy, tools used.
- [x] Final read as a first-time visitor: all five spec questions answerable within
      30 seconds of scrolling.

---

## Stretch goals

1. [x] Staggered reveal animation on the hero chat mock (CSS only,
       `prefers-reduced-motion` respected) — shipped.
2. [ ] Scroll-reveal on section entry — not done, stayed cut.
3. [ ] Custom OG image + Lighthouse pass — not done, stayed cut.
