import { IDatabaseService, LotData } from "./databaseService";
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
}
