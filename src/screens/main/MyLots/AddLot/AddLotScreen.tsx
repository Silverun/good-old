import { View } from "react-native";
import { styles } from "./AddLotScreen.styles";
import { AddImages } from "../../../../components/presentation";
import {
  AddLotForm,
  FullLotFormData,
} from "../../../../components/presentation/main/myLots/addLot/form/AddLotForm";
import { MAX_IMAGES } from "../../../../constants";
import { useEffect, useState } from "react";
import storage, { firebase } from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

export const AddLotScreen = () => {
  const [images, setImages] = useState<string[]>(Array(MAX_IMAGES).fill(null));

  const handleAddLot = (data: FullLotFormData) => {
    console.log(data);
    handleImageUpload(data);
  };

  const handleImageUpload = async (data: FullLotFormData) => {
    const uploadPromises = images.filter(Boolean).map(async (uri) => {
      const fileName = uri.substring(uri.lastIndexOf("/") + 1);
      const reference = storage().ref("images").child(fileName);
      // Check errors and loading state?
      // Upload the image to Firebase Storage
      try {
        await reference.putFile(uri);

        const downloadURL = await reference.getDownloadURL();
        return downloadURL;
      } catch (uploadError) {
        console.error("Error uploading file:", uploadError);
        throw uploadError;
      }
    });

    const imageURLs = await Promise.all(uploadPromises);
    console.log(imageURLs);

    // // Create an object to upload to Firestore
    // const lotData = {
    //   ...data,
    //   images: imageURLs, // Filter out null values
    // };

    // // Save to Firestore
    // await firestore().collection("lots").add(lotData);

    // console.log("Lot data uploaded:", lotData);
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
