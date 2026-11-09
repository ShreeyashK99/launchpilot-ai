"use client";

import { Sparkles, ArrowRight, Cpu } from "lucide-react";
import { LiveGenerator } from "./LiveGenerator";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 grid-bg bg-[#fcfbf9]">
      {/* Abstract Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-emerald-100/70 via-teal-100/50 to-amber-100/60 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-amber-200/80 text-xs font-mono font-semibold text-stone-800 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>LaunchPilot AI v2.4 Release</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-stone-900 leading-[1.1]">
            Turn Product Ideas into <span className="text-gradient-earth">Production SaaS</span> in Seconds 🚀
          </h1>

          <p className="text-base sm:text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed font-medium">
            LaunchPilot AI generates full-stack Next.js 15 apps, Claude 3.5 Sonnet RAG agents, database migrations, and Stripe Checkout hooks automatically.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#cta"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition flex items-center justify-center gap-2"
            >
              <span>Build Your SaaS Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-stone-800 font-bold text-sm border border-stone-200 hover:border-stone-300 transition shadow-sm flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4 text-emerald-700" />
              <span>Explore Features</span>
            </a>
          </div>
        </div>

        {/* Interactive Playground Widget */}
        <LiveGenerator />

        {/* Quick Trust Bar */}
        <div className="pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-heading font-extrabold text-stone-900">10x Faster</div>
            <div className="text-xs text-stone-600 font-semibold">Time to Market</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-extrabold text-emerald-700">14,200+</div>
            <div className="text-xs text-stone-600 font-semibold">Apps Synthesized</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-extrabold text-amber-600">100/100</div>
            <div className="text-xs text-stone-600 font-semibold">Lighthouse Benchmark</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-extrabold text-stone-900">$0</div>
            <div className="text-xs text-stone-600 font-semibold">Server Setup Needed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
