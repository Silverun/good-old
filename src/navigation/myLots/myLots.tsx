import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddLotScreen } from "../../screens/main/MyLots/AddLot/AddLotScreen";
import { MyLotsRoutes } from "../routes";
import { MyLotsScreenProps, MyLotsStackParamList } from "./myLots.types";
import { MyLotsListScreen } from "../../screens";
import { useEffect } from "react";

const Stack = createNativeStackNavigator<MyLotsStackParamList>();

const MyLotsNavigation = ({ navigation, route }: MyLotsScreenProps) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={MyLotsRoutes.myLotsList}
        component={MyLotsListScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={MyLotsRoutes.addLot}
        component={AddLotScreen}
      />
    </Stack.Navigator>
  );
};

export default MyLotsNavigation;
