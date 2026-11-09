import { ArrowRight, Clock } from "lucide-react";

export function BlogPreview() {
  const posts = [
    {
      title: "How We Built a Next.js 15 AI SaaS in 3 Days Flat ⚡",
      desc: "Architectural teardown of AI prompt streaming, Zod schema validation, and Stripe checkout hooks.",
      readTime: "5 min read",
      date: "Aug 2026",
    },
    {
      title: "Preventing LLM Hallucination in Code Generation 🤖",
      desc: "Deep dive into AST parsing and Zod output guardrails for deterministic code synthesis.",
      readTime: "7 min read",
      date: "Jul 2026",
    },
    {
      title: "Optimizing Vector RAG Search Latency to Sub-30ms 🔍",
      desc: "How Pinecone hybrid index search and edge caching cut retrieval lag by 80%.",
      readTime: "4 min read",
      date: "Jul 2026",
    },
  ];

  return (
    <section className="py-24 bg-[#fcfbf9] border-y border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
              Engineering Blog 📝
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-stone-900">
              Latest Insights & Teardowns
            </h2>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 hover:underline"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4 hover:border-emerald-300 transition flex flex-col justify-between soft-card"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-extrabold text-stone-900">
                  {post.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">
                  {post.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                  Read Teardown &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
