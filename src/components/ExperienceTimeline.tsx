"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    date: "Now",
    role: "Software Engineer | Available for Hire",
    company: "Stolberg, Germany",
    desc: "Relocated to NRW with a valid Chancenkarte. Currently enrolled in an intensive German language course targeting professional fluency (B2/C1). Available for immediate start in Frontend or Full-Stack roles.",
  },
  {
    date: "2024 - Present",
    role: "Full-Stack Engineer (Freelance)",
    company: "Remote",
    desc: "Architecting production-grade Next.js applications and multi-tenant platforms. Focused on high-performance UI (GSAP/Framer Motion) and scalable backend integration using TypeScript and Prisma.",
  },
  {
    date: "2023 - 2025",
    role: "WordPress Developer",
    company: "Klev",
    desc: "Shipped 80+ custom WordPress & WooCommerce solutions.",
  },
  {
    date: "2018 - 2023",
    role: "B.Eng. in Software Engineering",
    company: "Antonine University",
    desc: "Specialized in Software Architecture and Networks.",
  },
];

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.from(".timeline-line-progress", {
        scaleY: 0,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // 🔥 THE REAL FIX
      const cards = gsap.utils.toArray(".experience-card") as HTMLElement[];

      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;

        gsap.from(card, {
          x: isEven ? -80 : 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative max-w-6xl mx-auto py-32 px-6 overflow-hidden"
    >
      <div className="absolute left-8 md:left-1/2 top-0 w-[1px] h-full bg-white/5 -translate-x-1/2" />
      <div className="timeline-line-progress absolute left-8 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-fuchsia-500 via-cyan-400 to-transparent -translate-x-1/2 origin-top z-0" />

      {EXPERIENCES.map((exp, i) => (
        <div
          key={i}
          className={`relative mb-28 flex flex-col md:flex-row items-start ${
            i % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="absolute left-8 md:left-1/2 top-10 -translate-x-1/2 z-10">
            <div className="w-4 h-4 rounded-full bg-white border-[3px] border-fuchsia-500" />
          </div>

          <div
            className={`w-full md:w-1/2 pl-16 md:pl-0 ${
              i % 2 === 0 ? "md:pr-16" : "md:pl-16"
            }`}
          >
            <div className="experience-card group">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all">
                <span className="text-[10px] font-mono uppercase tracking-widest text-fuchsia-400">
                  {exp.date}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white mt-3">
                  {exp.role}
                </h3>

                <p className="text-white/40 text-sm mt-1 uppercase tracking-wider">
                  {exp.company}
                </p>

                <p className="mt-5 text-white/60 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}