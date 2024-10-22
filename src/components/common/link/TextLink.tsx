import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { TextCustom, TextCustomProps } from "../text/TextCustom";

interface TextLinkProps extends TouchableOpacityProps {
  title: string;
  size?: TextCustomProps["size"];
  fontWeight?: TextCustomProps["fontWeight"];
}

export const TextLink = ({
  title,
  size,
  fontWeight,
  ...props
}: TextLinkProps) => {
  return (
    <TouchableOpacity {...props}>
      <TextCustom size={size} fontWeight={fontWeight}>
        {title}
      </TextCustom>
    </TouchableOpacity>
  );
};
