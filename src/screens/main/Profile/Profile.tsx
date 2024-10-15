import { View, Text, StyleSheet, Button } from "react-native";
import auth from "@react-native-firebase/auth";

const ProfileScreen = () => {
  const signOutUser = async () => {
    try {
      await auth().signOut();
      console.log("User signed out!");
    } catch (error) {
      console.error("Error signing out: ", error);
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
