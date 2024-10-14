import { StyleSheet } from "react-native";
import { Theme } from "../../../constants/colors";

export const styles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.buttonBackground, // Primary blue color
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      elevation: 2, // Adds shadow for Android
      shadowColor: "#000", // Adds shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: "#000000",
      fontSize: 16,
      fontWeight: "600",
    },
  });
