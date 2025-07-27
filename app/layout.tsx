import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Favicon from "../components/Favicon";

export const metadata: Metadata = {
  title: "Koral Kulacoglu",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --kk-favicon-bg: #1e293b;
}
        `}</style>
      </head>
      <body>
        <Favicon />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
