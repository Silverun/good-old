import { LOT_STATUS } from "../../../constants";
import { ILotsService, Lot, LotData } from "./lotsService";
import firestore, {
  FieldValue,
  FirebaseFirestoreTypes,
  Timestamp,
} from "@react-native-firebase/firestore";

export const FirestoreCollections = {
  users: "users",
  lots: "lots",
} as const;

export interface LotDataFirestoreOut extends Omit<Lot, "id" | "createdAt"> {
  createdAt: Timestamp;
}
export interface LotDataFirestoreIn
  extends Omit<LotDataFirestoreOut, "createdAt"> {
  createdAt: FieldValue;
}

export class LotsFirestore implements ILotsService {
  lotsCollectionRef<
    T extends FirebaseFirestoreTypes.DocumentData = LotDataFirestoreOut
  >() {
    return firestore().collection<T>(FirestoreCollections.lots);
  }

  async addNewLot(data: LotData) {
    try {
      await this.lotsCollectionRef<LotDataFirestoreIn>().add({
        ...data,
        createdAt: firestore.FieldValue.serverTimestamp(),
        status: LOT_STATUS.active,
      });
    } catch (error) {
      console.error("Error creating new lot:", error);
      throw error;
    }
  }

  async deleteLot(lotId: string) {
    try {
      await this.lotsCollectionRef().doc(lotId).delete();
      console.log(`Lot with id ${lotId} deleted successfully.`);
    } catch (error) {
      console.error(`Error deleting lot with id ${lotId}:`, error);
      throw error;
    }
  }

  async buyLot(lotId: string) {
    try {
      await this.lotsCollectionRef<LotDataFirestoreIn>()
        .doc(lotId)
        .update({ status: LOT_STATUS.sold });
      console.log(`Lot with id ${lotId} bought successfully.`);
    } catch (error) {
      console.error(`Error buying lot with id ${lotId}:`, error);
      throw error;
    }
  }

  subscribeToLots(
    onUpdate: (lots: Lot[]) => void,
    onError: (error: Error) => void,
    userId?: string
  ) {
    const ref = this.lotsCollectionRef();
    const query = userId ? ref.where("userId", "==", userId) : ref;

    const unsubscribe = query.onSnapshot(
      (snapshot) => {
        const lots: Lot[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate().toISOString(),
        }));
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
