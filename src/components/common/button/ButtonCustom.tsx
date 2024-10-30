import {
  Pressable,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { createStyle } from "./ButtonCustom.styles";
import { useAppSelector } from "../../../hooks/useRedux";
import { Loader } from "../loader/Loader";
import { TextCustom, TextCustomProps } from "../text/TextCustom";

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
  const theme = useAppSelector((state) => state.theme.theme);
  const styleCustom = createStyle(theme);

  return (
    <TouchableOpacity style={[styleCustom.button, style]} {...props}>
      {loading ? (
        <Loader size="small" />
      ) : (
        <TextCustom
          style={[styleCustom.buttonText, textStyle]}
          fontWeight="bold"
          size="h3"
        >
          {title}
        </TextCustom>
      )}
    </TouchableOpacity>
  );
};
