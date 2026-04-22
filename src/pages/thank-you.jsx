import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        form: "contact_page",
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="text-gray-600 mb-6">
          Your message has been sent. We’ll get back to you shortly.
        </p>
      </div>
    </section>
  );
}
