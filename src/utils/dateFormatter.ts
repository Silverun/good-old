import { LOCALES } from "../constants";

export const dateFormatter = (date: string, lang: string) => {
  let selectedLocale: string | undefined;

  for (const key in LOCALES) {
    const localeKey = key as keyof typeof LOCALES;

    if (LOCALES[localeKey].value === lang) {
      selectedLocale = LOCALES[localeKey].date;
    }
  }

  if (!selectedLocale) {
    selectedLocale = LOCALES.english.date;
  }

  const formattedDate = new Intl.DateTimeFormat(selectedLocale, {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(date));

  return formattedDate;
};
