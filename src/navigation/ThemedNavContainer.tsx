import React from "react";
import {
  NavigationContainer,
  NavigationContainerProps,
} from "@react-navigation/native";
import { useThemeCustom } from "../hooks";

interface ThemedNavContainerProps extends NavigationContainerProps {}

const ThemedNavContainer = ({ children }: ThemedNavContainerProps) => {
  const { theme } = useThemeCustom();

  return (
    <NavigationContainer theme={theme.navigator}>
      {children}
    </NavigationContainer>
  );
};

export default ThemedNavContainer;
