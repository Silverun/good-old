import { StyleSheet } from "react-native";
import { WIDTH } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    alignSelf: "center",
  },
  input: {
    width: WIDTH.fifty,
  },
  loginButton: {
    marginTop: 30,
  },
});
