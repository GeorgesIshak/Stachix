"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Glass background once scrolled, so the links never overlap page content
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuLinks = [
    { label: "Services", href: "/#services" },
    { label: "Works", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
  ];

  return (
    <header className="fixed top-4 z-[100] w-full px-4 sm:top-6 sm:px-6">
      <div
        className={`relative z-[110] mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-6 py-4 transition duration-500 sm:px-10 sm:py-5 ${
          scrolled && !isOpen ? "bg-[#0F0F1F]/70 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl" : ""
        }`}
      >
        
        {/* Brand */}
        <Link
          href="/"
          className="z-[110] text-2xl font-black tracking-tighter text-white group"
        >
          GEORGES
          <span className="text-pink-500 group-hover:text-pink-400 transition-colors">
            .
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {menuLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[11px] font-mono uppercase tracking-[0.35em] text-white/60 hover:text-white transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-pink-500 transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Burger / X */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] h-6 w-6 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 bg-white transition duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 bg-white transition duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

        {/* Desktop Connect */}
        <div className="hidden md:block">
          <a
            href="/cv?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink-600 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition hover:bg-pink-500 hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[105] flex flex-col items-center justify-center bg-black/95 transition-transform duration-500 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {menuLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-5xl font-black tracking-tighter text-white hover:text-pink-500 transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="h-px w-12 bg-white/20 my-4" />

          <a
            href="/cv?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-pink-600 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-white"
          >
            Download Resume
          </a>

          <a
            href="mailto:georgesishak112@gmail.com"
            className="text-[12px] font-mono uppercase tracking-[0.5em] text-pink-500"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
}