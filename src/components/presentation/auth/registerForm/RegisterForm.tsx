import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "./RegisterForm.styles";
import { ButtonCustom, RHFField } from "../../../common";
import { VALID_NAME } from "../../../../constants/locales";
import { userService } from "../../../../services/database/user/userService";
import { useTranslation } from "react-i18next";

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const { t } = useTranslation("auth", { keyPrefix: "register" });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const signUp = async (data: RegisterFormData) => {
    try {
      await userService.addUser(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RHFField
        label={{ text: t("firstName"), style: styles.label }}
        controller={{
          name: "firstName",
          control,
          rules: {
            required: t("firstNameRequired"),
            minLength: {
              value: 2,
              message: t("minLengthFirstName"),
            },
            pattern: { value: VALID_NAME, message: t("invalidFirstName") },
          },
        }}
        input={{ placeholder: t("firstNamePlaceholder") }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: t("lastName"), style: styles.label }}
        controller={{
          name: "lastName",
          control,
          rules: {
            required: t("lastNameRequired"),
            pattern: { value: VALID_NAME, message: t("invalidLastName") },
            minLength: {
              value: 2,
              message: t("minLengthLastName"),
            },
          },
        }}
        input={{ placeholder: t("lastNamePlaceholder") }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: t("email"), style: styles.label }}
        controller={{
          name: "email",
          control,
          rules: {
            required: t("emailRequired"),
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: t("invalidEmail"),
            },
          },
        }}
        input={{
          placeholder: t("emailPlaceholder"),
          keyboardType: "email-address",
          autoCapitalize: "none",
        }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: t("password"), style: styles.label }}
        controller={{
          name: "password",
          control,
          rules: {
            required: t("passwordRequired"),
            minLength: {
              value: 6,
              message: t("passwordMinLength"),
            },
          },
        }}
        input={{
          placeholder: t("passwordPlaceholder"),
          secureTextEntry: true,
        }}
        error={{ errors }}
      />
      <ButtonCustom
        style={styles.button}
        loading={isSubmitting}
        title={t("register")}
        onPress={handleSubmit(signUp)}
      />
    </View>
  );
};
