import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import { clearActiveUser, setActiveUser } from "../store/userSlice/userSlice";
import {
  IUserService,
  userService,
} from "../services/database/user/userService";

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [userAuth, setUserAuth] = useState<FirebaseAuthTypes.User | null>(null);

  const dispatch = useAppDispatch();

  const onAuthStateChanged: Parameters<
    IUserService["authChangeHandler"]
  >[0] = async (user) => {
    if (user) {
      setUserAuth(user);
      const res = await userService.getUser(user.uid);
      console.log("User: ", res);
      dispatch(setActiveUser(res!));
    } else {
      setUserAuth(null);
      dispatch(clearActiveUser());
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const subscriber = userService.authChangeHandler(onAuthStateChanged);
    return subscriber;
  }, []);

  return { userAuth, initializing };
};
