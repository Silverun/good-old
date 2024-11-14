import {
  LayoutChangeEvent,
  LayoutRectangle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { createStyle } from "./ButtonCustom.styles";
import { TextCustom, TextCustomProps } from "../text/TextCustom";
import { useThemeCustom } from "../../../hooks";
import { useState } from "react";
import { LoadingIndicator } from "../loader/LoadingIndicator";

interface ButtonCustomProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  textStyle?: TextCustomProps["style"];
}

export const ButtonCustom = ({
  title,
  loading,
  style,
  textStyle,
  ...props
}: ButtonCustomProps) => {
  const [buttonDimensions, setButtonDimensions] = useState<
    LayoutRectangle | undefined
  >(undefined);
  const { theme } = useThemeCustom();
  const styleCustom = createStyle(theme);

  const onLayoutTextHandler = (event: LayoutChangeEvent) => {
    const dimensions = event.nativeEvent.layout;
    setButtonDimensions(dimensions);
  };

  return (
    <TouchableOpacity style={[styleCustom.button, style]} {...props}>
      {loading ? (
        <LoadingIndicator
          width={buttonDimensions?.width}
          height={buttonDimensions?.height}
          color={theme.buttonTextColor}
        />
      ) : (
        <TextCustom
          style={[styleCustom.buttonText, textStyle]}
          fontWeight="bold"
          size="h3"
          onLayout={onLayoutTextHandler}
        >
          {title}
        </TextCustom>
      )}
    </TouchableOpacity>
  );
};
