import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Theme } from "../../../constants";
import { useThemeCustom } from "../../../hooks";
import { FONT_FAMILIES } from "../../../constants/fonts";

interface TextInputCustomProps extends TextInputProps {}

export const TextInputCustom = ({ style, ...props }: TextInputCustomProps) => {
  const { theme } = useThemeCustom();

  return <TextInput style={[styles(theme).input, style]} {...props} />;
};

const styles = (theme: Theme) =>
  StyleSheet.create({
    input: {
      padding: 5,
      borderWidth: 1,
      borderColor: theme.inputBorderColor,
      borderRadius: 10,
      backgroundColor: theme.inputBackground,
      color: theme.textColor,
      fontFamily: FONT_FAMILIES.regular,
    },
  });
