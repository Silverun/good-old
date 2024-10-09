import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import {
  setDarkTheme,
  setLightTheme,
} from "../../../store/themeSlice/themeSlice";

export default function SettingsScreen() {
  const dispatch = useAppDispatch();
  const { theme, isDarkTheme } = useAppSelector((state) => state.theme);

  const toggleTheme = () => {
    if (isDarkTheme) {
      dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>
        Current theme is {isDarkTheme ? "Dark" : "Light"}
      </Text>
      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});
