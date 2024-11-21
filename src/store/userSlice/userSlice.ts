import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  image: string | null;
  email: string;
  credits: number;
}

export interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User | null>) => {
      if (action.payload === null) {
        state = initialState;
      }
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      s;
      state = initialState;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
