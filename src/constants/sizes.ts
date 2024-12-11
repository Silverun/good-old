import { Dimensions } from "react-native";

export const SIZES = {
  xs: 8,
  small: 12,
  medium: 14,
  large: 18,
  xlarge: 24,
  xxlarge: 32,
} as const;

export const FONTS_SIZES = {
  h1: 32,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  h7: 10,
  title_small: 20,
} as const;

export type FontSizes = keyof typeof FONTS_SIZES;

const deviceScreen = Dimensions.get("screen");
export const deviceWidthRatio = (ratio: number) => deviceScreen.width * ratio;
export const deviceHeightRatio = (ratio: number) => deviceScreen.height * ratio;

export const WIDTH = {
  ten: deviceWidthRatio(0.1),
  fifteen: deviceWidthRatio(0.15),
  twenty: deviceWidthRatio(0.2),
  thirty: deviceWidthRatio(0.3),
  forty: deviceWidthRatio(0.4),
  fifty: deviceWidthRatio(0.5),
  sixty: deviceWidthRatio(0.6),
  seventy: deviceWidthRatio(0.7),
  eighty: deviceWidthRatio(0.8),
  ninety: deviceWidthRatio(0.9),
  full: deviceWidthRatio(1),
} as const;

export const HEIGHT = {
  ten: deviceHeightRatio(0.1),
  twenty: deviceHeightRatio(0.2),
  thirty: deviceHeightRatio(0.3),
  forty: deviceHeightRatio(0.4),
  fifty: deviceHeightRatio(0.5),
  sixty: deviceHeightRatio(0.6),
  seventy: deviceHeightRatio(0.7),
  eighty: deviceHeightRatio(0.8),
  ninety: deviceHeightRatio(0.9),
  full: deviceHeightRatio(1),
} as const;
