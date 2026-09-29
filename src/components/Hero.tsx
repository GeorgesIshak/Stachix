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
    // Panels are stacked by CSS (absolute + opacity) so panel 1 paints before JS runs
    gsap.set([".panel-2", ".panel-3"], { yPercent: 15 });

    const tl = gsap.timeline({
      scrollTrigger: {
        // The section is 300vh tall with a sticky inner screen (CSS does the pinning),
        // so the panels change over 200vh of scroll — same feel as before, but no
        // DOM re-wrapping after load and smoother scrolling on phones.
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
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
    <section ref={container} className="relative h-[300vh] w-full text-white bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
      
      {/* PANEL 1: IDENTITY */}
      <section className="panel panel-1 absolute inset-0 z-[3] flex items-center justify-center text-center">
        <div className="px-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.8em] text-pink-500">
            Georges Ishak
          </p>
          <h1 className="text-[14vw] font-black uppercase leading-[0.8] tracking-tighter md:text-[10vw]">
            Developer<span className="text-pink-500">.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-sm text-sm tracking-wide text-white/60">
            Building performance-first <br/> web experiences.
          </p>
        </div>
      </section>

      {/* PANEL 2: CAPABILITIES */}
      <section className="panel panel-2 invisible absolute inset-0 z-[2] flex items-center justify-center text-center opacity-0">
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
      <section className="panel panel-3 invisible absolute inset-0 z-[1] flex items-center justify-center text-center opacity-0">
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
              className="group relative rounded-full bg-pink-600 px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition hover:bg-pink-500 hover:scale-105 active:scale-95"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>
      </div>
    </section>
  );
}
