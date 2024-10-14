import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { styles } from "./Button.styles";
import { Theme } from "../../../constants/colors";

interface ButtonCustomProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  theme: Theme;
  styles: any
}

const ButtonCustom = ({ children, theme, styles, ...props }: ButtonCustomProps) => {
  return (
    <View style={styles(theme)}>
        <TouchableOpacity {...props} }>
      {children}
    </TouchableOpacity>
    </View> 
    
  );
};

export default ButtonCustom;
