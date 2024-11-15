// LoaderIndicator.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import IndicatorItem from "./newItem";

interface LoaderIndicatorProps {
  count?: number;
  size?: number;
  speed?: number;
}

const LoaderIndicator: React.FC<LoaderIndicatorProps> = ({
  count = 3,
  size = 30,
  speed = 300,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <IndicatorItem
          key={index}
          size={size}
          speed={speed}
          index={index}
          count={count}
          delay={index * speed * 2} // Staggered delays for sequential animation
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoaderIndicator;
