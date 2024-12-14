import React from "react";
import { View, StyleSheet } from "react-native";
import { ButtonCustom } from "../../../../../../common";
import { useTranslation } from "react-i18next";

interface LotActionButtonsProps {
  isOwner: boolean;
  deleteLotHandler: () => Promise<void>;
  buyLotHandler: () => Promise<void>;
}

export const LotActionButtons = ({
  isOwner,
  deleteLotHandler,
  buyLotHandler,
}: LotActionButtonsProps) => {
  const { t } = useTranslation("lots", { keyPrefix: "modal" });

  const actions = (
    <>
      <ButtonCustom title={t("buy")} onPress={buyLotHandler} />
    </>
  );

  const myActions = (
    <>
      <ButtonCustom title={t("delete")} onPress={deleteLotHandler} />
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
