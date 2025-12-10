// app/donate/page.tsx

export default function DonatePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-emerald-400 mb-4">
          Support Our Mission
        </h1>

        <p className="text-slate-300 mb-6">
          Your donation helps us provide food, clothes, school supplies, and community
          support to families in Rochester. Thank you for helping us make a difference!
        </p>

        <a
          href="https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/40 transition hover:bg-emerald-400"
        >
          Donate Now
        </a>
      </div>
    </main>
  );
}
