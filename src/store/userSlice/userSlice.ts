import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  image: string | null;
  email: string;
  credits: number;
  createdAt: string;
}

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearActiveUser: (state) => {
      state.user = null;
    },
  },
});

export const { setActiveUser, clearActiveUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
