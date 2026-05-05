"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, 
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.95 // Adds a subtle "growing" effect
      }, 
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Triggers when the top of section hits 85% of viewport
          toggleActions: "play none none reverse", // Plays forward, reverses if you scroll back up
        }
      }
    );
  }, { scope: sectionRef });

  return <div ref={sectionRef} className="will-change-transform">{children}</div>;
}
