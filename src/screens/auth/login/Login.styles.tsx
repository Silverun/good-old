import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: WIDTH.thirty,
    height: WIDTH.thirty,
  },
  logoBlock: {
    alignItems: "center",
  },
  registerBlock: {
    gap: 5,
    alignItems: "center",
  },
});
