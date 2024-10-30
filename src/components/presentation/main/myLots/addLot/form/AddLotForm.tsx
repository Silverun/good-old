import { View } from "react-native";
import { RHFField, TextCustom } from "../../../../../common";
import { useForm } from "react-hook-form";
import { stylesThemed } from "./AddLotForm.styles";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useThemeCustom } from "../../../../../../hooks";
import { LOT_CATEGORIES, LotCategory } from "../../../../../../constants";

interface AddLotFormData {
  title: string;
  category: string;
  description: string;
  price: number;
  imagesUrls: string[];
}

export const AddLotForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<LotCategory>();
  const { theme } = useThemeCustom();
  const styles = stylesThemed(theme);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddLotFormData>();

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
    </View>
  );
};
