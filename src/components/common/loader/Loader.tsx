import { View, ActivityIndicator } from "react-native";

type LoaderProps = {
  size: "large" | "small";
};

export const Loader = ({ size }: LoaderProps) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <ActivityIndicator size={size} />
    </View>
  );
};
