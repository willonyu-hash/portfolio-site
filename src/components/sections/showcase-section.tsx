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
    <section id={id} className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-10 space-y-6">
          {featuredItems.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </div>

        {archiveItems.length > 0 ? (
          <div className="mt-12 space-y-5">
            <div className="border-t border-line pt-5">
              <p className="text-xs uppercase tracking-[0.24em] text-ink/45">More selected entries</p>
            </div>
            <div className="space-y-5">
              {archiveItems.map((item) => (
                <ShowcaseCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
