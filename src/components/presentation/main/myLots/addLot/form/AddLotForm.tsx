import { View } from "react-native";
import { ButtonCustom, RHFField, TextCustom } from "../../../../../common";
import { useForm } from "react-hook-form";
import { stylesThemed } from "./AddLotForm.styles";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useAppSelector, useThemeCustom } from "../../../../../../hooks";
import { LOT_CATEGORIES, LotCategory } from "../../../../../../constants";
import { AddLotImages } from "../../../../../../screens";
import { useLotImages } from "../../../../../../screens/main/MyLots/AddLot/hooks/useLotImages";
import {
  lotsService,
  LotData,
} from "../../../../../../services/database/lots/lotsService";
import { useNavigation } from "@react-navigation/native";

export interface AddLotFormData {
  title: string;
  description: string;
  price: number;
}

export interface FullLotFormData extends AddLotFormData {
  category: LotCategory;
}

interface AddLotFormProps {
  images: AddLotImages;
}

export const AddLotForm = ({ images }: AddLotFormProps) => {
  const [selectedCategory, setSelectedCategory] = useState<LotCategory>(
    LOT_CATEGORIES[0]
  );
  const { theme } = useThemeCustom();
  const styles = stylesThemed(theme);
  const { uploadLotImages } = useLotImages();
  const { user } = useAppSelector((state) => state.user);
  const { goBack } = useNavigation();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<AddLotFormData>();

  const onLotSubmit = async (data: AddLotFormData) => {
    const imagesUrls = await uploadLotImages(images);
    const fullFormData: LotData = {
      ...data,
      category: selectedCategory,
      imageUrls: imagesUrls,
      userId: user!.userId,
    };
    try {
      await lotsService.addNewLot(fullFormData);
      goBack();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <RHFField
        label={{ text: "Lot title" }}
        controller={{
          name: "title",
          control,
          rules: {
            required: "Title is required",
            minLength: {
              value: 2,
              message: "Lot title should be at least 2 characters",
            },
          },
        }}
        input={{ placeholder: "Add descriptive lot title" }}
        error={{ errors }}
      />
      <View style={styles.picker_container}>
        <TextCustom>Choose lot category</TextCustom>
        <View style={styles.picker_wrapper}>
          <Picker
            style={styles.picker}
            mode="dropdown"
            dropdownIconColor={theme.textColor}
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            {LOT_CATEGORIES.map((category) => (
              <Picker.Item
                style={styles.picker_item}
                key={category.id}
                label={category.title}
                value={category}
              />
            ))}
          </Picker>
        </View>
      </View>
      <RHFField
        label={{ text: "Lot description" }}
        controller={{
          name: "description",
          control,
          rules: {
            required: false,
          },
        }}
        input={{
          placeholder: "Add detailed lot description",
          multiline: true,
          numberOfLines: 5,
          maxLength: 500,
          style: styles.desc_text,
        }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: "Price" }}
        controller={{
          name: "price",
          control,
          rules: {
            required: "Price is required",
            minLength: {
              value: 1,
              message: "Lot price should be at least 1 character",
            },
          },
        }}
        input={{ placeholder: "Specify lot price", keyboardType: "numeric" }}
        error={{ errors }}
      />
      <ButtonCustom
        style={styles.submit_button}
        title="Add lot"
        onPress={handleSubmit(onLotSubmit)}
        loading={isSubmitting}
        disabled={isSubmitting}
      />
    </View>
  );
};
