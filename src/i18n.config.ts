import global_es from './languages/es/global.json';
import global_en from './languages/en/global.json';

export const i18n_config = {
    interpolation: { escapeValue: false },
    fallbackLng: "es",
    lng: "es",
    resources: {
        es: {
            "global": global_es
        },
        en: {
            "global": global_en
        }
    }
}