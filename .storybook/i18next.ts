import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
const translationIntellisenseHelper = require('../src/locales/translations');

const ns = ['translation'];
const supportedLngs = ['pt'];
const resources = ns.reduce((acc, n) => {
  supportedLngs.forEach(lng => {
    if (!acc[lng]) acc[lng] = {};
    const languageJson = require(`../src/locales/${lng}/${n}.json`);
    acc[lng] = {
      ...acc[lng],
      [n]: languageJson,
    };
    translationIntellisenseHelper.convertLanguageJsonToObject(languageJson);
  });
  return acc;
}, {});

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    //debug: true,
    lng: 'pt',
    fallbackLng: 'pt',
    defaultNS: 'common',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
  });

export default i18n;
