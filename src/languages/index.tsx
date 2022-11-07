import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locale/en-us.json';
import pt from './locale/pt-br.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',

  lng: 'pt, en',
  fallbackLng: ['pt', 'en'],
  resources: { pt, en },
});

export default i18n;
