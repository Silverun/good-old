import { useEffect, useRef } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  withDelay,
  withSequence,
} from "react-native-reanimated";

interface IndicatorItemProps {
  size: number;
  index: number;
  color: string;
  count: number;
  speed: number;
}

const IndicatorItem = ({
  index,
  size,
  color,
  count,
  speed,
}: IndicatorItemProps) => {
  const posY = useSharedValue(0);

  const ttf = speed * 2 * (count + index);

  const goUp = withTiming(-size, {
    duration: speed,
    easing: Easing.linear,
  });

  const goDown = withTiming(0, {
    duration: speed,
    easing: Easing.linear,
  });

  const moveSeq = withSequence(goUp, goDown);
  const delayedSeq = withDelay(speed * 2 * index, moveSeq);

  const runAnim = () => {
    posY.value = delayedSeq;
  };

  useEffect(() => {
    console.log("Effect ran");
    console.log(index, ttf);
    runAnim();
    const int = setInterval(() => {
      runAnim();
    }, ttf);
    return () => clearInterval(int);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: size / 2,
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
