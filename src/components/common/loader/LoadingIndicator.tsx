import React, { useEffect } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

interface LoadingIndicatorProps {
  width?: number;
  height?: number;
  color?: string;
}

export const LoadingIndicator = ({
  width = 200,
  height = 100,
  color = "#000",
}: LoadingIndicatorProps) => {
  const animation = useSharedValue(1); // Start at middle
  const dotSize = height / 4; // Adjust dot size based on container height
  const bottomPosition = height - dotSize; // Bottom boundary for dots
  const topPosition = 0; // Top boundary for dots

  useEffect(() => {
    animation.value = withRepeat(
      withTiming(2, {
        duration: 1500, // Duration for each full cycle from bottom to top
        easing: Easing.inOut(Easing.sin),
      }),
      -1,
      true // Alternate direction to make animation oscillate up and down
    );
  }, [animation]);

  const createDotStyle = (delayFactor: number) =>
    useAnimatedStyle(() => {
      // Calculate position with offset based on delay
      const position = (animation.value + delayFactor) % 3;
      const translateY =
        position <= 1
          ? bottomPosition * (1 - position) // Middle to bottom
          : topPosition + bottomPosition * (2 - position); // Top to middle

      return {
        transform: [{ translateY }],
      };
    });

  const dot1Style = createDotStyle(0);
  const dot2Style = createDotStyle(0.5); // Offset for second dot
  const dot3Style = createDotStyle(1); // Offset for third dot

  const addedStyle: ViewStyle = {
    width: dotSize,
    height: dotSize,
    backgroundColor: color,
    borderRadius: dotSize / 2,
  };

  const dotsStyles = [
    [dot1Style, addedStyle],
    [dot2Style, addedStyle],
    [dot3Style, addedStyle],
  ];

  return (
    <View style={[styles.loader, { width, height }]}>
      {dotsStyles.map(([style, addedStyle], index) => (
        <Animated.View key={index} style={[style, addedStyle]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
