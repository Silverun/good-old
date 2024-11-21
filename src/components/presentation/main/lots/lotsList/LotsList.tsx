import React from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import { useLots } from "../../../../../hooks/useLots";
import { Loader, TextCustom } from "../../../../common";
import { LotItem } from "./LotItem";

interface LotsListProps {}

export const LotsList = ({}: LotsListProps) => {
  const { lots, loading, error } = useLots();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <TextCustom fontWeight="bold">{error}</TextCustom>;
  }

  return (
    <View style={styles.container}>
      <RefreshControl refreshing={false} />
      <FlatList
        data={lots}
        renderItem={({ item }) => <LotItem key={item.id} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
});
