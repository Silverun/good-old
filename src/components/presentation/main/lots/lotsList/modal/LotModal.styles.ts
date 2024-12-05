import { StyleSheet } from "react-native";
import { HEIGHT, Theme, WIDTH } from "../../../../../../constants";

const paddingModal = 20;

export const createStyle = (theme: Theme) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: theme.background,
      padding: paddingModal,
    },
    imageScrollContainer: {
      gap: 15,
    },
    image: {
      width: WIDTH.full - paddingModal * 2,
      height: HEIGHT.forty,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonsContainer: {
      flexDirection: "row",
    },
    closeButton: {
      alignSelf: "flex-end",
    },
  });
