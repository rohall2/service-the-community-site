// app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
          <div className="flex-1 space-y-8">
            <p className="text-sm font-semibold tracking-[0.25em] text-emerald-400">
              SERVICE THE COMMUNITY INC
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-slate-50">
                Serving families in Rochester
              </span>
              <span className="block text-emerald-400">
                one neighborhood at a time
              </span>
            </h1>

            <p className="max-w-xl text-lg text-slate-300">
              Service the Community Inc exists to bridge the financial
              emotional and social gaps that families face in Rochester.
              We create safe and welcoming spaces where children and families
              can access essential resources encouragement and real community
              connection. We partner with the community to ensure every family
              feels seen supported and valued.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Donate Now
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Talk with Ronald Hall
              </a>
            </div>

            <div className="mt-4 space-y-1 text-sm text-slate-400">
              <p>
                Your support funds outreach events holiday drives youth
                programs and emergency resources for families in Rochester.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Upcoming Impact
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-50">
                Your gift moves real families forward
              </h2>
              <p className="mt-3 text-sm text-slate-300">
                Every contribution helps us provide practical support for
                families across Rochester. We focus on events that bring
                hope dignity and consistent encouragement.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-200">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="font-semibold text-emerald-300">
                    Holiday and seasonal outreach
                  </p>
                  <p className="mt-1 text-slate-300">
                    Toys warm clothing pantry items and care packages
                    that let children and families know they are not forgotten.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="font-semibold text-emerald-300">
                    Youth and family support
                  </p>
                  <p className="mt-1 text-slate-300">
                    Safe events that keep young people engaged hopeful
                    and surrounded by positive role models.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="font-semibold text-emerald-300">
                    Community resource connections
                  </p>
                  <p className="mt-1 text-slate-300">
                    Helping families connect with services that address
                    real needs in real time.
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-400">
                <p>
                  Service the Community Inc is a registered nonprofit
                  organization serving Rochester New York.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-50">
              Our mission
            </h2>
            <p className="text-lg text-slate-300">
              We believe every family deserves stability dignity and a
              sense of belonging. Our mission is to stand in the gap
              where resources are limited and needs are rising.
            </p>
            <p className="text-slate-300">
              We focus on practical help consistent presence and
              relationships that last beyond a single event. When
              neighbors stand together children are safer families
              are stronger and hope has room to grow.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              How your support helps
            </h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Expands outreach events that provide food clothing
                  school supplies and holiday support.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Strengthens youth programs that keep kids connected to
                  positive spaces and mentors.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Helps families navigate resources so they are not
                  facing hardship alone.
                </span>
              </li>
            </ul>

            <Link
              href="https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Give today
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="border-t border-slate-800 bg-slate-950 py-16"
      >
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
            <h2 className="text-2xl font-bold text-slate-50">
              Connect with us
            </h2>
            <p className="mt-3 text-slate-300">
              If you would like to volunteer partner with an event or
              support a specific project we would love to connect.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-2 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Primary contact
                </p>
                <p className="font-semibold text-slate-50">
                  Ronald Hall
                </p>
                <p>President and CEO Service the Community Inc</p>
                <p className="mt-2">
                  Phone{" "}
                  <a
                    href="tel:15852001364"
                    className="font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    585 200 1364
                  </a>
                </p>
                <p className="text-xs text-slate-400">
                  Call or text to discuss partnership ideas sponsorships
                  or upcoming events.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  Support the work
                </p>
                <p>
                  A single gift can fund outreach that changes the
                  direction of a family story. Monthly support creates
                  stability so we can plan further and serve more people.
                </p>
                <Link
                  href="https://buy.stripe.com/dRmcN44158Rogesb0WaIM00"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Open secure donation page
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Thank you for standing with families in Rochester. Together
              we are building stronger neighborhoods one act of service
              at a time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
