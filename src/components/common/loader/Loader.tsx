import { View, Text, ActivityIndicator } from "react-native";

type LoaderProps = {
  size: "large" | "small";
};

const Loader = ({ size }: LoaderProps) => {
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
export default Loader;
