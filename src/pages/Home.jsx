import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer"



/* ---------------------- SEO HEAD ---------------------- */
function SEO() {
  return (
    <head>
      <title>Local Lead Studio | Websites That Get Local Businesses More Leads</title>
      <meta
        name="description"
        content="We build fast, SEO‑optimized, high‑converting websites for local service businesses in Texas. Get more calls, more leads, and more booked jobs."
      />
      <meta property="og:title" content="Local Lead Studio" />
      <meta
        property="og:description"
        content="Websites that help local service businesses get more calls, more leads, and more booked jobs."
      />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://localleadstudio.com" />
    </head>
  );
}





/* ---------------------- HERO ---------------------- */
const stats = [
  { value: "3.2×", label: "Avg lead increase" },
  { value: "14 days", label: "Avg delivery time" },
];

function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll("[data-a]");
    els?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 130);
    });
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px]" />

      <div className="relative max-w-[1100px] mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          <div
            data-a
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            Websites for local service businesses
          </div>

          <h1
            data-a
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6"
          >
            Get more local customers with a website that{" "}
            <span className="text-indigo-600">actually converts</span>
          </h1>

          <p
            data-a
            className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
          >
            We build fast, modern, SEO‑optimized websites for local service
            businesses — designed to turn visitors into{" "}
            <strong className="text-gray-800 font-semibold">real leads.</strong>
          </p>

          <div data-a className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-4 text-base font-semibold rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-all"
            >
              Get a free website audit
            </a>

            <a
              href="#portfolio"
              className="px-8 py-4 text-base font-semibold rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
              </svg>
              View sample work
            </a>
          </div>

          <div data-a className="flex flex-col sm:flex-row gap-10 pt-8 border-t border-gray-200">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-gray-900">
                  {s.value}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- VALUE PROPS ---------------------- */
function ValueProps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for local service businesses from day one
          </h2>
          <p className="text-gray-600 text-lg">
            Local businesses don’t need fancy tech — they need phones ringing and calendars filling.
            Every site we build is focused on one thing: getting you more leads.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 text-sm font-semibold">
              SEO
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Local SEO‑ready</h3>
            <p className="text-sm text-gray-600">
              Structured for Google, with on‑page SEO and local intent baked in.
            </p>
          </div>

          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 text-sm font-semibold">
              UX
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Conversion‑first design</h3>
            <p className="text-sm text-gray-600">
              Clear calls‑to‑action and trust signals that guide visitors to call or book.
            </p>
          </div>

          <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-4 text-sm font-semibold">
              ⚡
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast & mobile‑first</h3>
            <p className="text-sm text-gray-600">
              Optimized for speed and mobile so your site feels premium everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- SERVICES ---------------------- */
function Services_home() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Services that turn visitors into leads
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Simple, clear packages designed for local service businesses.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
          >
            Get a custom recommendation
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Local Business Website</h3>
            <p className="text-sm text-gray-600 mb-4">
              A modern, conversion‑focused website tailored to your service business.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li>• 3–5 pages</li>
              <li>• On‑page SEO setup</li>
              <li>• Mobile‑first design</li>
              <li>• Contact & booking flows</li>
            </ul>
            <p className="text-sm text-gray-500 mb-3">
              Typical range: <span className="font-semibold text-gray-800">$1,200–$2,500</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-indigo-200 p-6 shadow-md relative">
            <span className="absolute -top-3 right-4 text-[11px] px-2 py-1 rounded-full bg-indigo-600 text-white font-semibold">
              Most popular
            </span>
            <h3 className="font-semibold text-gray-900 mb-2">Local SEO Boost</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get found by people already searching for what you do.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li>• Google Business Profile optimization</li>
              <li>• Local on‑page SEO</li>
              <li>• Basic citation setup</li>
              <li>• Performance tracking</li>
            </ul>
            <p className="text-sm text-gray-500 mb-3">
              Typical range: <span className="font-semibold text-gray-800">$600–$1,200</span>
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Landing Page Funnel</h3>
            <p className="text-sm text-gray-600 mb-4">
              Perfect for ads, seasonal offers, or a single high‑impact campaign.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-4">
              <li>• High‑converting landing page</li>
              <li>• Persuasive copywriting</li>
              <li>• Analytics & tracking setup</li>
              <li>• A/B test‑ready structure</li>
            </ul>
            <p className="text-sm text-gray-500 mb-3">
              Typical range: <span className="font-semibold text-gray-800">$800–$1,800</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- PORTFOLIO ---------------------- */
function Portfolio_home() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Before & after: real local transformations
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              See how a focused redesign and SEO‑ready structure can turn an outdated site into a lead‑generating asset.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500 mb-2">Landscaping company</p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 mb-3">
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">Before</div>
              <div className="bg-white rounded-lg border border-emerald-200 p-3 text-center">After</div>
            </div>
            <p className="text-sm text-gray-700 mb-1 font-semibold">+42% more calls in 30 days</p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500 mb-2">Cleaning service</p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 mb-3">
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">Before</div>
              <div className="bg-white rounded-lg border border-emerald-200 p-3 text-center">After</div>
            </div>
            <p className="text-sm text-gray-700 mb-1 font-semibold">+31% increase in quote requests</p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
            <p className="text-xs font-semibold text-slate-500 mb-2">Home services</p>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 mb-3">
              <div className="bg-white rounded-lg border border-slate-200 p-3 text-center">Before</div>
              <div className="bg-white rounded-lg border border-emerald-200 p-3 text-center">After</div>
            </div>
            <p className="text-sm text-gray-700 mb-1 font-semibold">+27% more form submissions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- TESTIMONIALS ---------------------- */
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What local business owners say
          </h2>
          <p className="text-gray-600 text-lg">
            Even a few honest quotes can make a big difference in how confident new clients feel.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-4">
              “Our new website finally feels like our business. We’re getting more calls than we did with our old site.”
            </p>
            <p className="text-sm font-semibold text-gray-900">Owner, landscaping company</p>
            <p className="text-xs text-gray-500">North Texas</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-4">
              “The process was simple and fast. We went from ‘we should fix our site’ to live in about two weeks.”
            </p>
            <p className="text-sm font-semibold text-gray-900">Owner, cleaning service</p>
            <p className="text-xs text-gray-500">Dallas–Fort Worth</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-6 shadow-sm">
            <p className="text-sm text-gray-700 mb-4">
              “They understood what matters for local businesses — not just design, but actually getting more leads.”
            </p>
            <p className="text-sm font-semibold text-gray-900">Home services business</p>
            <p className="text-xs text-gray-500">Texas</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            A simple, clear process from idea to launch
          </h2>
          <p className="text-gray-600 text-lg">
            No endless back‑and‑forth or confusing tech. Just a straightforward path to a better website.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-semibold text-indigo-600 mb-1">Step 1</p>
            <h3 className="font-semibold text-gray-900 mb-2">Free audit</h3>
            <p className="text-sm text-gray-600">
              We review your current site or online presence and identify quick wins.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-semibold text-indigo-600 mb-1">Step 2</p>
            <h3 className="font-semibold text-gray-900 mb-2">Strategy call</h3>
            <p className="text-sm text-gray-600">
              We align on goals, pages, messaging, and what “success” looks like for you.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-semibold text-indigo-600 mb-1">Step 3</p>
            <h3 className="font-semibold text-gray-900 mb-2">Design & build</h3>
            <p className="text-sm text-gray-600">
              We design, build, and refine your site in clear milestones you can review.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
            <p className="text-xs font-semibold text-indigo-600 mb-1">Step 4</p>
            <h3 className="font-semibold text-gray-900 mb-2">Launch & grow</h3>
            <p className="text-sm text-gray-600">
              We launch, monitor, and can continue with ongoing improvements and SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-slate-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Serving local businesses across North Texas
          </h2>
          <p className="text-gray-600 text-lg">
            Based in Little Elm, Texas — working with service businesses across North Texas and beyond.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "Dallas",
            "Frisco",
            "Little Elm",
            "Plano",
            "McKinney",
            "Denton",
            "Prosper",
            "Allen",
          ].map((city) => (
            <span
              key={city}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-gray-700"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-800 text-white"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to get more leads from your website?
          </h2>
          <p className="text-indigo-100 text-lg mb-3">
            Request a free website audit and we’ll send you a short, clear breakdown of what’s working,
            what’s not, and where you’re leaving leads on the table.
          </p>
          <p className="text-indigo-100 text-sm">
            Prefer to talk? Call us at{" "}
            <a href="tel:19402081324" className="underline">
              (940) 208‑1324
            </a>
            .
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-6 max-w-xl">
          <form
            className="space-y-4"
            action="https://formspree.io/f/mbdqrkba"
            method="POST"
          >
            <input type="hidden" name="_redirect" value="https://localleadstudio.com/thank-you" />
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-white/30 bg-white/10 text-white text-sm px-3 py-2 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Business name
              </label>
              <input
                type="text"
                name="business"
                className="w-full rounded-lg border border-white/30 bg-white/10 text-white text-sm px-3 py-2 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Your business"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Website URL (if you have one)
              </label>
              <input
                type="url"
                name="website"
                className="w-full rounded-lg border border-white/30 bg-white/10 text-white text-sm px-3 py-2 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="https://"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/30 bg-white/10 text-white text-sm px-3 py-2 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-white">
                What do you need help with?
              </label>
              <textarea
                name="message"
                rows={3}
                className="w-full rounded-lg border border-white/30 bg-white/10 text-white text-sm px-3 py-2 placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Briefly describe your current website or what you’d like to build."
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 px-6 py-3 rounded-lg bg-white text-indigo-700 font-semibold text-sm hover:bg-indigo-50 transition"
            
            >
              Send me my free audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}



export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
    
      
      <Hero />
      <ValueProps />
      <Services_home />
      <Portfolio_home />
      <Testimonials />
      <Process />
      <ServiceAreas />
      <FinalCTA />
      <Footer />

    </div>
  );
}
