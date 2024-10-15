import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { ReactNode, useEffect, useState } from "react";
import Loader from "../../../common/loader/Loader";

type AuthGateProps = {
  children: ReactNode;
};

const AuthGate = ({ children }: AuthGateProps) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log("onAuthStateChanged", user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return <Loader size="large" />;

  if (user) return <>{children}</>;

  return null;
};
export default AuthGate;
