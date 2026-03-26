import type { ProfileContent } from "@/lib/content-types";

import { SectionHeading } from "@/components/ui/section-heading";

type AboutSectionProps = {
  profile: ProfileContent;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading
          eyebrow="About"
          title="Research-led, editorial-minded, and built for decision clarity."
          description="This section is driven by the profile content file, so future edits stay in data instead of inside React components."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-sm leading-8 text-ink/74 sm:text-base">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-8">
            <div className="space-y-4 border-t border-line pt-5">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/45">Location</p>
              <p className="text-base text-ink/82">{profile.location}</p>
            </div>

            <div className="space-y-4 border-t border-line pt-5">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/45">Core expertise</p>
              <div className="flex flex-wrap gap-2">
                {profile.expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
