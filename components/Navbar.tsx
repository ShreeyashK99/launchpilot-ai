"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Rocket, ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Integrations", href: "#integrations" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-4 inset-x-0 z-50 mx-auto max-w-6xl px-4 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <div className="relative flex items-center justify-between px-5 py-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <Rocket className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg tracking-tight text-stone-900 flex items-center gap-1.5">
              LaunchPilot <span className="text-emerald-700">AI</span>
            </span>
            <span className="text-[10px] font-mono text-amber-700 tracking-wider uppercase font-bold">
              SaaS Accelerator 🚀
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="flex items-center gap-3">
          {/* CTA Button */}
          <a
            href="#cta"
            className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-700/20 transition"
          >
            <span>Start Free Trial ⚡</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-stone-100 text-stone-800"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-white border border-stone-200 shadow-2xl space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl hover:bg-stone-100 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-stone-100">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              <span>Start Free Trial 🚀</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
