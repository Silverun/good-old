export const LOT_CATEGORIES = [
  { id: 1, title: "Clothing" },
  { id: 2, title: "Accessories" },
  { id: 3, title: "Footwear" },
  { id: 4, title: "Sports" },
  { id: 5, title: "Electronics" },
  { id: 6, title: "Other" },
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
