import { AddLotImages } from "../../../..";
import { storageService } from "../../../../../services/storage/storageService";
import { FirebaseStorageBuckets } from "../../../../../services/storage/firebaseStorage";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";

export const useLotImages = () => {
  const compressImage = async (uri: string): Promise<string> => {
    try {
      const result = await manipulateAsync(uri, [{ resize: { width: 800 } }], {
        compress: 0.8,
        format: SaveFormat.JPEG,
      });
      return result.uri;
    } catch (error) {
      console.error("Image compression error: ", error);
      throw error;
    }
  };

  const uploadLotImages = async (images: AddLotImages) => {
    const existingImages = images.filter(Boolean) as string[];

    const compressedImagesPromises = existingImages.map((image) =>
      compressImage(image)
    );
    const compressedImages = await Promise.all(compressedImagesPromises);

    const imagesDownloadUrls = storageService.uploadImages(
      compressedImages,
      FirebaseStorageBuckets.default.folders.images.lots
    );

    return imagesDownloadUrls;
  };

  return { uploadLotImages };
};
