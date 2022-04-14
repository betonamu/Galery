import { useContext } from 'react'
import { LocaleContext } from '../contexts/LocaleContext'
import { defaultLocale } from '../constants';
import locale_EN from "../locales/en.json";
import locale_VI from "../locales/vi.json";

const locales = {
  vi: locale_VI,
  en: locale_EN
}

const useTranslation = () => {
  const { locale } = useContext(LocaleContext);

  const t = key => {
    if (locales[locale]) {
      return locales[locale][key];
    }
    else if (locales[defaultLocale]) {
      return locales[defaultLocale][key];
    }
    return key;
  }

  return {
    t,
    locale
  }
}

export default useTranslation;