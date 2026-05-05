import type { Metadata } from "next";
import "@/app/globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";

export const metadata: Metadata = {
  title: "Stachix",
  description: "Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <AnimatedBackdrop />
        <SiteHeader />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}