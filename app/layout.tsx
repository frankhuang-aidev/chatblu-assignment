import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  title: "ChatBlu — AI Agents for Hotels",
  description:
    "ChatBlu gives hotels a team of AI agents that answer every guest call and message on WhatsApp, email, and phone — and finish the job across reception, housekeeping, F&B, and spa.",
  openGraph: {
    title: "ChatBlu — AI Agents for Hotels",
    description:
      "AI agents that answer every guest in seconds and finish the job across every hotel department.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      {/* suppressHydrationWarning: browser extensions (e.g. Grammarly) inject
          attributes into <body> before React hydrates */}
      <body
        suppressHydrationWarning
        className="bg-ink font-sans text-ink antialiased"
      >
        {children}
      </body>
    </html>
  );
}
