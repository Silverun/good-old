import React, { useEffect } from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DarkModeSwitch } from "../settings/DarkModeSwitch";
import { useThemeCustom } from "../../../hooks";
import { Theme } from "../../../constants";
import {
  setStatusBarStyle,
  setStatusBarTranslucent,
  StatusBar,
} from "expo-status-bar";

interface RootLayoutProps extends ViewProps {}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { theme, isDarkTheme } = useThemeCustom();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles(theme).container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar
        translucent={true}
        // backgroundColor={theme.background}
        style={isDarkTheme ? "light" : "dark"}
      />
      {children}
      <DarkModeSwitch />
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: "relative", // DELETE AFTER
      backgroundColor: theme.background,
    },
  });
