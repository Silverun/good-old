import { ILotsService, Lot, LotData } from "./lotsService";
import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";

export const FirestoreCollections = {
  users: "users",
  lots: "lots",
} as const;

export interface LotDataFirestore extends LotData {
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

export class LotsFirestore implements ILotsService {
  async addNewLot(data: LotData) {
    try {
      const doc = await firestore()
        .collection(FirestoreCollections.lots)
        .add({
          ...data,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      console.log("Lot created with id: ", doc.id);
    } catch (error) {
      console.error("Error creating new lot:", error);
      throw error;
    }
  }

  async getLots() {
    try {
      const snapshot = await firestore()
        .collection<LotDataFirestore>(FirestoreCollections.lots)
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
          createdAt: lotData.createdAt.toDate().toISOString(),
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
    userId?: string
  ) {
    const collectionRef = firestore().collection<LotDataFirestore>(
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
          createdAt: doc.data().createdAt?.toDate().toISOString(),
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

export const lotsFirestore = new LotsFirestore();
