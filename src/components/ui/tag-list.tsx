type TagListProps = {
  tags: string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-line/80 bg-[rgba(255,251,246,0.68)] px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-ink/58"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
