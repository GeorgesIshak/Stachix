import type { Metadata } from "next";
import "@/app/globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CustomCursor from "@/components/CustomCursor";
import AnimatedBackdrop from "@/components/AnimatedBackdrop";

export const metadata: Metadata = {
  title: "Stachix",
  description: "Portfolio & agency site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-black text-white overflow-x-hidden">
        <AnimatedBackdrop />
        <SiteHeader />
        <CustomCursor />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
