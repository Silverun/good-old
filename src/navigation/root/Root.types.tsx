import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootRoutes } from "../routes";

export type RootStackParamList = {
  [RootRoutes.auth]: undefined;
  [RootRoutes.main]: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;
export type RootScreenProps = NativeStackScreenProps<RootStackParamList>;
