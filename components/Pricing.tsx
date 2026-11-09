"use client";

import { Check, ArrowRight, Code2, Cpu, ShieldCheck } from "lucide-react";

export function Pricing() {
  const tiers = [
    {
      id: "community",
      name: "Community & Self-Hosted",
      price: "$0",
      period: "Free Forever",
      desc: "100% open source developer engine. Run locally or deploy to your own Vercel / Cloudflare edge.",
      features: [
        "Full Next.js 15 App Router Code Export",
        "Autonomous Semantic Synthesis Engine",
        "Supabase PostgreSQL Migrations with RLS",
        "Zero-Cost Local Execution (₹0 / $0)",
        "MIT Open Source License",
      ],
      cta: "Clone on GitHub",
      link: "https://github.com/ShreeyashK99/launchpilot-ai",
      popular: false,
    },
    {
      id: "pro",
      name: "Developer Inference Mode",
      price: "BYO Key",
      period: "Pay-As-You-Go",
      desc: "Connect your OpenCode, OpenAI, or Claude 3.5 Sonnet API key for bespoke live frontier generation.",
      features: [
        "Frontier LLM Inference via OpenCode Gateway",
        "Claude 3.5 Sonnet & GPT-4o Support",
        "Streaming Server-Sent Events (SSE)",
        "Zod Schema Runtime Validation",
        "Dynamic Domain Classification",
        "Instant Codebase Copy & Export",
      ],
      cta: "Configure in .env.local",
      link: "#playground",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Architecture",
      price: "Custom",
      period: "Tailored Specs",
      desc: "Custom multi-tenant cluster architectures, dedicated compliance templates (HIPAA/GDPR), and bespoke agent loops.",
      features: [
        "Custom Multi-Tenant Cluster Blueprints",
        "HIPAA & GDPR Compliance Schemas",
        "LangGraph Multi-Agent Orchestration",
        "Dedicated Database Index Optimization",
        "Direct Architectural Consultation",
      ],
      cta: "Contact via Portfolio",
      link: "https://shreeyash-kudalkar-portfolio.pages.dev/",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
            <span>Flexible Deployment Options 🚀</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Transparent, <span className="text-emerald-700">Developer-First Tiers</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            From free local self-hosting to frontier cloud inference with your own API keys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.id}
              className={`p-8 rounded-3xl bg-white border flex flex-col justify-between space-y-8 soft-card relative ${
                t.popular
                  ? "border-emerald-600 shadow-xl ring-2 ring-emerald-600/20"
                  : "border-stone-200 shadow-sm"
              }`}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Recommended Mode
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-stone-900">
                    {t.name}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 font-medium leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="flex items-baseline gap-2 pt-2 border-t border-stone-100">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900 font-mono">
                    {t.price}
                  </span>
                  <span className="text-xs text-stone-500 font-mono font-medium">
                    / {t.period}
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-stone-700 font-medium">
                  {t.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={t.link}
                className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs font-mono transition text-center flex items-center justify-center gap-2 ${
                  t.popular
                    ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-700/20"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-800"
                }`}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
