import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import {
  AuthChangeFunc,
  IUserService,
  loginUserData,
  newUserRegData,
} from "./userService";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { USER } from "../../../constants";
import { ReactNativeFirebase } from "@react-native-firebase/app";
import { FirestoreCollections } from "../cloudFirestore";
import { User } from "../../../store/userSlice/userSlice";

export class UserFirestore implements IUserService {
  async addUser(userData: newUserRegData) {
    const { email, password, lastName, firstName } = userData;
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore().collection("users").doc(user?.uid).set({
        firstName,
        lastName,
        email,
        credits: USER.default_credits,
        image: null,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error: unknown) {
      const err = error as ReactNativeFirebase.NativeFirebaseError;
      console.error("Firebase error: ", err);
      throw err;
    }
  }

  authChangeHandler<T>(handler: AuthChangeFunc<T>) {
    auth().onAuthStateChanged((user) => handler(user as T));
  }

  async loginUser(userData: loginUserData) {
    const { email, password } = userData;
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error: unknown) {
      const err = error as ReactNativeFirebase.NativeFirebaseError;
      console.error("Firebase error: ", err);
      throw err;
    }
  }

  async logoutUser() {
    try {
      await auth().signOut();
      console.log("User signed out, from firebase!");
    } catch (error) {
      const err = error as ReactNativeFirebase.NativeFirebaseError;
      console.error("Firebase error: ", err);
      throw err;
    }
  }

  async getUser(id: string) {
    try {
      const res = await firestore()
        .collection(FirestoreCollections.users)
        .doc(id)
        .get();
      const user = res.data();
      if (user) {
        const createdAt = user.createdAt as FirebaseFirestoreTypes.Timestamp;
        const fullUser = {
          ...user,
          createdAt: createdAt.toDate().toISOString(),
        };
        return fullUser as User;
      } else {
        return undefined;
      }
    } catch (error) {
      throw error;
    }
  }
}

export const userFirestore = new UserFirestore();
