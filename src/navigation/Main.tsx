import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRoutes } from "./routes";
import { LotsScreen, MyLotsScreen, ProfileScreen } from "../screens";

const Tabs = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={MainRoutes.lots} component={LotsScreen} />
      <Tabs.Screen name={MainRoutes.profile} component={ProfileScreen} />
      <Tabs.Screen name={MainRoutes.myLots} component={MyLotsScreen} />
    </Tabs.Navigator>
  );
};

export default MainNavigation;
