import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./AddImages.styles";
import { AddImagesModal } from "./AddImagesModal";
import { RHFField } from "../../../../../common";
import { useForm } from "react-hook-form";

const MAX_IMAGES = 5;

export const AddImages = () => {
  const [images, setImages] = useState<(string | null)[]>(
    Array(MAX_IMAGES).fill(null)
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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
      <View style={styles.carouselContainer}>
        <ScrollView horizontal>
          {images.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.imageContainer,
                item ? styles.imageFilled : styles.imageEmpty,
              ]}
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
      </View>
      <AddImagesModal
        closeModal={closeModal}
        isModalVisible={isModalVisible}
        pickFromCamera={pickFromCamera}
        pickFromGallery={pickFromGallery}
      />
    </View>
  );
};
