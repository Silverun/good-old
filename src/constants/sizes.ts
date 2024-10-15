import { Dimensions } from "react-native";

export const SIZES = {
  xs: 8,
  small: 12,
  medium: 14,
  large: 18,
  xlarge: 24,
  xxlarge: 32,
};

const deviceWidth = Dimensions.get("screen").width;
export const deviceWidthRatio = (ratio: number) => deviceWidth * ratio;

export const WIDTH = {
  twenty: deviceWidthRatio(0.2),
  thirty: deviceWidthRatio(0.3),
  forty: deviceWidthRatio(0.4),
  fifty: deviceWidthRatio(0.5),
  sixty: deviceWidthRatio(0.6),
  seventy: deviceWidthRatio(0.7),
  eighty: deviceWidthRatio(0.8),
  ninety: deviceWidthRatio(0.9),
};
