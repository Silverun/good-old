import { AddLotImages } from "../../../..";
import { storageService } from "../../../../../services/storage/storageService";
import { FirebaseStorageBuckets } from "../../../../../services/storage/firebaseStorage";

export const useLotImages = () => {
  const uploadLotImages = (images: AddLotImages) => {
    const existingImages = images.filter(Boolean) as string[];
    const imagesDownloadUrls = storageService.uploadImages(
      existingImages,
      FirebaseStorageBuckets.default.folders.images.lots
    );

    return imagesDownloadUrls;
  };

  return { uploadLotImages };
};
