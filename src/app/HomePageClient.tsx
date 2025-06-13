"use client";

import React from "react";
import Image from "next/image";

export default function HomePageClient() {
  // Reusable scroll handler for buttons, respecting reduced motion
  const handleScrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth";
      el.scrollIntoView({ behavior });
    }
  };

  // Smooth scroll for NAV anchor links, respectful of reduced‑motion preference
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const links = Array.from(
      document.querySelectorAll('nav a[href^="#"]')
    ) as HTMLAnchorElement[];

    const handler = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement | null;
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;

      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    };

    links.forEach((link) => link.addEventListener("click", handler));
    return () => links.forEach((link) => link.removeEventListener("click", handler));
  }, []);

  return (
    <main className="font-sans text-gray-900 bg-white scroll-smooth selection:bg-indigo-100 dark:bg-gray-900 dark:text-gray-100">
      {/* ------------------------------------------------------------------ */}
      {/* STICKY NAVIGATION                                                  */}
      {/* ------------------------------------------------------------------ */}
      <header className="sticky top-0 inset-x-0 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm z-50 dark:bg-gray-800/90 dark:supports-[backdrop-filter]:bg-gray-800/70">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#" className="text-xl font-extrabold tracking-tight text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
            ZeroForm
          </a>
          <ul className="hidden sm:flex gap-6 text-sm font-medium">
            {[
              { href: "#how", label: "How It Works" },
              { href: "#pricing", label: "Pricing" },
              { href: "#details", label: "Key Details" },
              { href: "#faq", label: "FAQ" },
              { href: "#email-contact", label: "Contact" }
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="top"
        className="pt-24 min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-white via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 scroll-mt-32 lg:scroll-mt-24"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
          Fully Automated <abbr title="Minimum Viable Product" className="no-underline cursor-help">MVPs</abbr> - Delivered by <span className="text-indigo-600">AI</span> in 48 Hours
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your personal AI back‑end engineer, on demand.
        </p>
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-4">(MVP = Minimum Viable Product, your first deployable version)</span>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 text-gray-800 dark:text-gray-200">
          Professional‑grade back‑end MVPs built exclusively in Python: APIs, data pipelines, CLI
          tools, and automations. Auth, CRUD, tests, and docs included. Your entire codebase
          generated, committed, and ready to deploy on Docker.
        </p>
        <button
          type="button"
          onClick={() => handleScrollTo("#contact")}
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-gray-200 dark:ring-offset-gray-900 transition"
        >
          Request Your MVP →
        </button>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOW IT WORKS                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section id="how" className="pt-24 py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-32 lg:scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <ol className="flex flex-col sm:flex-row justify-center items-start gap-12 max-w-5xl mx-auto">
          {[
            { title: "Submit Your Idea", desc: "Share your project requirements using the form below." },
            { title: "Review & Quote", desc: "We’ll review your request, confirm the scope, and send a fixed‑price quote." },
            { title: "Autonomous Build", desc: "Once approved, our AI plans, writes, and tests 100% of the Python code." },
            { title: "Receive Your MVP", desc: "You get a production‑ready MVP, typically within 48 to 72 hours." }
          ].map((step, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center flex-1 min-w-[200px]"
            >
              <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white text-2xl font-bold shadow-lg" aria-hidden="true">
                {index + 1}
              </div>
              <h3 className="font-semibold mb-1 text-lg">{step.title}</h3>
              <p className="text-base text-gray-700 dark:text-gray-300">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TECHNOLOGY & SCOPE                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section id="tech" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-32 lg:scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-6">Technology & Scope</h2>
        <p className="max-w-4xl mx-auto text-lg text-center text-gray-800 dark:text-gray-200">
          ZeroForm produces <strong>Python‑only codebases</strong>. Supported outputs include Flask or FastAPI services, CLI utilities, data‑processing pipelines, and automation scripts. Front‑end UIs, graphical mobile apps, and non‑Python runtimes are <strong>outside scope</strong>. If you only need the Python back‑end, we can help.
        </p>
      </section>
      
      {/* ------------------------------------------------------------------ */}
      {/* PRICING                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section id="pricing" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-32 lg:scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-4">Pricing</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-10">
          The tiers below are a guide. After you submit your project, we’ll review it and provide a formal quote confirming scope and final price.
        </p>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Standard",
              icon: "🐍",
              desc: "Core Python MVP: single back‑end service, CLI, or automation tool with auth, CRUD, tests, and docs.",
              delivery: "24–48\u00a0hours",
              price: "€79",
              early: true,
            },
            {
              title: "Advanced",
              icon: "✨",
              desc: "Feature‑rich Python MVP: multi‑entity API, admin CLI, scheduled jobs, or third‑party integrations.",
              delivery: "3–4\u00a0days",
              price: "€149",
              early: true,
            },
            {
              title: "Custom",
              icon: "⚙️",
              desc: "Complex Python solutions: cross‑service orchestration, data pipelines, or specialised workflows.",
              delivery: "7+\u00a0days",
              price: "Custom Quote",
              early: false,
            },
          ].map((tier) => (
            <article
              key={tier.title}
              className="relative border rounded-xl px-6 pt-10 pb-6 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform bg-white dark:bg-gray-900"
              role="region"
              aria-labelledby={`tier-${tier.title.toLowerCase()}`}
            >
              {/* Ribbon label */}
              {tier.early && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-purple-600 text-white text-xs font-semibold shadow-lg ring-1 ring-black/10 dark:bg-purple-700">
                  Early‑adopter-deal
                </span>
              )}

              {/* Title & Icon */}
              <h3
                className="text-xl font-bold mb-2 flex items-center"
                id={`tier-${tier.title.toLowerCase()}`}
              >
                <span className="mr-2" aria-hidden="true">
                  {tier.icon}
                </span>
                {tier.title}
              </h3>

              {/* Description */}
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                {tier.desc}
              </p>

              {/* Delivery */}
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                <strong>Delivery:</strong> {tier.delivery}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                  {tier.price}
                </span>
              </div>

              {/* Call-to-action */}
              <button
                type="button"
                onClick={() => handleScrollTo("#contact")}
                className="mt-auto inline-block px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 transition text-center"
                aria-labelledby={`tier-${tier.title.toLowerCase()}`}
              >
                {tier.title === "Custom" ? "Request a Quote →" : "Reserve a slot →"}
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* KEY PURCHASE DETAILS                                               */}
      {/* ------------------------------------------------------------------ */}
      <section id="details" className="pt-24 py-10 px-6 bg-white border-b dark:bg-gray-900 dark:border-gray-700 scroll-mt-32 lg:scroll-mt-24">
        {/* RULES */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Key Purchase Details:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-2 sm:max-w-md mx-auto">
            <li>
              <strong>Quote Confirmation:</strong> Your project’s final price and delivery tier will be confirmed in a formal quote after review.
            </li>
            <li>
              <strong>Bugs or clear faults</strong> found in your delivered code will be fixed <span className="font-medium">within 5 business days</span> of delivery, free of charge.
            </li>
            <li>
              <strong>All payments</strong> are handled via invoice (Frilans Finans). Pay only after you review and approve your project.
            </li>
            <li>
              <strong>Scope is fixed</strong> to your initial requirements. New features (e.g., adding a new endpoint) require a new quote; bug fixes (e.g., incorrect status code) are covered.
            </li>
            <li>
              <strong>Confidentiality:</strong> Your ideas and code remain private and are never reused or shared without your explicit permission.
            </li>
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SHOWCASE                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="showcase" className="pt-24 py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Live Showcase</h2>
        <div className="max-w-xl mx-auto border rounded-2xl shadow-xl p-8 flex flex-col items-center bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
            <span role="img" aria-label="rocket">
              🚀
            </span>
            Flask Notes API
          </h3>
          <p className="text-sm mb-6 text-center text-gray-700 dark:text-gray-300">
            A complete ZeroForm‑generated example: secure JWT auth, full CRUD, SQLite, tests, and
            Swagger docs, all written autonomously.
          </p>
          {/* GitHub CI badge */}
          <Image
            src="https://github.com/JustFrozt/ZeroForm-Showcase/actions/workflows/ci.yml/badge.svg"
            alt="GitHub CI badge indicating build status"
            className="mb-4"
            width={148}
            height={20}
          />
          <a
            href="https://github.com/JustFrozt/ZeroForm-Showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 transition"
          >
            View the GitHub Repository →
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PAYMENTS                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="payments" className="pt-24 py-16 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-center mb-6">Payments & Invoicing</h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-base text-center text-gray-700 dark:text-gray-300">
          All transactions are handled through <strong>Frilans Finans</strong>, Sweden’s leading umbrella company for freelancers. Once we agree on scope and price you’ll receive an official Frilans Finans invoice and can pay via card, Swish, or bank transfer, whichever suits you best.
        </p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section id="faq" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How is the process so fast?",
              a: "It’s fully autonomous, instantly generating and validating Python code."
            },
            {
              q: "Can I review the code?",
              a: "Absolutely, full transparency, documented, tested, and deployment‑ready."
            },
            {
              q: "Do you build mobile apps?",
              a: "Soon. For now, we focus on Python back‑ends. If your mobile app needs one, we can help."
            },
            {
              q: "Do I pay upfront?",
              a: "No, pay only after you have reviewed and approved your project."
            }
          ].map(({ q, a }, i) => (
            <details key={i} className="p-4 border rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <summary className="font-medium cursor-pointer select-none text-lg">
                {q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* EMAIL CONTACT (NEW SECTION)                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="email-contact" className="pt-24 py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-4">Have a Quick Question?</h2>
        <p className="text-center mb-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
          If you prefer to send a direct email for general inquiries, feel free to reach out. For official project submissions, please use the form below.
        </p>
        <div className="text-center">
          <a
            href="mailto:teamzeroform@gmail.com"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transition"
          >
            Email Us Directly →
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTACT (GOOGLE FORM)                                              */}
      {/* ------------------------------------------------------------------ */}
      <section id="contact" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Start Your Project</h2>
        <p className="text-center mb-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
          Ready to start? Fill out the form with your project details. We’ll personally review your submission, confirm the project scope and pricing tier, and get back to you with a formal quote within 24 hours.
        </p>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfZ3KOzbgaoGcHrg_EkaXruMr6c5QArRFlyf4jnlKBuRQca3g/viewform?embedded=true&hl=en"
            title="Project Intake Form"
            loading="lazy"
            className="w-full min-h-[900px] border rounded-xl bg-white shadow-lg dark:bg-gray-800"
            aria-label="Project Intake Form"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
        <p>ZeroForm – Generating the future</p>
        <p className="mt-1">© {new Date().getFullYear()} ZeroFormAI. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
