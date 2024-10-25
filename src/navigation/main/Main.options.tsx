import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { MainTabsParamList } from "./Main.types";

type MainTabsScreenOptions = (props: {
  route: RouteProp<MainTabsParamList, keyof MainTabsParamList>;
  navigation: any;
}) => BottomTabNavigationOptions;

export const MainTabsScreenOptions =
  (currentScreen: string): MainTabsScreenOptions =>
  ({ route }) => {
    let iconName: keyof typeof MaterialIcons.glyphMap;

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
    };
  };
