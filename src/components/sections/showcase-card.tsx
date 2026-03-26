import Image from "next/image";

import type { ShowcaseItem } from "@/lib/content-types";

import { TagList } from "@/components/ui/tag-list";

type ShowcaseCardProps = {
  item: ShowcaseItem;
};

export function ShowcaseCard({ item }: ShowcaseCardProps) {
  return (
    <article
      className={`rounded-[30px] border border-line bg-white/82 shadow-panel ${
        item.featured ? "p-5 sm:p-7" : "p-4 sm:p-6"
      }`}
    >
      <div className={`grid gap-6 ${item.featured ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-start" : ""}`}>
        <div className="space-y-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-mist">
            <Image
              src={item.coverImage.src}
              alt={item.coverImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
          {item.gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {item.gallery.map((asset) => (
                <figure key={`${item.id}-${asset.src}`} className="space-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-line bg-mist">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  {asset.caption ? <figcaption className="text-xs text-ink/45">{asset.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-5">
          <div className="space-y-3 border-b border-line pb-5">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ink/46">
              <span>{item.time}</span>
              <span className="h-1 w-1 rounded-full bg-ink/28" />
              <span>{item.role}</span>
              {item.featured ? <span className="rounded-full bg-ink px-2 py-1 text-sand">Featured</span> : null}
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl leading-tight text-ink">{item.title}</h3>
              <p className="text-sm uppercase tracking-[0.16em] text-ink/55">{item.subtitle}</p>
            </div>
            <p className="text-sm leading-7 text-ink/78 sm:text-base">{item.summary}</p>
          </div>

          <div className="space-y-3">
            {item.details.map((detail) => (
              <p key={detail} className="text-sm leading-7 text-ink/72 sm:text-base">
                {detail}
              </p>
            ))}
          </div>

          <TagList tags={item.tags} />

          {item.video ? (
            <div className="space-y-3 border-t border-line pt-5">
              <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.2em] text-ink/46">
                <span>Motion preview</span>
                <span>{item.video.type === "local" ? "Local media file" : "External video link"}</span>
              </div>
              <video
                className="w-full rounded-[20px] border border-line bg-[#f2eee8]"
                controls
                playsInline
                preload="metadata"
                poster={item.video.poster}
              >
                <source src={item.video.src} />
              </video>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
