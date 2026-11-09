"use client";

import { useState } from "react";
import { Terminal, Cpu, Play, Check, Copy, Sparkles, Layers, Database, Code2, Download, Network, ArrowUpRight } from "lucide-react";

export function LiveGenerator() {
  const [prompt, setPrompt] = useState("AI-powered lead scoring dashboard with Stripe billing and Supabase DB");
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "schema" | "preview" | "architecture">("code");
  const [copied, setCopied] = useState(false);
  const [generationStep, setGenerationStep] = useState<string>("");

  const [projectName, setProjectName] = useState("LeadVelocity AI");
  const [tagline, setTagline] = useState("Autonomous Predictive Lead Scoring & Pipeline Automation powered by Next.js 15 & Supabase.");
  const [architecture, setArchitecture] = useState("Next.js 15 App Router (Edge Runtime) → Supabase PostgreSQL (Row-Level Security) → Zod Type Validation → Real-Time Streaming Webhooks");
  const [stats, setStats] = useState([
    { label: "Execution Runtime", value: "Next.js 15 Edge" },
    { label: "Database Isolation", value: "Supabase RLS Multi-Tenant" },
    { label: "Target Domain", value: "Enterprise SaaS & Automation" },
  ]);

  const [code, setCode] = useState(`// app/api/pipeline/route.ts
// Synthesized for: "AI-powered lead scoring dashboard with Stripe billing and Supabase DB"
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

export const runtime = "edge";

const RequestSchema = z.object({
  organizationId: z.string().uuid(),
  payload: z.string().min(3),
  options: z.object({
    enableStreaming: z.boolean().default(true),
    confidenceThreshold: z.number().min(0).max(1).default(0.85),
  }).optional(),
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();
    const validated = RequestSchema.parse(rawBody);

    // 1. Multi-Tenant Authorization Check
    const { data: org, error: orgError } = await supabase
      .from("organizations")
      .select("id, tier, max_rpm")
      .eq("id", validated.organizationId)
      .single();

    if (orgError || !org) {
      return NextResponse.json({ error: "Unauthorized Organization" }, { status: 403 });
    }

    // 2. Autonomous Agentic Processing Loop
    const executionStart = performance.now();
    const processedRecord = {
      org_id: org.id,
      input_query: validated.payload,
      domain: "Predictive Lead Scoring & Pipeline Automation",
      latency_ms: Math.round(performance.now() - executionStart),
      status: "completed",
      created_at: new Date().toISOString(),
    };

    // 3. Persist Event to Supabase
    const { data: record, error: dbError } = await supabase
      .from("sales_leads")
      .insert([processedRecord])
      .select()
      .single();

    if (dbError) throw dbError;

    return NextResponse.json({
      success: true,
      meta: {
        engine: "LaunchPilot v2.4 (Next.js 15 Edge Runtime)",
        latency: \`\${processedRecord.latency_ms}ms\`,
        targetDomain: "Predictive Lead Scoring & Pipeline Automation",
      },
      data: record,
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Pipeline execution failed" },
      { status: 400 }
    );
  }
}`);

  const [schema, setSchema] = useState(`-- Supabase PostgreSQL Migration for LeadVelocity AI
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Organizations (Multi-Tenant Core)
CREATE TABLE IF NOT EXISTS organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tier TEXT DEFAULT 'starter' CHECK (tier IN ('starter', 'growth', 'enterprise')),
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Domain Entity: sales_leads
CREATE TABLE IF NOT EXISTS sales_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  intent_score NUMERIC(5,2) DEFAULT 0.0,
  enriched_metadata JSONB,
  pipeline_stage TEXT DEFAULT 'qualification',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Row Level Security (RLS)
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE sales_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can access their own org data" 
  ON sales_leads 
  FOR ALL 
  USING (org_id IN (
    SELECT id FROM organizations WHERE id = auth.uid()
  ));

-- 4. High-Performance Indexing
CREATE INDEX IF NOT EXISTS idx_sales_leads_org_id ON sales_leads(org_id);
CREATE INDEX IF NOT EXISTS idx_sales_leads_created_at ON sales_leads(created_at DESC);`);

  const presets = [
    "AI Lead Scoring CRM & Sequences 🎯",
    "B2B SaaS Analytics & LTV Cohorts 📊",
    "Automated Twilio SMS Kitchen POS 🍕",
    "Healthcare Patient Intake & Triage 🩺",
  ];

  const handleSynthesize = async (promptToUse?: string) => {
    const targetPrompt = promptToUse || prompt;
    if (!targetPrompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setGenerationStep("Deconstructing SaaS prompt & domain...");

    try {
      const stepTimer1 = setTimeout(() => setGenerationStep("Synthesizing Next.js 15 Edge Route & Zod schema..."), 300);
      const stepTimer2 = setTimeout(() => setGenerationStep("Generating Supabase PostgreSQL RLS tables..."), 600);

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: targetPrompt }),
      });

      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);

      if (!res.ok) throw new Error("Synthesis failed");

      const result = await res.json();
      if (result.success && result.data) {
        setCode(result.data.code);
        setSchema(result.data.schema);
        if (result.data.projectName) setProjectName(result.data.projectName);
        if (result.data.tagline) setTagline(result.data.tagline);
        if (result.data.architecture) setArchitecture(result.data.architecture);
        if (result.data.stats) setStats(result.data.stats);
      }
    } catch (err) {
      console.error("Synthesis error:", err);
    } finally {
      setIsGenerating(false);
      setGenerationStep("");
    }
  };

  const handlePresetClick = (p: string) => {
    setPrompt(p);
    handleSynthesize(p);
  };

  const copyContent = () => {
    const textToCopy = activeTab === "code" ? code : activeTab === "schema" ? schema : architecture;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFiles = () => {
    const blob = new Blob([
      `=== ${projectName} ===\n\n=== NEXT.JS 15 ROUTE ===\n${code}\n\n=== SUPABASE SCHEMA ===\n${schema}`
    ], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${projectName.toLowerCase().replace(/\s+/g, "-")}-spec.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-stone-200 shadow-xl overflow-hidden soft-card">
      {/* Terminal Bar */}
      <div className="px-5 py-3.5 bg-stone-900 border-b border-stone-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-xs font-mono text-stone-300 font-bold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            launchpilot-engine.ts
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={downloadFiles}
            title="Download Full Project Spec"
            className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-mono font-bold text-stone-200 border border-stone-700 transition"
          >
            <Download className="w-3.5 h-3.5 text-sky-400" />
            <span>Export</span>
          </button>

          <button
            onClick={copyContent}
            className="flex items-center gap-1 px-3 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-mono font-bold text-stone-200 border border-stone-700 transition"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preset Chips */}
      <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-wrap gap-2 items-center">
        <span className="text-xs font-mono text-stone-500 font-bold mr-1">Presets:</span>
        {presets.map((p) => (
          <button
            key={p}
            onClick={() => handlePresetClick(p)}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-700 hover:text-white text-stone-700 text-xs font-mono font-semibold transition border border-stone-200 shadow-sm"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Prompt Bar Input */}
      <div className="p-4 bg-white flex items-center gap-3 border-b border-stone-200">
        <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSynthesize()}
          placeholder="Describe your SaaS product vision (e.g. AI booking app for salons in Helsinki)..."
          className="w-full bg-transparent text-stone-900 text-xs sm:text-sm font-mono outline-none placeholder-stone-400"
        />
        <button
          onClick={() => handleSynthesize()}
          disabled={isGenerating}
          className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold text-xs font-mono flex items-center gap-1.5 shrink-0 transition shadow-sm"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>{isGenerating ? "Synthesizing..." : "Synthesize"}</span>
        </button>
      </div>

      {/* View Tabs */}
      <div className="flex border-b border-stone-200 bg-stone-50 text-xs font-mono overflow-x-auto">
        <button
          onClick={() => setActiveTab("code")}
          className={`px-5 py-2.5 font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition ${
            activeTab === "code"
              ? "border-emerald-700 text-emerald-700 bg-white"
              : "border-transparent text-stone-600 hover:text-stone-900"
          }`}
        >
          <Code2 className="w-3.5 h-3.5" /> Next.js 15 Route
        </button>
        <button
          onClick={() => setActiveTab("schema")}
          className={`px-5 py-2.5 font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition ${
            activeTab === "schema"
              ? "border-emerald-700 text-emerald-700 bg-white"
              : "border-transparent text-stone-600 hover:text-stone-900"
          }`}
        >
          <Database className="w-3.5 h-3.5" /> Supabase Schema
        </button>
        <button
          onClick={() => setActiveTab("architecture")}
          className={`px-5 py-2.5 font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition ${
            activeTab === "architecture"
              ? "border-emerald-700 text-emerald-700 bg-white"
              : "border-transparent text-stone-600 hover:text-stone-900"
          }`}
        >
          <Network className="w-3.5 h-3.5" /> Architecture
        </button>
        <button
          onClick={() => setActiveTab("preview")}
          className={`px-5 py-2.5 font-bold flex items-center gap-1.5 border-b-2 whitespace-nowrap transition ${
            activeTab === "preview"
              ? "border-emerald-700 text-emerald-700 bg-white"
              : "border-transparent text-stone-600 hover:text-stone-900"
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> Live Render Preview
        </button>
      </div>

      {/* Code Display Area */}
      <div className="p-6 bg-stone-900 text-stone-100 font-mono text-xs sm:text-sm overflow-x-auto min-h-[260px]">
        {isGenerating ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-3 text-emerald-400">
            <Cpu className="w-8 h-8 animate-spin" />
            <span className="text-xs font-mono font-bold animate-pulse text-center">
              {generationStep || "Synthesizing full-stack SaaS architecture..."}
            </span>
          </div>
        ) : activeTab === "code" ? (
          <pre className="text-stone-200 leading-relaxed font-mono">
            <code>{code}</code>
          </pre>
        ) : activeTab === "schema" ? (
          <pre className="text-amber-300 leading-relaxed font-mono">
            <code>{schema}</code>
          </pre>
        ) : activeTab === "architecture" ? (
          <div className="p-4 space-y-4 text-stone-300">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <span className="text-emerald-400 font-bold text-sm">{projectName}</span>
              <span className="text-xs text-stone-400">Production Blueprint</span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">{tagline}</p>
            <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-stone-200 font-mono">
              <span className="text-amber-400 font-bold">Stack Flow: </span>
              {architecture}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="p-3 rounded-xl bg-stone-800 border border-stone-700">
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider">{s.label}</div>
                  <div className="text-xs font-bold text-white mt-1">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4 text-stone-900 shadow-sm font-sans">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-heading font-extrabold text-lg text-stone-900 flex items-center gap-2">
                  {projectName}
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </span>
                <p className="text-xs text-stone-500 mt-0.5">{tagline}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold border border-emerald-200">
                100/100 Benchmark
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono">
              {stats.map((st) => (
                <div key={st.label} className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-[10px] text-stone-500 uppercase">{st.label}</div>
                  <div className="text-xs font-bold text-emerald-800 mt-1 truncate">{st.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-stone-200 text-xs">
              <span className="text-stone-500 font-mono">Generated with Next.js 15 & Supabase</span>
              <a
                href="#features"
                className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
              >
                Inspect Live API <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
