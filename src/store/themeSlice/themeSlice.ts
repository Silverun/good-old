import { createSlice } from "@reduxjs/toolkit";
import { Appearance, ColorSchemeName } from "react-native";
import { type Theme, THEMES } from "../../constants/colors";
import { appStorage } from "../../services/appStorage/appStorage";
import { STORAGE_KEYS } from "../../constants/storage";

type ThemeState = {
  theme: Theme;
  isDarkTheme: boolean;
};

const systemColorScheme = Appearance.getColorScheme();
const savedTheme = appStorage.getString(STORAGE_KEYS.theme);

let initTheme: string | ColorSchemeName;

if (savedTheme) {
  initTheme = savedTheme;
} else {
  initTheme = systemColorScheme;
}

const initialState: ThemeState = {
  theme: initTheme === "dark" ? THEMES.dark : THEMES.light,
  isDarkTheme: initTheme === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.theme = THEMES.dark;
      state.isDarkTheme = true;
      appStorage.set(STORAGE_KEYS.theme, "dark");
    },
    setLightTheme: (state) => {
      state.theme = THEMES.light;
      state.isDarkTheme = false;
      appStorage.set(STORAGE_KEYS.theme, "light");
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
