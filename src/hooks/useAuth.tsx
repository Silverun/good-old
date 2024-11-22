import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useRedux";
import { clearActiveUser, setActiveUser } from "../store/userSlice/userSlice";
import { userService } from "../services/database/user/userService";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    if (user) {
      const res = await userService.getUser(user.uid);
      dispatch(setActiveUser(res!));
      console.log(userState);
    } else {
      console.log("not logged in", userState);
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    console.log(userState);
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);

  return { userState, initializing };
};
