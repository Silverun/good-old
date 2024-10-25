import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootRoutes } from "../routes";
import { NavigatorScreenParams } from "@react-navigation/native";
import { AuthStackParamList } from "../types";
import { MainTabsParamList } from "../main/Main.types";

export type RootStackParamList = {
  [RootRoutes.auth]: NavigatorScreenParams<AuthStackParamList>;
  [RootRoutes.main]: NavigatorScreenParams<MainTabsParamList>;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RootScreenProps = NativeStackScreenProps<RootStackParamList>;
