import Link from "next/link";
import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 text-stone-600 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-600 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-600/20">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="font-heading font-extrabold text-lg text-stone-900">
              LaunchPilot AI
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <a href="#features" className="hover:text-emerald-700 transition">Features</a>
            <a href="#integrations" className="hover:text-emerald-700 transition">Integrations</a>
            <a href="#pricing" className="hover:text-emerald-700 transition">Pricing</a>
            <Link href="/privacy" className="hover:text-emerald-700 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-700 transition">Terms of Service</Link>
            <a href="#cta" className="text-emerald-700 font-bold hover:underline">
              Start Free Trial 🚀
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-500">
          <div>
            © {new Date().getFullYear()} LaunchPilot AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
