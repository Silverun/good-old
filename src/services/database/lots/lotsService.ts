import { LotCategory, LotStatus } from "../../../constants";
import { storageService } from "../../storage/storageService";
import { lotsFirestore } from "./lotsFirestore";

export interface ILotsService {
  addNewLot: (data: LotData) => Promise<void>;
  subscribeToLots: (
    onUpdate: (lots: Lot[]) => void,
    onError: (error: Error) => void,
    userId?: string
  ) => () => void;
  deleteLot: (lotId: string) => Promise<void>;
  buyLot: (lotId: string) => Promise<void>;
}

export interface LotData {
  title: string;
  description: string;
  price: number;
  category: LotCategory;
  imageUrls: string[];
  userId: string;
}

export interface Lot extends LotData {
  id: string;
  createdAt: string;
  status: LotStatus;
}

class LotsService {
  private lotsService: ILotsService;

  constructor(lotsService: ILotsService) {
    this.lotsService = lotsService;
  }

  async addNewLot(data: LotData) {
    try {
      this.lotsService.addNewLot(data);
    } catch (error) {
      throw new Error("There was an error adding the lot.");
    }
  }

  async buyLot(lotId: string) {
    try {
      this.lotsService.buyLot(lotId);
    } catch (error) {
      throw new Error("There was an error buying the lot.");
    }
  }

  subscribeToLots(
    onUpdate: (lots: Lot[]) => void,
    onError: (error: Error) => void,
    userId?: string
  ) {
    return this.lotsService.subscribeToLots(onUpdate, onError, userId);
  }

  async deleteLot(lot: Lot) {
    try {
      await this.lotsService.deleteLot(lot.id);
      if (lot.imageUrls.length > 0) {
        await storageService.deleteImages(lot.imageUrls);
      }
    } catch (error) {
      throw new Error("There was an error deleting the lot.");
    }
  }
}

export const lotsService = new LotsService(lotsFirestore);
