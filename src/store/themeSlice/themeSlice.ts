import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { type Theme, THEMES } from "../../constants/colors";

type ThemeState = {
  theme: Theme;
  isDarkTheme: boolean;
};

const systemColorScheme = Appearance.getColorScheme();

const initialState: ThemeState = {
  theme: systemColorScheme === "dark" ? THEMES.dark : THEMES.light,
  isDarkTheme: systemColorScheme === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.theme = THEMES.dark;
      state.isDarkTheme = true;
      AsyncStorage.setItem("theme", "dark");
    },
    setLightTheme: (state) => {
      state.theme = THEMES.light;
      state.isDarkTheme = false;
      AsyncStorage.setItem("theme", "light");
    },
  },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
