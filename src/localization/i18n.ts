import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import auth from "./locales/en/auth.json";
import authRu from "./locales/ru/auth.json";
import lots from "./locales/en/lots.json";
import lotsRu from "./locales/ru/lots.json";
import navigation from "./locales/en/navigation.json";
import navigationRu from "./locales/ru/navigation.json";
import permissions from "./locales/en/permissions.json";
import permissionsRu from "./locales/ru/permissions.json";

export const resources = {
  en: {
    auth,
    navigation,
    lots,
    permissions,
  },
  ru: {
    auth: authRu,
    navigation: navigationRu,
    lots: lotsRu,
    permissions: permissionsRu,
  },
} as const;

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
