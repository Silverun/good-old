import { Image, View } from "react-native";
import { AuthRoutes } from "../../../navigation/routes";
import { AuthScreenProps } from "../../../navigation/types";
import { LoginForm } from "../../../components/presentation/auth/loginForm/LoginForm";
import { styles } from "./Login.styles";
import { TextCustom, TextLink } from "../../../components/common";
import { useTranslation } from "react-i18next";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const logo = require("../../../assets/images/icon.png");

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  const { t } = useTranslation("auth", { keyPrefix: "login" });

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoBlock}>
        <Image source={logo} style={styles.logo} />
      </View>
      <LoginForm />
      <View style={styles.registerBlock}>
        <TextCustom fontWeight="regular">{t("notRegistered")}</TextCustom>
        <TextLink
          size="h3"
          fontWeight="bold"
          title={t("register")}
          onPress={() => navigation.navigate(AuthRoutes.register)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};
export default LoginScreen;
