export const LOT_CATEGORIES = [
  { id: 1, title: "clothing" },
  { id: 2, title: "accessories" },
  { id: 3, title: "footwear" },
  { id: 4, title: "sports" },
  { id: 5, title: "electronics" },
  { id: 6, title: "other" },
] as const;

export const LOT_STATUS = {
  active: "active",
  sold: "sold",
  blocked: "blocked",
} as const;

export type LotStatus = keyof typeof LOT_STATUS;

export const MAX_IMAGES = 5 as const;

export type LotCategory = (typeof LOT_CATEGORIES)[number];
export type LotCategoryTitle = (typeof LOT_CATEGORIES)[number]["title"];
