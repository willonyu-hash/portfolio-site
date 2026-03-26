type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-rule space-y-4 pt-6">
      <p className="text-[11px] uppercase tracking-[0.34em] text-ink/48">{eyebrow}</p>
      <div className="max-w-3xl space-y-4">
        <h2 className="font-display text-[2rem] leading-[1.02] text-ink sm:text-[2.6rem]">{title}</h2>
        <p className="max-w-xl text-sm leading-7 text-ink/66 sm:text-[15px]">{description}</p>
      </div>
    </div>
  );
}
