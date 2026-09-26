import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import Services from "@/components/Services";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { SITE } from "@/data/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.role,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  image: `${SITE.url}/images/portrait.webp`,
  address: { "@type": "PostalAddress", addressLocality: "Stolberg", addressRegion: "NRW", addressCountry: "DE" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Antonine University" },
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "WordPress", "WooCommerce"],
  sameAs: [SITE.linkedin, SITE.github],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <WorkSection />
      <Services />
      <About />
      <Experience />
    </>
  );
}
