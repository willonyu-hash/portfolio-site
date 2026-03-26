type TagListProps = {
  tags: string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-line bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink/62"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
