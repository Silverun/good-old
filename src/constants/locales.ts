export const LOCALE_CHARS = {
  "en-GB": {
    uppercase: "A-Z",
    lowercase: "a-z",
  },
  "ru-RU": {
    uppercase: "А-Я",
    lowercase: "а-я",
  },
};

export const LOCALES = {
  English: {
    value: "en-GB",
    label: "English",
  },
  Russian: {
    value: "ru-RU",
    label: "Русский",
  },
} as const;

export type Locale = keyof typeof LOCALE_CHARS;
type Casing = keyof (typeof LOCALE_CHARS)[Locale];

const supportedUppercase = `${LOCALE_CHARS["en-GB"].uppercase}${LOCALE_CHARS["ru-RU"].uppercase}`;
const supportedLowercase = `${LOCALE_CHARS["en-GB"].lowercase}${LOCALE_CHARS["ru-RU"].lowercase}`;

export const VALID_NAME = new RegExp(
  `^[${supportedUppercase}][${supportedLowercase}]+$`
);
