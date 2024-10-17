import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { FONTS_SIZES } from "../../../constants";

interface TextLinkProps extends TouchableOpacityProps {
  title: string;
  fontSize: keyof typeof FONTS_SIZES;
}

export const TextLink = ({ title, fontSize, ...props }: TextLinkProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text
        style={{
          fontSize: FONTS_SIZES[fontSize],
          fontFamily: "Roboto-Regular",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
