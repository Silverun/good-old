const FONTS = {
  ubuntu: "Ubuntu",
} as const;

const defaultFont = FONTS.ubuntu;

export const FONT_FAMILIES = {
  light: `${defaultFont}-Light`,
  regular: `${defaultFont}-Regular`,
  medium: `${defaultFont}-Medium`,
  bold: `${defaultFont}-Bold`,
} as const;
