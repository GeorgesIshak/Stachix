"use client";

import { useRef, useState } from "react"; // Added useState
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  // Filter projects to show only 3 initially
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  useGSAP(() => {
    // 1. Header Entrance
    gsap.from(".project-header > *", {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".project-header",
        start: "top bottom-=10%",
      },
    });

    // 2. Parallax and Entrance for Cards
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    cards.forEach((card) => {
      const innerImg = card.querySelector(".project-img-inner");
      if (innerImg) {
        gsap.to(innerImg, {
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

    // CRITICAL: Refresh GSAP whenever the list length changes
    ScrollTrigger.refresh();
  }, { scope: containerRef, dependencies: [showAll] }); // Dependencies ensures it runs again when showAll changes

  return (
    <div ref={containerRef} className="px-6 py-24 ">
      <header className="project-header mb-32 max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-fuchsia-500">
          Selected Works
        </span>
        <h2 className="mt-6 text-[clamp(40px,8vw,100px)] font-black leading-[0.8] tracking-tighter">
          Crafting digital <br /> excellence.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-32 md:gap-y-56">
        {displayedProjects.map((project, i) => {
          const isLarge = (i + 1) % 3 === 0; 
          const isEven = i % 2 !== 0;        

          return (
            <div
              key={i}
              className={`project-card col-span-1 
                ${isLarge ? "md:col-span-10 md:col-start-2" : "md:col-span-6"} 
                ${!isLarge && isEven ? "md:mt-48" : ""} 
              `}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>

      {/* LOAD MORE BUTTON */}
      {!showAll && PROJECTS.length > 3 && (
        <div className="mt-48 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="group relative px-12 py-6 overflow-hidden rounded-full border border-white/20 transition-all hover:border-fuchsia-500"
          >
            <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-white group-hover:text-black transition-colors duration-300">
              Discover More Works ({PROJECTS.length - 3})
            </span>
            <div className="absolute inset-0 z-0 translate-y-full bg-fuchsia-500 transition-transform duration-300 group-hover:translate-y-0" />
          </button>
        </div>
      )}
    </div>
  );
}
