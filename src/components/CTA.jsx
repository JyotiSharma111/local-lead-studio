import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function CTA() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={ref}
          className={`bg-green-900 rounded-[20px] px-8 md:px-16 py-16 md:py-20 text-center transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #0f4c23, #1a7a3a)',
          }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-green-200 text-[11px] font-semibold px-4 py-2 rounded-full mb-8" style={{fontFamily:"'DM Sans',sans-serif"}}>
            <span className="w-2 h-2 bg-green-400 rounded-full" style={{animation:'pulse 2s infinite'}} />
            Limited spots available this month
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Ready to get more customers?
          </h2>
          <p className="text-green-200 text-lg leading-relaxed mb-10 max-w-lg mx-auto" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Join 150+ local service businesses using our websites to consistently win new customers online. No long-term contracts.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-green-800 font-semibold text-base px-10 py-4 rounded-[10px] hover:bg-green-50 transition-all duration-150 shadow-xl hover:-translate-y-px"
            style={{fontFamily:"'DM Sans',sans-serif"}}
          >
            Get your free website quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>

          <p className="text-green-400 text-xs mt-4" style={{fontFamily:"'DM Sans',sans-serif"}}>
            Free consultation · No commitment · Reply within 24 hours
          </p>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
    </section>
  )
}
