import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddLotScreen } from "../../screens/main/MyLots/AddLot/AddLotScreen";
import { MyLotsRoutes } from "../routes";
import { MyLotsScreenProps, MyLotsStackParamList } from "./myLots.types";
import { MyLotsListScreen } from "../../screens";
import { useTranslation } from "react-i18next";

const Stack = createNativeStackNavigator<MyLotsStackParamList>();

const MyLotsNavigation = ({ navigation, route }: MyLotsScreenProps) => {
  const { t } = useTranslation("lots", { keyPrefix: "addLot" });
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={MyLotsRoutes.myLotsList}
        component={MyLotsListScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: t("heading"),
        }}
        name={MyLotsRoutes.addLot}
        component={AddLotScreen}
      />
    </Stack.Navigator>
  );
};

export default MyLotsNavigation;
