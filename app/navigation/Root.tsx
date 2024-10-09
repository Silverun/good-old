import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutes } from ".";
import AuthNavigation from "./Auth";
import MainNavigation from "./Main";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RootRoutes.main} component={MainNavigation} />
      <Stack.Screen name={RootRoutes.auth} component={AuthNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
