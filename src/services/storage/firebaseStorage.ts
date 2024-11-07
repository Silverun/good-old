import storage from "@react-native-firebase/storage";
import { IStorageService } from "./storageService";

export const FirebaseStorageBuckets = {
  default: {
    base_url: "gs://good-old-dbf3c.firebasestorage.app",
    folders: {
      images: {
        lots: "images/lots",
      },
    },
  },
} as const;

export class FirebaseStorageService implements IStorageService {
  async uploadImages(images: string[], path: string) {
    const uploadPromises = images.map(async (uri) => {
      const fileName = uri.substring(uri.lastIndexOf("/") + 1);
      const reference = storage().ref(path).child(fileName);
      try {
        await reference.putFile(uri);
        const downloadURL = await reference.getDownloadURL();
        return downloadURL;
      } catch (error) {
        throw error;
      }
    });
    const results = await Promise.allSettled(uploadPromises);

    let resolvedImages: string[] = [];

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        resolvedImages.push(result.value);
      }
      if (result.status === "rejected") {
        if (result.reason instanceof Error) {
          alert(result.reason.message);
        } else {
          alert("One or more images failed to upload!");
        }
      }
    });

    return resolvedImages;
  }
}
