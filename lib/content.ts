// All page copy lives here so layout components stay free of prose.

export const site = {
  name: "ChatBlu",
  tagline: "AI agents for hotels",
  email: "hello@chatblu.ai",
};

export const hero = {
  eyebrow: "AI agents for hotels",
  headline: ["Every guest, answered.", "Every request, done."],
  subhead:
    "ChatBlu gives your hotel a team of AI agents that reply on WhatsApp, email, and phone — then finish the job: reservations booked, housekeeping dispatched, spa slots sold. Around the clock, in your guest's own language.",
  primaryCta: { label: "Book a demo", href: "#demo" },
  secondaryCta: { label: "Meet the agents", href: "#agents" },
};

export const chatMock = {
  guestName: "Rivera family · Room 304",
  channel: "WhatsApp · 21:47",
  messages: [
    {
      from: "guest" as const,
      text: "Hi! We land at 11pm — is late check-in okay? And could we get a bottle of cava in the room?",
    },
    {
      from: "agent" as const,
      text: "Of course — welcome! Late check-in is all set; your key code arrives in this chat by 9pm. I've added a bottle of Cava Brut (€28) to room 304. Anything else for your arrival?",
    },
    {
      from: "system" as const,
      text: "F&B ticket #482 created · charged to room 304 · PMS updated",
    },
    { from: "guest" as const, text: "Perfect, thank you! 🎉" },
  ],
  caption: "Resolved in 4 seconds — no staff involved.",
};

export const metrics = {
  items: [
    { value: "<2s", label: "median time to answer a call" },
    { value: "97%", label: "guest requests resolved without staff" },
    { value: "+18%", label: "ancillary revenue per stay" },
    { value: "40+", label: "languages, out of the box" },
  ],
  note: "Illustrative figures, based on typical AI-concierge deployments.",
};

export const agents = {
  eyebrow: "What ChatBlu does",
  headline: "Meet the agents",
  subhead:
    "Not one chatbot — a team of specialists that share guest context and hand off to each other, the way your best staff do.",
  cards: [
    {
      icon: "concierge" as const,
      name: "The Concierge",
      role: "Owns the guest conversation, pre-arrival to checkout.",
      scenario:
        "Three days before arrival it messages the Riveras on WhatsApp: airport transfer, a table at the rooftop restaurant, a spa slot for two. By check-in, their stay is planned — and worth more.",
    },
    {
      icon: "voice" as const,
      name: "The Voice Agent",
      role: "Answers every call in under two seconds.",
      scenario:
        "A guest calls at 2am about a late checkout. The agent checks availability in the PMS, extends the stay, and updates housekeeping's board — before your night auditor would have picked up.",
    },
    {
      icon: "operations" as const,
      name: "The Operations Agent",
      role: "Turns requests into dispatched, tracked work.",
      scenario:
        "“More towels to 12” becomes a ticket on the live floor plan, assigned to whoever is nearest. No radios, no whiteboards, no forgotten requests.",
    },
  ],
};

export const value = {
  headline: "Built for your P&L. Loved by your guests.",
  hotel: {
    title: "For your hotel",
    points: [
      "Answer 100% of calls and messages without adding headcount",
      "Turn service chats into revenue — spa, F&B, upgrades, late checkouts",
      "One inbox and one audit trail across every department",
    ],
  },
  guests: {
    title: "For your guests",
    points: [
      "Instant answers on the channel they already use — no app to download",
      "Their language and their preferences, remembered across stays",
      "Requests that actually get done, not logged and lost",
    ],
  },
};

export const why = {
  eyebrow: "Why ChatBlu is different",
  headline: "Chat widgets answer questions. ChatBlu finishes jobs.",
  body:
    "Most hotel chatbots deflect questions to an FAQ. ChatBlu agents read and write to your PMS, POS, and housekeeping systems, act across departments, and hand off to your team only when a human touch matters — with full context attached.",
  integrationsLabel: "Works with the systems you already run",
  integrations: [
    "Opera Cloud",
    "Mews",
    "Cloudbeds",
    "Apaleo",
    "Simphony POS",
    "WhatsApp Business",
    "+ your stack",
  ],
};

export const cta = {
  headline: "See it run your hotel's hardest scenario",
  subhead:
    "20 minutes with a founder. Bring your trickiest guest request — we'll show the agents handling it live, on your property's real workflows.",
  placeholder: "you@yourhotel.com",
  button: "Book a demo",
  success: "Thanks — we'll be in touch within one business day.",
  stubNote: "Demo build: this form stores nothing. Reach us at hello@chatblu.ai.",
};

export const footer = {
  tagline: "AI agents for hotels.",
  links: [
    { label: "hello@chatblu.ai", href: "mailto:hello@chatblu.ai" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  copyright: "© 2026 ChatBlu. All rights reserved.",
};
