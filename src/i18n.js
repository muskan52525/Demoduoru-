// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import HttpApi from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18n
//   .use(HttpApi) 
//   .use(LanguageDetector) 
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "pt",
//     debug: true,
//     supportedLngs: ["pt", "en"],
//     interpolation: {
//       escapeValue: false, 
//     },
//     backend: {
//       loadPath: "/locales/{{lng}}/translation.json", 
//     },
//   });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "pt", // 👈 Force PT as the default language on first load
    fallbackLng: "pt",

    debug: true,
    supportedLngs: ["pt", "en"],

    detection: {
      order: ["localStorage", "cookie"], 
      caches: ["localStorage", "cookie"],

      // 👇 Prevent browser from overriding PT on first load
      lookupLocalStorage: "i18nextLng",
      checkWhitelist: true,
    },

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
