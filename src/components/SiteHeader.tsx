"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Glass background once the page is scrolled
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      // Nothing is "active" while the hero is on screen
      if (window.scrollY < window.innerHeight * 0.5) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only)
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = NAV_LINKS.map((l) => document.getElementById(l.href.split("#")[1])).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.scrollY >= window.innerHeight * 0.5) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Mobile menu: lock scroll + close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`relative z-[110] mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-5 ${
          scrolled || isOpen
            ? "border-line bg-bg/75 shadow-[0_8px_30px_rgb(0_0_0/0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-[110] flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-xs font-bold text-white">GI</span>
          Georges Ishak
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const isActive = active === item.href.split("#")[1];
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive ? "bg-white/[0.07] text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.cv.en}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white sm:inline-flex"
          >
            Download CV <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="relative z-[110] grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-white/[0.07] md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[105] bg-bg/95 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col justify-center gap-2 px-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="py-2 text-4xl font-semibold tracking-tight text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.cv.en}
              tabIndex={isOpen ? 0 : -1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg"
            >
              Download CV <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              tabIndex={isOpen ? 0 : -1}
              className="inline-flex items-center rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-ink"
            >
              Email me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
