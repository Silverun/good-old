import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Lot } from "../../../../../services/database/lots/lotsService";
import { TextCustom } from "../../../../common";
import { LotNoImage } from "./LotNoImage";

interface LotItemProps {
  item: Lot;
}

export const LotItem = ({ item }: LotItemProps) => {
  const { title, price, imageUrls, createdAt } = item;
  const firstImageUrl = imageUrls[0] || "";
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(createdAt));

  return (
    <View style={styles.container}>
      {firstImageUrl ? (
        <Image source={{ uri: firstImageUrl }} style={styles.image} />
      ) : (
        <LotNoImage />
      )}
      <View style={styles.textContainer}>
        <TextCustom fontWeight="bold" size="h3">
          {title}
        </TextCustom>
        <TextCustom size="h4">{price} $</TextCustom>
        <TextCustom size="h5" fontWeight="light">
          {formattedDate}
        </TextCustom>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    rowGap: 5,
  },
});
