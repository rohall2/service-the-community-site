"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandHeart, HeartHandshake, Users, Megaphone, Calendar, ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ShieldCheck, HandCoins } from "lucide-react";

const BRAND = { name: "Service the Community Inc.", tagline: "Neighbors helping neighbors." };

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Board", href: "#board" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

const Section = ({ id, children, bg = "bg-white" }:{ id:string, children:React.ReactNode, bg?:string }) => (
  <section id={id} className={`${bg} py-16 md:py-24`}>{children}</section>
);
const Container = ({ children }:{ children:React.ReactNode }) => <div className="container">{children}</div>;

const Header = () => (
  <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
    <Container>
      <nav className="flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 group" aria-label={`${BRAND.name} home`}>
          <HandHeart className="w-8 h-8 text-sky-600 group-hover:scale-110 transition" />
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-xl md:text-2xl">{BRAND.name}</div>
            <div className="text-xs text-slate-500">{BRAND.tagline}</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-3">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="px-3 py-2 rounded-lg hover:bg-slate-100 text-sm font-medium">
              {n.label}
            </a>
          ))}
          <a href="#donate" className="ml-2"><Button className="rounded-2xl">Donate</Button></a>
        </div>
      </nav>
    </Container>
  </header>
);

const Hero = () => (
  <Section id="home" bg="bg-gradient-to-b from-sky-50 to-white">
    <Container>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            We show up for our community—<span className="text-sky-600"> together.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            From hot‑meal pop‑ups to youth mentorship and first‑responder engagement, Service the Community Inc. mobilizes neighbors, partners, and resources to meet real needs—fast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#donate"><Button className="rounded-2xl">Give Now</Button></a>
            <a href="#volunteer"><Button variant="outline" className="rounded-2xl">Volunteer</Button></a>
            <a href="#about" className="inline-flex items-center text-sm font-medium group">
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </motion.div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1600880292089-90e7e86d868b?q=80&w=1400&auto=format&fit=crop" alt="Community service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
        </div>
      </div>
    </Container>
  </Section>
);

const About = () => (
  <Section id="about">
    <Container>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Mission</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We exist to meet urgent needs and build long‑term opportunity in Rochester and surrounding communities.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><HeartHandshake className="w-5 h-5 mt-0.5 text-sky-600" /> Collaborative partnerships with small businesses, schools, and first responders.</li>
            <li className="flex items-start gap-3"><Users className="w-5 h-5 mt-0.5 text-sky-600" /> Volunteer‑powered activations designed for measurable impact.</li>
            <li className="flex items-start gap-3"><Megaphone className="w-5 h-5 mt-0.5 text-sky-600" /> A clear voice for equity, access, and neighbor‑to‑neighbor care.</li>
          </ul>
        </div>
        <Card className="rounded-3xl">
          <CardHeader><CardTitle>Guiding Values</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border"><div className="font-semibold">Dignity</div><div className="text-sm text-slate-700 mt-1">Every person matters—full stop.</div></div>
            <div className="p-4 rounded-2xl bg-slate-50 border"><div className="font-semibold">Action</div><div className="text-sm text-slate-700 mt-1">We move fast and follow through.</div></div>
            <div className="p-4 rounded-2xl bg-slate-50 border"><div className="font-semibold">Trust</div><div className="text-sm text-slate-700 mt-1">We steward gifts well.</div></div>
            <div className="p-4 rounded-2xl bg-slate-50 border"><div className="font-semibold">Joy</div><div className="text-sm text-slate-700 mt-1">Service should feel hopeful and welcoming.</div></div>
          </CardContent>
        </Card>
      </div>
    </Container>
  </Section>
);

const Events = () => (
  <Section id="events">
    <Container>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Upcoming Events</h2>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        <Card className="rounded-3xl">
          <CardHeader><CardTitle className="text-xl">Angel Tree Gift Giveaway</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-slate-700">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="inline-flex items-center"><Calendar className="w-4 h-4 mr-1" />Dec 18, 2025 • 5:00–7:00 PM</span>
              <span className="inline-flex items-center"><MapPin className="w-4 h-4 mr-1" />Rochester, NY</span>
            </div>
            <p className="text-sm">Toys for local kids ages 6–12 with support from local law enforcement.</p>
          </CardContent>
        </Card>
        <Card className="rounded-3xl">
          <CardHeader><CardTitle className="text-xl">Winter Coat & Pantry Drive</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-slate-700">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="inline-flex items-center"><Calendar className="w-4 h-4 mr-1" />Jan 11, 2026 • 10:00 AM–1:00 PM</span>
              <span className="inline-flex items-center"><MapPin className="w-4 h-4 mr-1" />Rochester, NY</span>
            </div>
            <p className="text-sm">Donate new/gently used coats and shelf‑stable items to keep families warm and fed.</p>
          </CardContent>
        </Card>
      </div>
    </Container>
  </Section>
);

const Volunteer = () => (
  <Section id="volunteer" bg="bg-gradient-to-b from-white to-slate-50">
    <Container>
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Volunteer with Us</h2>
          <p className="mt-4 text-slate-700 max-w-2xl">Individuals, families, schools, and corporate teams welcome.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact"><Button className="rounded-2xl">Sign Up</Button></a>
            <a href="#contact"><Button variant="outline" className="rounded-2xl">Group Inquiry</Button></a>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
          <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop" alt="Volunteers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </Container>
  </Section>
);

const Donate = () => (
  <Section id="donate" bg="bg-slate-50">
    <Container>
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Fuel the Mission</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">Every dollar stays local and powers hands‑on work.</p>
        </div>
      </div>
      <Card className="mt-6 rounded-3xl">
        <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <HandCoins className="w-6 h-6 text-green-600" />
            <div>
              <div className="font-semibold">Other ways to give</div>
              <p className="text-sm text-slate-700">In‑kind donations, corporate matches, and scholarships welcome.</p>
            </div>
          </div>
          <a href="#contact"><Button variant="outline" className="rounded-2xl">Contact Us</Button></a>
        </CardContent>
      </Card>
    </Container>
  </Section>
);

const Contact = () => (
  <Section id="contact" bg="bg-slate-50">
    <Container>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Get in Touch</h2>
          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input aria-label="Full name" placeholder="Full name" required />
            <Input aria-label="Email" type="email" placeholder="Email" required />
            <Input aria-label="Phone" type="tel" placeholder="Phone (optional)" className="md:col-span-2" />
            <Textarea aria-label="Message" placeholder="How can we help?" className="md:col-span-2" required />
            <div className="md:col-span-2"><Button className="rounded-2xl" type="submit">Send Message</Button></div>
          </form>
        </div>
        <Card className="rounded-3xl">
          <CardContent className="p-6 space-y-3">
            <div className="font-semibold">Contact Details</div>
            <div className="text-sm text-slate-700 flex items-center"><Phone className="w-4 h-4 mr-2" /> (585) 200-1364</div>
            <div className="text-sm text-slate-700 flex items-center"><Mail className="w-4 h-4 mr-2" /> (Add your email)</div>
            <div className="text-sm text-slate-700 flex items-center"><MapPin className="w-4 h-4 mr-2" /> Rochester, NY</div>
          </CardContent>
        </Card>
      </div>
    </Container>
  </Section>
);

const Footer = () => (
  <footer className="bg-white border-t">
    <Container>
      <div className="py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="font-extrabold text-xl">{BRAND.name}</div>
          <div className="text-sm text-slate-600">{BRAND.tagline}</div>
        </div>
        <div className="flex items-center gap-3 md:justify-end">
          <a className="p-2 rounded-xl hover:bg-slate-100" href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
          <a className="p-2 rounded-xl hover:bg-slate-100" href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          <a className="p-2 rounded-xl hover:bg-slate-100" href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      <div className="py-6 text-xs text-slate-500 border-t flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#donate" className="hover:underline">Donate</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function Page() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Volunteer />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
