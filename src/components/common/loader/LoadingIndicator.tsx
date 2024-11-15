import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import IndicatorItem from "./IndicatorItem";
import { LOADER_CONF } from "./loader";

interface LoadingIndicatorProps {
  width?: number;
  height?: number;
  color?: string;
  count?: number;
}

export const LoadingIndicator = ({
  width = 200,
  height = 100,
  color = "#000",
  count = 3,
}: LoadingIndicatorProps) => {
  const dotRadius = height / 3;
  const speed = LOADER_CONF.speed;
  const totalTime = speed * count;

  const items = Array(count).fill(null);

  return (
    <View style={[styles.container, { width, height }]}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <IndicatorItem
            key={index}
            color={color}
            size={dotRadius}
            index={index}
            count={count}
            speed={speed}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
