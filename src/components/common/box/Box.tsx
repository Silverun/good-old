import { View, ViewProps } from "react-native";
import { styles } from "./Box.styles.";

interface BoxProps extends ViewProps {}

const Box = ({ children }: BoxProps) => {
  return <View style={styles().box}>{children}</View>;
};
export default Box;
