import React from "react";
import { View, StyleSheet } from "react-native";
import { useThemeCustom } from "../../../hooks";
import { LoadingIndicator } from "./LoadingIndicator";

interface LoaderProps {
  width?: number;
  height?: number;
  count?: number;
}

export const Loader = (props: LoaderProps) => {
  const { theme } = useThemeCustom();

  return (
    <View>
      <LoadingIndicator {...props} color={theme.loader} />
    </View>
  );
};

const style = StyleSheet.create({});
