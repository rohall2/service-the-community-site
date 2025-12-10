// app/donate/page.tsx

export default function DonatePage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-50">
      <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-16">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-emerald-400 mb-4">
            Support Our Mission
          </h1>
          <p className="max-w-xl mx-auto text-slate-300 text-sm">
            Your donation helps us provide food, clothes, school supplies, and
            community support to families in Rochester. Thank you for helping us
            make a difference!
          </p>
        </header>

        {/* Donate button */}
        <div className="flex justify-center">
          <a
            href="https://www.paypal.com" // TODO: replace with your real Stripe or PayPal donate link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/40 transition hover:bg-emerald-400"
          >
            Donate Now
          </a>
        </div>

        {/* Extra info */}
        <div className="space-y-3 text-xs text-slate-400">
          <p>
            All donations go directly to Service the Community programs, like
            Angel Tree events, toy giveaways, back-to-school drives, and
            year-round outreach.
          </p>
          <p>
            Service the Community Inc. is a 501(c)(3) nonprofit organization.
            Your gift may be tax-deductible as allowed by law.
          </p>
        </div>
      </section>
    </main>
  );
}
