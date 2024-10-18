import { Theme as NavTheme } from "@react-navigation/native";

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
  navigator: {
    dark: false,
    colors: {
      primary: PALLETTE.white,
      background: PALLETTE.white,
      card: PALLETTE.white,
      text: PALLETTE.black,
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  },
  textColor: PALLETTE.black,
  background: PALLETTE.white,
  buttonBackground: PALLETTE.moss_green,
  buttonTextColor: PALLETTE.cornsilk,
};

const dark: Theme = {
  ...light,
  navigator: {
    dark: true,
    colors: {
      primary: PALLETTE.moss_green,
      background: PALLETTE.dark_green,
      card: PALLETTE.vanilla_2,
      text: PALLETTE.fluorescent_cyan,
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  },
  textColor: PALLETTE.fluorescent_cyan,
  background: PALLETTE.dark_green,
  inputBackground: PALLETTE.black,
};

export type Theme = {
  navigator: NavTheme;
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
