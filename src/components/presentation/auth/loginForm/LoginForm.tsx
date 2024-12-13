import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "./LoginForm.styles";
import { ButtonCustom, RHFField } from "../../../common";
import { userService } from "../../../../services/database/user/userService";
import { useTranslation } from "react-i18next";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { t } = useTranslation("auth", { keyPrefix: "login" });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const login = async (data: LoginFormData) => {
    try {
      await userService.loginUser(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RHFField
        label={{ text: t("email"), style: styles.label }}
        controller={{
          name: "email",
          control,
          rules: { required: t("emailRequired") },
        }}
        input={{
          placeholder: t("emailPlaceholder"),
          keyboardType: "email-address",
          autoCapitalize: "none",
          style: styles.input,
        }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: t("password"), style: styles.label }}
        controller={{
          name: "password",
          control,
          rules: { required: t("passwordRequired") },
        }}
        input={{
          placeholder: t("passwordPlaceholder"),
          secureTextEntry: true,
          style: styles.input,
        }}
        error={{ errors }}
      />
      <ButtonCustom
        style={styles.loginButton}
        loading={isSubmitting}
        disabled={isSubmitting}
        title={t("login")}
        onPress={handleSubmit(login)}
      />
    </View>
  );
};
