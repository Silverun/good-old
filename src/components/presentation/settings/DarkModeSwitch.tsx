import React from "react";
import { View, StyleSheet, Switch } from "react-native";
import { useAppDispatch } from "../../../hooks/useRedux";
import {
  setDarkTheme,
  setLightTheme,
} from "../../../store/themeSlice/themeSlice";
import { useThemeCustom } from "../../../hooks";

export const DarkModeSwitch = () => {
  const dispatch = useAppDispatch();
  const { isDarkTheme } = useThemeCustom();

  const toggleTheme = () => {
    if (isDarkTheme) {
      dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
    }
  };

  return (
    <View style={styles.container}>
      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ///DELETE AFTER
    position: "absolute", // Absolute positioning
    top: 60, // Distance from the top
    right: 10, // Distance from the right
    zIndex: 9999, // Ensure it stays on top of other components
  },
});
