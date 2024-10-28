import { StyleSheet } from "react-native";
import { WIDTH } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  add_button: {
    position: "absolute",
    height: WIDTH.fifteen,
    width: WIDTH.fifteen,
    borderRadius: WIDTH.fifteen / 2,
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
