export const LOCALE_CHARS = {
  en: {
    uppercase: "A-Z",
    lowercase: "a-z",
  },
  ru: {
    uppercase: "А-Я",
    lowercase: "а-я",
  },
};

type Locale = keyof typeof LOCALE_CHARS;
type Casing = keyof (typeof LOCALE_CHARS)[Locale];

const supportedUppercase = `${LOCALE_CHARS.en.uppercase}${LOCALE_CHARS.ru.uppercase}`;
const supportedLowercase = `${LOCALE_CHARS.en.lowercase}${LOCALE_CHARS.ru.lowercase}`;

export const VALID_NAME = new RegExp(
  `^[${supportedUppercase}][${supportedLowercase}]+$`
);
