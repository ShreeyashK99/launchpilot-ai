import Link from "next/link";
import { ArrowLeft, Scale, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Terms of Service | LaunchPilot AI",
  description: "Terms of service and software licensing conditions for LaunchPilot AI.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Header Bar */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-cyan-700 transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to LaunchPilot AI</span>
          </Link>
          <span className="text-xs font-mono font-bold text-slate-400">Terms of Service • Updated August 2026</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <div className="space-y-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center border border-cyan-200">
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
            Terms of Service
          </h1>
          <p className="text-slate-600 text-base font-medium max-w-2xl">
            Please read these terms carefully before accessing or using LaunchPilot AI software and services.
          </p>
        </div>

        <div className="space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
          <section className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-600" />
              1. Commercial License & Code Ownership
            </h2>
            <p>
              All codebases, Next.js components, and landing page layouts generated through your LaunchPilot AI account are 100% royalty-free for personal, commercial, and enterprise deployment. You hold unrestricted copyright to your generated output.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              2. Acceptable Platform Use
            </h2>
            <p>
              Users agree not to utilize LaunchPilot AI to generate malicious code, phishing portals, deceptive landing pages, or illegal web assets. LaunchPilot AI reserves the right to terminate accounts violating acceptable software usage policies.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h2 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-600" />
              3. Service Level Agreement (SLA) & Uptime
            </h2>
            <p>
              LaunchPilot AI operates on global Cloudflare & Vercel edge networks designed for 99.99% availability. Software is provided on an &quot;as-is&quot; basis with continuous updates.
            </p>
          </section>
        </div>

        <div className="pt-6 border-t border-slate-200 text-center">
          <p className="text-xs font-mono text-slate-500">
            © 2026 LaunchPilot AI. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
