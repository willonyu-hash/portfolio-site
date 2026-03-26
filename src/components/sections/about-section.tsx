import type { ProfileContent } from "@/lib/content-types";

import { SectionHeading } from "@/components/ui/section-heading";

type AboutSectionProps = {
  profile: ProfileContent;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="border-b border-line/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="About"
          title="Professional positioning shaped for fashion, trend, innovation, and hiring conversations."
          description="The layout stays quiet on purpose: interviewers can scan your background, expertise, and working approach without getting buried under decorative nonsense."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="space-y-5">
            <p className="max-w-2xl font-display text-[2rem] leading-[1.08] text-ink sm:text-[2.4rem]">
              Trend designer with sportswear sensitivity, research structure, and content translation discipline.
            </p>

            <div className="space-y-5 text-[15px] leading-8 text-ink/68 sm:text-base">
              {profile.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[1.8rem] border border-white/40 p-6 shadow-[0_20px_60px_rgba(26,20,16,0.06)] sm:p-8">
            <div className="space-y-8">
              <div className="space-y-4 border-t border-line/80 pt-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-ink/42">Location</p>
                <p className="text-base text-ink/82">{profile.location}</p>
              </div>

              <div className="space-y-4 border-t border-line/80 pt-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-ink/42">Core expertise</p>
                <div className="flex flex-wrap gap-2.5">
                  {profile.expertise.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line/80 bg-white/50 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-ink/64"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-t border-line/80 pt-5">
                <p className="text-[10px] uppercase tracking-[0.32em] text-ink/42">Interview value</p>
                <p className="max-w-md text-[15px] leading-8 text-ink/68">
                  Use this section to show seniority through judgment, clarity, and conversion ability instead of long self-introductions that read like a tired LinkedIn bio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
