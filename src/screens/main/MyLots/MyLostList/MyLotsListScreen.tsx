import { View } from "react-native";
import { MyLotsScreenProps } from "../../../../navigation/myLots/myLots.types";
import { MyLotsRoutes } from "../../../../navigation/routes";
import { styles } from "./MyLotsListScreen.styles";
import { ButtonCustom } from "../../../../components/common";
import { useAppSelector } from "../../../../hooks";
import { LotsList } from "../../../../components/presentation/main/lots/lotsList/LotsList";

export const MyLotsListScreen = ({ navigation }: MyLotsScreenProps) => {
  const addLotHandler = () => {
    navigation.navigate(MyLotsRoutes.addLot);
  };
  const { user } = useAppSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <LotsList userId={user?.userId} />
      <ButtonCustom
        textStyle={styles.add_button_text}
        style={styles.add_button}
        title="+"
        onPress={addLotHandler}
      />
    </View>
  );
};
