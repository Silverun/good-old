import { FirebaseStorageService } from "./firebaseStorage";

export interface IStorageService {
  uploadImages(images: string[], path: string): Promise<string[]>;
}

class StorageService {
  private storageService: IStorageService;

  constructor(storageService: IStorageService) {
    this.storageService = storageService;
  }

  async uploadImages(images: string[], path: string): Promise<string[]> {
    return this.storageService.uploadImages(images, path);
  }
}

const firebaseStorage = new FirebaseStorageService();

export const storageService = new StorageService(firebaseStorage);
