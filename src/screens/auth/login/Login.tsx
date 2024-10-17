import { View, Text } from "react-native";
import { AuthRoutes } from "../../../navigation/routes";
import { AuthScreenProps } from "../../../navigation/types";
import { LoginForm } from "../../../components/presentation/auth/loginForm/LoginForm";
import { styles } from "./Login.styles";
import TextLink from "../../../components/common/link/TextLink";
import { TextCustom } from "../../../components/common";

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <LoginForm />
      <TextCustom size="h4">Not registered yet?</TextCustom>
      <TextLink
        fontSize="h5"
        title="Register"
        onPress={() => navigation.navigate(AuthRoutes.register)}
      />
    </View>
  );
};
export default LoginScreen;
