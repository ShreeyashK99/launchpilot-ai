"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What tech stack does LaunchPilot AI output? 💻",
      a: "LaunchPilot AI outputs modern Next.js 15 App Router code with TypeScript, Tailwind CSS, Prisma / Supabase PostgreSQL schemas, and Stripe billing hooks.",
    },
    {
      q: "Do I own 100% of the generated source code? 🔒",
      a: "Yes, 100%! All generated source code, database schemas, and API handlers belong entirely to you with zero royalty or licensing lock-in.",
    },
    {
      q: "How does LaunchPilot AI prevent LLM hallucinations? 🤖",
      a: "We enforce strict AST syntax verification, Zod schema validation, and retrieval-augmented context bounds prior to emitting code files.",
    },
    {
      q: "Can I deploy the generated code to Cloudflare Pages or Vercel? 🚀",
      a: "Absolutely! The output includes pre-configured Cloudflare Pages wrangler.toml, GitHub Actions CI/CD workflows, and Vercel static export settings.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Frequently Asked <span className="text-emerald-700">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#fcfbf9] border border-stone-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-stone-900">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-stone-700 leading-relaxed font-medium border-t border-stone-200/80">
                    <p className="mt-4">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
