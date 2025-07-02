"use client";

import React from "react";
import Image from "next/image";
import Script from 'next/script';
import { TerminalSquare, Sparkles, Settings, CheckCircle2 } from 'lucide-react';

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

  const exampleCode = `
<span class="text-gray-500"># 1. Describe your app requirements</span>
<span class="text-gray-500"># 2. Our AI generates the full codebase</span>
<span class="text-gray-500"># 3. We review, polish, and deliver</span>

<span class="text-pink-400">from</span> fastapi <span class="text-pink-400">import</span> FastAPI
<span class="text-pink-400">from</span> pydantic <span class="text-pink-400">import</span> BaseModel

<span class="text-gray-500"># Fully typed, documented, and ready for production</span>
app = <span class="text-cyan-400">FastAPI</span>(
    title=<span class="text-yellow-300">"ZeroForm Showcase API"</span>,
    version=<span class="text-yellow-300">"1.0.0"</span>,
)

<span class="text-blue-400">class</span> <span class="text-green-400">Note</span>(BaseModel):
    id: int
    content: str

@app.post(<span class="text-yellow-300">"/notes/"</span>, status_code=201, tags=[<span class="text-yellow-300">"Notes"</span>])
<span class="text-blue-400">async def</span> <span class="text-purple-400">create_note</span>(note: Note):
    <span class="text-yellow-300">"""
    Create a new note.
    - Full CRUD, auth, and tests are auto-generated.
    - You get a repo with 100% test coverage.
    """</span>
    <span class="text-gray-500"># ... database logic here ...</span>
    <span class="text-pink-400">return</span> {<span class="text-yellow-300">"status"</span>: <span class="text-yellow-300">"success"</span>, <span class="text-yellow-300">"note_id"</span>: note.id}
  `.trim();

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
        className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex flex-col items-center px-6 text-center bg-gradient-to-br from-white via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 scroll-mt-32 lg:scroll-mt-24"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Production-Grade Python Backends.
          <br />
          <span className="text-indigo-600">Delivered in Days.</span>
        </h1>

        <p className="max-w-3xl text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6">
          Your on-demand engineering team, supercharged by AI. We build APIs, data pipelines, CLI tools, and more.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-lg text-gray-800 dark:text-gray-200">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Fully Tested
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Secure & Documented
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Ready to Deploy
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleScrollTo("#contact")}
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-gray-200 dark:ring-offset-gray-900 transition"
        >
          Request Your Product →
        </button>

        {/* --- Visual Element: Code Window --- */}
        <div className="relative mt-16 sm:mt-20 w-full max-w-4xl">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl opacity-20 blur-2xl"></div>
          <div className="relative w-full bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10">
            <div className="h-10 px-4 flex items-center gap-2 bg-gray-700/50 dark:bg-gray-800/50 rounded-t-xl border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="p-5 text-left overflow-x-auto">
              <code
                className="font-mono text-sm text-gray-200"
                dangerouslySetInnerHTML={{ __html: exampleCode }}
              />
            </pre>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOW IT WORKS (DARK)                                                */}
      {/* ------------------------------------------------------------------ */}
      <section id="how" className="pt-24 py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-32 lg:scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Tell Us Your MVP Idea",
              desc: "Tell us what you need via the form below."
            },
            {
              title: "Approve Fixed Price",
              desc: "We’ll review your request, confirm the scope, and send a fixed‑price quote based on complexity."
            },
            {
              title: "AI-Powered Generation",
              desc: "Our AI pipeline autonomously writes, documents, and tests the entire Python codebase based on the approved plan."
            },
            {
              title: "Human Review & Polish",
              desc: "Our engineers then review and optimize the AI-generated code, ensuring it meets production-grade standards."
            },
            {
              title: "Receive Your MVP",
              desc: "You get a production‑ready MVP, typically within 2-5 business days."
            }
          ].map((step, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center"
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
      {/* SHOWCASE (LIGHT)                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section id="showcase" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Live Showcase</h2>
        <div className="max-w-xl mx-auto border rounded-2xl shadow-xl p-8 flex flex-col items-center bg-white dark:bg-gray-900">
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
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 transition"
          >
            View the GitHub Repository →
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TECHNOLOGY & SCOPE (LIGHT)                                         */}
      {/* ------------------------------------------------------------------ */}
      <section id="tech" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-32 lg:scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-6">Technology & Scope</h2>
        <p className="max-w-4xl mx-auto text-lg text-center text-gray-800 dark:text-gray-200">
          ZeroForm produces <strong>Python‑only codebases</strong>. Supported outputs include Flask or FastAPI services, CLI utilities, data‑processing pipelines, and automation scripts. Front‑end UIs, graphical mobile apps, and non‑Python runtimes are <strong>outside scope</strong>. If you only need the Python back‑end, we can help.
        </p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PRICING (DARK)                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section id="pricing" className="pt-24 py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-32 lg:scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-4">Pricing</h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-10">
          The tiers below are a guide. After you submit your project, we’ll review it and provide a formal quote confirming scope and final price.
        </p>
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Standard",
              icon: <TerminalSquare className="w-5 h-5 mr-2 text-purple-600" aria-hidden="true" />,
              desc: "Core Python MVP: single back-end service, CLI, or automation tool. Includes CRUD, tests & full docs.",
              delivery: "2-5\u00a0workdays",
              price: "€199",
              typicalCost: "€900+",
              early: true,
              offer: "Offer valid for the first 10 projects.",
            },
            {
              title: "Advanced",
              icon: <Sparkles className="w-5 h-5 mr-2 text-purple-600" aria-hidden="true" />,
              desc: "Flask API, admin CLI, scheduled jobs, or third-party integrations, fully documented.",
              delivery: "5-10\u00a0workdays",
              price: "€499",
              typicalCost: "€3k+",
              early: true,
              offer: "Offer valid for the first 10 projects.",
            },
            {
              title: "Custom",
              icon: <Settings className="w-5 h-5 mr-2 text-purple-600" aria-hidden="true" />,
              desc: "Complex Python solutions: cross-service orchestration, complex data pipelines, or specialised workflows.",
              delivery: "4+\u00a0weeks",
              price: "€4\u00a0000–€15\u00a0000 (30% deposit)",
              typicalCost: "€30k+",
              early: false,
            },
          ].map((tier) => (
            <article
              key={tier.title}
              className="relative border rounded-xl px-6 pt-10 pb-6 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform bg-gray-50 dark:bg-gray-800"
              role="region"
              aria-labelledby={`tier-${tier.title.toLowerCase()}`}
            >
              {tier.early && (
                <span className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-md bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                  Launch window pricing
                </span>
              )}
              <h3
                className="text-xl font-semibold mb-2 flex items-center"
                id={`tier-${tier.title.toLowerCase()}`}
              >
                {tier.icon}
                {tier.title}
              </h3>
              <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
                {tier.desc}
              </p>
              {tier.offer && (
                <p className="text-xs italic mb-3 text-indigo-700 dark:text-indigo-300">
                  {tier.offer}
                </p>
              )}
              <div className="text-sm mb-4 text-gray-700 dark:text-gray-300">
                <p><strong>Delivery:</strong> {tier.delivery}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  100% refund if delivery window is missed.
                </p>
              </div>
              <div className="mb-6 flex-grow flex flex-col justify-end">
                <div className={`text-xs text-gray-400 ${!tier.typicalCost && 'invisible'}`}>
                  <span>Typical cost: </span>
                  <span className="line-through">{tier.typicalCost || '€0'}</span>
                </div>
                <span className={`font-semibold leading-tight text-gray-900 dark:text-gray-100 ${tier.title === 'Custom' ? 'text-2xl' : 'text-3xl'
                  }`}>
                  {tier.price}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleScrollTo("#contact")}
                className="mt-auto inline-block px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ring-offset-2 ring-offset-gray-50 dark:ring-offset-gray-800 transition text-center"
              >
                {tier.title === "Custom" ? "Request a Quote →" : "Reserve a slot →"}
              </button>
            </article>
          ))}
        </div>
        <footer className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8 max-w-lg mx-auto">
          <p>
            Based on average EU freelance developer rates of €55–95/hr for a comparable project scope.
          </p>
        </footer>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* KEY PURCHASE DETAILS (DARK)                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="details" className="pt-24 py-10 px-6 bg-white border-b dark:bg-gray-900 dark:border-gray-700 scroll-mt-32 lg:scroll-mt-24">
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
      {/* PAYMENTS (DARK)                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section id="payments" className="pt-24 py-16 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-center mb-6">Payments & Invoicing</h2>
        <p className="max-w-4xl mx-auto text-sm sm:text-base text-center text-gray-700 dark:text-gray-300">
          All transactions are handled through <strong>Frilans Finans</strong>, Sweden’s leading umbrella company for freelancers. Once we agree on scope and price you’ll receive an official Frilans Finans invoice and can pay via card, Swish, or bank transfer, whichever suits you best.
        </p>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ (LIGHT)                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="faq" className="pt-24 py-20 px-6 bg-gray-50 dark:bg-gray-800 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How is the process so fast?",
              a: "It’s 80-90% autonomous, instantly generating and validating Python code, we do the rest manually."
            },
            {
              q: "Can I review the code?",
              a: "Absolutely, full transparency, documented, tested, and deployment‑ready."
            },
            {
              q: "Do you build mobile apps?",
              a: "Soon. For now, we focus on Python back‑ends and simple MVPs. If your mobile app needs one, we can help."
            },
            {
              q: "Do I pay upfront?",
              a: "No, pay only after you have reviewed and approved your project for Standard and Advanced MVPs."
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
      {/* EMAIL CONTACT (DARK)                                               */}
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
      {/* CONTACT (TALLY FORM) (DARK)                                        */}
      {/* ------------------------------------------------------------------ */}
      <section id="contact" className="pt-24 py-20 px-6 bg-white dark:bg-gray-900 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center mb-10">Start Your Project</h2>
        <p className="text-center mb-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
          Ready to start? Fill out the form with your project details. We’ll personally review your submission, confirm the project scope and pricing tier, and get back to you with a formal quote within 24 hours.
        </p>

        <div className="max-w-3xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/r/mZAJko"
            width="100%"
            height={700}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="ZeroForm – MVP Request"
          ></iframe>
          <Script
            id="tally-widget"
            src="https://tally.so/widgets/embed.js"
            strategy="lazyOnload"
          />
        </div>

      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
        <p>ZeroForm – Generating the future</p>
        <p className="mt-1">© {new Date().getFullYear()} ZeroFormAI. All Rights Reserved.</p>

        <div className="mt-4">
          <a href="/legal/terms.html" className="hover:text-indigo-600 transition-colors">
            Terms of Service
          </a>
        </div>
      </footer>
    </main>
  );
}
