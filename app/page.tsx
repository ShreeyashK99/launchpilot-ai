import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BlogPreview } from "@/components/BlogPreview";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedCompanies />
        <Features />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
