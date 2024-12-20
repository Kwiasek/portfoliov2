import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import Script from "next/script";
import "dotenv/config";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Kwiasek | Portfolio",
  description: "My personal Portfolio and Blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Nav />
        {children}
        <Script
          src="https://kit.fontawesome.com/debda86926.js"
          crossOrigin="anonymous"
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
