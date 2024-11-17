import { useCallback, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withSequence,
  interpolate,
} from "react-native-reanimated";

interface IndicatorItemProps {
  size: number;
  color: string;
  speed: number;
  isActive: boolean;
}

const IndicatorItem = ({
  size,
  color,
  speed,
  isActive,
}: IndicatorItemProps) => {
  const posY = useSharedValue(0);

  const runAnim = useCallback(() => {
    const goUp = withTiming(-size, {
      duration: speed,
      easing: Easing.linear,
    });
    const goDown = withTiming(0, {
      duration: speed,
      easing: Easing.linear,
    });
    const moveSeq = withSequence(goUp, goDown);
    posY.value = moveSeq;
  }, []);

  useEffect(() => {
    if (isActive) {
      runAnim();
    }
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: size / 2,
      opacity: interpolate(posY.value, [0, -size], [1, 0.5]),
      transform: [
        {
          translateY: posY.value,
        },
      ],
    };
  });

  return <Animated.View style={animatedStyle} />;
};

export default IndicatorItem;
