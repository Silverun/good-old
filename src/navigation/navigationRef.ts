import { createNavigationContainerRef } from "@react-navigation/native";
import { RootStackParamList } from "./types";

const navigationRef = createNavigationContainerRef<RootStackParamList>();

const getCurrentRoute = () => {
  if (!navigationRef.isReady()) return;
  return navigationRef.getCurrentRoute();
};

export const Navigation = {
  ref: navigationRef,
  getCurrentRoute,
};
