import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const services = [
  {
    tag: 'Affordable',
    title: 'Website Design',
    description: 'Clean, fast, mobile-first websites designed to convert visitors into booked appointments — not just look pretty. Built specifically for local service businesses.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="16" height="13" rx="2"/>
        <path d="M2 7h16"/>
        <circle cx="5" cy="5" r="0.8" fill="currentColor" stroke="none"/>
        <circle cx="8" cy="5" r="0.8" fill="currentColor" stroke="none"/>
        <path d="M5 11h10M5 14h6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tag: 'Rank #1 locally',
    title: 'Local SEO',
    description: 'Dominate Google search results in your city. We optimize your site so customers find you when they search "landscaper near me" or "cleaning service near me."',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="10" cy="10" r="8"/>
        <path d="M10 2s-4 3-4 8 4 8 4 8M10 2s4 3 4 8-4 8-4 8M2 10h16"/>
        <path d="M3 7h14M3 13h14" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    tag: 'More booked jobs',
    title: 'Lead Generation',
    description: 'Strategic contact forms, click-to-call buttons, and trust signals engineered to turn every visitor into a paying customer. We track results so you know it works.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 2.5L13 8H18L14 11.5l1.5 5.5L10 14l-5.5 3 1.5-5.5L2 8h5L10 2.5z" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">

        <div ref={ref} className={`max-w-xl mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="eyebrow mb-4">
            <span className="block w-5 h-px bg-green-600" />
            What we build
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Everything you need to win online
          </h2>
          <p className="text-base text-gray-500 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Three focused services that work together to bring you a steady stream of new customers from Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`card transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <div className="w-11 h-11 bg-green-50 text-green-600 rounded-[10px] flex items-center justify-center mb-5 border border-green-100">
                {s.icon}
              </div>
              <span className="inline-block bg-green-50 text-green-700 text-[11px] font-semibold px-3 py-1 rounded-full mb-3" style={{fontFamily:"'DM Sans',sans-serif"}}>
                {s.tag}
              </span>
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>{s.description}</p>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a href="#contact" className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-xs hover:gap-2.5 transition-all duration-150" style={{fontFamily:"'DM Sans',sans-serif"}}>
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
