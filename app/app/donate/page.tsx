// app/donate/page.tsx

import Link from "next/link";

const STRIPE_DONATION_URL =
  "https://buy.stripe.com/dRmcN44158Rogesb0WaIM00";

export const metadata = {
  title: "Donate | Service the Community",
  description:
    "Support Service the Community as we bring resources, hope and connection to families in Rochester.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Page wrapper */}
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 lg:px-0">
        {/* Title + intro */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-emerald-300 sm:text-4xl">
            Donate to Service the Community
          </h1>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Your gift helps us bring events, resources and year-round
            support to children and families in Rochester&apos;s
            neighborhoods. Every dollar fuels Angel Tree events, toy
            giveaways and practical help for the community.
          </p>
        </section>

        {/* Suggested amounts */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Suggested one-time gifts
          </h2>

          <div className="grid gap-3 sm:grid-cols-4">
            {["25", "50", "100", "250"].map((amount) => (
              <div
                key={amount}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-center text-sm text-slate-200"
              >
                <div className="text-lg font-semibold text-emerald-300">
                  ${amount}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">
                  Makes a real impact
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            These are just suggestions. On the next screen you can choose
            **any** amount that works for you.
          </p>
        </section>

        {/* Main donate button */}
        <section className="space-y-3 rounded-3xl border border-emerald-500/40 bg-slate-900/60 px-6 py-6 sm:px-8">
          <h2 className="text-lg font-semibold text-emerald-200 sm:text-xl">
            Ready to give?
          </h2>
          <p className="max-w-2xl text-sm text-slate-200">
            Click the button below to go to our secure Stripe donation
            page. You&apos;ll be able to enter any amount, use card, Cash
            App, or other options, and get an instant receipt.
          </p>

          <div className="pt-2">
            <a
              href={STRIPE_DONATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
            >
              Give securely with Stripe
            </a>
          </div>

          <p className="pt-2 text-[11px] text-slate-400">
            Stripe processes your payment using industry-standard
            encryption. Service the Community never sees your full card
            number.
          </p>
        </section>

        {/* Contact & transparency */}
        <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/40 px-6 py-6 sm:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Questions or larger gifts
          </h2>
          <p className="max-w-2xl text-sm text-slate-200">
            For sponsorships, partnerships, or in-kind donations, contact:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 text-sm">
              <div className="font-semibold text-slate-50">
                Ronald Hall, President
              </div>
              <div className="text-slate-200">Service the Community</div>
              <div className="text-slate-300">Phone: 585-200-1364</div>
            </div>

            <div className="space-y-1 text-sm">
              <div className="font-semibold text-slate-50">
                Evangela “Van” Stanley, Vice President
              </div>
              <div className="text-slate-200">Service the Community</div>
              <div className="text-slate-300">Phone: 585-464-8790</div>
            </div>
          </div>

          <p className="pt-2 text-[11px] text-slate-400">
            We are a 501(c)(3) nonprofit. Your contribution may be tax
            deductible. Please consult your tax advisor.
          </p>
        </section>

        {/* Back link */}
        <div>
          <Link
            href="/"
            className="text-xs font-semibold text-slate-400 underline-offset-4 hover:text-emerald-300 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
