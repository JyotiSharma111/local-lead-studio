export default function Portfolio() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[900px] mx-auto">
      <h1 className="font-display text-4xl font-bold mb-6">
        Portfolio & Case Studies
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        A look at the websites we’ve built for local service businesses. 
        Each project is designed to increase calls, leads, and booked jobs 
        through clean design, strong messaging, and SEO‑optimized structure.
      </p>

      {/* Project 1 */}
      <div className="mb-12 p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Landscaping Company Website</h2>
        <p className="text-gray-600 mb-4">
          A modern, high‑converting website for a landscaping business in Texas. 
          We improved their messaging, added strong CTAs, and optimized the site 
          for local SEO.
        </p>

        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>+42% increase in quote requests</li>
          <li>Improved mobile experience</li>
          <li>Added service area pages</li>
          <li>Integrated sticky call button</li>
        </ul>

        <a
          href="/contact"
          className="inline-block mt-2 px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Get a Website Like This
        </a>
      </div>

      {/* Project 2 */}
      <div className="mb-12 p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Cleaning Company Website</h2>
        <p className="text-gray-600 mb-4">
          A clean, trustworthy website for a residential cleaning company. 
          Focused on clarity, trust, and easy booking.
        </p>

        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>+33% increase in calls</li>
          <li>Added testimonials and trust badges</li>
          <li>Improved page speed</li>
          <li>SEO‑optimized service descriptions</li>
        </ul>

        <a
          href="/contact"
          className="inline-block mt-2 px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Start Your Project
        </a>
      </div>

      {/* Project 3 */}
      <div className="mb-12 p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Contractor Landing Page Funnel</h2>
        <p className="text-gray-600 mb-4">
          A high‑converting landing page built for paid ads. 
          Designed to maximize conversions with strong CTAs and trust elements.
        </p>

        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>+58% increase in lead form submissions</li>
          <li>Fast loading (under 1.5s)</li>
          <li>Clear value proposition</li>
          <li>Optimized for Google Ads</li>
        </ul>

        <a
          href="/contact"
          className="inline-block mt-2 px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Build My Funnel
        </a>
      </div>
    </section>
  );
}
