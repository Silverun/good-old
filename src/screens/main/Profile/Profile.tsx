import { View, StyleSheet } from "react-native";
import { userService } from "../../../services/database/user/userService";
import { useAppSelector } from "../../../hooks";
import { ButtonCustom } from "../../../components/common";
import { UserProfileInfo } from "../../../components/presentation";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
  const { user } = useAppSelector((state) => state.user);
  const { t } = useTranslation("profile");

  const signOutUser = async () => {
    try {
      await userService.logoutUser();
    } catch (error) {
      alert(error);
    }
  };

  if (user)
    return (
      <View style={styles.container}>
        <UserProfileInfo user={user} />
        <View style={styles.buttonBlock}>
          <ButtonCustom title={t("signOut")} onPress={signOutUser} />
        </View>
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  buttonBlock: {
    alignSelf: "center",
  },
});
