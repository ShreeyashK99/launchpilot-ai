"use client";

import { Cpu, Zap, CreditCard, ShieldCheck, Database } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      id: "ast-code",
      icon: Cpu,
      title: "AST Code Synthesis ⚡",
      description: "Generates clean, modular Next.js 15 TypeScript code with zero hallucination or syntax errors.",
      badge: "Next.js 15 App Router",
    },
    {
      id: "stripe-hooks",
      icon: CreditCard,
      title: "Stripe Billing & Subscriptions 💳",
      description: "Pre-configures multi-tier Stripe Checkout flows, webhook handlers, and customer portals automatically.",
      badge: "Automated Payments",
    },
    {
      id: "vector-rag",
      icon: Database,
      title: "Vector DB & RAG Search 🔍",
      description: "Embeds Pinecone & Supabase pgvector indexes for sub-50ms knowledge retrieval and grounded responses.",
      badge: "Retrieval Augmented",
    },
    {
      id: "auth-rbac",
      icon: ShieldCheck,
      title: "Multi-Tenant Workspaces 🏢",
      description: "Role-based access control (RBAC), team organization invites, and secure session management out of the box.",
      badge: "Enterprise Security",
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
            <Zap className="w-4 h-4 text-emerald-700" />
            <span>Autonomous Engine Features</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Everything You Need to <span className="text-emerald-700">Ship Production SaaS</span>
          </h2>
          <p className="text-stone-600 text-base font-medium">
            Stop spending 3 months re-writing authentication, Stripe webhooks, and database schemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-stone-200 space-y-6 shadow-md soft-card group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold border border-stone-200">
                    {f.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-extrabold text-stone-900">
                    {f.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-medium">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
