import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaunchPilot AI 🚀 | AI-Powered SaaS Launchpad & Page Generator",
  description: "Transform your SaaS product ideas into production-ready landing pages, API backends, and Stripe payment flows in under 60 seconds with LaunchPilot AI.",
  keywords: ["AI SaaS", "Landing Page Generator", "Next.js 15", "Stripe Integration", "Claude 3.5", "SaaS Builder"],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "LaunchPilot AI 🚀 | AI-Powered SaaS Launchpad",
    description: "Launch production-grade SaaS products in 60 seconds with AI.",
    url: "https://launchpilot-ai-demo.pages.dev",
    siteName: "LaunchPilot AI",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans bg-[#fcfbf9] text-stone-900">
        {children}
      </body>
    </html>
  );
}
