import Image from "next/image";

import type { ShowcaseItem } from "@/lib/content-types";

import { TagList } from "@/components/ui/tag-list";

type ShowcaseCardProps = {
  item: ShowcaseItem;
};

export function ShowcaseCard({ item }: ShowcaseCardProps) {
  return (
    <article className="group border-t border-line/80 pt-6 first:border-t-0 first:pt-0">
      <div
        className={`grid gap-6 lg:gap-8 ${
          item.featured ? "lg:grid-cols-[1.04fr_0.96fr] lg:items-start" : "lg:grid-cols-[0.84fr_1.16fr]"
        }`}
      >
        <div className="space-y-4">
          <div
            className={`editorial-frame relative overflow-hidden rounded-[1.75rem] bg-mist ${
              item.featured ? "aspect-[4/5] sm:aspect-[5/6]" : "aspect-[4/4.8] sm:aspect-[4/4.4]"
            }`}
          >
            <Image
              src={item.coverImage.src}
              alt={item.coverImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition duration-[1200ms] group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,15,13,0.14)] via-transparent to-transparent" />
          </div>

          {item.gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {item.gallery.map((asset) => (
                <figure key={`${item.id}-${asset.src}`} className="space-y-2">
                  <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.1rem] bg-mist">
                    <Image
                      src={asset.src}
                      alt={asset.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition duration-[900ms] group-hover:scale-[1.02]"
                    />
                  </div>
                  {asset.caption ? <figcaption className="text-xs text-ink/45">{asset.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          ) : null}
        </div>

        <div className={`space-y-6 ${item.featured ? "lg:pt-3" : "lg:pt-1"}`}>
          <div className="space-y-4 border-b border-line/80 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/44">
              <span>{item.time}</span>
              <span className="h-1 w-1 rounded-full bg-ink/28" />
              <span>{item.role}</span>
              {item.featured ? (
                <span className="rounded-full border border-line/80 bg-[rgba(255,251,246,0.86)] px-3 py-1 text-ink/62">
                  Recommended
                </span>
              ) : null}
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-[2.15rem] leading-[1.02] tracking-[-0.02em] text-ink sm:text-[2.55rem]">
                {item.title}
              </h3>
              <p className="max-w-xl text-[11px] uppercase tracking-[0.26em] text-ink/48 sm:text-xs">{item.subtitle}</p>
            </div>

            <p className="max-w-xl text-[15px] leading-8 text-ink/74 sm:text-base">{item.summary}</p>
          </div>

          <div className="space-y-3">
            {item.details.map((detail) => (
              <p key={detail} className="max-w-xl text-[15px] leading-8 text-ink/66 sm:text-base">
                {detail}
              </p>
            ))}
          </div>

          <TagList tags={item.tags} />

          {item.video ? (
            <div className="space-y-3 border-t border-line/80 pt-6">
              <div className="flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.3em] text-ink/42">
                <span>Motion preview</span>
                <span>{item.video.type === "local" ? "Local media file" : "External video link"}</span>
              </div>
              <video
                className="w-full overflow-hidden rounded-[1.4rem] border border-white/40 bg-[#f2eee8] shadow-[0_18px_50px_rgba(30,24,20,0.08)]"
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
