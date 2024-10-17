import React from "react";
import { View, Text, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./RegisterForm.styles";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { USER } from "../../../../constants";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { ButtonCustom } from "../../../common";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const signUp = async (data: RegisterFormData) => {
    const { email, password, lastName, firstName } = data;

    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      firestore().collection("users").doc(user?.uid).set({
        firstName,
        lastName,
        email,
        credits: USER.default_credits,
        image: null,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    } catch (e: unknown) {
      const err = e as ReactNativeFirebase.NativeFirebaseError;
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First Name</Text>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: "First name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.firstName && (
        <Text style={styles.error}>{errors.firstName.message}</Text>
      )}

      <Text style={styles.label}>Last Name</Text>
      <Controller
        control={control}
        name="lastName"
        rules={{ required: "Last name is required" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.lastName && (
        <Text style={styles.error}>{errors.lastName.message}</Text>
      )}

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email address",
          },
        }}
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
        loading={isSubmitting}
        title="Register"
        onPress={handleSubmit(signUp)}
      />
    </View>
  );
};
