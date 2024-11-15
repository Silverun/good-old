import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  runOnJS,
  withDelay,
} from "react-native-reanimated";

interface IndicatorItemProps {
  size: number;
  speed: number;
  delay: number;
  count: number;
  index: number;
}

const IndicatorItem: React.FC<IndicatorItemProps> = ({
  size,
  speed,
  delay,
  index,
  count,
}) => {
  const scale = useSharedValue(1);
  const ttf = speed * 2 * (index + count);
  const seq = () => {
    const after = () => {
      "worklet";
      console.log("after index", index, ttf);
      scale.value = withDelay(ttf, seq());
    };

    return (scale.value = withDelay(
      delay,
      withRepeat(withTiming(1.5, { duration: speed }), 2, true, after)
    ));
  };

  React.useEffect(() => {
    seq();
    // setInterval(() => {
    //   seq();
    // }, ttf);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.dot,
        { width: size, height: size, borderRadius: size / 2 },
        animatedStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: "#3498db",
    marginHorizontal: 5,
  },
});

export default IndicatorItem;
