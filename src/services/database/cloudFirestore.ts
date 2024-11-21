import { IDatabaseService, Lot, LotData } from "./databaseService";
import firestore from "@react-native-firebase/firestore";

export const FirestoreCollections = {
  users: "users",
  lots: "lots",
} as const;

export class CloudFirestoreService implements IDatabaseService {
  async addNewLot(data: LotData) {
    try {
      const doc = await firestore()
        .collection(FirestoreCollections.lots)
        .add(data);
      console.log("Lot created with id: ", doc.id);
    } catch (error) {
      console.error("Error creating new lot:", error);
      throw error;
    }
  }

  async getLots() {
    try {
      const snapshot = await firestore()
        .collection<LotData>(FirestoreCollections.lots)
        .get();

      if (snapshot.empty) {
        throw new Error("No lots found.");
      }

      const lots = snapshot.docs.map((doc) => {
        const lotData = doc.data();
        const id = doc.id;
        const lot: Lot = {
          id,
          ...lotData,
        };
        return lot;
      });
      return lots;
    } catch (error) {
      console.error("Error while getting lots:", error);
      throw error;
    }
  }

  subscribeToLots(
    onUpdate: (lots: Lot[]) => void,
    onError: (error: Error) => void,
    userId?: number
  ) {
    const collectionRef = firestore().collection<LotData>(
      FirestoreCollections.lots
    );

    const query = userId
      ? collectionRef.where("userId", "==", userId)
      : collectionRef;

    const unsubscribe = query.onSnapshot(
      (snapshot) => {
        const lots = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Lot[];
        onUpdate(lots);
      },
      (error) => {
        onError(error);
      }
    );

    return unsubscribe;
  }
}
