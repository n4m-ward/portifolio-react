import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {messages as resources} from './locales/index';
import {initReactI18next} from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
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
    } as any);

const {t} = i18n;
export {i18n};

export function translate(key: string): string {
    return t(key)
}