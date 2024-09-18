import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en_US from './locales/en_US'

const resources = {
	en: {
		translation: en_US
	},
}

const lang = localStorage.getItem('locale') || 'en_US';
i18n.use(initReactI18next).init({
	resources,
	lng: lang === 'en_US' ? 'en' : 'en',
	interpolation: {
		escapeValue: false
	}
});
export default i18n
