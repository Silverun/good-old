import { StyleSheet } from "react-native";
import { WIDTH } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  label: {
    alignSelf: "center",
  },
  input: {
    width: WIDTH.fifty,
  },
  loginButton: {
    marginTop: 20,
  },
});
