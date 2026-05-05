"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { label: "Works", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-6 z-[100] w-full px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 px-6 sm:px-10 py-5">
        
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
        <nav className="hidden md:flex items-center gap-12">
          {menuLinks.map((item) => (
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

        {/* Burger / X */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] h-6 w-6 md:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

        {/* Desktop Connect */}
        <div className="hidden md:block">
          <a
            href="mailto:georgesishak112@gmail.com"
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 hover:text-pink-500 transition-colors"
          >
            Connect
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