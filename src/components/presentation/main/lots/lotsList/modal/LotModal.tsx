import React from "react";
import { View, Modal, Image, ScrollView } from "react-native";
import { ButtonCustom, TextCustom } from "../../../../../common";
import { Lot } from "../../../../../../services/database/lots/lotsService";
import { useThemeCustom } from "../../../../../../hooks";
import { createStyle } from "./LotModal.styles";
import { LotModalImages } from "./LotModalImages";

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

  if (!modalVisible) {
    return null;
  }

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
        <View>
          <TextCustom fontWeight="bold" size="h3">
            {selectedLot.title}
          </TextCustom>
          <TextCustom size="h4">{selectedLot.price} $</TextCustom>
          <TextCustom size="h5">{formattedDate}</TextCustom>
        </View>
        <ScrollView>
          <TextCustom>
            {selectedLot.description || "No description available."}
          </TextCustom>
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <ButtonCustom title="Buy" onPress={() => console.log("Buy")} />
        </View>
        <ButtonCustom
          title="Close"
          style={styles.closeButton}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </Modal>
  );
};
