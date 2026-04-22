import { useEffect, useRef } from 'react'

const stats = [
  { value: '3.2×', label: 'Avg lead increase' },
  { value: '14 days', label: 'Avg delivery time' },
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
    <section
      ref={ref}
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100" />

      {/* Soft glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px]" />

      <div className="relative max-w-[1100px] mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">

          {/* Tag */}
          <div
            data-a
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-sm"
          >
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            Websites for local service businesses
          </div>

          {/* Headline */}
          <h1
            data-a
            className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-6"
          >
            Get more local customers with a website that{' '}
            <span className="text-indigo-600">actually converts</span>
          </h1>

          {/* Subheadline */}
          <p
            data-a
            className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl"
          >
            We build fast, modern, SEO‑optimized websites for local service
            businesses — designed to turn visitors into{' '}
            <strong className="text-gray-800 font-semibold">real leads.</strong>
          </p>

          {/* CTAs */}
          <div data-a className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-4 text-base font-semibold rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-all"
            >
              Get a free website audit
            </a>

            <a
              href="#services"
              className="px-8 py-4 text-base font-semibold rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor" />
              </svg>
              View sample work
            </a>
          </div>

          {/* Stats */}
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
  )
}
