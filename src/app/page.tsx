"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Hero from "@/components/Hero";
import ServicesListBlend from "@/components/ServicesListBlend";
import ProjectSection from "@/components/ProjectSection";
import AboutSection from "@/components/AboutSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import TechStack from "@/components/TechStack";
import { SITE } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Stolberg", addressRegion: "NRW", addressCountry: "DE" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Antonine University" },
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "WordPress", "WooCommerce"],
  sameAs: [SITE.linkedin, SITE.github],
};

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          const { desktop } = ctx.conditions as { desktop: boolean };

          // 1. Reveal animation for standard sections
          // (3D tilt on desktop only — rotating huge sections is costly on phones)
          gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
            const inner = section.querySelector(".reveal-inner");
            if (!inner) return;

            gsap.fromTo(
              inner,
              { y: desktop ? 100 : 60, scale: desktop ? 0.9 : 0.96, rotateX: desktop ? 15 : 0, autoAlpha: 0 },
              {
                y: 0,
                scale: 1,
                rotateX: 0,
                autoAlpha: 1,
                duration: 1.4,
                ease: "expo.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
                  end: desktop ? "top 20%" : "top 60%",
                  scrub: 1,
                },
              }
            );
          });

          // 2. Parallax effect to make sections feel layered (desktop only)
          if (desktop) {
            gsap.to(".reveal-section", {
              yPercent: -10,
              ease: "none",
              scrollTrigger: {
                trigger: scrollContainer.current,
                scrub: true,
              },
            });
          }
        }
      );
    },
    { scope: scrollContainer }
  );

  return (
    <main ref={scrollContainer} className="relative text-white bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      {/* Hero doesn't need reveal-section as it's the first thing seen */}
      <Hero />

      <div className="h-[8vh]" />

      {/* Services Section */}
      <section id="services" className="reveal-section container-default py-12 md:py-16">
        <div className="reveal-inner rounded-[32px]">
          <ServicesListBlend />
        </div>
      </section>

      {/* Projects/Works Section */}
      <section id="work" className="reveal-section container-default py-12 md:py-16">
        <div className="reveal-inner rounded-[32px]">
          <ProjectSection />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="reveal-section container-default py-12 md:py-16">
        <div className="reveal-inner rounded-[32px]">
          <AboutSection />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="reveal-section container-default py-12 md:py-16">
        <div className="reveal-inner rounded-[32px]">
          <TechStack />
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="reveal-section container-default py-12 md:py-16">
        {/* Added reveal-inner here so it animates like the others */}
        <div className="reveal-inner rounded-[32px]">
          <ExperienceTimeline />
        </div>
      </section>

      <div className="h-[12vh]" />
    </main>
  );
}
