import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

export const styles = () =>
  StyleSheet.create({
    box: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: SIZES.medium,
    },
  });
