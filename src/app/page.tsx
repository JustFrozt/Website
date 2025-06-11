import React from "react";

export default function HomePage() {
  return (
    <main className="font-sans text-gray-900 bg-white">
      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-white to-gray-100">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
          Fully Automated APIs — Delivered by <span className="text-indigo-600">AI</span> in 48 Hours
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-4">
          Zeroform - Generating the future
        </p>
        <p className="max-w-2xl text-lg sm:text-xl mb-8">
          Professional-grade Flask APIs with Auth, CRUD endpoints, Tests, and Documentation. Fast, reliable, affordable—built entirely by my AI.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition"
        >
          Request Your API →
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg">
          {["Share your project requirements.", "My AI instantly plans, generates, and tests your code.", "Receive a production-ready backend within 48–72 hours."].map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-10">Watch the Demo</h2>
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
            title="API Demo Video"
            allowFullScreen
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://github.com/your-github-handle/demo-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition"
          >
            View Source Code →
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Pricing</h2>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
          {[
            { title: "Launch", icon: "🚀", desc: "Auth, CRUD, SQLite, Docs, Tests", delivery: "24–48 hrs", price: "€350" },
            { title: "Grow", icon: "🌱", desc: "Launch + Admin CLI + more endpoints", delivery: "~72 hrs", price: "€750" },
            { title: "Custom", icon: "⚙️", desc: "Complex integrations & tailored systems", delivery: "~1 week", price: "Custom Quote" }
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

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} ZeroFormAI — All Rights Reserved.
      </footer>
    </main>
  );
}

