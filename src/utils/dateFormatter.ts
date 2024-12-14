import { DEFAULT_LOCALE, LOCALES } from "../constants";

export const dateFormatter = (date: string, lang: string) => {
  let selectedLocale: string | undefined;

  LOCALES.forEach((locale) => {
    if (locale.value === lang) {
      selectedLocale = locale.date;
    }
  });

  if (!selectedLocale) {
    selectedLocale = DEFAULT_LOCALE.date;
  }

  const formattedDate = new Intl.DateTimeFormat(selectedLocale, {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(date));

  return formattedDate;
};
