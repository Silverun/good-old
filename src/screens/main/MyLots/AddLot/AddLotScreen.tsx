import { View } from "react-native";
import { styles } from "./AddLotScreen.styles";
import { AddImages } from "../../../../components/presentation";
import { AddLotForm } from "../../../../components/presentation/main/myLots/addLot/form/AddLotForm";
import { MAX_IMAGES } from "../../../../constants";
import { useState } from "react";

export type AddLotImages = (string | null)[];

export const AddLotScreen = () => {
  const [images, setImages] = useState<AddLotImages>(
    Array(MAX_IMAGES).fill(null)
  );

  return (
    <View style={styles.container}>
      <AddImages images={images} setImages={setImages} />
      <AddLotForm images={images} />
    </View>
  );
};
