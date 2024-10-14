import { StyleSheet, View } from "react-native";
import { RegisterForm } from "../../components/presentation/auth/RegisterForm";
const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
