import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useThemeCustom } from "../../../../../../hooks";
import { Ionicons } from "@expo/vector-icons";
import { stylesThemed } from "./AddImages.styles";
import { TextCustom } from "../../../../../common";

interface AddImagesProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddImages = ({ images, setImages }: AddImagesProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { theme } = useThemeCustom();
  const styles = stylesThemed(theme);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const pickFromGallery = async () => {
    closeModal();
    if (selectedIndex === null) return;

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const newImages = [...images];
      newImages[selectedIndex] = result.assets[0].uri;
      setImages(newImages);
    }
  };

  const pickFromCamera = async () => {
    closeModal();
    if (selectedIndex === null) return;

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      const newImages = [...images];
      newImages[selectedIndex] = result.assets[0].uri;
      setImages(newImages);
    }
  };

  return (
    <View>
      <TextCustom>Lot images</TextCustom>
      <ScrollView contentContainerStyle={styles.carouselContainer} horizontal>
        {images.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => openModal(index)}
          >
            {item ? (
              <Image source={{ uri: item }} style={styles.image} />
            ) : (
              <Text style={styles.addButtonText}>+</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal transparent visible={isModalVisible} onRequestClose={closeModal}>
        <TouchableOpacity style={styles.modal_overlay} onPress={closeModal}>
          <View style={styles.modalContainer}>
            <Ionicons.Button
              name="camera-outline"
              onPress={pickFromCamera}
              size={24}
              color={theme.buttonTextColor}
              backgroundColor={theme.buttonBackground}
            >
              Camera
            </Ionicons.Button>
            <Ionicons.Button
              name="image-outline"
              onPress={pickFromGallery}
              size={24}
              color={theme.buttonTextColor}
              backgroundColor={theme.buttonBackground}
            >
              Gallery
            </Ionicons.Button>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
