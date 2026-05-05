"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SiteHeader() {
  const headerRef = useRef(null);

  useGSAP(() => {
    // 1. Initial State for GSAP (Prevents jump on load)
    gsap.set(".nav-container", { maxWidth: "1200px" });

    // 2. The Morph Animation
    gsap.to(".nav-container", {
      maxWidth: "800px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      paddingTop: "10px",
      paddingBottom: "10px",
      // Adding a slight border change for luxury feel
      borderColor: "rgba(255, 255, 255, 0.2)",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "500", // Longer distance = smoother transition
        scrub: 1.2, // Scrub value > 0 adds "smoothing" (catch-up delay)
      },
    });
  }, { scope: headerRef });

  return (
    <header ref={headerRef} className="fixed top-6 z-[100] w-full px-6">
      {/* 
         REMOVED: transition-all duration-700 (It was fighting GSAP)
      */}
      <div className="nav-container mx-auto flex items-center justify-between rounded-full border border-white/10 bg-transparent px-6 sm:px-10 py-5 backdrop-blur-xl shadow-2xl overflow-hidden">
        
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-white group md:text-3xl"
        >
          GEORGES
          <span className="text-pink-500 group-hover:text-pink-400 transition-colors">
            .
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-12">
          {[
            { label: "Works", href: "#work" },
            { label: "Experience", href: "#experience" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Minimalist Contact */}
        <div className="hidden md:block">
          <a
            href="mailto:georgesishak112@gmail.com"
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 hover:text-pink-500 transition-colors"
          >
            Connect
          </a>
        </div>
      </div>
    </header>
  );
}
