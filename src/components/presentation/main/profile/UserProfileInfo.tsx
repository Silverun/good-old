import React from "react";
import { View, Text, Image } from "react-native";
import { User } from "../../../../store/userSlice/userSlice";
import { styles } from "./UserProfileInfo.styles";
import { TextCustom } from "../../../common";
import { DarkModeSwitch } from "../../settings/DarkModeSwitch";
import { LangPicker } from "../../settings/LangSwitch";
import i18n from "../../../../localization/i18n";
import { useTranslation } from "react-i18next";

interface UserProfileInfoProps {
  user: User;
}

export const UserProfileInfo = ({ user }: UserProfileInfoProps) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <View style={styles.userInfoContainer}>
        {user.image ? (
          <Image source={{ uri: user.image }} style={styles.profileImage} />
        ) : (
          <View style={styles.profileImagePlaceholder}>
            <TextCustom size="h1" fontWeight="bold">
              {user.firstName[0]}
            </TextCustom>
          </View>
        )}
        <TextCustom fontWeight="bold" size="h2" style={styles.name}>
          {user.firstName} {user.lastName}
        </TextCustom>
        <TextCustom size="h5" style={styles.email}>
          {user.email}
        </TextCustom>
        <TextCustom style={styles.createdAt}>
          Member since: {new Date(user.createdAt).toLocaleDateString()}
        </TextCustom>
        {/* <TextCustom size="h3" fontWeight="regular">
        Current balance: {user.credits}
      </TextCustom> */}
      </View>
      <View style={styles.actionsContainer}>
        <View style={styles.darkMode}>
          <TextCustom>Toggle dark mode</TextCustom>
          <DarkModeSwitch />
        </View>
        <View style={styles.darkMode}>
          <TextCustom>Selected language</TextCustom>
          <LangPicker />
        </View>
        <View style={styles.darkMode}>
          <TextCustom>{t("Welcome to React")}</TextCustom>
        </View>
      </View>
    </>
  );
};
