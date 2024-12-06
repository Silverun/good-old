import { FirebaseStorageService } from "./firebaseStorage";

export interface IStorageService {
  uploadImages(images: string[], path: string): Promise<string[]>;
  deleteImages(imageUrls: string[]): Promise<void>;
}

class StorageService {
  private storageService: IStorageService;

  constructor(storageService: IStorageService) {
    this.storageService = storageService;
  }

  async uploadImages(images: string[], path: string): Promise<string[]> {
    return this.storageService.uploadImages(images, path);
  }

  async deleteImages(imageUrls: string[]): Promise<void> {
    try {
      this.storageService.deleteImages(imageUrls);
    } catch (error) {
      throw error;
    }
  }
}

const firebaseStorage = new FirebaseStorageService();

export const storageService = new StorageService(firebaseStorage);
