import { Image, StyleSheet, View } from "react-native";
import { RegisterForm } from "../../components/presentation/auth/registerForm/RegisterForm";
import { WIDTH } from "../../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const logo = require("../../assets/images/icon.png");

const RegisterScreen = () => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoBlock}>
        <Image source={logo} style={styles.logo} />
      </View>
      <RegisterForm />
    </KeyboardAwareScrollView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: WIDTH.thirty,
    height: WIDTH.thirty,
  },
  logoBlock: {
    alignItems: "center",
    paddingBottom: 30,
  },
});
