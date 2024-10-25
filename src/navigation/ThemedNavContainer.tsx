import React from "react";
import {
  NavigationContainer,
  NavigationContainerProps,
} from "@react-navigation/native";
import { useThemeCustom } from "../hooks";
import { Navigation } from "./navigationRef";

interface ThemedNavContainerProps extends NavigationContainerProps {}

const ThemedNavContainer = ({ children }: ThemedNavContainerProps) => {
  const { theme } = useThemeCustom();

  return (
    <NavigationContainer ref={Navigation.ref} theme={theme.navigator}>
      {children}
    </NavigationContainer>
  );
};

export default ThemedNavContainer;
