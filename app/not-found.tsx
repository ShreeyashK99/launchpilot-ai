import Link from "next/link";
import { Rocket, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center space-y-6 font-sans">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
        <Rocket className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-heading font-extrabold">404 - Orbit Path Not Found</h1>
      <p className="text-slate-400 text-sm max-w-md">
        The requested page does not exist or has been relocated to another workspace.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to LaunchPilot AI Home</span>
      </Link>
    </div>
  );
}
