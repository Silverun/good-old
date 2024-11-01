import { StyleSheet } from "react-native";
import { HEIGHT, Theme, WIDTH } from "../../../../../../constants";

export const stylesThemed = (theme: Theme) =>
  StyleSheet.create({
    carouselContainer: {
      columnGap: 10,
      marginVertical: 10,
    },
    imageContainer: {
      width: 80,
      height: 80,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: theme.inputBorderColor,
      justifyContent: "center",
      alignItems: "center",
    },
    addButtonText: {
      fontSize: 24,
      color: theme.inputBorderColor,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
    },
    modal_overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      alignItems: "center",
    },
    modalContainer: {
      flexDirection: "row",
      marginVertical: HEIGHT.ten,
      padding: 20,
      backgroundColor: theme.background,
      borderRadius: 8,
      gap: 20,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 15,
    },
  });
