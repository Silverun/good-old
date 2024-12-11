import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { MainTabsParamList } from "./Main.types";
import { StyleSheet } from "react-native";
import { MainRoutes } from "../routes";
import { FONT_FAMILIES, FONTS_SIZES } from "../../constants";

type MainTabsScreenOptions = (props: {
  route: RouteProp<MainTabsParamList, keyof MainTabsParamList>;
  navigation: any;
}) => BottomTabNavigationOptions;

export const MainTabsScreenOptions =
  (
    currentScreen: string,
    soldItemsCount: number | undefined
  ): MainTabsScreenOptions =>
  ({ route }) => {
    let iconName: keyof typeof MaterialIcons.glyphMap;
    const style = createStyle();

    switch (route.name) {
      case "Lots":
        iconName = "view-list";
        break;
      case "Profile":
        iconName = "person";
        break;
      case "My Lots":
        iconName = "bookmarks";
        break;
      default:
        iconName = "home";
    }

    return {
      headerShown: false,
      tabBarStyle: {
        display: currentScreen === "Add new lot" ? "none" : "flex",
      },
      tabBarIcon: ({ color, size }) => (
        <MaterialIcons name={iconName} color={color} size={size} />
      ),
      ...(route.name === MainRoutes.myLots && {
        tabBarBadge: soldItemsCount,
        tabBarBadgeStyle: style.tabBarBadge,
      }),
    };
  };

const createStyle = () => {
  const tabBarBadgeSize = 14;

  return StyleSheet.create({
    tabBarBadge: {
      fontFamily: FONT_FAMILIES.regular,
      fontSize: FONTS_SIZES.h7,
      borderRadius: tabBarBadgeSize / 2,
      height: tabBarBadgeSize,
      width: tabBarBadgeSize,
      minWidth: tabBarBadgeSize,
      lineHeight: tabBarBadgeSize - 1,
    },
  });
};
