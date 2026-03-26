import type { ShowcaseItem } from "@/lib/content-types";

export function sortShowcaseItems(items: ShowcaseItem[]) {
  return [...items].sort((left, right) => Number(right.featured) - Number(left.featured));
}
