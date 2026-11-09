"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, Rocket } from "lucide-react";

const ctaSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid work email."),
  vision: z.string().min(6, "Please describe your product idea."),
});

type CTAFormData = z.infer<typeof ctaSchema>;

export function CallToAction() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CTAFormData>({
    resolver: zodResolver(ctaSchema),
  });

  const onSubmit = async (data: CTAFormData) => {
    try {
      await fetch("https://formsubmit.co/ajax/shreeyashkudalkar7@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          vision: data.vision,
          _subject: `LaunchPilot AI Trial Request from ${data.name}`,
        }),
      });
    } catch (err) {
      console.log("Submitted");
    }

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
    reset();
  };

  return (
    <section id="cta" className="py-24 relative grid-bg bg-[#fcfbf9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-8 text-center relative overflow-hidden soft-card">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-amber-600 flex items-center justify-center text-white mx-auto shadow-md shadow-emerald-600/20">
            <Rocket className="w-7 h-7" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-stone-900">
              Ready to Launch Your <span className="text-emerald-700">SaaS Idea? 🚀</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Get 14 days of unrestricted access to LaunchPilot AI. Synthesize production-ready applications in seconds.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 space-y-3 text-emerald-700 font-mono">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-heading font-extrabold text-stone-900">
                Trial Access Granted! 🎉
              </h3>
              <p className="text-xs text-stone-600">
                Check your email inbox for your LaunchPilot API key and instant workspace invitation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your Name..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-mono outline-none focus:border-emerald-700 transition"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-rose-500 font-mono">{errors.name.message}</span>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Work Email..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-mono outline-none focus:border-emerald-700 transition"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-rose-500 font-mono">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  {...register("vision")}
                  placeholder="Describe your SaaS product vision (e.g. AI CRM with Stripe)..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-mono outline-none focus:border-emerald-700 transition"
                />
                {errors.vision && (
                  <span className="text-[10px] text-rose-500 font-mono">{errors.vision.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-md shadow-emerald-700/20 transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Workspace... 🚀</span>
                ) : (
                  <>
                    <span>Request Free 14-Day Pro Trial ⚡</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
