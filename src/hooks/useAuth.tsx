import { useEffect, useState } from "react";
import { useAppDispatch } from "./useRedux";
import { clearActiveUser, setActiveUser } from "../store/userSlice/userSlice";
import {
  AuthHandlerFunc,
  userService,
} from "../services/database/user/userService";

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [userAuth, setUserAuth] = useState(false);

  const dispatch = useAppDispatch();

  const onAuthStateChanged: AuthHandlerFunc = async (userId) => {
    if (userId) {
      setUserAuth(true);
      const res = await userService.getUser(userId);
      console.log("User: ", res);
      dispatch(setActiveUser(res!));
    } else {
      setUserAuth(false);
      dispatch(clearActiveUser());
    }
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = userService.authChangeHandler(onAuthStateChanged);
    return subscriber;
  }, []);

  return { userAuth, initializing };
};
