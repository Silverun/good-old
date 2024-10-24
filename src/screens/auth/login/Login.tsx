import { View } from "react-native";
import { AuthRoutes } from "../../../navigation/routes";
import { AuthScreenProps } from "../../../navigation/types";
import { LoginForm } from "../../../components/presentation/auth/loginForm/LoginForm";
import { styles } from "./Login.styles";
import { TextCustom, TextLink } from "../../../components/common";

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <LoginForm />
      <View style={styles.registerBlock}>
        <TextCustom fontWeight="regular">Not registered?</TextCustom>
        <TextLink
          size="h3"
          fontWeight="bold"
          title="Register"
          onPress={() => navigation.navigate(AuthRoutes.register)}
        />
      </View>
    </View>
  );
};
export default LoginScreen;
