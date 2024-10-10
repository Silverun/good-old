import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { AuthRoutes } from "../routes";

export type AuthStackParamList = {
  [AuthRoutes.login]: undefined;
  [AuthRoutes.register]: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList>;
export type AuthScreenProps = NativeStackScreenProps<AuthStackParamList>;
