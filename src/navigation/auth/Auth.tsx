import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRoutes } from "../routes";
import { LoginScreen, RegisterScreen } from "../../screens";
import { AuthStackParamList } from "../types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthRoutes.login} component={LoginScreen} />
      <Stack.Screen name={AuthRoutes.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
