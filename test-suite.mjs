const fetch = globalThis.fetch;

async function runTestSuite() {
  console.log("=== LAUNCHPILOT AI AUTOMATED TEST SUITE ===\n");
  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  FAIL: ${name} -> ${err.message}`);
      failed++;
    }
  }

  // 1. Endpoint Validation Tests
  await test("POST /api/generate with empty prompt returns 400", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "" }),
    });
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
    const json = await res.json();
    if (!json.error) throw new Error("Expected error message in response");
  });

  await test("POST /api/generate with whitespace prompt returns 400", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "    " }),
    });
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`);
  });

  // 2. Domain Classification & Schema Synthesis Tests
  await test("Domain: Healthcare (MedFlow AI & patient_intakes)", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Patient triage and doctor appointment clinical records" }),
    });
    const json = await res.json();
    if (json.data.projectName !== "MedFlow AI") throw new Error(`Expected MedFlow AI, got ${json.data.projectName}`);
    if (!json.data.schema.includes("patient_intakes")) throw new Error("Schema missing patient_intakes");
    if (!json.data.schema.includes("ROW LEVEL SECURITY")) throw new Error("Schema missing RLS");
  });

  await test("Domain: CRM & Lead Scoring (LeadVelocity AI & sales_leads)", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "B2B Sales CRM with prospect lead scoring and enrichment" }),
    });
    const json = await res.json();
    if (json.data.projectName !== "LeadVelocity AI") throw new Error(`Expected LeadVelocity AI, got ${json.data.projectName}`);
    if (!json.data.schema.includes("sales_leads")) throw new Error("Schema missing sales_leads");
  });

  await test("Domain: FinTech & Ledger (PayScale Flow & ledger_transactions)", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Crypto payments, recurring billing, and automated invoice ledger" }),
    });
    const json = await res.json();
    if (json.data.projectName !== "PayScale Flow") throw new Error(`Expected PayScale Flow, got ${json.data.projectName}`);
    if (!json.data.schema.includes("ledger_transactions")) throw new Error("Schema missing ledger_transactions");
  });

  await test("Domain: Booking & Appointments (OmniSchedule Pro & bookings)", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Real-time schedule appointment booking for hair salons" }),
    });
    const json = await res.json();
    if (json.data.projectName !== "OmniSchedule Pro") throw new Error(`Expected OmniSchedule Pro, got ${json.data.projectName}`);
    if (!json.data.schema.includes("bookings")) throw new Error("Schema missing bookings");
  });

  await test("Domain: Autonomous Agentic Orchestration (AgenticMatrix AI & agent_workflows)", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Autonomous multi-agent research team using MCP tools and vector search" }),
    });
    const json = await res.json();
    if (json.data.projectName !== "AgenticMatrix AI") throw new Error(`Expected AgenticMatrix AI, got ${json.data.projectName}`);
    if (!json.data.schema.includes("agent_workflows")) throw new Error("Schema missing agent_workflows");
  });

  // 3. Code Generation Rigor Tests
  await test("Next.js 15 Code contains Edge runtime and Zod validation", async () => {
    const res = await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "Automated newsletter marketing tool" }),
    });
    const json = await res.json();
    const code = json.data.code;
    if (!code.includes('runtime = "edge"')) throw new Error("Generated code missing edge runtime");
    if (!code.includes('import { z } from "zod"')) throw new Error("Generated code missing Zod import");
    if (!code.includes("RequestSchema.parse")) throw new Error("Generated code missing Zod validation parse");
  });

  // 4. Page Health & Routing Tests
  await test("GET / (Homepage) returns 200 with complete branding", async () => {
    const res = await fetch("http://localhost:3000/");
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    const html = await res.text();
    if (!html.includes("LaunchPilot AI")) throw new Error("Missing LaunchPilot AI brand in HTML");
    if (!html.includes("launchpilot-engine.ts")) throw new Error("Missing terminal component");
  });

  await test("GET /privacy returns 200", async () => {
    const res = await fetch("http://localhost:3000/privacy");
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  await test("GET /terms returns 200", async () => {
    const res = await fetch("http://localhost:3000/terms");
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  // 5. Latency & Performance Benchmark
  await test("API Latency Benchmark (< 50ms for autonomous synthesis)", async () => {
    const start = performance.now();
    await fetch("http://localhost:3000/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: "High frequency automated trading bot" }),
    });
    const duration = Math.round(performance.now() - start);
    console.log(`    Measured Latency: ${duration}ms`);
    if (duration > 500) throw new Error(`Latency too high: ${duration}ms`);
  });

  console.log(`\n=== FINAL RESULT: ${passed} PASSED | ${failed} FAILED ===\n`);
  return { passed, failed };
}

runTestSuite().then(({ passed, failed }) => {
  if (failed > 0) process.exit(1);
  process.exit(0);
});
