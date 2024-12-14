import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { useThemeCustom } from "../../../hooks";
import { FONT_FAMILIES, LOCALES, Theme } from "../../../constants";
import { useTranslation } from "react-i18next";

export const LangPicker = () => {
  const { theme } = useThemeCustom();
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string>(i18n.language);
  const styles = createStyles(theme);

  return (
    <View style={styles.picker_wrapper}>
      <Picker
        style={styles.picker}
        mode="dropdown"
        dropdownIconColor={theme.textColor}
        selectedValue={selectedLang}
        onValueChange={(itemValue) => {
          i18n.changeLanguage(itemValue);
          setSelectedLang(itemValue);
        }}
      >
        {LOCALES.map((locale) => (
          <Picker.Item
            style={styles.picker_item}
            key={locale.value}
            label={locale.label}
            value={locale.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    picker_wrapper: {
      flex: 1,
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
