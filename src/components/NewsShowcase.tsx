import Image from "next/image";
import Link from "next/link";

export type Post = {
  title: string;
  date: string;          // e.g. "22 August 2023"
  category: string;      // "Blog" | "News" | ...
  excerpt: string;
  image: string;         // /public path
  href: string;
  tintRightHalf?: boolean; // optional magenta half overlay
};

export default function NewsShowcase({ posts }: { posts: Post[] }) {
  return (
    <section className="relative">
      <div className="container-default py-16 sm:py-24">
        {/* Header row */}
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* left spacer (keeps rhythm like reference) */}
          <div className="md:col-span-6" />
          {/* right: editorial title + kicker */}
          <div className="md:col-span-6">
            <h2 className="text-[clamp(28px,5.2vw,56px)] font-extrabold leading-[1.05] tracking-tight">
              Blog, updates<br />and news
            </h2>
            <div className="mt-5 flex items-start gap-4">
              <span className="mt-2 h-[2px] w-10 bg-white/80" aria-hidden />
              <div>
                <p className="text-xs tracking-[0.22em] uppercase text-white/80">What’s up</p>
                <p className="mt-2 text-[var(--text-muted)]">
                  Thoughts, launches, and useful reads from the Stachix team.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid (2 columns, staggered) */}
        <div className="mt-12 grid gap-x-14 gap-y-16 md:grid-cols-2">
          {posts.map((p, i) => (
            <article key={p.href} className={i % 2 === 1 ? "md:mt-16" : ""}>
              {/* Image */}
              <Link href={p.href} className="block group">
                <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 92vw, 560px"
                      priority={i < 2}
                    />
                    {/* category chip */}
                    <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/85 text-black text-[11px] px-3 py-1 font-semibold">
                      {p.category}
                    </span>
                    {/* optional magenta half tint (like your ref) */}
                    {p.tintRightHalf && (
                      <span
                        aria-hidden
                        className="absolute inset-y-0 right-0 w-1/2 bg-[var(--accent)]/65 mix-blend-multiply"
                      />
                    )}
                  </div>
                </div>
              </Link>

              {/* Meta + title + excerpt */}
              <div className="mt-4 text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-white/65">
                {p.date}
              </div>

              <h3 className="mt-2 text-[clamp(18px,2.6vw,26px)] font-semibold leading-snug">
                <Link href={p.href} className="hover:underline underline-offset-4">
                  {p.title}
                </Link>
              </h3>

              <p className="mt-2 text-[var(--text-muted)]">
                {p.excerpt}
              </p>

              {/* Read article link with tiny triangle */}
              <Link
                href={p.href}
                className="mt-4 inline-flex items-center gap-3 text-[13px] font-semibold tracking-wide group"
              >
                {/* triangle bullet */}
                <span
                  aria-hidden
                  className="inline-block h-0 w-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-[var(--accent)]"
                />
                <span className="text-[var(--accent)] group-hover:underline underline-offset-4">
                  Read article
                </span>
              </Link>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/15 text-white text-sm font-semibold
                       backdrop-blur border border-white/20 hover:bg-white/20 transition"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
