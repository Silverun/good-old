import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { FONTS_SIZES } from "../../../constants";

interface TextLinkProps extends TouchableOpacityProps {
  title: string;
  fontSize: keyof typeof FONTS_SIZES;
}

const TextLink = ({ title, fontSize, ...props }: TextLinkProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={{ fontSize: FONTS_SIZES[fontSize] }}>{title}</Text>
    </TouchableOpacity>
  );
};
export default TextLink;
