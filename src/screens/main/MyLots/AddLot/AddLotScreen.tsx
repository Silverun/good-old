import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { MainTabsNavigationProp } from "../../../../navigation/main/Main.types";
import { useEffect, useLayoutEffect } from "react";

export const AddLotScreen = () => {
  // const navigation = useNavigation<MainTabsNavigationProp>();

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     tabBarStyle: {
  //       display: "none",
  //     },
  //   });
  // }, []);

  return (
    <View>
      <Text>AddLotScreen</Text>
    </View>
  );
};
