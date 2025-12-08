// app/donate/page.tsx
import Link from "next/link";

const STRIPE_DONATION_URL =
  "https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"; // update here if Stripe gives you a new link

export default function DonatePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10">
      <h1 className="text-2xl font-bold text-slate-50">
        Support Service the Community
      </h1>
      <p className="mt-3 text-sm text-slate-300">
        Your gift helps us provide Angel Tree events, toy giveaways and
        year-round support for families in Rochester. Every dollar goes toward
        serving children and strengthening neighborhoods.
      </p>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200">
        <p className="font-semibold text-slate-50">How giving works</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-300">
          <li>
            Choose from suggested amounts or enter{" "}
            <span className="font-semibold text-emerald-300">
              any amount you wish
            </span>
            .
          </li>
          <li>Secure checkout is processed through Stripe.</li>
          <li>You&apos;ll receive an email confirmation for your records.</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <Link
          href={STRIPE_DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/30 transition hover:bg-emerald-400"
        >
          Give a donation
        </Link>

        <p className="text-[11px] text-slate-400">
          You&apos;ll be redirected to a secure Stripe page where you can select
          a suggested amount or type in your own.
        </p>
      </div>
    </div>
  );
}
