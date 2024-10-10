import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
