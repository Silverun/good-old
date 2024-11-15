import React from "react";
import { Button, View } from "react-native";
import { useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { styles } from "./LoginForm.styles";
import { ButtonCustom, RHFField } from "../../../common";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const login = async (data: LoginFormData) => {
    const { email, password } = data;
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: unknown) {
      const err = e as ReactNativeFirebase.NativeFirebaseError;
      alert("Login failed: " + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <RHFField
        label={{ text: "Email", style: styles.label }}
        controller={{
          name: "email",
          control,
          rules: { required: "Email is required" },
        }}
        input={{
          placeholder: "Enter your email",
          keyboardType: "email-address",
          autoCapitalize: "none",
          style: styles.input,
        }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: "Password", style: styles.label }}
        controller={{
          name: "password",
          control,
          rules: { required: "Password is required" },
        }}
        input={{
          placeholder: "Enter your password",
          secureTextEntry: true,
          style: styles.input,
        }}
        error={{ errors }}
      />
      <ButtonCustom
        style={styles.loginButton}
        loading={isSubmitting}
        disabled={isSubmitting}
        title="Login"
        onPress={handleSubmit(login)}
      />
    </View>
  );
};
