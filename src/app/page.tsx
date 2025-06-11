import React from "react";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-white to-gray-100">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
          Fully Automated MVPs — Delivered by <span className="text-indigo-600">AI</span> in 48 Hours
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-4">
          Zeroform - Generating the future
        </p>
        <p className="max-w-2xl text-lg sm:text-xl mb-8">
          Professional‑grade back‑end MVPs built exclusively in Python — APIs, data pipelines, CLI tools, and automations. Auth, CRUD, tests, and docs included. Your entire codebase generated, committed, and ready to deploy.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          Request Your MVP →
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <ol className="flex flex-col sm:flex-row justify-center items-center gap-12 max-w-4xl mx-auto">
          {[
            "Share your project requirements.",
            "My AI plans, writes, and tests 100% of the Python code in a fresh repo.",
            "Receive a production‑ready MVP within 48–72 hours."
          ].map((step, index) => (
            <li key={index} className="flex flex-col items-center text-center flex-1 min-w-[200px]">
              <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold shadow-lg">
                {index + 1}
              </div>
              <p className="text-base sm:text-lg">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TECHNOLOGY & SCOPE */}
      <section id="tech" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-6">Technology & Scope</h2>
        <p className="max-w-4xl mx-auto text-lg text-center">
          Zeroform currently produces <strong>Python‑only codebases</strong>. Supported outputs include Flask/FastAPI services, CLI utilities, data‑processing pipelines, and automation scripts. Front‑end UIs, graphical mobile apps, or projects requiring non‑Python runtimes are <strong>not yet supported</strong> unless you only need the Python back‑end portion.
        </p>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Watch the Demo</h2>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="Demo Video"
            allowFullScreen
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://github.com/JustFrozt/ZeroForm-Showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition"
          >
            View ZeroForm Showcase →
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Pricing</h2>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Standard",
              icon: "🐍",
              desc: "Core Python MVP: single back‑end service, CLI, or automation tool with auth, CRUD, tests, and docs.",
              delivery: "24–48 hrs",
              price: "€350"
            },
            {
              title: "Advanced",
              icon: "✨",
              desc: "Feature‑rich Python MVP: multi‑entity API, admin CLI, scheduled jobs, or third‑party integrations.",
              delivery: "~72 hrs",
              price: "€750"
            },
            {
              title: "Custom",
              icon: "⚙️",
              desc: "Complex Python solutions: cross‑service orchestration, data pipelines, or specialised workflows.",
              delivery: "~1 week",
              price: "Custom Quote"
            }
          ].map((tier) => (
            <div key={tier.title} className="border rounded-xl p-6 flex flex-col shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">{tier.icon}</span>{tier.title}
              </h3>
              <p className="flex-grow text-sm mb-4">{tier.desc}</p>
              <p className="text-sm mb-2"><strong>Delivery:</strong> {tier.delivery}</p>
              <p className="text-2xl font-semibold mb-6">{tier.price}</p>
              <a
                href="#contact"
                className="mt-auto inline-block px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-center"
              >
                Request {tier.title}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}

      {/* PAYMENTS */}
      <section id="payments" className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">Payments &amp; Invoicing</h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-base text-center text-gray-700">
          All transactions are handled through <strong>Frilans&nbsp;Finans</strong>, Sweden&#39;s leading umbrella company for freelancers. After we agree on your project scope and price you&#39;ll receive an official Frilans&nbsp;Finans invoice and can pay via card, Swish, or bank transfer, whichever suits you best. You get a standard business receipt, and I stay focused on delivering quality code.
        </p>
      </section>

      <section id="faq" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "How is the process so fast?", a: "It's fully autonomous, instantly generating and validating Python code." },
            { q: "Can I review the code?", a: "Absolutely—full transparency, documented, tested, and deployment‑ready." },
            { q: "Do you build mobile apps?", a: "Not yet. Zeroform focuses on Python repositories. If your mobile app needs a Python back‑end, that's within scope." },
            { q: "Do I pay upfront?", a: "No—pay only after you've reviewed and approved your project." }
          ].map(({ q, a }, i) => (
            <details key={i} className="p-4 border rounded-xl">
              <summary className="font-medium cursor-pointer select-none">{q}</summary>
              <p className="mt-2 text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Start Your Project</h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-center mb-8">Fill out the form below and I'll respond within 24 hours.</p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc2EP837Wvzq33mHh_CdI0pEsk9c8gBvJMNUbJZY97Xr5Gh4A/viewform?embedded=true"
            height="900"
            className="w-full border rounded-xl bg-white shadow-lg"
            loading="lazy"
            title="Intake Form"
          />
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} ZeroFormAI — All Rights Reserved.
      </footer>
    </main>
  );
}

