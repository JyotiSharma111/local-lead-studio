import { useEffect, useRef } from 'react'

const stats = [
  /* { value: '150+', label: 'Sites launched' },*/
  { value: '3.2×', label: 'Avg lead increase' },
  { value: '14 days', label: 'Avg delivery' },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('[data-a]')
    els?.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, i * 130)
    })
  }, [])

  return (
    <section ref={ref} className="min-h-screen flex items-center bg-gray-50 pt-16" style={{
      backgroundImage: 'linear-gradient(to right, rgba(26,122,58,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,122,58,0.05) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
    }}>
      <div className="max-w-[1100px] mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">

          <div data-a className="inline-flex items-center gap-2 bg-white border border-gray-200 text-green-700 text-xs font-semibold px-4 py-2 rounded-full mb-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
            <span className="w-2 h-2 bg-green-500 rounded-full" style={{animation:'pulse 2s infinite'}} />
            Web design for local service businesses
          </div>

          <h1 data-a className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6 break-words">
            Get more local customers with a website that{' '}
            <em className="not-italic text-green-600">actually works</em>
          </h1>

          <p data-a className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl" style={{fontFamily:"'DM Sans',sans-serif"}}>
            We build high-converting websites for landscapers and cleaning services that turn visitors into <strong className="text-gray-700 font-semibold">real leads.</strong>
          </p>

          <div data-a className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              Get free website quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#services" className="btn-secondary text-base px-8 py-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/></svg>
              View sample work
            </a>
          </div>

          <div data-a className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-8 border-t border-gray-200">
            {stats.map(s => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-gray-900">{s.value}</p>
                <p className="text-sm text-gray-500 mt-0.5" style={{fontFamily:"'DM Sans',sans-serif"}}>{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
    </section>
  )
}
