import { StyleSheet } from "react-native";
import { FONT_FAMILIES, Theme } from "../../../../../../constants";

export const stylesThemed = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    picker_container: {
      gap: 10,
      marginBottom: 10,
    },
    picker_wrapper: {
      borderWidth: 1,
      borderColor: theme.inputBorderColor,
      borderRadius: 10,
      overflow: "hidden",
    },
    picker: {
      backgroundColor: theme.inputBackground,
    },
    picker_item: {
      color: theme.textColor,
      fontFamily: FONT_FAMILIES.regular,
      backgroundColor: theme.inputBackground,
    },
    desc_text: {
      textAlignVertical: "top",
    },
    submit_button: {
      marginTop: 10,
      alignSelf: "flex-end",
    },
  });
