import { Cpu } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center space-y-4">
      <Cpu className="w-8 h-8 text-sky-400 animate-spin" />
      <span className="text-xs font-mono text-slate-400 font-bold animate-pulse">
        Initializing LaunchPilot AI Platform...
      </span>
    </div>
  );
}
