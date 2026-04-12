const LogoMark = () => (
  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5L14 5v6L8 14.5 2 11V5L8 1.5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="8" cy="8" r="2" fill="white"/>
    </svg>
  </div>
)

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-300">
      <div className="max-w-[1100px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoMark />
              <span className="font-display font-bold text-[15px] text-white">
                Local Lead <span className="text-green-400">Studio</span>
              </span>
            </div>
            <p className="text-[13px] text-green-400 leading-relaxed" style={{fontFamily:"'DM Sans',sans-serif"}}>
              High-converting websites for landscapers and cleaning services. We turn visitors into real customers.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { heading: 'Services', links: ['Website Design', 'Local SEO', 'Lead Generation'] },
              { heading: 'Industries', links: ['Landscapers', 'Cleaning Services', 'Home Services'] },
              { heading: 'Company', links: ['About Us', 'Our Process', 'Contact'] },
            ].map(col => (
              <div key={col.heading}>
                <h5 className="font-display font-bold text-white text-[13px] mb-4">{col.heading}</h5>
                <ul className="space-y-2.5">
                  {col.links.map(l => (
                    <li key={l}>
                      <a href="#" className="text-[13px] text-green-400 hover:text-white transition-colors no-underline" style={{fontFamily:"'DM Sans',sans-serif"}}>{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-green-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-green-500" style={{fontFamily:"'DM Sans',sans-serif"}}>
            © {new Date().getFullYear()} Local Lead Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" className="text-[12px] text-green-500 hover:text-green-300 transition-colors no-underline" style={{fontFamily:"'DM Sans',sans-serif"}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
