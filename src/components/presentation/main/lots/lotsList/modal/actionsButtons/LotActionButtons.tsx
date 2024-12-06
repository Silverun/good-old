import React from "react";
import { View, StyleSheet } from "react-native";
import { ButtonCustom } from "../../../../../../common";

interface LotActionButtonsProps {
  isOwner: boolean;
}

export const LotActionButtons = ({ isOwner }: LotActionButtonsProps) => {
  const actions = (
    <>
      <ButtonCustom title="Buy" onPress={() => console.log("Buy")} />
    </>
  );

  const myActions = (
    <>
      <ButtonCustom title="Delete" onPress={() => console.log("Delete")} />
    </>
  );

  return (
    <View style={styles.actionsButtons}>{isOwner ? myActions : actions}</View>
  );
};

const styles = StyleSheet.create({
  actionsButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: 10,
  },
});
