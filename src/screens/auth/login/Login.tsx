import { View, Button, StyleSheet, Text } from "react-native";
import { AuthRoutes } from "../../../navigation/routes";
import { AuthScreenProps } from "../../../navigation/types";
import { LoginForm } from "../../../components/presentation/auth/loginForm/LoginForm";
import { styles } from "./Login.styles";
import TextLink from "../../../components/common/link/TextLink";

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <LoginForm />
      <Text style={styles.text}>Not registered yet?</Text>
      <TextLink
        fontSize="h1"
        title="Register"
        onPress={() => navigation.navigate(AuthRoutes.register)}
      />
    </View>
  );
};
export default LoginScreen;
