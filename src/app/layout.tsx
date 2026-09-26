import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";
import { SITE } from "@/data/site";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = `${SITE.name} — Full-Stack Developer (React, Next.js, WordPress)`;
const description =
  "Full-stack developer based in Germany. I build fast Next.js applications and custom WordPress & WooCommerce stores — 80+ websites shipped for clients in Europe, the Middle East and the US.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: `%s — ${SITE.name}` },
  description,
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0F0F1F",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="overflow-x-hidden">
        <AnimatedBackdrop />
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
