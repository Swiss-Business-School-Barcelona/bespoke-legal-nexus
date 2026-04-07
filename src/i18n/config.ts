import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from '../locales/es.json';
import ca from '../locales/ca.json';
import ru from '../locales/ru.json';
import md from '../locales/md.json';
import ro from '../locales/ro.json';

const resources = {
  es: { translation: es },
  ca: { translation: ca },
  ru: { translation: ru },
  md: { translation: md },
  ro: { translation: ro },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18next;
