import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { RESUME } from "@/data/resume";
import { SITE } from "@/data/site";

// Pulled from the CV data (src/data/resume.ts) so the site and the PDF never disagree.
const { workHistory, education } = RESUME.en;

const ITEMS = [
  ...workHistory.map((job) => ({
    date: job.date,
    title: job.title,
    org: [job.company, job.location].filter(Boolean).join(" · "),
    desc: job.subtitle,
    highlights: job.bullets.slice(0, 2),
  })),
  ...education.map((edu) => ({
    date: edu.date,
    title: edu.title,
    org: edu.place,
    desc: edu.note,
    highlights: [] as string[],
  })),
];

export default function Experience() {
  return (
    <section id="experience" className="container-default py-20 md:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked and studied."
        action={
          <a
            href={SITE.cv.en}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.06]"
          >
            Full CV (PDF) <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        }
      />

      <ol className="border-t border-line">
        {ITEMS.map((item) => (
          <li
            key={item.title + item.date}
            data-reveal
            className="grid gap-3 border-b border-line py-8 md:grid-cols-[12rem_1fr] md:gap-10 md:py-10"
          >
            <p className="font-mono text-sm text-subtle">{item.date}</p>
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{item.title}</h3>
              <p className="mt-1 text-accent-soft">{item.org}</p>
              {item.desc && <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.desc}</p>}
              {item.highlights.length > 0 && (
                <ul className="mt-4 max-w-2xl space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex gap-3 leading-relaxed text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-subtle" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
