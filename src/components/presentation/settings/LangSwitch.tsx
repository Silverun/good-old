import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { useThemeCustom } from "../../../hooks";
import { FONT_FAMILIES, LOCALES, Theme } from "../../../constants";
import { useTranslation } from "react-i18next";

export const LangPicker = () => {
  const { theme } = useThemeCustom();
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string>(i18n.language);

  const styles = createStyles(theme);

  useEffect(() => {
    console.log(i18n.language);
  }, [i18n.language]);

  return (
    <View style={styles.container}>
      <Picker
        mode="dropdown"
        selectedValue={selectedLang}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemValue, "change");
          i18n.changeLanguage(itemValue);
          setSelectedLang(itemValue);
        }}
      >
        <Picker.Item
          label={LOCALES.english.label}
          value={LOCALES.english.value}
        />
        <Picker.Item
          label={LOCALES.russian.label}
          value={LOCALES.russian.value}
        />
      </Picker>
    </View>
  );
};

/* <Picker
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
</Picker> */

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      width: "100%",
      // flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
    },
    picker_wrapper: {
      borderWidth: 1,
      borderColor: theme.inputBorderColor,
      borderRadius: 10,
      overflow: "hidden",
    },
    picker: {
      backgroundColor: theme.inputBackground,
    },
    picker_item: {
      color: theme.textColor,
      fontFamily: FONT_FAMILIES.regular,
      backgroundColor: theme.inputBackground,
    },
  });
