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
    borderWidth: 1,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
