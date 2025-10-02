export default function SiteFooter() {
  return (
    <footer role="contentinfo" className="bg-[linear-gradient(to_bottom,#2a2a72_0%,#1a1a40_50%,#0F0F1F_100%)] text-white">
      {/* Top Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-20">
          <h2
            className="text-6xl sm:text-6xl md:text-8xl font-bold uppercase tracking-[0.16em] leading-[1.22]"
            style={{ wordSpacing: "0.3em" }}
          >
            <span className="block">LET’S</span>
            <span className="block">CONNECT!</span>
          </h2>

          <div className="space-y-14">
            <div>
              <div className="text-l text-white/90">Email Address</div>
              <a
                href="mailto:hello@website.com"
                className="mt-3 block text-4xl sm:text-4xl font-semibold hover:opacity-90"
              >
                hello@website.com
              </a>
            </div>
            <div>
              <div className="text-l text-white/90">Contact</div>
              <a
                href="tel:5551234567"
                className="mt-3 block text-4xl sm:text-4xl font-semibold hover:opacity-90"
              >
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 py-6">
            {/* Left: Logo */}
            <div className="justify-self-start">
              <span className="block text-3xl sm:text-4xl font-bold tracking-tight">
                Stachix.
              </span>
            </div>

            {/* Middle: Socials */}
            <nav aria-label="Social media" className="justify-self-center">
              <ul className="flex flex-wrap items-center gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-full px-5 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/5 transition"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-full px-5 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/5 transition"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center rounded-full px-5 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/5 transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </nav>

            {/* Right: Copyright */}
            <div className="justify-self-start md:justify-self-end text-white text-xs sm:text-sm whitespace-nowrap">
              © {new Date().getFullYear()} Stachix. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
