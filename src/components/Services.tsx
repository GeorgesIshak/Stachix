import { Code2, Gauge, LayoutTemplate, ShoppingBag } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const SERVICES = [
  {
    icon: Code2,
    title: "Next.js applications",
    desc: "Production web apps with the App Router, server components, API routes and a clean TypeScript codebase.",
    points: ["React & TypeScript", "API integrations", "Prisma & PostgreSQL"],
  },
  {
    icon: LayoutTemplate,
    title: "Frontend & interaction",
    desc: "Responsive, accessible interfaces with purposeful motion that feels premium without slowing the page down.",
    points: ["Tailwind CSS", "GSAP & Framer Motion", "Reusable components"],
  },
  {
    icon: ShoppingBag,
    title: "WordPress & WooCommerce",
    desc: "Custom themes, plugins and stores that clients can manage themselves — 80+ delivered end-to-end.",
    points: ["Custom themes & ACF", "Checkout & payments", "AJAX product filters"],
  },
  {
    icon: Gauge,
    title: "Performance & SEO",
    desc: "Faster load times and better Core Web Vitals through image, font and bundle optimization plus technical SEO.",
    points: ["Core Web Vitals", "Lazy loading", "Technical SEO"],
  },
];

export default function Services() {
  return (
    <section id="services" className="container-default py-20 md:py-28">
      <SectionHeading
        eyebrow="What I do"
        title="From idea to a fast, launched product."
        description="I work across the stack, so one person can take a project from design handoff to deployment."
      />

      <div className="grid gap-5 sm:grid-cols-2 md:gap-6">
        {SERVICES.map(({ icon: Icon, title, desc, points }, i) => (
          <article
            key={title}
            data-reveal
            style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
            className="rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong md:p-8"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent-soft">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{desc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {points.map((p) => (
                <li key={p} className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
