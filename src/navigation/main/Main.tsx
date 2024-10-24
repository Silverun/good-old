import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRoutes } from "../routes";
import { LotsScreen, ProfileScreen } from "../../screens";
import {
  MainTabsNavigationProp,
  MainTabsParamList,
  MainTabsScreenProps,
} from "./Main.types";
import { MainTabsScreenOptions } from "./Main.options";
import MyLotsNavigation from "../myLots/myLots";
import { useRoute } from "@react-navigation/native";
import { MyLotsRouteProp } from "../myLots/myLots.types";
import { useEffect } from "react";

const Tabs = createBottomTabNavigator<MainTabsParamList>();

const MainNavigation = ({ route }: MainTabsScreenProps) => {
  // const route = useRoute<MyLotsRouteProp>();

  return (
    <Tabs.Navigator screenOptions={MainTabsScreenOptions}>
      <Tabs.Screen name={MainRoutes.lots} component={LotsScreen} />
      <Tabs.Screen name={MainRoutes.profile} component={ProfileScreen} />
      <Tabs.Screen name={MainRoutes.myLots} component={MyLotsNavigation} />
    </Tabs.Navigator>
  );
};

export default MainNavigation;
