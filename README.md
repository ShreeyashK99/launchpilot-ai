# LaunchPilot AI 🚀
### Autonomous Full-Stack SaaS Architecture & Code Synthesis Engine

![Next.js 15](https://img.shields.io/badge/Next.js-15.1.7-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase)
![OpenCode](https://img.shields.io/badge/OpenCode_API-Unified_Inference-7952DE?style=for-the-badge)

**LaunchPilot AI** is an autonomous full-stack product engineering engine that turns high-level product specifications into production-ready Next.js 15 App Routes, typed Zod schemas, and relational Supabase PostgreSQL migrations with Row-Level Security (RLS) in seconds.

🔗 **Live Production Demo**: [https://launchpilot-ai-chi.vercel.app/](https://launchpilot-ai-chi.vercel.app/)


---

## ⚡ Architecture Flow

```
┌─────────────────┐        ┌──────────────────────────┐        ┌────────────────────────┐
│   User Prompt   │ ────►  │ Next.js 15 Edge API      │ ────►  │ Autonomous Synthesis   │
│ ("AI CRM...")   │        │ (/api/generate)          │        │ & OpenCode Inference   │
└─────────────────┘        └──────────────────────────┘        └───────────┬────────────┘
                                                                           │
                           ┌───────────────────────────────────────────────┴────────────┐
                           ▼                                                            ▼
            ┌─────────────────────────────┐                              ┌─────────────────────────────┐
            │  Next.js 15 Server Route    │                              │  Supabase SQL Migration     │
            │  • TypeScript Types         │                              │  • Multi-Tenant RLS         │
            │  • Zod Validation Schema    │                              │  • UUID Primary Keys        │
            │  • Edge Runtime Execution   │                              │  • High-Performance Indexes │
            └─────────────────────────────┘                              └─────────────────────────────┘
```

---

## 🌟 Key Features

- **Dynamic Full-Stack Synthesis**: Real-time generation of typed API routes, database schemas, and application architectures for any product domain (HealthTech, FinTech, CRM, Booking, Developer Tools).
- **Dual-Mode AI Engine**:
  - **Frontier Inference Mode**: Connects to the OpenCode API gateway (`https://opencode.ai/inference/v1`) supporting Claude 3.5 Sonnet, GPT-4o, and DeepSeek.
  - **Zero-Cost Heuristic Synthesis**: Autonomous fallback engine providing instant, offline, zero-latency code generation at ₹0 / $0 cost.
- **Production-Ready Code Standards**:
  - Next.js 15 App Router with Edge runtime configuration.
  - Supabase PostgreSQL migrations with relational foreign keys and Row-Level Security (`auth.uid()` policies).
  - Runtime request validation powered by Zod.
- **One-Click Spec Export**: Export generated Next.js routes and Supabase SQL migrations directly to your local workspace.
- **Lighthouse 100/100 Benchmark**: Fully accessible, mobile-first responsive interface styled with Tailwind CSS and Framer Motion.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Inference Engine**: [OpenCode Inference API](https://opencode.ai/) & Autonomous Semantic Engine
- **Database Architecture**: [Supabase PostgreSQL](https://supabase.com/) with RLS

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ShreeyashK99/launchpilot-ai.git
cd launchpilot-ai
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
OPENCODE_API_KEY=your_opencode_api_key_here
OPENCODE_BASE_URL=https://opencode.ai/inference/openai/v1
```

### 3. Install dependencies and start the dev server
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👨‍💻 Author

**Shreeyash Kudalkar**  
*AI & Full-Stack Systems Engineer*  
- Portfolio: [Developer Portfolio](https://shreeyash-kudalkar-portfolio.pages.dev/)  
- GitHub: [@ShreeyashK99](https://github.com/ShreeyashK99)  
- LinkedIn: [linkedin.com/in/shreeyashkudalkar](https://linkedin.com)
