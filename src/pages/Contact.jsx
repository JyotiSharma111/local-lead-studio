export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-[900px] mx-auto">
        
        <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">
          Get Your Free Website Audit
        </h1>

        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          Fill out the form below and we’ll send you a clear breakdown of what’s 
          working, what’s not, and how many leads you may be leaving on the table.
        </p>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
          <form
            action="https://formspree.io/f/mbdqrkba"
            method="POST"
            className="grid gap-6"
          >
            <input type="hidden" name="_redirect" value="https://localleadstudio.com/thank-you" />
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input name="name" required className="input" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Business Name</label>
              <input name="business" className="input" placeholder="Your business" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Website URL</label>
              <input name="website" className="input" placeholder="https://" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input name="email" type="email" required className="input" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">How can we help?</label>
              <textarea name="message" rows="4" className="input" placeholder="Tell us about your project..." />
            </div>

            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Send My Free Audit
            </button>
          </form>
        </div>

        <div className="mt-10 text-gray-600 text-sm">
          Prefer to talk? Call us at{" "}
          <a href="tel:19402081324" className="text-indigo-600 font-semibold">
            (940) 208‑1324
          </a>
        </div>

      </div>
    </section>
  );
}
