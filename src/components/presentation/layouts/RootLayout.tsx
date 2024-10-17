import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DarkModeSwitch } from "../settings/DarkModeSwitch";

interface RootLayoutProps extends ViewProps {}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {children}
      <DarkModeSwitch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative", // DELETE AFTER
    backgroundColor: "#fff", // Optionally set a background color for your layout
  },
});
