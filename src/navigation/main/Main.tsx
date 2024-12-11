import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRoutes } from "../routes";
import { LotsScreen, ProfileScreen } from "../../screens";
import { MainTabsParamList } from "./Main.types";
import { MainTabsScreenOptions } from "./Main.options";
import MyLotsNavigation from "../myLots/myLots";
import { useCurrentPath } from "../../hooks/usePath";
import { useMainNavigation } from "./hooks/useMainNavigation";

const Tabs = createBottomTabNavigator<MainTabsParamList>();

const MainNavigation = () => {
  const { currentScreen } = useCurrentPath();
  const { soldLotsCount } = useMainNavigation();

  return (
    <Tabs.Navigator
      screenOptions={MainTabsScreenOptions(currentScreen, soldLotsCount)}
    >
      <Tabs.Screen name={MainRoutes.lots} component={LotsScreen} />
      <Tabs.Screen name={MainRoutes.profile} component={ProfileScreen} />
      <Tabs.Screen name={MainRoutes.myLots} component={MyLotsNavigation} />
    </Tabs.Navigator>
  );
};

export default MainNavigation;
