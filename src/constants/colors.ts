const PALLETTE = {
  moss_green: "#92977e",
  flax: "#e6e18e",
  vanilla: "#fefcad",
  vanilla_2: "#eadda6",
  cornsilk: "#fffae2",
  black: "#000000",
  white: "#ffffff",
  fluorescent_cyan: "#69fff1ff",
  dark_green: "#233329",
} as const;

const light: Theme = {
  textColor: PALLETTE.black,
  background: PALLETTE.white,
  buttonBackground: PALLETTE.moss_green,
  buttonTextColor: PALLETTE.cornsilk,
};

const dark: Theme = {
  ...light,
  textColor: PALLETTE.fluorescent_cyan,
  background: PALLETTE.dark_green,
  inputBackground: PALLETTE.black,
};

export type Theme = {
  textColor: string;
  background: string;
  buttonBackground: string;
  buttonTextColor: string;
  inputBackground?: string;
};

export const THEMES = {
  light,
  dark,
};
