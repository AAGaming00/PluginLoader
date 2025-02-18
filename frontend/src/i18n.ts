import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: 'http://127.0.0.1:1337/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
