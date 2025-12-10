// app/donate/page.tsx

export default function DonatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-50 px-4">
      <h1 className="text-3xl font-bold text-emerald-400 mb-4">Support Our Mission</h1>

      <p className="max-w-xl text-center text-slate-300 mb-6">
        Your donation helps us provide food, clothes, school supplies, and community support
        to families in Rochester. Thank you for helping us make a difference!
      </p>

      <a
        href="https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-full shadow-md shadow-emerald-500/40 transition"
      >
        Donate Now
      </a>
    </div>
  );
}
