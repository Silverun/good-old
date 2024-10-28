import { View, Text } from "react-native";
import { MyLotsScreenProps } from "../../../../navigation/myLots/myLots.types";
import { MyLotsRoutes } from "../../../../navigation/routes";
import { styles } from "./MyLotsListScreen.styles";
import { ButtonCustom } from "../../../../components/common";

export const MyLotsListScreen = ({ navigation }: MyLotsScreenProps) => {
  const addLotHandler = () => {
    navigation.navigate(MyLotsRoutes.addLot);
  };

  return (
    <View style={styles.container}>
      <Text>MyLotsScreen</Text>

      <ButtonCustom
        style={styles.add_button}
        title="+"
        onPress={addLotHandler}
      />
    </View>
  );
};
