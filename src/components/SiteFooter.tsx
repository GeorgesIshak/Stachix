import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import { SITE } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="container-default pb-10 pt-8">
      <section
        id="contact"
        data-reveal
        className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-14 text-center md:px-12 md:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_0%,rgb(240_82_156/0.16),transparent_70%)]"
          aria-hidden
        />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">Contact</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink text-balance md:text-6xl">
            Hiring a full&#8209;stack developer?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m available for full-time roles in Germany and remote. Send me a message and let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgb(240_82_156/0.7)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden /> {SITE.email}
            </a>
            <CopyEmailButton email={SITE.email} />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {[
              { label: "LinkedIn", href: SITE.linkedin, icon: Linkedin },
              { label: "GitHub", href: SITE.github, icon: Github },
              { label: "CV (English)", href: SITE.cv.en },
              { label: "Lebenslauf (Deutsch)", href: SITE.cv.de },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
              >
                {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                {label}
                {!Icon && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 text-sm text-subtle sm:flex-row">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}
