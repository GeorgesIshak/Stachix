"use client";

import { ArrowUpRight, Linkedin, Github } from "lucide-react";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="relative w-full border-t border-white/10 bg-transparent text-white overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

          {/* BRAND */}
          <div className="group max-w-full lg:max-w-[50%]">
            <h2 className="text-[clamp(40px,10vw,100px)] font-black uppercase tracking-[-0.05em] leading-[0.8] mb-8 select-none">
              GEORGES<br />
              <span className="stroke-text fill-on-hover italic opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:text-pink-500">
                ISHAK.
              </span>
            </h2>

            <p className="text-sm md:text-base text-white/50 max-w-md font-light leading-relaxed tracking-tight">
              {/* Updated role to reflect Engineer's status */}
              Software Engineer specializing in building{" "}
              <span className="text-white font-medium italic">
                high-performance web architecture
              </span>
              .<br />
              Based in Stolberg, Germany.
            </p>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-10 w-full lg:w-auto lg:items-end">
            <div className="space-y-3 lg:text-right">
              <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-pink-500/80">
                Ready to collaborate?
              </span>

              <a
                href="mailto:georgesishak112@gmail.com"
                className="group flex items-center gap-4 text-4xl md:text-6xl font-bold tracking-tighter hover:text-pink-500 transition-all duration-500"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 opacity-30 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500" />
              </a>

              <p className="text-white/40 text-sm font-mono">
                Currently in NRW • Available for Full-Stack roles
              </p>
            </div>

            {/* SOCIALS */}
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {[
                {
                  name: "LinkedIn",
                  icon: <Linkedin size={18} />,
                  link: "https://linkedin.com/in/george-ishak-879b7b239",
                },
                {
                  name: "GitHub",
                  icon: <Github size={18} />,
                  link: "https://github.com/GeorgesIshak",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:bg-white hover:text-black group/btn"
                >
                  <span className="opacity-60 group-hover/btn:opacity-100 transition-opacity">
                    {social.icon}
                  </span>
                  <span className="font-bold text-[11px] uppercase tracking-wider">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full px-6 md:px-12 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/20 pt-8 text-[11px] font-bold text-white/60">

          <div className="flex gap-10">
             {/* Kept only Impressum - Mandatory in Germany */}
            <a href="#" className="hover:text-pink-500 transition-colors uppercase tracking-[0.2em]">
              Impressum
            </a>
          </div>

          <div className="text-center md:text-right opacity-60 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            © {currentYear} Georges Ishak — Software Engineer
          </div>

        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
        .group:hover .stroke-text {
          color: inherit;
          -webkit-text-stroke: 1px transparent;
        }
      `}</style>
    </footer>
  );
}
