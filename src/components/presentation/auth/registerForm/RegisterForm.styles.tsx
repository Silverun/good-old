import { StyleSheet } from "react-native";
import { WIDTH } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: WIDTH.sixty,
  },
  label: {
    alignSelf: "center",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 15,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
  },
});
