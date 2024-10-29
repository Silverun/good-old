import { Modal, TouchableOpacity, View } from "react-native";
import { styles } from "./AddImages.styles";
import { Ionicons } from "@expo/vector-icons";

interface AddImagesModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
  pickFromCamera: () => void;
  pickFromGallery: () => void;
}

export const AddImagesModal = ({
  isModalVisible,
  closeModal,
  pickFromCamera,
  pickFromGallery,
}: AddImagesModalProps) => {
  return (
    <Modal
      transparent
      visible={isModalVisible}
      animationType="fade"
      onRequestClose={closeModal}
    >
      <TouchableOpacity style={styles.modal_overlay} onPress={closeModal}>
        <View style={styles.modalContainer}>
          <Ionicons.Button
            name="camera-outline"
            onPress={pickFromCamera}
            size={24}
            color="black"
          />
          <Ionicons.Button
            name="image-outline"
            onPress={pickFromGallery}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
