import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutes } from "./routes";
import AuthNavigation from "./auth/Auth";
import MainNavigation from "./Main";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootRoutes.auth} component={AuthNavigation} />
      <Stack.Screen name={RootRoutes.main} component={MainNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
