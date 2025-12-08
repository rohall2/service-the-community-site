this is what I see. Create a clean code that I can copy and paste // app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service the Community",
  description:
    "Service the Community partners with Rochester neighborhoods to support children and families through outreach events, resources and connection.",
};

// ---------- Header Component ----------

function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide text-emerald-300">
            Service the Community
          </span>
          <span className="text-[11px] text-slate-400">
            Serving families in Rochester
          </span>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-4 text-xs font-semibold text-slate-200">
          <Link
            href="/"
            className="rounded-full px-3 py-1 hover:bg-slate-900/70"
          >
            Home
          </Link>

          <Link
            href="#events"
            className="hidden rounded-full px-3 py-1 hover:bg-slate-900/70 sm:inline-flex"
          >
            Events
          </Link>

          {/* Donate button in header goes to /donate */}
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}

// ---------- Root Layout ----------

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
