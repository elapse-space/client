import { DEFAULT_LANG } from "@shared/config";
import { en, ru } from "@shared/static/languages";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

export function initializeTranslation() {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      debug: true,
      load: "currentOnly",
      lng: DEFAULT_LANG,
      fallbackLng: DEFAULT_LANG,
      interpolation: {
        escapeValue: false,
      },
    });
}

initializeTranslation();

export default i18next;
