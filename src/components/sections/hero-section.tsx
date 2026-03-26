import Image from "next/image";

import type { ProfileContent } from "@/lib/content-types";

type HeroSectionProps = {
  profile: ProfileContent;
  resumePath: string;
};

export function HeroSection({ profile, resumePath }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16 lg:py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.34em] text-ink/50">{profile.currentTitle}</p>
            <div className="space-y-3">
              <h1 className="font-display text-5xl leading-[0.94] text-ink sm:text-6xl">{profile.name}</h1>
              <p className="text-sm uppercase tracking-[0.28em] text-ink/48">{profile.englishName}</p>
            </div>
            <p className="max-w-xl text-lg leading-8 text-ink/84 sm:text-xl">{profile.headline}</p>
          </div>

          <div className="max-w-xl space-y-4 text-sm leading-7 text-ink/72 sm:text-base">
            <p>{profile.intro}</p>
            <p>{profile.statement}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-xs uppercase tracking-[0.22em] text-sand transition hover:bg-accent"
            >
              View selected work
            </a>
            <a
              href={resumePath}
              className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-xs uppercase tracking-[0.22em] text-ink transition hover:border-ink"
            >
              Resume file
            </a>
          </div>

          <dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label} className="space-y-2">
                <dt className="text-[11px] uppercase tracking-[0.24em] text-ink/42">{fact.label}</dt>
                <dd className="text-sm leading-6 text-ink/76">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-line bg-white shadow-panel">
            <Image
              src={profile.heroMedia.src}
              alt={profile.heroMedia.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
          {profile.heroMedia.caption ? (
            <p className="text-xs uppercase tracking-[0.24em] text-ink/42">{profile.heroMedia.caption}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
