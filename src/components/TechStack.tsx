"use client";

const SKILLS = [
  {
    category: "Frontend Engineering",
    items: ["React", "Next.js (App Router)", "TypeScript", "Tailwind CSS"],
    glow: "from-fuchsia-500/20",
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Next.js API Routes", "Prisma", "REST APIs"],
    glow: "from-violet-500/20",
  },
  {
    category: "WordPress & E-commerce",
    items: ["WordPress", "WooCommerce", "ACF", "Custom Plugins"],
    glow: "from-pink-500/20",
  },
  {
    category: "UI & Motion",
    items: ["GSAP", "Framer Motion", "Git", "Vercel Deployment"],
    glow: "from-white/10",
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] px-6 py-20 backdrop-blur-xl md:px-10 md:py-28">

      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[340px] w-[340px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
      </div>

      <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

        {/* LEFT INTRO */}
        <div className="max-w-xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.35em] text-fuchsia-400">
            Technical Stack
          </span>

          <h2 className="mt-8 text-[clamp(40px,7vw,88px)] font-black leading-[0.9] tracking-[-0.05em] text-white">
            Technologies<br />
            I use in production.
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-white/60 md:text-lg">
            A practical development stack focused on building scalable applications,
            fast user interfaces, and real-world WordPress & e-commerce systems —
            not just experimental tools.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid gap-5 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <article
              key={group.category}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-[1px] rounded-[29px] border border-white/5" />

              <div className="relative z-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/35">
                  {group.category}
                </p>

                <ul className="mt-8 space-y-4">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white md:text-xl"
                    >
                      <span className="h-2 w-2 rounded-full bg-white/20 transition-all duration-300 group-hover:bg-fuchsia-400 group-hover:scale-125" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}