import { Keyboard, KeyboardAvoidingView, View } from "react-native";
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
import { useToast } from "../../../../../../hooks/useToast";
import { useTranslation } from "react-i18next";

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
  const { showToast } = useToast();
  const { t } = useTranslation("lots", { keyPrefix: "addLot" });
  const { t: tCat } = useTranslation("lots", { keyPrefix: "categories" });

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
      showToast(t("addedSuccessfully"));
      goBack();
    } catch (error) {
      error instanceof Error && showToast(error.message, "error");
    }
  };

  return (
    <View style={styles.container}>
      <RHFField
        label={{ text: t("lotTitle") }}
        controller={{
          name: "title",
          control,
          rules: {
            required: t("lotTitleRequired"),
            minLength: {
              value: 2,
              message: t("lotTitleMinLength"),
            },
          },
        }}
        input={{ placeholder: t("lotTitlePlaceholder") }}
        error={{ errors }}
      />
      <View style={styles.picker_container}>
        <TextCustom>{t("lotCategory")}</TextCustom>
        <View style={styles.picker_wrapper}>
          <Picker
            style={styles.picker}
            onFocus={() => Keyboard.dismiss()}
            mode="dropdown"
            dropdownIconColor={theme.textColor}
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            {LOT_CATEGORIES.map((category) => (
              <Picker.Item
                style={styles.picker_item}
                key={category.id}
                label={tCat(category.title)}
                value={category}
              />
            ))}
          </Picker>
        </View>
      </View>
      <RHFField
        label={{ text: t("lotDescription") }}
        controller={{
          name: "description",
          control,
          rules: {
            required: t("lotDescriptionRequired"),
          },
        }}
        input={{
          placeholder: t("lotDescriptionPlaceholder"),
          multiline: true,
          numberOfLines: 5,
          maxLength: 500,
          style: styles.desc_text,
        }}
        error={{ errors }}
      />
      <RHFField
        label={{ text: t("price") }}
        controller={{
          name: "price",
          control,
          rules: {
            required: t("priceRequired"),
            minLength: {
              value: 1,
              message: t("priceMinLength"),
            },
          },
        }}
        input={{ placeholder: t("pricePlaceholder"), keyboardType: "numeric" }}
        error={{ errors }}
      />

      <ButtonCustom
        style={styles.submit_button}
        title={t("addLot")}
        onPress={handleSubmit(onLotSubmit)}
        loading={isSubmitting}
        disabled={isSubmitting}
      />
    </View>
  );
};
