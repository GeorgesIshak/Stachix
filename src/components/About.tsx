import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

const FACTS = [
  { label: "Location", value: "Stolberg (NRW), Germany" },
  { label: "Work permit", value: "Chancenkarte" },
  { label: "Education", value: "Diplôme d'Ingénieur, Software Engineering" },
  { label: "Languages", value: "Arabic, English (C1), French (B1), German (B1 → B2)" },
];

const STACK = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "PHP / Laravel", "Prisma", "PostgreSQL", "MySQL", "REST APIs"] },
  { group: "CMS & E-commerce", items: ["WordPress", "WooCommerce", "ACF", "Custom plugins", "Shopify"] },
  { group: "Tools", items: ["Git & GitHub", "Vercel", "Docker", "CI/CD", "Technical SEO"] },
];

export default function About() {
  return (
    <section id="about" className="container-default py-20 md:py-28">
      <SectionHeading eyebrow="About" title="Engineer by training, builder by habit." />

      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <div data-reveal className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface-2">
            <Image
              src="/images/portrait.webp"
              alt="Portrait of Georges Ishak"
              fill
              sizes="(max-width: 768px) 90vw, 380px"
              className="object-cover"
            />
          </div>
        </div>

        <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I studied Computer and Communications Engineering at Antonine University with a specialization in
              software engineering, then spent the following years shipping real products for real clients.
            </p>
            <p>
              At <span className="text-ink">Klev</span> I delivered 80+ WordPress and WooCommerce websites end-to-end.
              As a freelancer I now focus on <span className="text-ink">Next.js and TypeScript</span> — building
              animated marketing sites, e-commerce platforms and contributing to larger multi-tenant products.
            </p>
            <p>
              I recently moved to Germany and I&apos;m looking for a full-time full-stack or frontend role where I can
              own features from database to UI.
            </p>
          </div>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-line pt-8 sm:grid-cols-2">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{f.label}</dt>
                <dd className="mt-1.5 text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div id="skills" className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
        {STACK.map((s, i) => (
          <div
            key={s.group}
            data-reveal
            style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
            className="rounded-3xl border border-line bg-surface p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-ink/90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
