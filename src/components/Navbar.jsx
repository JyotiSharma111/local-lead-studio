import { useState, useEffect } from 'react'

const LogoMark = () => (
  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L14 5v6L8 14.5 2 11V5L8 1.5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="2" fill="white"/>
    </svg>
  </div>
)

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Who We Help', href: '#who-we-help' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : ''}`}>
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <LogoMark />
          <span className="font-display font-bold text-[15px] text-gray-900">
            Local Lead <span className="text-green-600">Studio</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-gray-500 hover:text-green-600 transition-colors no-underline" style={{fontFamily:"'DM Sans',sans-serif"}}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex btn-primary">
          Get Free Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors border-0 bg-transparent cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3 shadow-lg">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors py-1 no-underline" style={{fontFamily:"'DM Sans',sans-serif"}}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-1 justify-center">
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
