import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
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
    setActiveUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearActiveUser: (state) => {
      console.log("clearActiveUser");
      state = initialState;
    },
  },
});

export const { setActiveUser, clearActiveUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
