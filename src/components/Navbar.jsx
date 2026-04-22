import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Local Lead Studio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/portfolio" className="hover:text-indigo-600">Portfolio</Link>
          <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col p-4 text-gray-700 font-medium">
            <Link to="/services" className="py-2" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/portfolio" className="py-2" onClick={() => setOpen(false)}>Portfolio</Link>
            <Link to="/blog" className="py-2" onClick={() => setOpen(false)}>Blog</Link>
            <Link to="/contact" className="py-2" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
