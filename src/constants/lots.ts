export const LOT_CATEGORIES = [
  { id: 1, title: "Clothing" },
  { id: 2, title: "Accessories" },
  { id: 3, title: "Footwear" },
  { id: 4, title: "Sports" },
  { id: 5, title: "Electronics" },
] as const;

export const MAX_IMAGES = 5 as const;

export type LotCategory = (typeof LOT_CATEGORIES)[number];
export type LotCategoryTitle = (typeof LOT_CATEGORIES)[number]["title"];
