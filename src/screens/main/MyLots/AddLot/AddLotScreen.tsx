import { View } from "react-native";
import { styles } from "./AddLotScreen.styles";
import { AddImages } from "../../../../components/presentation";
import {
  AddLotForm,
  FullLotFormData,
} from "../../../../components/presentation/main/myLots/addLot/form/AddLotForm";
import { MAX_IMAGES } from "../../../../constants";
import { useEffect, useState } from "react";
import storage, { FirebaseStorageTypes } from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import { utils } from "@react-native-firebase/app";

export const AddLotScreen = () => {
  const [images, setImages] = useState<string[]>(Array(MAX_IMAGES).fill(null));

  const handleAddLot = (data: FullLotFormData) => {
    console.log(data);
    handleImageUpload(data);
  };

  const handleImageUpload = async (data: FullLotFormData) => {
    const uploadPromises = images.filter(Boolean).map(async (uri) => {
      const fileName = uri.substring(uri.lastIndexOf("/") + 1);
      // const cachePath = utils.FilePath.CACHES_DIRECTORY;
      // const path =
      //   "file:///data/user/0/com.anonymous.goodold/cache/ImagePicker/81607a90-17b2-4ea6-86dd-bab9fbd428b4.jpeg";
      // const path = uri.startsWith("file://") ? uri.substring(7) : uri;
      // console.log(path);

      const reference = storage().ref(`images/${fileName}`);
      // Check errors and loading state?
      // Upload the image to Firebase Storage
      try {
        // Upload the image to Firebase Storage
        await reference.putFile(uri);
        // Get the download URL
        const downloadURL = await reference.getDownloadURL();
        return downloadURL;
      } catch (uploadError) {
        console.error("Error uploading file:", uploadError);
        throw uploadError;
      }
      // const res = await reference.putFile(uri);

      // // Get the download URL
      // const downloadURL = await reference.getDownloadURL();
      // return downloadURL;
    });

    const imageURLs = await Promise.all(uploadPromises);

    // Create an object to upload to Firestore
    const lotData = {
      ...data,
      images: imageURLs, // Filter out null values
    };

    // Save to Firestore
    await firestore().collection("lots").add(lotData);

    console.log("Lot data uploaded:", lotData);
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <View style={styles.container}>
      <AddImages images={images} setImages={setImages} />
      <AddLotForm onSubmitPress={handleAddLot} />
    </View>
  );
};
