import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en.json";
import hr from "./hr.json";

const resources = {
    en: { translation: en },
    hr: { translation: hr },
};

function updateDocumentLang(lng) {
    document.documentElement.lang = lng;
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        supportedLngs: ["en", "hr"],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    })
    .then(() => updateDocumentLang(i18n.language));
i18n.on("languageChanged", (lng) => updateDocumentLang(lng));

export default i18n;
