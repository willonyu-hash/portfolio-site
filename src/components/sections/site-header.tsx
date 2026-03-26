type SiteHeaderProps = {
  items: Array<{
    label: string;
    href: string;
  }>;
};

export function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-[0.18em] text-ink">
            PORTFOLIO
          </a>
        </div>
        <nav className="-mx-1 flex gap-4 overflow-x-auto px-1 pb-1 text-[11px] uppercase tracking-[0.2em] text-ink/58 sm:gap-6 sm:text-xs">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 whitespace-nowrap transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
