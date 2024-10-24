import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { MainRoutes } from "../routes";

export type MainTabsParamList = {
  [MainRoutes.lots]: undefined;
  [MainRoutes.profile]: undefined;
  [MainRoutes.myLots]: undefined;
};

export type MainTabsNavigationProp = BottomTabNavigationProp<MainTabsParamList>;
export type MainTabsScreenProps = BottomTabScreenProps<MainTabsParamList>;
