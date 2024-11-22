import { View, Text, StyleSheet, Button } from "react-native";
import { userService } from "../../../services/database/user/userService";
import { useAppDispatch } from "../../../hooks";
import { clearActiveUser } from "../../../store/userSlice/userSlice";

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const signOutUser = async () => {
    try {
      await userService.logoutUser();
      dispatch(clearActiveUser());
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
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
