export function Integrations() {
  const integrations = [
    { name: "OpenAI", desc: "GPT-4o & Embeddings", category: "AI Models" },
    { name: "Anthropic", desc: "Claude 3.5 Sonnet", category: "AI Models" },
    { name: "Stripe", desc: "Checkout & Subscriptions", category: "Billing" },
    { name: "Supabase", desc: "PostgreSQL & Auth", category: "Database" },
    { name: "Pinecone", desc: "Vector Semantic Index", category: "Vector DB" },
    { name: "Vercel", desc: "Edge Deployment", category: "Hosting" },
    { name: "Cloudflare", desc: "CDN & Workers", category: "Edge" },
    { name: "Resend", desc: "Transactional Mail", category: "Email" },
  ];

  return (
    <section id="integrations" className="py-24 bg-[#fcfbf9] border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
            <span>Seamless Ecosystem Integrations 🌐</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
            Pre-Built Connectors for Your <span className="text-emerald-700">Favorite Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-3 hover:border-emerald-300 transition soft-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-heading font-extrabold text-stone-900">
                  {item.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-bold border border-emerald-100">
                  {item.category}
                </span>
              </div>
              <p className="text-xs text-stone-600 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
