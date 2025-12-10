// app/donate/page.tsx

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-16">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">
          Support Our Mission
        </h1>

        <p className="max-w-xl text-center text-slate-300 mb-6">
          Your donation helps us provide food, clothes, school supplies, and
          community support to families in Rochester. Thank you for helping us
          make a difference!
        </p>

        <a
          href="https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/40 hover:bg-emerald-400 transition"
        >
          Donate Now
        </a>
      </section>
    </main>
  );
}
