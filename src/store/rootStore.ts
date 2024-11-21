import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice/themeSlice";
import { userReducer } from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
