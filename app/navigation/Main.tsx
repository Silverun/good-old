import ProfileScreen from "../screens/Main/Profile/Profile";
import LotsScreen from "../screens/Main/Lots";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRoutes } from ".";
import MyLotsScreen from "../screens/Main/MyLots";

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
