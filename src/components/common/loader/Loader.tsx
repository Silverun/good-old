import { View, ActivityIndicator, ViewProps } from "react-native";
import { LoadingIndicator } from "./LoadingIndicator";

interface LoaderProps extends ViewProps {
  size: "large" | "small";
  color: string;
}

export const Loader = ({ size, color, ...props }: LoaderProps) => {
  return (
    <View
      {...props}
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        },
        props.style,
      ]}
    >
      <LoadingIndicator width={10} height={10} color={color} />
      {/* <ActivityIndicator color={"blue"} size={size} /> */}
    </View>
  );
};
