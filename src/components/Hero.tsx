"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroBanner() {
  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".panel");

    // All panels centered, transparent background
    gsap.set(sections, { position: "absolute", inset: 0, autoAlpha: 0 });
    gsap.set(".panel-1", { autoAlpha: 1, yPercent: 0, zIndex: 3 });
    gsap.set(".panel-2", { yPercent: 15, zIndex: 2 });
    gsap.set(".panel-3", { yPercent: 15, zIndex: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=200%", // Faster scroll for LinkedIn users
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.addLabel("start")
      .to(".panel-1", { autoAlpha: 0, yPercent: -10, duration: 1 })
      .to(".panel-2", { autoAlpha: 1, yPercent: 0, duration: 1 }, "-=0.7") 
      .to({}, { duration: 0.3 }) 
      .to(".panel-2", { autoAlpha: 0, yPercent: -10, duration: 1 })
      .to(".panel-3", { autoAlpha: 1, yPercent: 0, duration: 1 }, "-=0.7");

  }, { scope: container });

  return (
    <main ref={container} className="relative h-screen w-full overflow-hidden text-white bg-transparent">
      
      {/* PANEL 1: IDENTITY */}
      <section className="panel panel-1 flex items-center justify-center text-center">
        <div className="px-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.8em] text-pink-500">
            Georges Ishak
          </p>
          <h1 className="text-[14vw] font-black uppercase leading-[0.8] tracking-tighter md:text-[10vw]">
            Developer<span className="text-pink-500">.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-sm text-sm tracking-wide text-white/40">
            Building performance-first <br/> web experiences.
          </p>
        </div>
      </section>

      {/* PANEL 2: CAPABILITIES */}
      <section className="panel panel-2 flex items-center justify-center text-center">
        <div className="px-6">
          <div className="mb-10 font-mono text-[9px] uppercase tracking-[0.5em] text-pink-500/60">
            Next.js • TypeScript • WordPress
          </div>
          <h2 className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-[8.5vw]">
            Clean Code. <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
              Fast Delivery.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-base font-light text-white/50">
            Focusing on <span className="text-white">optimization</span> and <span className="text-white">user-centric</span> architecture.
          </p>
        </div>
      </section>

      {/* PANEL 3: CASE STUDIES */}
      <section className="panel panel-3 flex items-center justify-center text-center">
        <div className="px-6">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.5em] text-pink-400/80">
            Selection of work
          </p>
          <h2 className="text-6xl font-bold leading-[0.85] tracking-tight md:text-[9vw]">
            Proof in the <br />
            <span className="italic text-white/30">Projects.</span>
          </h2>
          <div className="mt-14 flex justify-center">
            <Link
              href="/#work"
              className="group relative rounded-full bg-pink-600 px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all hover:bg-pink-500 hover:scale-105 active:scale-95"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
