import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Lot } from "../../../../../services/database/lots/lotsService";
import { TextCustom } from "../../../../common";
import { LotNoImage } from "./LotNoImage";
import { MaterialIcons } from "@expo/vector-icons";
import { THEMES } from "../../../../../constants";

interface LotItemProps {
  item: Lot;
  onItemPress: () => void;
}

export const LotItem = ({ item, onItemPress }: LotItemProps) => {
  const { title, price, imageUrls, createdAt, status } = item;
  const firstImageUrl = imageUrls[0] || "";

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(createdAt));

  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      {firstImageUrl ? (
        <Image source={{ uri: firstImageUrl }} style={styles.image} />
      ) : (
        <LotNoImage />
      )}
      {status === "sold" && (
        <MaterialIcons
          style={styles.soldIcon}
          name="check-circle"
          size={32}
          color={THEMES.light.buttonBackground}
        />
      )}
      <View style={styles.textContainer}>
        <TextCustom numberOfLines={2} fontWeight="bold" size="h3">
          {title}
        </TextCustom>
        <TextCustom size="h4">{price} $</TextCustom>
        <TextCustom size="h5" fontWeight="light">
          {formattedDate}
        </TextCustom>
      </View>
    </TouchableOpacity>
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
  soldIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
