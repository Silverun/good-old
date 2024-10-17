import { Text, StyleSheet, TextProps } from "react-native";
import { FONTS_SIZES, FontSizes, Theme } from "../../../constants";
import { FONT_FAMILIES } from "../../../constants/fonts";
import { useThemeCustom } from "../../../hooks";

interface TextCustomProps extends TextProps {
  size?: FontSizes;
}

export const TextCustom = ({
  children,
  style,
  size,
  ...props
}: TextCustomProps) => {
  const { theme } = useThemeCustom();
  const fontSize = size ? FONTS_SIZES[size] : FONTS_SIZES.p;

  return (
    <Text style={[styles(theme, fontSize).text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = (theme: Theme, fontSize: number) =>
  StyleSheet.create({
    text: {
      fontFamily: FONT_FAMILIES.regular,
      color: theme.textColor,
      fontSize: fontSize,
    },
  });
