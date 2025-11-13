// app/page.tsx
import { Calendar, MapPin, HeartHandshake, Users, Phone, Mail, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Angel Tree Gift Giveaway",
    date: "Dec 18, 2025 • 5:00–7:00 PM",
    location: "Rochester, NY",
    description:
      "Toys for local kids ages 6–12 with support from local law enforcement.",
  },
  {
    title: "Winter Coat & Pantry Drive",
    date: "Jan 11, 2026 • 10:00 AM–1:00 PM",
    location: "Rochester, NY",
    description:
      "Donate new/gently used coats and shelf-stable items to keep families warm and fed.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-24">
          <div className="space-y-6 md:flex-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
              Service the Community Inc.
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Serving families,{" "}
              <span className="text-emerald-400">one neighborhood</span> at a
              time.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              We partner with residents, local businesses, and first responders
              to provide events, resources, and support for families in
              Rochester and the surrounding communities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#events"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                View Upcoming Events
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-50 hover:border-emerald-400 hover:text-emerald-300"
              >
                Partner With Us
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-4 text-sm text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">
                  Community-first mission
                </p>
                <p>Focused on dignity, respect, and opportunity.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">
                  Local collaboration
                </p>
                <p>Working alongside schools, churches, and businesses.</p>
              </div>
            </div>
          </div>

          <div className="md:flex-1">
            <div className="mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Our pillars
              </p>
              <div className="mt-4 grid gap-4 text-sm text-slate-200">
                <div>
                  <p className="font-semibold text-emerald-400">Action</p>
                  <p className="text-slate-400">
                    We don’t just talk about change — we show up and serve.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-400">Trust</p>
                  <p className="text-slate-400">
                    Built through consistency, transparency, and follow-through.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-emerald-400">Joy</p>
                  <p className="text-slate-400">
                    Every event is designed to bring hope, dignity, and
                    connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our mission
              </h2>
              <p className="text-slate-300">
                Service the Community Inc. exists to bridge gaps for families
                facing financial, emotional, and social challenges. We create
                safe spaces where people can receive resources, encouragement,
                and connection.
              </p>
              <p className="text-slate-400">
                From holiday outreaches to school-year support, we believe every
                child and every family deserves to be seen, heard, and cared
                for.
              </p>
            </div>

            <div className="grid gap-6 text-sm sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <HeartHandshake className="mb-2 h-6 w-6 text-emerald-400" />
                <p className="font-semibold text-slate-100">Family Support</p>
                <p className="mt-1 text-slate-400">
                  Events and resources that meet practical needs with dignity.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <Users className="mb-2 h-6 w-6 text-emerald-400" />
                <p className="font-semibold text-slate-100">Community Voice</p>
                <p className="mt-1 text-slate-400">
                  Led by people who live, work, and worship in the community.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:col-span-1 sm:row-span-2">
                <Calendar className="mb-2 h-6 w-6 text-emerald-400" />
                <p className="font-semibold text-slate-100">
                  Year-round outreach
                </p>
                <p className="mt-1 text-slate-400">
                  Holiday events, school-support drives, and partnerships with
                  local organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Upcoming Events
              </h2>
              <p className="mt-2 text-slate-300">
                Join us as we serve families and neighborhoods across Rochester.
              </p>
            </div>
            <span className="hidden rounded-full border border-emerald-500/30 px-4 py-1 text-xs font-medium text-emerald-300 md:inline">
              Open to the community
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-50">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-emerald-400" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-emerald-400" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section
        id="volunteer"
        className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Volunteer with Us
              </h2>
              <p className="text-slate-300">
                Individuals, families, schools, churches, and corporate teams
                are all welcome. Whether you can give an afternoon or a full
                season, there’s a place for you.
              </p>
              <p className="text-slate-400">
                Volunteers help with setup, hospitality, registration, youth
                engagement, distribution, and follow-up support.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Sign Up to Volunteer
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">
                Volunteer opportunities include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Event setup & cleanup</li>
                <li>Food and gift distribution</li>
                <li>Greeters & hospitality</li>
                <li>Youth & activity support</li>
                <li>Community outreach & follow-up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-slate-950 py-16 md:py-20 border-t border-slate-800"
      >
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact & Partnerships
          </h2>
          <p className="mt-2 text-slate-300">
            Want to host an event, sponsor a program, or learn more about
            Service the Community Inc.? We’d love to connect.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Get in touch</p>
              <p>Use the email or phone below and our team will follow up.</p>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>(555) 555-5555</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>info@servicethecommunity.org</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p className="font-semibold text-slate-100">Partner with us</p>
              <p>
                We welcome collaboration with local businesses, schools,
                churches, law-enforcement, and civic organizations who want to
                serve families in practical ways.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Service the Community Inc. All rights
            reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
