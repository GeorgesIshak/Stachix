import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function WorkSection() {
  return (
    <section id="work" className="container-default py-20 md:py-28">
      <SectionHeading
        eyebrow="Selected work"
        title="Live projects for real clients."
        description="A selection of websites and stores I've designed, built and launched — from animated Next.js sites to full WooCommerce shops."
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} featured={i === 0} priority={i === 0} />
        ))}
      </div>
    </section>
  );
}
