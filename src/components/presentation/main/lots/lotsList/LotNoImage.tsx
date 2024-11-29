import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { THEMES } from "../../../../../constants";

interface LotNoImageProps {
  iconSize?: number;
  size?: { width: number; height: number };
}

export const LotNoImage = ({ iconSize, size }: LotNoImageProps) => {
  const stylePlaceholder = [styles.placeholder, size];

  return (
    <View style={stylePlaceholder}>
      <MaterialIcons
        name="camera-alt"
        size={iconSize ? iconSize : 40}
        color={THEMES.light.textColorSecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEMES.light.profileImagePlaceholder,
  },
});
