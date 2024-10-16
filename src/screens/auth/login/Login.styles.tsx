import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: SIZES.large,
  },
});
