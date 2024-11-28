import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useLots } from "../../../../../hooks/useLots";
import { Loader, TextCustom } from "../../../../common";
import { LotItem } from "./LotItem";

interface LotsListProps {
  userId?: string;
}

export const LotsList = ({ userId }: LotsListProps) => {
  const { lots, loading, error } = useLots(userId);

  if (loading) {
    return <Loader />;
  }

  if (lots?.length === 0) {
    return (
      <TextCustom size="h3" fontWeight="bold">
        Nothing here yet
      </TextCustom>
    );
  }

  if (error) {
    return <TextCustom fontWeight="bold">{error}</TextCustom>;
  }

  return (
    <View style={styles.container}>
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
