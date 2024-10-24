import { Theme as NavTheme } from "@react-navigation/native";

export type Theme = {
  navigator: NavTheme;
  textColor: string;
  background: string;
  buttonBackground: string;
  buttonTextColor: string;
  inputBackground?: string;
  inputBorderColor: string;
  placeholderTextColor: string;
};

const PALLETTE = {
  moss_green: "#92977e",
  moss_green_darker: "#767b63",
  flax: "#e6e18e",
  vanilla: "#fefcad",
  vanilla_2: "#eadda6",
  cornsilk: "#fffae2",
  black: "#000000",
  white: "#ffffff",
  fluorescent_cyan: "#69fff1ff",
  dark_green: "#233329",
  silver: "#C4C7C8",
  battleship_gray: "#888B82",
  red: "#FF0000",
} as const;

const light: Theme = {
  navigator: {
    dark: false,
    colors: {
      primary: PALLETTE.black,
      background: PALLETTE.white,
      card: PALLETTE.white,
      text: PALLETTE.black,
      border: "transparent",
      notification: PALLETTE.red,
    },
  },
  textColor: PALLETTE.black,
  background: PALLETTE.white,
  buttonBackground: PALLETTE.moss_green,
  buttonTextColor: PALLETTE.cornsilk,
  inputBorderColor: PALLETTE.moss_green,
  placeholderTextColor: PALLETTE.silver,
};

const dark: Theme = {
  ...light,
  navigator: {
    dark: true,
    colors: {
      primary: PALLETTE.black,
      background: PALLETTE.dark_green,
      card: PALLETTE.moss_green_darker,
      text: PALLETTE.fluorescent_cyan,
      border: "transparent",
      notification: PALLETTE.red,
    },
  },
  textColor: PALLETTE.fluorescent_cyan,
  background: PALLETTE.dark_green,
  inputBackground: PALLETTE.black,
  placeholderTextColor: PALLETTE.battleship_gray,
  buttonTextColor: PALLETTE.black,
};

export const THEMES = {
  light,
  dark,
};
