import { View, Text, StyleSheet, Button } from "react-native";
import { userService } from "../../../services/database/user/userService";
import { useAppSelector } from "../../../hooks";
import { TextCustom } from "../../../components/common";

const ProfileScreen = () => {
  const { user } = useAppSelector((state) => state.user);

  const signOutUser = async () => {
    try {
      await userService.logoutUser();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextCustom>{user?.firstName}</TextCustom>
      <TextCustom>{user?.lastName}</TextCustom>
      <Button title="Sign out" onPress={signOutUser} color="red" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
