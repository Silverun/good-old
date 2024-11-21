import { LotCategory } from "../../constants";
import { CloudFirestoreService } from "./cloudFirestore";

export interface IDatabaseService {
  addNewLot: (data: LotData) => Promise<void>;
  getLots: () => Promise<Lot[]>;
  subscribeToLots: (
    onUpdate: (lots: Lot[]) => void,
    onError: (error: Error) => void,
    userId?: number
  ) => () => void;
}

export interface LotData {
  title: string;
  description: string;
  price: number;
  category: LotCategory;
  imageUrls: string[];
  userId: number;
}

export interface Lot extends LotData {
  id: string;
}

class DatabaseService {
  private databaseService: IDatabaseService;

  constructor(databaseService: IDatabaseService) {
    this.databaseService = databaseService;
  }

  async addNewLot(data: LotData) {
    this.databaseService.addNewLot(data);
  }
  async getLots() {
    return this.databaseService.getLots();
  }

  subscribeToLots(
    onUpdate: (lots: Lot[]) => void,
    onError: (error: Error) => void,
    userId?: number
  ) {
    return this.databaseService.subscribeToLots(onUpdate, onError, userId);
  }
}

const cloudFirestore = new CloudFirestoreService();
export const databaseService = new DatabaseService(cloudFirestore);
