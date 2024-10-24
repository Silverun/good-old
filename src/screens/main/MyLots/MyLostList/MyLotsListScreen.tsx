import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MyLotsScreenProps } from "../../../../navigation/myLots/myLots.types";
import { MyLotsRoutes } from "../../../../navigation/routes";
import { styles } from "./MyLotsListScreen.styles";

export const MyLotsListScreen = ({ navigation }: MyLotsScreenProps) => {
  const addLotHandler = () => {
    navigation.navigate(MyLotsRoutes.addLot);
  };

  return (
    <View style={styles.container}>
      <Text>MyLotsScreen</Text>
      <MaterialIcons.Button
        style={{}}
        onPress={addLotHandler}
        name="library-add"
        size={24}
        color="black"
      />
    </View>
  );
};
