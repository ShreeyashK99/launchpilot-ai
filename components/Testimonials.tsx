import { ShieldCheck, Zap, Layers } from "lucide-react";

export function Testimonials() {
  const pillars = [
    {
      icon: Zap,
      title: "Sub-Second Edge Execution",
      description:
        "Engineered for Next.js 15 Edge Runtime with streaming SSE responses, delivering typed route handlers and architecture specs in under 250ms with zero cold starts.",
      tag: "< 250ms Latency",
    },
    {
      icon: ShieldCheck,
      title: "Zero-Trust Database Security",
      description:
        "Every synthesized PostgreSQL migration comes pre-configured with Supabase Row-Level Security (RLS) policies (auth.uid() = org_id), enforcing tenant isolation out of the box.",
      tag: "PostgreSQL RLS",
    },
    {
      icon: Layers,
      title: "Dual-Engine Resilience",
      description:
        "Seamlessly routes between frontier models (Claude 3.5 Sonnet / OpenCode) and an autonomous heuristic fallback engine to guarantee zero downtime during API rate limits.",
      tag: "100% Uptime Guaranteed",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-white border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
            <span>Engineering Architecture & Pillars 🏛️</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Built for <span className="text-emerald-700">Production-Grade Reliability</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Designed to bridge high-velocity vibe coding with strict enterprise standards for security and type safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-3xl bg-[#fcfbf9] border border-stone-200 shadow-md flex flex-col justify-between space-y-6 soft-card hover:border-emerald-600 transition"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-extrabold text-stone-900">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[11px] font-mono font-bold border border-stone-200">
                    {p.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
