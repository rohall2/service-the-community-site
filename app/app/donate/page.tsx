import Link from "next/link";

const STRIPE_DONATION_URL =
  "https://buy.stripe.com/dRmcN44158Rogesb0WaIM00";

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-emerald-300">
        Support Service the Community
      </h1>

      <p className="mt-4 text-sm text-slate-300 leading-relaxed">
        Your support helps us serve families in Rochester
        through outreach events, food and toy distributions,
        and practical everyday resources.
      </p>

      <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-semibold text-emerald-200">
          Donate Online
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Select any amount and complete your secure donation through Stripe.
        </p>

        <Link
          href={STRIPE_DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
        >
          Donate Now
        </Link>

        <p className="mt-3 text-[11px] text-slate-400">
          You will be redirected to our secure Stripe donation page.
        </p>
      </div>

      <div className="mt-10 text-xs text-slate-400 space-y-1">
        <p>Ronald Hall, Founder — 585-200-1364</p>
        <p>Evangela “Van” Stanley, VP — 585-464-8790</p>
      </div>
    </div>
  );
}
