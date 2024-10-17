import { StyleSheet, TextInput } from "react-native";
import { Theme } from "../../../constants";
import { useThemeCustom } from "../../../hooks";

export const TextInputCustom = () => {
  const { theme } = useThemeCustom();

  return <TextInput style={styles(theme).input} />;
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    input: {},
  });
