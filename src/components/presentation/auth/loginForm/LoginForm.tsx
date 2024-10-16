import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { styles } from "./LoginForm.styles";
import ButtonCustom from "../../../common/button/Button";
import InputRHF from "../../../common/react-hook-form/InputRHF";

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
      <InputRHF
        label="Email"
        name="email"
        control={control}
        rules={{ required: "Email is required" }}
        errors={errors}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <InputRHF
        label="Password"
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        errors={errors}
        placeholder="Enter your password"
        secureTextEntry
      />

      <ButtonCustom
        loading={isSubmitting}
        title="Login"
        onPress={handleSubmit(login)}
      />
    </View>
  );
};
