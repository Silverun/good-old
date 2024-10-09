import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRoutes } from "./index";
import LoginScreen from "../screens/Auth/Login";
import RegisterScreen from "../screens/Auth/Register";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthRoutes.login} component={LoginScreen} />
      <Stack.Screen name={AuthRoutes.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
