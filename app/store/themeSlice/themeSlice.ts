import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance } from "react-native";
import { type Theme, themes } from "../../constants/colors";

type ThemeState = {
  theme: Theme;
  isDarkTheme: boolean;
};

const systemColorScheme = Appearance.getColorScheme();

const initialState: ThemeState = {
  theme: systemColorScheme === "dark" ? themes.dark : themes.light,
  isDarkTheme: systemColorScheme === "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkTheme: (state) => {
      state.theme = themes.dark;
      state.isDarkTheme = true;
      AsyncStorage.setItem("theme", "dark");
    },
    setLightTheme: (state) => {
      state.theme = themes.light;
      state.isDarkTheme = false;
      AsyncStorage.setItem("theme", "light");
    },
    loadSavedTheme: (state, action: PayloadAction<"light" | "dark">) => {
      const savedTheme = action.payload;
      state.theme = savedTheme === "dark" ? themes.dark : themes.light;
      state.isDarkTheme = savedTheme === "dark";
    },
  },
});

export const { setDarkTheme, setLightTheme, loadSavedTheme } =
  themeSlice.actions;

export const themeReducer = themeSlice.reducer;
