// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-10">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300">
            SERVICE THE COMMUNITY
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-50 md:text-4xl">
            Serving families,{" "}
            <span className="text-emerald-400">one neighborhood</span> at a time.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            We partner with the community to create safe spaces where families
            can receive resources, encouragement and connection. From holiday
            drives to school-year support, we believe every child deserves to be
            seen, heard and cared for.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Donate now
            </Link>

            <Link
              href="#events"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              View upcoming events
            </Link>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-xs text-slate-300">
            <p className="font-semibold text-slate-200">Contact</p>
            <p className="mt-1">
              Ronald Hall, President – <span className="text-emerald-300">585-200-1364</span>
            </p>
            <p>
              Evangela “Van” Stanley, Vice President –{" "}
              <span className="text-emerald-300">585-464-8790</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Our mission
          </p>
          <p className="mt-3 text-sm text-slate-200">
            Service the Community exists to bridge gaps for families facing
            financial, emotional and social challenges. We focus on practical
            help, consistent presence and relationships that last beyond a
            single event.
          </p>
          <p className="mt-3 text-xs text-slate-400">
            When neighbors stand together, children are safer, families are
            stronger and hope has room to grow.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold text-slate-50">
            Upcoming events
          </h2>
          <span className="text-xs text-slate-400">
            Rochester, New York
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Event 1 */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
            <p className="text-xs font-semibold text-emerald-300">
              Dec 17, 2025 · 4:00 PM
            </p>
            <h3 className="mt-1 font-semibold text-slate-50">
              6th Annual People&apos;s Choice &amp; Service the Community Angel Tree
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Parking lot of Family Dollar, 670 Thurston Rd, Rochester, NY 14619.
              Toys and support for kids and families on the west side.
            </p>
          </article>

          {/* Event 2 */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
            <p className="text-xs font-semibold text-emerald-300">
              Dec 21, 2025 · 3:00 PM
            </p>
            <h3 className="mt-1 font-semibold text-slate-50">
              Toy Giveaway with Good Life Collective &amp; People&apos;s Choice
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              149 Monroe Ave, Rochester, NY. A community toy giveaway bringing
              holiday joy to local children.
            </p>
          </article>

          {/* Event 3 */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm md:col-span-2">
            <p className="text-xs font-semibold text-emerald-300">
              Dec 23, 2025 · 5:00 PM
            </p>
            <h3 className="mt-1 font-semibold text-slate-50">
              Vision Beauty School Toy Giveaway
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              Vision Beauty School, 1765 N. Clinton Ave, Rochester, NY. Another
              chance for families to receive toys and connect with community
              partners.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
