import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ThankYou from "./pages/Thank-you";

function StickyCallButton() {
  return (
    <a
      href="tel:19402081324"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        px-5 py-3
        rounded-full
        bg-indigo-600 text-white
        shadow-lg shadow-indigo-600/30
        hover:bg-indigo-700
        transition-all
        text-sm font-semibold
      "
      onClick={() => gtag('event', 'call_click', { method: 'sticky_button' })}

    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.18L8.09 9.91a16 16 0 0 0 6 6l1.67-1.33a2 2 0 0 1 2.18-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92z" />
      </svg>
      Call Now
    </a>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      <Footer />
        {/* Sticky Call Button */}
      <StickyCallButton />
    </BrowserRouter>
  );
}
