import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Check = () => (
  <span className="flex-shrink-0 w-[18px] h-[18px] bg-green-50 rounded-full flex items-center justify-center">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 5l2 2 4-4" stroke="#1a7a3a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
)

const audiences = [
  {
    emoji: '🌿',
    title: 'Landscapers',
    desc: 'Lawn care, tree services, hardscaping, irrigation, and full-service landscape companies.',
    items: ['Lawn maintenance', 'Landscaping design', 'Tree services', 'Irrigation & sprinklers'],
  },
  {
    emoji: '✨',
    title: 'Cleaning Companies',
    desc: 'Residential, commercial, deep cleaning, and specialty cleaning businesses.',
    items: ['House cleaning', 'Commercial cleaning', 'Move-in / move-out', 'Pressure washing'],
  },
  {
    emoji: '🏠',
    title: 'Home Service Providers',
    desc: 'Any local business that serves homeowners and needs a consistent flow of new jobs.',
    items: ['Plumbing & HVAC', 'Painting & drywall', 'Gutters & roofing', 'Pest control'],
  },
]

export default function TargetAudience() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="who-we-help" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">

        <div ref={ref} className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="eyebrow justify-center mb-4">
            <span className="block w-5 h-px bg-green-600" />
            Who we help
            <span className="block w-5 h-px bg-green-600" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Built for local service businesses
          </h2>
          <p className="text-base text-gray-500 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>
            We don't build websites for everyone. We're specialists — and that means your site is built by people who know your industry inside and out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((a, i) => (
            <div
              key={a.title}
              className={`bg-white rounded-[14px] border border-gray-200 p-7 hover:border-green-600/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 130 + 200}ms`, transition: 'opacity 0.7s ease, transform 0.7s ease, box-shadow 0.2s, border-color 0.2s' }}
            >
              <span className="text-3xl mb-5 block">{a.emoji}</span>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-2">{a.title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed mb-5" style={{fontFamily:"'DM Sans',sans-serif"}}>{a.desc}</p>
              <ul className="space-y-2.5">
                {a.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-[13px] text-gray-600" style={{fontFamily:"'DM Sans',sans-serif"}}>
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-10 bg-green-900 rounded-[14px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '560ms' }}>
          <div>
            <p className="font-display text-2xl font-bold text-white mb-1">Not seeing your business?</p>
            <p className="text-green-300 text-[14px]" style={{fontFamily:"'DM Sans',sans-serif"}}>We work with any local service business. Reach out and let's talk.</p>
          </div>
          <a href="#contact" className="btn-primary flex-shrink-0 bg-green-500 hover:bg-green-400 shadow-none px-7 py-3.5">
            Let's talk
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

      </div>
    </section>
  )
}
