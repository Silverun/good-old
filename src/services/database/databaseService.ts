import { LotCategory } from "../../constants";
import { CloudFirestoreService } from "./cloudFirestore";

export interface IDatabaseService {
  addNewLot: (data: LotData) => Promise<void>;
}

export interface LotData {
  title: string;
  description: string;
  price: number;
  category: LotCategory;
  imageUrls: string[];
  userId: number;
}

class DatabaseService {
  private databaseService: IDatabaseService;

  constructor(databaseService: IDatabaseService) {
    this.databaseService = databaseService;
  }

  async addNewLot(data: LotData) {
    this.databaseService.addNewLot(data);
  }
}

const cloudFirestore = new CloudFirestoreService();
export const databaseService = new DatabaseService(cloudFirestore);
