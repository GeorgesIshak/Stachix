"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { value: "80+", label: "WordPress Websites Delivered" },
  { value: "5+", label: "Production Next.js Applications" },
  { value: "DE", label: "Based in Germany" },
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".glass-card");
      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const xTo = gsap.quickTo(card, "rotationY", {
          duration: 0.4,
          ease: "power3",
        });
        const yTo = gsap.quickTo(card, "rotationX", {
          duration: 0.4,
          ease: "power3",
        });

        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = card.getBoundingClientRect();
          const xRel = clientX - (left + width / 2);
          const yRel = clientY - (top + height / 2);

          xTo((xRel / (width / 2)) * 10);
          yTo(-(yRel / (height / 2)) * 10);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
        gsap.set(card, { transformPerspective: 1000 });

        cleanups.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative rounded-[48px] border border-white/10 bg-white/[0.04] px-6 py-20 backdrop-blur-md md:px-12 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[48px]">
        <div className="absolute left-[-10%] top-[-10%] h-[320px] w-[320px] rounded-full bg-fuchsia-500/12 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[340px] w-[340px] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT */}
        <div>
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-pink-400">
            About Me
          </span>

          {/* HEADLINE */}
          <div className="mt-8 space-y-2">
            {["Full-Stack", "Engineer", "Based in Germany."].map(
              (text, i) => (
                <div key={i}>
                  <h2 className="text-[clamp(40px,7vw,90px)] font-bold leading-[0.9] tracking-tighter text-white">
                    {text}
                  </h2>
                </div>
              )
            )}
          </div>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/60 md:text-xl">
            Full-Stack Engineer focused on building scalable web applications,
            high-performance e-commerce platforms, and modern user interfaces.
            <br />
            <br />
            Based in{" "}
            <span className="border-b border-pink-500/50 text-white">
              Germany
            </span>{" "}
            and open to full-time opportunities.
          </p>

          {/* CARDS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="glass-card group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-6 h-1 w-8 bg-pink-500 transition-all duration-500 group-hover:w-16" />
              <h3 className="text-xl font-bold text-white">Tech Stack</h3>
              <p className="mt-2 text-sm text-white/40">
                React, Next.js, TypeScript, WordPress, WooCommerce, APIs.
              </p>
            </div>

            <div className="glass-card group cursor-pointer rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]">
              <div className="mb-6 h-1 w-8 bg-violet-500 transition-all duration-500 group-hover:w-16" />
              <h3 className="text-xl font-bold text-white">Focus</h3>
              <p className="mt-2 text-sm text-white/40">
                Scalable systems, clean architecture, and performance-driven development.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-card flex flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <span className="text-5xl font-black tracking-tighter text-white">
                {stat.value}
              </span>
              <span className="mt-1 font-mono text-xs uppercase tracking-widest text-white/30">
                {stat.label}
              </span>
            </div>
          ))}

          {/* CTA */}
          <div className="glass-card group relative mt-auto cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/12 via-transparent to-violet-500/10 opacity-80" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/45">
                Available
              </p>

              <h4 className="mt-3 text-2xl font-bold leading-tight text-white">
                Open to Full-Stack roles in Germany & remote.
              </h4>

              <a
                href="/cv.pdf"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-pink-500/15"
              >
                Download CV <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}