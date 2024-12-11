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

  if (!modalVisible) {
    return null;
  }

  const deleteLotHandler = async () => {
    try {
      await lotsService.deleteLot(selectedLot);
      showToast("Lot deleted successfully");
      setModalVisible(false);
    } catch (error) {
      error instanceof Error && showToast(error.message, "error");
    }
  };

  const buyLotHandler = async () => {
    try {
      await lotsService.buyLot(selectedLot.id);
      showToast("Lot bought successfully");
      setModalVisible(false);
    } catch (error) {
      error instanceof Error && showToast(error.message, "error");
    }
  };

  const isOwner = user?.userId === selectedLot.userId;
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(selectedLot.createdAt));

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
          <TextCustom size="h4">
            {selectedLot.description || "No description available."}
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
