type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-xs uppercase tracking-[0.32em] text-ink/55">{eyebrow}</p>
      <div className="max-w-3xl space-y-3">
        <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-7 text-ink/72 sm:text-base">{description}</p>
      </div>
    </div>
  );
}
