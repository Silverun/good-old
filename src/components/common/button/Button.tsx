import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { createStyle } from "./Button.styles";
import { useAppSelector } from "../../../hooks/useRedux";
import Loader from "../loader/Loader";

interface ButtonCustomProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const ButtonCustom = ({ title, loading, ...props }: ButtonCustomProps) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const style = createStyle(theme);

  return (
    <TouchableOpacity {...props}>
      <View style={style.button}>
        {loading ? (
          <Loader size="small" />
        ) : (
          <Text style={style.buttonText}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
