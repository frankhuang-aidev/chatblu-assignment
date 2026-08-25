import { chatMock } from "@/lib/content";

const bubbleStyles = {
  guest: "max-w-[85%] rounded-2xl rounded-bl-md bg-sand px-4 py-2.5 text-ink",
  agent:
    "ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-blu px-4 py-2.5 text-white",
  system:
    "mx-auto flex items-center gap-2 rounded-xl border border-dashed border-blu/40 bg-blu/5 px-4 py-2 text-xs text-navy",
} as const;

export function ChatMock() {
  return (
    <div
      className="rounded-3xl bg-white p-5 text-ink shadow-2xl shadow-black/40"
      role="img"
      aria-label="Example WhatsApp conversation: a guest requests late check-in and room service; the ChatBlu agent confirms both and creates the order in the hotel's systems within seconds."
    >
      <div className="flex items-center gap-3 border-b border-ink/10 pb-4">
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-sand font-display font-semibold"
        >
          R
        </span>
        <div>
          <p className="text-sm font-semibold">{chatMock.guestName}</p>
          <p className="text-xs text-mist">{chatMock.channel}</p>
        </div>
      </div>
      <ul aria-hidden="true" className="space-y-3 pt-4 text-sm leading-relaxed">
        {chatMock.messages.map((message, i) => (
          <li
            key={i}
            className={`animate-rise ${bubbleStyles[message.from]}`}
            style={{ animationDelay: `${0.3 + i * 0.5}s` }}
          >
            {message.from === "system" && (
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 shrink-0 stroke-blu"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            )}
            {message.text}
          </li>
        ))}
        <li
          className="animate-rise pt-1 text-center text-xs text-mist"
          style={{ animationDelay: `${0.3 + chatMock.messages.length * 0.5}s` }}
        >
          {chatMock.caption}
        </li>
      </ul>
    </div>
  );
}
