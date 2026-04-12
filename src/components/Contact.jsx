import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const contactDetails = [
 /* {
    label: "Phone",
    value: "(555) 123-4567",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path
          d="M2.5 3.5A1 1 0 013.5 2.5h1.8a.7.7 0 01.6.4l1 2a.7.7 0 01-.2.8L5.7 6.7a9 9 0 003.6 3.6l1-1a.7.7 0 01.8-.2l2 1a.7.7 0 01.4.6v1.8A1 1 0 0112.5 13.5a10 10 0 01-10-10z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <rect x="2" y="4" width="12" height="9" rx="1" />
        <path d="M2 5.5l6 4 6-4" strokeLinecap="round" />
      </svg>
    ),
  },*/
  {
    label: "Response time",
    value: "Within 24 business hours",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <circle cx="8" cy="8" r="6" />
        <path d="M8 5v3l2 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [ref, visible] = useIntersectionObserver();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mbdqrkba", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", business: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-[10px] border text-gray-900 text-[14px] outline-none transition-all bg-gray-50 focus:bg-white ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {/* Left */}
          <div className="pt-2">
            <div className="eyebrow mb-4">
              <span className="block w-5 h-px bg-green-600" />
              Get in touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              Let's build your lead machine
            </h2>
            <p
              className="text-base text-gray-500 leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans',sans-serif" }}
            >
              Fill out the form and we'll get back to you within one business
              day with a free consultation and honest advice.
            </p>
            <div className="space-y-5">
              {contactDetails.map((d) => (
                <div key={d.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-[10px] flex items-center justify-center border border-green-100 flex-shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {d.label}
                    </p>
                    <p
                      className="text-gray-800 font-medium text-[14px]"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-[14px] border border-gray-200 p-8 shadow-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M6 14l5.5 5.5L22 9"
                      stroke="#1a7a3a"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                  Message sent!
                </h3>
                <p
                  className="text-gray-500 text-[14px] mb-6"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  We'll be in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-green-600 font-semibold text-sm hover:underline"
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      Your name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputCls("name")}
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    />
                    {errors.name && (
                      <p
                        className="text-red-500 text-[11px] mt-1"
                        style={{ fontFamily: "'DM Sans',sans-serif" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@business.com"
                      className={inputCls("email")}
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    />
                    {errors.email && (
                      <p
                        className="text-red-500 text-[11px] mt-1"
                        style={{ fontFamily: "'DM Sans',sans-serif" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    Business type
                  </label>
                  <select
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    className={inputCls("business")}
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    <option value="">Select your business type</option>
                    <option>Landscaping / Lawn care</option>
                    <option>Cleaning service</option>
                    <option>Tree service</option>
                    <option>Pressure washing</option>
                    <option>Other home service</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label
                    className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your business and what you're hoping to achieve..."
                    className={`${inputCls("message")} resize-none`}
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  />
                  {errors.message && (
                    <p
                      className="text-red-500 text-[11px] mt-1"
                      style={{ fontFamily: "'DM Sans',sans-serif" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full py-4 text-base justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          opacity="0.3"
                        />
                        <path
                          d="M12 2a10 10 0 0110 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>Get my free quote →</>
                  )}
                </button>
                {status === "error" && (
                  <p
                    className="text-red-500 text-[12px] text-center mt-2"
                    style={{ fontFamily: "'DM Sans',sans-serif" }}
                  >
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <p
                  className="text-center text-[11px] text-gray-400 mt-3"
                  style={{ fontFamily: "'DM Sans',sans-serif" }}
                >
                  No spam. No commitment. We'll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
