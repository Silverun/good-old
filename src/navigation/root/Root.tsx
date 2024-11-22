import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootRoutes } from "../routes";
import { RootStackParamList } from "./Root.types";
import MainNavigation from "../main/Main";
import AuthNavigation from "../auth/Auth";
import { useAuth } from "../../hooks";
import { View } from "react-native";
import { Loader } from "../../components/common";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { userState, initializing } = useAuth();
  const isLoggedIn = userState.isLoggedIn;

  if (initializing)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loader />
      </View>
    );

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLoggedIn ? (
        <Stack.Screen name={RootRoutes.main} component={MainNavigation} />
      ) : (
        <Stack.Screen name={RootRoutes.auth} component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigation;
