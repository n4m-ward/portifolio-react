import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {messages as resources} from './locales/index';

i18n.use(LanguageDetector).init({
    resources,
    order: [localStorage],
    lookupLocalStorage: 'language',
    fallbackLng: 'en',
    debug: false,
    defaultNS: ['translations'],
    ns: 'translations',

    interpolation: {
        escapeValue: false,
    },
});

const {t} = i18n;
export {i18n};

export function translate(key): string {
    return t(key)
}