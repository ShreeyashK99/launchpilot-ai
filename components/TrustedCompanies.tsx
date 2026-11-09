export function TrustedCompanies() {
  const frameworks = [
    { name: "Next.js 15", label: "App Router & Edge" },
    { name: "TypeScript", label: "Strict Static Types" },
    { name: "Supabase", label: "PostgreSQL & RLS" },
    { name: "Tailwind CSS", label: "Design System" },
    { name: "Zod Schema", label: "Runtime Validation" },
    { name: "OpenCode AI", label: "Inference Gateway" },
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-8">
          Engineered With Modern Industry Standards & Frameworks 🛠️
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
          {frameworks.map((f) => (
            <div
              key={f.name}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-1 shadow-sm hover:border-emerald-600 transition"
            >
              <div className="font-heading font-extrabold text-sm text-stone-900">
                {f.name}
              </div>
              <div className="text-[10px] font-mono text-emerald-700 font-bold">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
