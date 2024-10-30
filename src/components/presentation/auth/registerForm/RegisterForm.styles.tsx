import { StyleSheet } from "react-native";
import { WIDTH } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH.sixty,
    justifyContent: "center",
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
