interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export default function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div data-reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-soft">{eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>}
      </div>
      {action}
    </div>
  );
}
