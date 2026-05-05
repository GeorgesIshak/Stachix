import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project: {
    title: string;
    image: string;
    stats: string;
    tech: string[];
    description: string;
    link: string;
  };
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <article className="project-card group relative">
      <Link 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block space-y-6 md:space-y-10"
      >
        {/* Image Section */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">
          <div className="project-img-inner relative h-[120%] w-full -top-[10%]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
          </div>

          <div className="absolute top-4 right-4 md:top-8 md:right-8 rounded-full bg-fuchsia-500 px-4 py-1.5 md:px-6 md:py-2 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-black">
            {project.stats}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-1 md:px-2">
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[8px] md:text-[10px] font-mono text-white/40 uppercase border border-white/10 px-2 py-1 rounded whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
            
            {/* UPDATED TITLE: Smaller on mobile, massive on desktop */}
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter group-hover:text-fuchsia-400 transition-colors duration-500 text-white leading-none">
              {project.title}
            </h3>
            
            <p className="max-w-md text-base md:text-xl text-white/50 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          {/* Action Button: Scaled down for mobile */}
          <div className="flex h-14 w-14 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 md:w-8 md:h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
