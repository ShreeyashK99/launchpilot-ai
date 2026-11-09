"use client";

import { useState } from "react";
import { Check, Zap, ArrowRight } from "lucide-react";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      id: "starter",
      name: "Solopreneur Founder",
      monthlyPrice: 29,
      annualPrice: 23,
      desc: "Perfect for indie hackers building their first AI SaaS MVP.",
      features: [
        "Up to 5 Synthesized Apps / mo",
        "Next.js 15 App Router Export",
        "Stripe Checkout & Webhooks",
        "Supabase DB Migrations",
        "Community Support",
      ],
      popular: false,
    },
    {
      id: "pro",
      name: "Pro Launchpad",
      monthlyPrice: 79,
      annualPrice: 63,
      desc: "Built for serial founders and agencies shipping client products fast.",
      features: [
        "Unlimited Synthesized SaaS Apps",
        "Pinecone Vector DB RAG Search",
        "Claude 3.5 & GPT-4o Agent Tuning",
        "1-Click Cloudflare & Vercel Deploy",
        "100% Code IP Ownership Transfer",
        "Priority Developer Support SLA",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Agency & Enterprise",
      monthlyPrice: 199,
      annualPrice: 159,
      desc: "Custom AI engine tuning, dedicated SLA, and white-label exports.",
      features: [
        "Custom AST Code Templates",
        "Dedicated Multi-Tenant Clusters",
        "White-Label SaaS Export Engine",
        "Custom SSO & SAML Authentication",
        "Dedicated Solutions Engineer",
        "Custom SLA & Uptime Guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-[#fcfbf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
            <Zap className="w-4 h-4 text-emerald-700" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Choose Your <span className="text-emerald-700">SaaS Growth Plan 🚀</span>
          </h2>
          <p className="text-stone-600 text-base font-medium">
            Zero hidden fees. Full source code ownership on every tier.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-xs font-mono font-bold ${!annual ? "text-stone-900" : "text-stone-500"}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-7 rounded-full bg-stone-200 p-1 transition-colors border border-stone-300"
            >
              <div
                className={`w-5 h-5 rounded-full bg-emerald-700 transition-transform ${
                  annual ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-xs font-mono font-bold flex items-center gap-1.5 ${annual ? "text-stone-900" : "text-stone-500"}`}>
              Annual Billing
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-200">
                Save 20% 🎉
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p) => {
            const price = annual ? p.annualPrice : p.monthlyPrice;
            return (
              <div
                key={p.id}
                className={`relative flex flex-col justify-between p-8 rounded-3xl bg-white border transition shadow-md ${
                  p.popular
                    ? "border-emerald-700 ring-2 ring-emerald-700/20 scale-105"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-emerald-700 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-extrabold text-stone-900">
                      {p.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium">
                      {p.desc}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading font-extrabold text-stone-900">
                      ${price}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-bold">
                      / month {annual && "(billed annually)"}
                    </span>
                  </div>

                  <ul className="space-y-3 text-xs text-stone-700 font-medium pt-4 border-t border-stone-100">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="#cta"
                    className={`w-full py-3.5 rounded-2xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition ${
                      p.popular
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-700/20"
                        : "bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-200"
                    }`}
                  >
                    <span>Start 14-Day Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
