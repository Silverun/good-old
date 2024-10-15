import { View, Button, StyleSheet } from "react-native";
import { AuthRoutes } from "../../navigation/routes";
import { AuthScreenProps } from "../../navigation/types";
import { LoginForm } from "../../components/presentation/auth/loginForm/LoginForm";

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <LoginForm />
      <Button
        title="Register"
        onPress={() => navigation.navigate(AuthRoutes.register)}
      />
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
