import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { styles } from "./RegisterForm.styles";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { USER } from "../../../../constants";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { ButtonCustom, RHFField } from "../../../common";
import { VALID_NAME } from "../../../../constants/locales";

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
      <RHFField
        label={{ text: "First Name", style: styles.label }}
        controller={{
          name: "firstName",
          control,
          rules: {
            required: "First name is required",
            minLength: {
              value: 2,
              message: "Name should be at least 2 characters",
            },
            pattern: { value: VALID_NAME, message: "Invalid first name" },
          },
        }}
        input={{ placeholder: "Enter your first name" }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: "Last Name", style: styles.label }}
        controller={{
          name: "lastName",
          control,
          rules: {
            required: "Last name is required",
            pattern: { value: VALID_NAME, message: "Invalid last name" },
            minLength: {
              value: 2,
              message: "Last name should be at least 2 characters",
            },
          },
        }}
        input={{ placeholder: "Enter your last name" }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: "Email", style: styles.label }}
        controller={{
          name: "email",
          control,
          rules: {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          },
        }}
        input={{
          placeholder: "Enter your email",
          keyboardType: "email-address",
          autoCapitalize: "none",
        }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: "Password", style: styles.label }}
        controller={{
          name: "password",
          control,
          rules: {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          },
        }}
        input={{
          placeholder: "Enter your password",
          secureTextEntry: true,
        }}
        error={{ errors }}
      />
      <ButtonCustom
        style={styles.button}
        loading={isSubmitting}
        title="Register"
        onPress={handleSubmit(signUp)}
      />
    </View>
  );
};
