import ServicesListBlend from "@/components/ServicesListBlend";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="relative w-full">
        <div className="relative h-[60vh] min-h-[800px]">
          <div className="container-default h-full flex items-center pt-24 sm:pt-28">
            <div className="grid w-full grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 max-w-4xl">
                <p className="text-xs sm:text-sm tracking-[0.22em] text-white/90 uppercase">
                  WordPress • Shopify • Next.js • SEO • UI/UX
                </p>
                <h1 className="mt-4 text-[clamp(40px,7vw,76px)] font-extrabold tracking-[-0.02em] leading-[0.95]">
                  We style your online presence
                </h1>
                <p className="mt-5 max-w-2xl text-base sm:text-lg text-[var(--text-muted)]">
                  Custom sites that load fast, convert better, and look premium — built by Stachix.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/portfolio" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white text-sm font-semibold shadow hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70">
                    View portfolio
                  </Link>
                  <Link href="/contact" className="btn-secondary">Get a free audit</Link>
                </div>
              </div>

              {/* Right visual */}
              <div className="relative lg:col-span-6 mt-12 lg:mt-0 flex">
                <div className="sphere-glow" />
                <div className="relative z-10 shape-glow shape-float shape-spin-3d ml-auto lg:mr-[-24px]" style={{ width: "620px", height: "620px", maxWidth: "90vw" }}>
                  <Image
                    src="/images/abstract-sphere.png"
                    alt="Abstract digital sphere"
                    fill
                    className="object-contain object-right select-none pointer-events-none"
                    sizes="(max-width: 640px) 360px,(max-width: 1024px) 440px,(max-width: 1280px) 620px,700px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-4 pt-4">
          <ServicesListBlend />
        </div>

      </section>
    </main>
  );
}
