import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { View, StyleSheet, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeCustom } from "../../../hooks";
import { Theme } from "../../../constants";
import { StatusBar } from "expo-status-bar";

interface RootLayoutProps extends ViewProps {}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { theme, isDarkTheme } = useThemeCustom();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(theme.navigator.colors.card);
  }, [isDarkTheme]);

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
        translucent={false}
        backgroundColor={theme.background}
        style={isDarkTheme ? "light" : "dark"}
      />
      {children}
    </View>
  );
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });
