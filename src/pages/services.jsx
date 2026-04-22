export default function Services() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[900px] mx-auto">
      <h1 className="font-display text-4xl font-bold mb-6">
        Website Services for Local Businesses
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        We build fast, modern, SEO‑optimized websites designed to help local 
        service businesses get more calls, more leads, and more booked jobs. 
        Choose the service that fits your goals.
      </p>

      {/* Service 1 */}
      <div className="mb-12 p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Local Business Website Design</h2>
        <p className="text-gray-600 mb-4">
          A clean, modern, high‑converting website built specifically for 
          service businesses. Includes mobile‑first design, strong CTAs, 
          trust‑building sections, and fast performance.
        </p>
        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>Custom design (no templates)</li>
          <li>Mobile‑optimized layout</li>
          <li>SEO‑ready structure</li>
          <li>Fast loading speed</li>
          <li>Conversion‑optimized CTAs</li>
        </ul>
        <a
          href="/contact"
          className="inline-block mt-2 px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Get Free Audit
        </a>
      </div>

      {/* Service 2 */}
      <div className="mb-12 p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Local SEO Boost</h2>
        <p className="text-gray-600 mb-4">
          Improve your visibility in your city and surrounding areas. 
          Perfect for businesses that want more organic leads without 
          increasing ad spend.
        </p>
        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>Local keyword optimization</li>
          <li>Service area pages</li>
          <li>Google Business Profile optimization</li>
          <li>LocalBusiness schema</li>
          <li>On‑page SEO improvements</li>
        </ul>
        <a
          href="/contact"
          className="inline-block mt-2 px-5 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Request SEO Boost
        </a>
      </div>

      {/* Service 3 */}
      <div className="mb-12 p-8 border border-slate-200 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-3">Landing Page Funnel</h2>
        <p className="text-gray-600 mb-4">
          A high‑converting landing page designed for ads, promotions, 
          or seasonal campaigns. Built to maximize conversions.
        </p>
        <ul className="list-disc ml-6 text-gray-600 mb-4">
          <li>Single‑page funnel design</li>
          <li>Strong headline + CTA</li>
          <li>Trust‑building layout</li>
          <li>Fast load time</li>
          <li>Perfect for Google Ads or Facebook Ads</li>
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
