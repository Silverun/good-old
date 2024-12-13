import { View } from "react-native";
import { AuthRoutes } from "../../../navigation/routes";
import { AuthScreenProps } from "../../../navigation/types";
import { LoginForm } from "../../../components/presentation/auth/loginForm/LoginForm";
import { styles } from "./Login.styles";
import { TextCustom, TextLink } from "../../../components/common";
import { useTranslation } from "react-i18next";

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  const { t } = useTranslation("auth", { keyPrefix: "login" });

  return (
    <View style={styles.container}>
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
    </View>
  );
};
export default LoginScreen;
