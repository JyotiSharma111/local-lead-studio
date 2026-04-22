export default function Blog() {
  return (
    <section className="pt-24 pb-20 px-6 max-w-[900px] mx-auto">
      <h1 className="font-display text-4xl font-bold mb-4">
        Local Business Growth Tips
      </h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        Practical, SEO‑optimized guides to help local service businesses get more
        leads, more calls, and more booked jobs.
      </p>

      <div className="grid gap-8">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition"
          >
            <h2 className="text-xl font-semibold text-gray-900">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

const posts = [
  {
    slug: "how-to-get-more-local-leads",
    title: "How to Get More Local Leads (Without Spending More on Ads)",
    excerpt: "The fastest ways to increase calls and quote requests for your service business..."
  },
  {
    slug: "best-website-tips-for-cleaning-companies",
    title: "Best Website Tips for Cleaning Companies",
    excerpt: "If you're a cleaning business, your website must do these 5 things..."
  },
  {
    slug: "local-seo-tips-for-service-businesses",
    title: "Local SEO Tips for Service Businesses",
    excerpt: "Ranking in your city is easier than you think. Here's how..."
  },
  {
    slug: "why-your-website-isnt-converting",
    title: "Why Your Website Isn’t Converting (And How to Fix It)",
    excerpt: "Most local websites fail for the same 3 reasons..."
  },
  {
    slug: "landing-page-vs-website",
    title: "Landing Page vs Website: Which One Do You Need?",
    excerpt: "The answer depends on your goals. Here's the breakdown..."
  }
];
