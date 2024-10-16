import React from "react";
import { View, Text, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { styles } from "./LoginForm.styles";
import ButtonCustom from "../../../common/button/Button";

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
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        rules={}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <ButtonCustom
        loading={isSubmitting} // Pass isSubmitting for loading indicator
        title="Login"
        onPress={handleSubmit(login)} // handleSubmit will trigger the form validation and submission
      />
    </View>
  );
};
