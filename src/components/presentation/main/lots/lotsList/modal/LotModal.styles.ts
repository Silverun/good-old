import { StyleSheet } from "react-native";
import { HEIGHT, Theme, WIDTH } from "../../../../../../constants";

const paddingModal = 20;
const backButtonRadius = WIDTH.twenty;

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: theme.background,
      padding: paddingModal,
      gap: 10,
    },
    imageScrollContainer: {
      columnGap: 15,
    },
    image: {
      width: WIDTH.full - paddingModal * 2,
      height: HEIGHT.forty,
      borderRadius: 10,
    },
    textContainer: {
      gap: 5,
    },
    description: {
      borderTopWidth: 1,
      borderColor: theme.buttonBackground,
      paddingTop: 5,
      flex: 1,
    },
    descriptionText: {
      paddingBottom: 10,
    },
    backButton: {
      position: "absolute",
      height: backButtonRadius,
      width: backButtonRadius,
      borderRadius: backButtonRadius / 2,
      top: paddingModal / 2,
      left: paddingModal / 2,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 0,
      paddingVertical: 0,
      elevation: 10,
      shadowColor: "#000",
      shadowOffset: { width: 30, height: 30 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      borderColor: theme.buttonTextColor,
      borderWidth: 0.2,
    },
    backButtonText: {
      fontSize: 35,
      paddingBottom: 10,
    },
  });
