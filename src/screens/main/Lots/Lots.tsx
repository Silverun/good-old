import { StyleSheet, View } from "react-native";
import { LotsList } from "../../../components/presentation/main/lots/lotsList/LotsList";

const LotsScreen = () => {
  return (
    <View style={styles.container}>
      <LotsList />
    </View>
  );
};
export default LotsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
