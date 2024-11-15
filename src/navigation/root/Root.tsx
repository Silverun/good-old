import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutes } from "../routes";
import { RootStackParamList } from "./Root.types";
import MainNavigation from "../main/Main";
import AuthNavigation from "../auth/Auth";
import { useAuth } from "../../hooks";
import { Text } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { user, initializing } = useAuth();

  if (initializing) return <Text>Loading</Text>;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name={RootRoutes.main} component={MainNavigation} />
      ) : (
        <Stack.Screen name={RootRoutes.auth} component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
