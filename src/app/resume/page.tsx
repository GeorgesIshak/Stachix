import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Preview",
  robots: { index: false, follow: false },
};

// Preview page for the CV. Edit src/data/resume.ts, then refresh this page.
export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const { lang: langParam } = await searchParams;
  const lang = langParam === "de" ? "de" : "en";

  const tab = (value: "en" | "de", label: string) => (
    <a
      href={`/resume?lang=${value}`}
      className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
        lang === value ? "bg-pink-600 text-white" : "border border-white/15 text-white/60 hover:text-white"
      }`}
    >
      {label}
    </a>
  );

  return (
    <main className="container-default flex min-h-screen flex-col gap-6 px-4 pb-16 pt-36 text-white">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {tab("en", "English")}
          {tab("de", "Deutsch")}
        </div>
        <a
          href={`/cv?lang=${lang}&download`}
          className="rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-black hover:bg-pink-500 hover:text-white"
        >
          Download PDF
        </a>
      </div>

      <iframe
        key={lang}
        src={`/cv?lang=${lang}`}
        title="CV preview"
        className="h-[85vh] w-full rounded-2xl border border-white/10 bg-white"
      />
    </main>
  );
}
