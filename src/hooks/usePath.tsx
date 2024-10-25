import { NavigationState, useNavigationState } from "@react-navigation/native";

export const getFullRoutePath = (
  state: NavigationState | undefined,
  routes: string[] = []
): string[] => {
  if (!state || !state.routes.length) {
    return routes;
  }

  const currentRoute = state.routes[state.index];
  const routeName = currentRoute.name;
  routes.push(routeName);

  if (currentRoute.state) {
    routes = getFullRoutePath(currentRoute.state as NavigationState, routes);
  }

  return routes;
};

export const useCurrentPath = () => {
  const navigationState = useNavigationState((state) => state);
  const path = getFullRoutePath(navigationState);
  const currentScreen = path[path.length - 1];

  return { path, currentScreen };
};
