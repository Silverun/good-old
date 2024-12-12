import { StyleSheet } from "react-native";
import { THEMES } from "../../../../constants";

const imageStyle = {
  width: 100,
  height: 100,
  borderRadius: 50,
  marginBottom: 16,
};

export const styles = StyleSheet.create({
  userInfoContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: imageStyle,
  profileImagePlaceholder: {
    ...imageStyle,
    backgroundColor: THEMES.light.profileImagePlaceholder,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    marginBottom: 4,
  },
  email: {
    marginBottom: 8,
  },
  createdAt: {
    color: THEMES.light.textColorSecondary,
    marginBottom: 8,
  },
  actionsContainer: {
    flex: 1,
    gap: 10,
  },
  darkMode: {
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
