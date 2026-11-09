export function TrustedCompanies() {
  const companies = [
    { name: "Y Combinator", label: "YC Alumni" },
    { name: "Sequoia Capital", label: "Portfolio" },
    { name: "Vercel", label: "Edge Partner" },
    { name: "Stripe", label: "Verified Partner" },
    { name: "Supabase", label: "DB Partner" },
    { name: "Anthropic", label: "Claude AI" },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-8">
          Trusted by founders backed by world-class accelerators & funds 🏢
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-85 hover:opacity-100 transition-opacity">
          {companies.map((c) => (
            <div
              key={c.name}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 shadow-sm"
            >
              <div className="font-heading font-extrabold text-sm text-slate-900">
                {c.name}
              </div>
              <div className="text-[10px] font-mono text-indigo-600 font-semibold">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
