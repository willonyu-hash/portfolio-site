import type { ShowcaseItem } from "@/lib/content-types";

import { ShowcaseCard } from "@/components/sections/showcase-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { sortShowcaseItems } from "@/lib/utils";

type ShowcaseSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ShowcaseItem[];
};

export function ShowcaseSection({ id, eyebrow, title, description, items }: ShowcaseSectionProps) {
  const sortedItems = sortShowcaseItems(items);
  const featuredItems = sortedItems.filter((item) => item.featured);
  const archiveItems = sortedItems.filter((item) => !item.featured);

  return (
    <section id={id} className="border-b border-line/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          </div>

          <div className="space-y-12">
            <div className="space-y-10">
              {featuredItems.map((item) => (
                <ShowcaseCard key={item.id} item={item} />
              ))}
            </div>

            {archiveItems.length > 0 ? (
              <div className="space-y-6 border-t border-line/90 pt-8">
                <p className="text-[11px] uppercase tracking-[0.32em] text-ink/42">Selected archive</p>
                <div className="space-y-8">
                  {archiveItems.map((item) => (
                    <ShowcaseCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
