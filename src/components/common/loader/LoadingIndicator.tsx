import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import IndicatorItem from "./IndicatorItem";
import { LOADER_CONF } from "./loader";
import { useThemeCustom } from "../../../hooks";

export interface LoadingIndicatorProps {
  width?: number;
  height?: number;
  color?: string;
  count?: number;
}

export const LoadingIndicator = ({
  width = 200,
  height = 100,
  color,
  count = 3,
}: LoadingIndicatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotRadius = height / 3;
  const speed = LOADER_CONF.speed;
  const switchDelay = speed * 2;
  const { theme } = useThemeCustom();
  const colorOverride = color ? color : theme.textColor;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
    }, switchDelay);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, { width, height }]}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <IndicatorItem
            key={index}
            color={colorOverride}
            size={dotRadius}
            speed={speed}
            isActive={activeIndex === index}
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
