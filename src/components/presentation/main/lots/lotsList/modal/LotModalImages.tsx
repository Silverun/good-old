import React from "react";
import { View, Text, ScrollView, Image, StyleProp } from "react-native";
import { LotNoImage } from "../LotNoImage";

interface LotModalImagesProps {
  imageUrls: string[];
  styles: StyleProp<any>;
}

export const LotModalImages = ({ imageUrls, styles }: LotModalImagesProps) => {
  if (imageUrls.length === 0) {
    return (
      <LotNoImage
        iconSize={styles.image.width / 2}
        size={{ width: styles.image.width, height: styles.image.height }}
      />
    );
  }

  return (
    <ScrollView horizontal contentContainerStyle={styles.imageScrollContainer}>
      {imageUrls.map((imageUrl, index) => (
        <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
      ))}
    </ScrollView>
  );
};
