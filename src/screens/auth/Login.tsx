import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import { AuthRoutes } from "../../navigation/routes";
import { AuthNavigationProp, AuthScreenProps } from "../../navigation/types";

const LoginScreen = ({ navigation }: AuthScreenProps) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate(AuthRoutes.register);
        }}
      />
    </View>
  );
};
export default LoginScreen;
