// src/components/SiteHeader.tsx
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="container-default py-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-4xl font-bold tracking-tight text-white"
        >
          Stachix<span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {["Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-lg font-medium text-white/80 hover:text-white transition group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white text-base font-semibold shadow hover:opacity-90 transition"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
          aria-label="Open menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
