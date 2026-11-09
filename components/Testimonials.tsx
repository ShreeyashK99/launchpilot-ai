import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "LaunchPilot AI generated our entire Next.js 15 analytics dashboard and Stripe billing architecture in 4 days. We onboarded 1,200 paying users in our first month!",
      author: "Tariq Mansoor",
      role: "Founder & CEO",
      company: "HyperScale AI",
      metric: "1,200 Paid Users",
    },
    {
      quote:
        "The automated LLM prompt orchestration and Supabase pgvector schema LaunchPilot generated saved us 3 months of backend development time.",
      author: "Gemma Caldwell",
      role: "VP of Product",
      company: "LaunchVerse",
      metric: "3 Months Saved",
    },
    {
      quote:
        "I've built 4 SaaS products over the years, and LaunchPilot AI is by far the cleanest codebase generator available. Zero fluff, 100% production-ready code.",
      author: "Julian Sterling",
      role: "Managing Director",
      company: "Enterprise Launchpad",
      metric: "$45K MRR Growth",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 font-mono text-xs font-bold border border-amber-200">
            <span>Verified Product Founder Reviews 💬</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Trusted by <span className="text-emerald-700">SaaS Founders Worldwide</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#fcfbf9] border border-stone-200 shadow-md flex flex-col justify-between space-y-6 relative soft-card"
            >
              <Quote className="w-8 h-8 text-emerald-300 absolute top-6 right-6" />
              <p className="text-sm text-stone-700 leading-relaxed italic font-medium relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200/60">
                <div>
                  <div className="text-sm font-heading font-bold text-stone-900">{t.author}</div>
                  <div className="text-xs text-stone-500 font-medium">{t.role}, {t.company}</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold border border-emerald-200">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
