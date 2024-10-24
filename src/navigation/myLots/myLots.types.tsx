import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { MyLotsRoutes } from "../routes";
import { RouteProp } from "@react-navigation/native";

export type MyLotsStackParamList = {
  [MyLotsRoutes.myLotsList]: undefined;
  [MyLotsRoutes.addLot]: undefined;
};

export type MyLotsNavigationProp =
  NativeStackNavigationProp<MyLotsStackParamList>;
export type MyLotsScreenProps = NativeStackScreenProps<MyLotsStackParamList>;
export type MyLotsRouteProp = RouteProp<MyLotsStackParamList>;
