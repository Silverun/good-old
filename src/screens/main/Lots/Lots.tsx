import { StyleSheet, View } from "react-native";
import { ButtonCustom, TextCustom } from "../../../components/common";

const LotsScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonCustom loading={true} title="Lots" />
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
