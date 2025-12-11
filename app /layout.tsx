// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Service the Community",
  description: "Serving families in Rochester",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-emerald-300">
                Service the Community
              </span>
              <span className="text-[11px] text-slate-400">
                Serving families in Rochester
              </span>
            </div>

            <nav className="flex items-center gap-4 text-xs font-semibold text-slate-200">
              <a href="/" className="rounded-full px-3 py-1 hover:bg-slate-900/70">
                Home
              </a>
              <a
                href="/events"
                className="rounded-full px-3 py-1 hover:bg-slate-900/70"
              >
                Events
              </a>
              <a
                href="/donate"
                className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/30 hover:bg-emerald-400"
              >
                Donate
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}

