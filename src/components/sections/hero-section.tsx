import Image from "next/image";

import type { ProfileContent } from "@/lib/content-types";

type HeroSectionProps = {
  profile: ProfileContent;
  resumePath: string;
};

export function HeroSection({ profile, resumePath }: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-line/80">
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-10 lg:py-10">
        <div className="reveal-up flex flex-col justify-between gap-10 py-4 lg:py-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ink/46">
                <span>{profile.currentTitle}</span>
                <span className="h-px w-8 bg-ink/18" />
                <span>Trend Designer</span>
                <span className="h-px w-8 bg-ink/18" />
                <span>Sports Direction</span>
                <span className="h-px w-8 bg-ink/18" />
                <span>AI Practice</span>
              </div>
              <div className="space-y-4">
                <h1 className="font-display text-[3.5rem] leading-[0.88] tracking-[-0.03em] text-ink sm:text-[4.7rem] lg:max-w-[8ch] lg:text-[6.4rem]">
                  {profile.name}
                </h1>
                <p className="text-[11px] uppercase tracking-[0.34em] text-ink/42 sm:text-xs">{profile.englishName}</p>
              </div>
              <p className="max-w-xl text-xl leading-[1.5] text-ink/82 sm:text-[1.45rem] lg:max-w-[18ch]">
                {profile.headline}
              </p>
            </div>

            <div className="max-w-lg space-y-4 text-[15px] leading-8 text-ink/66">
              <p>{profile.intro}</p>
              <p>{profile.statement}</p>
            </div>
          </div>

          <div className="space-y-7">
            <div className="flex flex-wrap gap-3">
              <a
                href="#reports"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-sand transition duration-300 hover:bg-accent"
              >
                View selected work
              </a>
              <a
                href={resumePath}
                className="inline-flex items-center justify-center rounded-full border border-line/90 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-ink transition duration-300 hover:border-ink/40 hover:bg-white/40"
              >
                Resume file
              </a>
            </div>

            <dl className="grid gap-5 border-t border-line/90 pt-6 sm:grid-cols-3">
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="space-y-2">
                  <dt className="text-[10px] uppercase tracking-[0.32em] text-ink/42">{fact.label}</dt>
                  <dd className="max-w-[18ch] text-sm leading-6 text-ink/72">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="hero-shift relative flex min-h-[28rem] items-end lg:min-h-full">
          <div className="editorial-frame relative min-h-[32rem] w-full overflow-hidden rounded-[2rem] border border-white/30 bg-[#ddd2c4] shadow-[0_30px_90px_rgba(32,24,20,0.12)] lg:min-h-[calc(100svh-10rem)]">
            <Image
              src={profile.heroMedia.src}
              alt={profile.heroMedia.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="object-cover object-center transition duration-[1400ms] hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,14,12,0.3)] via-transparent to-[rgba(255,255,255,0.12)]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-[10px] uppercase tracking-[0.28em] text-white/82 sm:p-7">
              <div className="max-w-[16rem] space-y-2">
                <p>Portfolio Microsite</p>
                {profile.heroMedia.caption ? <p className="leading-5 text-white/62">{profile.heroMedia.caption}</p> : null}
              </div>
              <p className="hidden text-right text-white/56 sm:block">Mobile-first portfolio for interviews and QR sharing</p>
            </div>
          </div>

          <div className="surface-panel reveal-soft absolute -bottom-4 left-0 right-8 ml-4 rounded-[1.5rem] border border-white/50 px-5 py-4 shadow-[0_20px_60px_rgba(28,22,18,0.08)] sm:left-auto sm:right-6 sm:w-[18rem] sm:px-6 sm:py-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-ink/42">Positioning</p>
            <p className="mt-3 font-display text-2xl leading-tight text-ink">Trend strategy with sportswear sensitivity and AI-backed execution.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
