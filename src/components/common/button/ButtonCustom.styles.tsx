import { StyleSheet } from "react-native";
import { deviceHeightRatio, HEIGHT, Theme, WIDTH } from "../../../constants";

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    button: {
      minHeight: deviceHeightRatio(0.05),
      backgroundColor: theme.buttonBackground,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: theme.buttonTextColor,
    },
  });
