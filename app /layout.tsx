export const metadata = {
  title: "Service the Community",
  description: "Serving families in Rochester",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        <header className="flex justify-between items-center px-6 py-4 border-b border-slate-800">
          <h1 className="text-2xl font-bold text-emerald-400">Service the Community</h1>
          <nav className="flex gap-6">
            <a href="/" className="hover:text-emerald-400">Home</a>
            <a href="/events" className="hover:text-emerald-400">Events</a>
            <a
              href="/donate"
              className="bg-emerald-500 hover:bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold transition"
            >
              Donate
            </a>
          </nav>
        </header>

        <main className="max-w-4xl mx-auto py-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}

