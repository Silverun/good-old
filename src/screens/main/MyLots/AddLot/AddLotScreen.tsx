import { View } from "react-native";
import { styles } from "./AddLotScreen.styles";
import { AddImages } from "../../../../components/presentation";
import { AddLotForm } from "../../../../components/presentation/main/myLots/addLot/form/AddLotForm";

export const AddLotScreen = () => {
  return (
    <View style={styles.container}>
      <AddImages />
      <AddLotForm />
    </View>
  );
};
