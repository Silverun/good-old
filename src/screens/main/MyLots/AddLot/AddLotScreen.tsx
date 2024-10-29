import { View } from "react-native";
import { styles } from "./AddLotScreen.styles";
import { AddImages } from "../../../../components/presentation";

export const AddLotScreen = () => {
  return (
    <View style={styles.container}>
      <AddImages />
    </View>
  );
};
