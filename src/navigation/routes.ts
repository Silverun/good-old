export const AuthRoutes = {
  login: "Login",
  register: "Register",
} as const;

export const MainRoutes = {
  lots: "Lots",
  profile: "Profile",
  myLots: "My Lots",
} as const;

export const RootRoutes = {
  auth: "Auth",
  main: "Main",
} as const;

export const MyLotsRoutes = {
  myLotsList: "My lots list",
  addLot: "Add new lot",
} as const;
