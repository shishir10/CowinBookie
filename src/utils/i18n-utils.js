import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from '../translations/en/common.json';
import commonHi from '../translations/hi/common.json';

i18n
.use(initReactI18next)
.init({
  resources : {
      en : { common : commonEn },
      hi : { common : commonHi }
  },
  defaultNS : 'common',
  lng : 'en',
  interpolation: {
    escapeValue: false
    },
    react: {
        wait: true
    }
});

export default i18n;