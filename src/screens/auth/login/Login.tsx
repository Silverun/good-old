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
      <TextCustom fontWeight="light">Not registered yet?</TextCustom>
      <TextLink
        size="h3"
        title="Register"
        onPress={() => navigation.navigate(AuthRoutes.register)}
      />
    </View>
  );
};
export default LoginScreen;
