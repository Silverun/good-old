import React from "react";
import { View, Modal, ScrollView } from "react-native";
import { ButtonCustom, TextCustom } from "../../../../../common";
import {
  Lot,
  lotsService,
} from "../../../../../../services/database/lots/lotsService";
import { useAppSelector, useThemeCustom } from "../../../../../../hooks";
import { createStyle } from "./LotModal.styles";
import { LotModalImages } from "./LotModalImages";
import { LotActionButtons } from "./actionsButtons/LotActionButtons";
import { useToast } from "../../../../../../hooks/useToast";
import { dateFormatter } from "../../../../../../utils/dateFormatter";
import { useTranslation } from "react-i18next";

interface LotModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedLot: Lot;
}

export const LotModal = ({
  modalVisible,
  setModalVisible,
  selectedLot,
}: LotModalProps) => {
  const { theme } = useThemeCustom();
  const styles = createStyle(theme);
  const { user } = useAppSelector((state) => state.user);
  const { showToast } = useToast();
  const { i18n, t } = useTranslation("lots", { keyPrefix: "modal" });

  if (!modalVisible) {
    return null;
  }

  const deleteLotHandler = async () => {
    try {
      await lotsService.deleteLot(selectedLot);
      showToast(t("deletedSuccessfully"));
      setModalVisible(false);
    } catch (error) {
      error instanceof Error && showToast(error.message, "error");
    }
  };

  const buyLotHandler = async () => {
    try {
      await lotsService.buyLot(selectedLot.id);
      showToast(t("boughtSuccessfully"));
      setModalVisible(false);
    } catch (error) {
      error instanceof Error && showToast(error.message, "error");
    }
  };

  const isOwner = user?.userId === selectedLot.userId;
  const formattedDate = dateFormatter(selectedLot.createdAt, i18n.language);

  return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      hardwareAccelerated
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <LotModalImages styles={styles} imageUrls={selectedLot.imageUrls} />
        <View style={styles.textContainer}>
          <TextCustom fontWeight="bold" size="h3">
            {selectedLot.title}
          </TextCustom>
          <TextCustom size="h4">{selectedLot.price} $</TextCustom>
          <TextCustom size="h5">{formattedDate}</TextCustom>
        </View>
        <ScrollView style={styles.description}>
          <TextCustom style={styles.descriptionText} size="h4">
            {selectedLot.description || t("noDescription")}
          </TextCustom>
        </ScrollView>
        <LotActionButtons
          buyLotHandler={buyLotHandler}
          deleteLotHandler={deleteLotHandler}
          isOwner={isOwner}
        />
        <ButtonCustom
          title="←"
          style={styles.backButton}
          textStyle={styles.backButtonText}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </Modal>
  );
};
