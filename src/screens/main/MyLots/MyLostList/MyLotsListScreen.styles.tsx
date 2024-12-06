import { StyleSheet } from "react-native";
import { FONTS_SIZES, WIDTH } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  add_button: {
    position: "absolute",
    height: WIDTH.fifteen,
    width: WIDTH.fifteen,
    borderRadius: WIDTH.fifteen / 2,
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  add_button_text: {
    paddingBottom: 5,
    fontSize: 30,
  },
});
