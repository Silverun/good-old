import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { MainRoutes } from "../routes";
import { NavigatorScreenParams } from "@react-navigation/native";
import { MyLotsStackParamList } from "../types";

export type MainTabsParamList = {
  [MainRoutes.lots]: undefined;
  [MainRoutes.profile]: undefined;
  [MainRoutes.myLots]: NavigatorScreenParams<MyLotsStackParamList>;
};

export type MainTabsNavigationProp = BottomTabNavigationProp<MainTabsParamList>;
export type MainTabsScreenProps = BottomTabScreenProps<MainTabsParamList>;
