import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  priority?: boolean;
}

const domainOf = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export default function ProjectCard({ project, featured = false, priority = false }: ProjectCardProps) {
  return (
    <article
      data-reveal
      className={`group relative overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong ${
        featured ? "md:col-span-2 md:grid md:grid-cols-[1.35fr_1fr]" : "flex flex-col"
      }`}
    >
      <div className={`relative overflow-hidden bg-surface-2 ${featured ? "aspect-[3/2] md:aspect-auto md:min-h-[26rem]" : "aspect-[3/2]"}`}>
        <Image
          src={project.image}
          alt={`${project.title} website shown on a laptop`}
          fill
          priority={priority}
          sizes={featured ? "(max-width: 768px) 100vw, 680px" : "(max-width: 768px) 100vw, 560px"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 md:p-8 ${featured ? "md:justify-center" : ""}`}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">
          {project.category} <span className="text-line-strong">/</span> {project.location}
        </p>

        <h3 className={`mt-3 font-semibold tracking-tight text-ink ${featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {/* Stretched link: the whole card is clickable */}
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </a>
        </h3>

        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-ink/80 transition-colors group-hover:text-accent-soft">
          {domainOf(project.link)}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
        </p>
      </div>

      {/* Keyboard focus ring for the stretched link */}
      <span className="pointer-events-none absolute inset-0 rounded-3xl ring-accent group-has-[a:focus-visible]:ring-2" aria-hidden />
    </article>
  );
}
