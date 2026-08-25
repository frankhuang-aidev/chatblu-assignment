"use client";

import { useState } from "react";
import { cta } from "@/lib/content";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p
        role="status"
        className="mx-auto mt-9 max-w-md rounded-2xl border border-blu-light/40 bg-blu/15 px-6 py-4 text-paper"
      >
        {cta.success}
      </p>
    );
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
        className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder={cta.placeholder}
          className="w-full rounded-full border border-paper/25 bg-white/10 px-5 py-3 text-paper placeholder:text-cloud/70 focus:outline-2 focus:outline-offset-2 focus:outline-blu-light"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-blu px-6 py-3 text-sm font-semibold text-white transition-colors outline-offset-2 hover:bg-blu-deep focus-visible:outline-2 focus-visible:outline-blu-light"
        >
          {cta.button}
        </button>
      </form>
      <p className="mt-4 text-xs text-cloud/60">{cta.stubNote}</p>
    </>
  );
}
