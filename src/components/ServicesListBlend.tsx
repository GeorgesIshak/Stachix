import Image from "next/image";
import Link from "next/link";

type Item = {
  img: string;
  title: string;
  tag: string;
  href: string;
  features: string[];
};

const ITEMS: Item[] = [
  {
    img: "/images/wordpress.jpg",
    title: "Custom WordPress & Plugins",
    tag: "WordPress",
    href: "/services/wordpress",
    features: ["Custom Code", "Plugins", "WooCommerce", "Elementor Widgets"],
  },
  {
    img: "/images/shopify.jpg",
    title: "Shopify Stores that Convert",
    tag: "Shopify",
    href: "/services/shopify",
    features: ["Theme Customization", "Metafields", "CSV Imports", "Speed Optimization"],
  },
  {
    img: "/images/ui-ux.jpg",
    title: "Interfaces & Prototypes",
    tag: "UI/UX",
    href: "/services/ui-ux",
    features: ["Wireframes", "High-Fidelity Design", "Prototypes", "Design Systems"],
  },
  {
    img: "/images/full-stack.jpg",
    title: "Next.js & API Development",
    tag: "Full-Stack",
    href: "/services/full-stack",
    features: ["Next.js / React", "TypeScript", "Custom APIs", "Vercel Deployments"],
  },
  {
    img: "/images/seo.jpg",
    title: "Technical SEO & Growth",
    tag: "SEO",
    href: "/services/seo",
    features: ["On-Page SEO", "Technical Audit", "Performance Fixes", "Content Strategy"],
  },
];

export default function ServicesListBlend() {
  return (
    <section className="relative isolate">
      {/* Background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(1200px_600px_at_70%_60%,rgba(0,0,0,0.18),transparent)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20" />

      <div className="container-default pb-10 sm:pb-16">
        {/* Heading */}
        <h2 className="text-white text-[clamp(28px,6vw,72px)] leading-[0.95] font-extrabold tracking-tight text-center">
          We offer a wide range<br className="hidden sm:block" /> of design & dev services.
        </h2>

        {/* Rows */}
        <div className="mt-10 sm:mt-14 space-y-8">
          {ITEMS.map((it, i) => (
            <article
              key={i}
              className="rounded-[20px] border border-white/15 bg-white/8
                         hover:bg-white/12 transition shadow-[0_1px_0_rgba(255,255,255,0.06)]
                         backdrop-blur-md"
            >
              <Link
                href={it.href}
                className="grid grid-cols-1 md:grid-cols-12 items-center p-4 sm:p-6 gap-6"
                aria-label={`${it.title} — learn more`}
              >
                {/* Image */}
                <div className="md:col-span-3">
                  <div className="relative h-36 w-full sm:h-48 rounded-xl overflow-hidden ring-1 ring-white/10">
                    <Image
                      src={it.img}
                      alt={it.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 360px"
                      priority={i === 0}
                    />
                  </div>
                </div>

                {/* Title + Features */}
                <div className="md:col-span-6">
                  <h3 className="text-white text-[clamp(22px,3.4vw,36px)] font-semibold tracking-tight">
                    {it.title}
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-white/80 text-sm sm:text-base">
                    {it.features.map((f, idx) => (
                      <li key={idx} className="before:content-['•'] before:mr-1 before:text-fuchsia-400">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tag + Arrow */}
                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                  <span className="text-white/85 text-sm sm:text-base">{it.tag}</span>
                  <span
                    className="inline-flex h-10 w-16 sm:w-14 items-center justify-center rounded-full
                               border border-white/25 bg-white/15 text-white
                               hover:bg-white hover:text-black transition"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
