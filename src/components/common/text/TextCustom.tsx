import { Text, StyleSheet, TextProps } from "react-native";
import { FONTS_SIZES, FontSizes, Theme } from "../../../constants";
import { FONT_FAMILIES, FontFamiliesWeights } from "../../../constants/fonts";
import { useThemeCustom } from "../../../hooks";

export interface TextCustomProps extends TextProps {
  size?: FontSizes;
  fontWeight?: FontFamiliesWeights;
}

export const TextCustom = ({
  children,
  style,
  size,
  fontWeight,
  ...props
}: TextCustomProps) => {
  const { theme } = useThemeCustom();
  const fontSize = size ? FONTS_SIZES[size] : FONTS_SIZES.p;
  const weight = fontWeight ? FONT_FAMILIES[fontWeight] : FONT_FAMILIES.regular;

  return (
    <Text style={[styles(theme, fontSize, weight).text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = (theme: Theme, fontSize: number, weight: string) =>
  StyleSheet.create({
    text: {
      fontFamily: weight,
      color: theme.textColor,
      fontSize: fontSize,
    },
  });
