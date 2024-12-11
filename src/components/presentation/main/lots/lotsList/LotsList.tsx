import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useLots } from "../../../../../hooks/useLots";
import { Loader, TextCustom } from "../../../../common";
import { LotItem } from "./LotItem";
import { Lot } from "../../../../../services/database/lots/lotsService";
import { LotModal } from "./modal/LotModal";
import { LotStatus } from "../../../../../constants";

interface LotsListProps {
  userId?: string;
  status?: LotStatus;
}

export const LotsList = ({ userId, status }: LotsListProps) => {
  const { lots, loading, error } = useLots(userId, status);
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const itemSeparator = () => <View style={{ height: 15 }} />;

  const handleItemPress = async (item: Lot) => {
    setSelectedLot(item);
    setModalVisible(true);
  };

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
        ItemSeparatorComponent={itemSeparator}
        renderItem={({ item }) => (
          <LotItem
            onItemPress={() => handleItemPress(item)}
            key={item.id}
            item={item}
          />
        )}
      />
      <LotModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedLot={selectedLot as Lot}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    padding: 10,
  },
});
