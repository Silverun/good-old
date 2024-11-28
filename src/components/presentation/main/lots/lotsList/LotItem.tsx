import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Lot } from "../../../../../services/database/databaseService";

interface LotItemProps {
  item: Lot;
}

export const LotItem = ({ item }: LotItemProps) => {
  const { title, price, imageUrls } = item;
  const firstImageUrl = imageUrls[0] || "";

  return (
    <View style={styles.container}>
      {firstImageUrl ? (
        <Image source={{ uri: firstImageUrl }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  placeholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  placeholderText: {
    fontSize: 12,
    color: "#888",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#555",
  },
});
