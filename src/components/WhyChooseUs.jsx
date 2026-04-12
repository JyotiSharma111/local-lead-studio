import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const reasons = [
  {
    title: 'Simple, no-fluff websites',
    desc: "No bloated templates. Every element earns its place — if it doesn't convert visitors, it doesn't go on the page.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 1L3 4.5v5c0 3.9 2.7 7.5 6 8.5 3.3-1 6-4.6 6-8.5v-5L9 1z" strokeLinejoin="round"/><path d="M6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Built for leads, not just looks',
    desc: "Pretty websites don't pay bills. We engineer your site with conversion in mind: clear calls to action, trust signals, frictionless contact paths.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 9l3.5 3.5L16 3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Fast turnaround',
    desc: 'Most agencies take months. We deliver your complete, launch-ready website in 14 days. You start getting leads faster.',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="7"/><path d="M9 5v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Focus on local businesses',
    desc: "We're not a full-service agency juggling Fortune 500 clients. We only work with local service businesses — so we get your world.",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="7"/><path d="M9 5v1M9 12v1M5 9h1M12 9h1" strokeLinecap="round"/><circle cx="9" cy="9" r="2.5"/></svg>,
  },
]

const steps = [
  { num: '01', title: 'Discovery call', desc: 'We learn about your business, goals, and target area.' },
  { num: '02', title: 'Design & build', desc: 'We create your custom site in 14 days, including SEO.' },
  { num: '03', title: 'Launch & optimize', desc: 'Go live and start collecting leads. We monitor and improve.' },
]

export default function WhyChooseUs() {
  const [ref, visible] = useIntersectionObserver()
  const [ref2, visible2] = useIntersectionObserver()

  return (
    <section id="why-us" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">

        <div ref={ref} className={`max-w-xl mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="eyebrow mb-4">
            <span className="block w-5 h-px bg-green-600" />
            Why Local Lead Studio
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            We care about results, not just looks
          </h2>
          <p className="text-base text-gray-500 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Not flashy awards or design portfolios. We care about one thing: how many new customers your website brings you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`bg-white rounded-[14px] border border-gray-200 p-6 flex gap-4 hover:border-green-600/40 hover:shadow-md transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-[10px] flex items-center justify-center flex-shrink-0 border border-green-100">
                {r.icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-[15px] mb-1.5">{r.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div
          ref={ref2}
          className={`bg-gray-50 rounded-[14px] border border-gray-200 p-10 transition-all duration-700 ${visible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h3 className="font-display font-bold text-gray-900 text-xl text-center mb-10">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-5 left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] h-px bg-gray-300" />
            {steps.map((s, i) => (
              <div key={s.num} className="text-center" style={{ transitionDelay: `${i * 100 + 200}ms` }}>
                <div className="w-11 h-11 bg-green-600 text-white rounded-[10px] flex items-center justify-center font-display font-bold text-sm mx-auto mb-4 shadow-md shadow-green-600/20">
                  {s.num}
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-1.5">{s.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
