import { StyleSheet, View } from "react-native";
import { Loader } from "../../../components/common/";

const LotsScreen = () => {
  return (
    <View style={styles.container}>
      <Loader />
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
