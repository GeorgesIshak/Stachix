"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Item = {
  img: string;
  title: string;
  tag: string;
  href: string;
  features: string[];
  desc: string;
};

const ITEMS: Item[] = [
  {
    img: "/images/wordpress.jpg",
    title: "WordPress & WooCommerce Systems",
    tag: "WordPress",
    href: "/#work",
    desc: "Built 80+ custom websites with scalable architecture and dynamic content systems.",
    features: [
      "Custom Themes",
      "ACF Dynamic Content",
      "WooCommerce Logic",
      "AJAX Filtering",
    ],
  },
  {
    img: "/images/full-stack.jpg",
    title: "Next.js Applications",
    tag: "Full-Stack",
    href: "/work",
    desc: "Production-ready apps using Next.js, APIs, and modern deployment workflows.",
    features: [
      "App Router",
      "API Routes",
      "Authentication",
      "Scalable Architecture",
    ],
  },
  {
    img: "/images/ui-ux.jpg",
    title: "Frontend Engineering",
    tag: "Frontend",
    href: "/#work",
    desc: "Clean, responsive interfaces with strong focus on performance and UX.",
    features: [
      "React / TypeScript",
      "Tailwind CSS",
      "Reusable Components",
      "Responsive UI",
    ],
  },
  {
    img: "/images/shopify.jpg",
    title: "E-commerce Development",
    tag: "E-commerce",
    href: "/#work",
    desc: "Custom online stores with optimized flows and business-driven features.",
    features: [
      "WooCommerce",
      "Custom Product Logic",
      "Checkout Flows",
      "Performance Optimization",
    ],
  },
  {
    img: "/images/seo.jpg",
    title: "Performance Optimization",
    tag: "Performance",
    href: "/#work",
    desc: "Focused on speed, SEO, and delivering fast user experiences.",
    features: [
      "Core Web Vitals",
      "Lazy Loading",
      "SEO Basics",
      "Speed Improvements",
    ],
  },
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesListBlend() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");

    cards.forEach((card) => {
      const innerElements = card.querySelectorAll(".reveal-item");
      const imgWrapper = card.querySelector(".parallax-img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        card,
        { clipPath: "inset(20% 10% 20% 10% round 40px)", autoAlpha: 0, y: 40 },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
        }
      ).from(
        innerElements,
        {
          y: 20,
          autoAlpha: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      );

      if (imgWrapper) {
        gsap.to(imgWrapper, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }, { scope: containerRef });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(card, {
      "--x": `${x}px`,
      "--y": `${y}px`,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <section ref={containerRef} className="relative isolate py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.08),transparent_50%)]" />

      <div className="container-default">
        {/* HEADER */}
        <header className="mb-20 space-y-4 ">
          <span className="reveal-item inline-block text-xs font-mono uppercase tracking-[0.4em] text-fuchsia-400">
            Expertise
          </span>

          <h2 className="reveal-item text-white text-[clamp(32px,7vw,84px)] leading-[0.9] font-black tracking-tighter">
            What I actually <br /> build.
          </h2>

          <p className="reveal-item mx-auto  text-white/50 text-sm">
            Real-world development across modern frontend, full-stack systems, and scalable WordPress solutions.
          </p>
        </header>

        {/* CARDS */}
        <div className="space-y-4">
          {ITEMS.map((it, i) => (
            <article
              key={i}
              onMouseMove={handleMouseMove}
              className="service-card group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.01] transition-colors duration-700 hover:border-white/20 hover:bg-white/[0.04]"
              style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
            >
              {/* Spotlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(192,132,252,0.15)_0%,transparent_50%)]" />

              <Link
                href={it.href}
                className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center p-6 md:p-8 gap-8"
              >
                {/* IMAGE */}
                <div className="md:col-span-3 reveal-item">
                  <div className="relative h-44 md:h-52 w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:ring-white/30">
                    <div className="parallax-img relative h-[120%] w-full -top-[10%]">
                      <Image
                        src={it.img}
                        alt={it.title}
                        fill
                        className="object-cover scale-110 group-hover:scale-105 transition-transform duration-1000 ease-out"
                        sizes="(max-width: 768px) 90vw, 400px"
                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="md:col-span-6 space-y-4">
                  <h3 className="reveal-item text-white text-[clamp(24px,4vw,38px)] font-bold leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {it.title}
                  </h3>

                  <p className="reveal-item text-sm text-white/50 max-w-md">
                    {it.desc}
                  </p>

                  <ul className="reveal-item flex flex-wrap gap-2">
                    {it.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-white/40 border border-white/5 px-3 py-1 rounded-full bg-white/5 group-hover:text-fuchsia-300 group-hover:border-fuchsia-500/20 transition-all duration-500"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TAG */}
                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-8 reveal-item">
                  <span className="text-white/30 font-mono text-xs uppercase tracking-widest group-hover:text-white/70 transition-colors">
                    {it.tag}
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black group-hover:border-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}