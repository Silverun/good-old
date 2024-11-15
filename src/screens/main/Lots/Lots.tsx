import { StyleSheet, View } from "react-native";
import { ButtonCustom, TextCustom } from "../../../components/common";
import LoaderIndicator from "../../../components/common/loader/newLoader";

const LotsScreen = () => {
  return (
    <View style={styles.container}>
      <ButtonCustom loading={true} title="Lots" />
      {/* <LoaderIndicator /> */}
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
