import {locales, defaultLocale} from '@constants';

export const isLocale = (tested: any) => {
    return locales.some(locale => locale === tested)
}

export const getInitialLocale = () => {
    const localSetting = localStorage.getItem('locale');
    if (localSetting && isLocale(localSetting)) {
        return localSetting;
    }

    // const [browserSetting] = navigator.language.split('-')
    // if (isLocale(browserSetting)) {
    //   return browserSetting
    // }

    return defaultLocale;
}