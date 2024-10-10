const palette = {
  moss_green: "#92977e",
  flax: "#e6e18e",
  vanilla: "#fefcad",
  vanilla_2: "#eadda6",
  cornsilk: "#fffae2",
};

const light = {
  text: "black",
  background: "#fff",
  buttonBackground: palette.moss_green,
};

const dark = {
  ...light,
  text: "white",
  background: "black",
};

export type Theme = typeof light;

export const THEMES = {
  light,
  dark,
};
