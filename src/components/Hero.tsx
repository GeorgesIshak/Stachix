import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { SITE } from "@/data/site";

const STATS = [
  { value: "80+", label: "Websites shipped" },
  { value: "5+", label: "Next.js apps in production" },
  { value: "5", label: "Countries with clients" },
];

export default function Hero() {
  return (
    <section className="container-default flex min-h-[92svh] flex-col justify-center pb-16 pt-32 md:pt-36">
      <div className="hero-in inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
        </span>
        Open to full-time roles · Germany &amp; remote
      </div>

      <h1
        style={{ "--hero-delay": "80ms" } as React.CSSProperties}
        className="hero-in mt-8 max-w-4xl text-[clamp(2.6rem,6.4vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink text-balance"
      >
        Full-stack developer building <span className="text-accent">fast</span>, polished web products.
      </h1>

      <p
        style={{ "--hero-delay": "160ms" } as React.CSSProperties}
        className="hero-in mt-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
      >
        I&apos;m Georges — I build Next.js applications and custom WordPress &amp; WooCommerce stores for clients
        across Europe, the Middle East and the US.
      </p>

      <div
        style={{ "--hero-delay": "240ms" } as React.CSSProperties}
        className="hero-in mt-10 flex flex-wrap items-center gap-3"
      >
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(240_82_156/0.7)] transition-transform hover:-translate-y-0.5"
        >
          View my work <ArrowDown className="h-4 w-4" aria-hidden />
        </a>
        <a
          href={SITE.cv.en}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/[0.06]"
        >
          Download CV <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
        <div className="ml-1 flex items-center gap-1">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>

      <dl
        style={{ "--hero-delay": "320ms" } as React.CSSProperties}
        className="hero-in mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-line pt-8 md:mt-20"
      >
        {STATS.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">{s.value}</dd>
            <dd className="mt-1 text-sm text-subtle">{s.label}</dd>
          </div>
        ))}
      </dl>

      <p className="hero-in mt-8 inline-flex items-center gap-2 text-sm text-subtle">
        <MapPin className="h-4 w-4" aria-hidden /> Based in {SITE.location}
      </p>
    </section>
  );
}
