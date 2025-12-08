// app/page.tsx
import Link from "next/link";

const DONATION_LINK = "https://buy.stripe.com/dRmcN44158Rogesb0WaIM00";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-wide text-emerald-300">
              Service the Community
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Serving families one neighborhood at a time
            </h1>
            <p className="text-base text-slate-200">
              Service the Community exists to bridge gaps for families facing
              financial, emotional and social challenges. We partner with the
              community to provide resources, encouragement and connection so
              every family feels seen supported and has room to grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={DONATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Donate now
              </a>

              <Link
                href="#mission"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300 px-8 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500 hover:text-slate-950"
              >
                Learn more
              </Link>
            </div>

            <div className="mt-4 space-y-2 text-sm text-emerald-100/90">
              <p className="font-medium">Suggested gifts</p>
              <div className="flex flex-wrap gap-3">
                {[25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() =>
                      window.open(DONATION_LINK, "_blank", "noopener,noreferrer")
                    }
                    className="rounded-full border border-emerald-300 px-4 py-1 text-xs font-semibold hover:bg-emerald-400/10"
                  >
                    ${amount}
                  </button>
                ))}
                <span className="text-xs text-emerald-100/80">
                  or any amount that is on your heart
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
              Next community outreach
            </p>
            <p className="text-lg font-semibold text-emerald-100">
              Angel Tree and holiday toy support for families in Rochester
            </p>
            <p className="text-sm text-slate-200">
              Your gift helps us show up with dignity and joy for children and
              families who need a little extra support this season.
            </p>
            <ul className="space-y-2 text-sm text-emerald-100/90">
              <li>Direct support for local families</li>
              <li>Collaboration with trusted neighborhood partners</li>
              <li>Events that keep kids seen safe and encouraged</li>
            </ul>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="space-y-8">
          <h2 className="text-2xl font-bold text-emerald-200">Our mission</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-sm leading-relaxed text-slate-200">
              We believe every family deserves stability dignity and a sense of
              belonging. Many of our neighbors are working hard yet still face
              gaps in support. Service the Community stands in that space with
              practical help a consistent presence and relationships that last
              beyond a single event.
            </p>
            <p className="text-sm leading-relaxed text-slate-200">
              When the community stands together children are safer families are
              stronger and hope has room to grow. We focus on high trust
              outreach events that connect families to resources and to one
              another so no one has to navigate hard seasons alone.
            </p>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="events" className="space-y-8">
          <h2 className="text-2xl font-bold text-emerald-200">
            Upcoming events
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-100">
                6th Annual Peoples Choice and Service the Community Angel Tree
              </h3>
              <p className="mt-2 text-xs text-emerald-200">
                December 17 2025 at 4 pm
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Parking lot of Family Dollar  
                670 Thurston Rd  
                Rochester NY 14619
              </p>
              <p className="mt-3 text-xs text-slate-200">
                Angel Tree gifts and community support for local families.
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-100">
                Good Life Collective Peoples Choice and Service the Community
                Toy Giveaway
              </h3>
              <p className="mt-2 text-xs text-emerald-200">
                December 21 2025 at 3 pm
              </p>
              <p className="mt-1 text-xs text-slate-300">
                149 Monroe Ave  
                Rochester NY
              </p>
              <p className="mt-3 text-xs text-slate-200">
                Neighborhood celebration with toys and encouragement for kids
                and families.
              </p>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-sm font-semibold text-emerald-100">
                Service the Community Toy Giveaway at Vision Beauty School
              </h3>
              <p className="mt-2 text-xs text-emerald-200">
                December 23 2025 at 5 pm
              </p>
              <p className="mt-1 text-xs text-slate-300">
                Vision Beauty School  
                1765 N Clinton Ave  
                Rochester NY
              </p>
              <p className="mt-3 text-xs text-slate-200">
                Final holiday push to make sure as many children as possible
                wake up with joy.
              </p>
            </article>
          </div>
        </section>

        {/* Leadership and contact */}
        <section id="contact" className="space-y-6">
          <h2 className="text-2xl font-bold text-emerald-200">Leadership</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                President
              </p>
              <p className="text-sm font-semibold text-emerald-100">
                Ronald Hall
              </p>
              <p className="text-xs text-slate-200">
                Phone 585 200 1364
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Ronald leads strategy partnerships and on the ground outreach
                for Service the Community keeping the focus on real families and
                measurable impact.
              </p>
            </div>

            <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">
                Vice President
              </p>
              <p className="text-sm font-semibold text-emerald-100">
                Evangela Van Stanley
              </p>
              <p className="text-xs text-slate-200">
                Phone 585 464 8790
              </p>
              <p className="mt-2 text-xs text-slate-300">
                Van brings deep community relationships and a heart for
                hospitality ensuring every event is welcoming organized and
                centered on dignity for the families we serve.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-5 text-sm text-emerald-50">
            <p className="font-semibold">
              Ready to support Service the Community
            </p>
            <p className="mt-1">
              Use the button below to give online or reach out to Ronald or Van
              to discuss partnerships sponsorships or in kind support.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={DONATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-xs font-semibold text-slate-950 shadow-lg transition hover:bg-emerald-400"
              >
                Give online
              </a>
              <Link
                href="tel:15852001364"
                className="text-xs font-semibold text-emerald-200 underline underline-offset-4"
              >
                Call Ronald
              </Link>
              <Link
                href="tel:15854648790"
                className="text-xs font-semibold text-emerald-200 underline underline-offset-4"
              >
                Call Van
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
