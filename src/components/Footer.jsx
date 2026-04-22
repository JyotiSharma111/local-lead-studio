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
    <footer className="py-8 bg-slate-950 text-slate-300">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white">Local Lead Studio</p>
          <p className="text-xs text-slate-400">
            Conversion‑focused websites for local service businesses.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Little Elm, TX •{" "}
            <a href="tel:19402081324" className="hover:text-slate-300">
              (940) 208‑1324
            </a>
          </p>
        </div>
        <div className="flex gap-6 text-xs text-slate-400">
          <a href="#services" className="hover:text-slate-200">
            Services
          </a>
          <a href="#portfolio" className="hover:text-slate-200">
            Work
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Local Lead Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}