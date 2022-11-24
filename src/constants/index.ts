export const defaultLocale = 'en';
export const locales = ['vi', 'en'];
export const ssrMode = typeof window === "undefined";

export const appMode = process.env.NEXT_PUBLIC_APP_MODE;
export const galleryApiUrl = process.env.NEXT_PUBLIC_PMC_API_GATEWAY_URL;
export const imagesUrl = process.env.NEXT_PUBLIC_PMC_API_GATEWAY_URL + "images/";

export const storageKeys = {
    USER_DATA: 'gallery-user-data',
    USER_TOKEN: 'gallery-user-token',
    DATA_THEME: 'gallery-data-theme',
}

const baseUrl = "/";

export const paths = {
    home: baseUrl,
    signIn: `${baseUrl}accounts/sign-in`,
    profile: `${baseUrl}accounts`,
    createCollection: `${baseUrl}collections/management/create`,
    collectionList: `${baseUrl}collections/management/`,
}

export const THEME_MODE = {
    DARK: 'dark',
    LIGHT: 'light',
}

export const THEME_DOM_KEY = 'data-theme';

export const phoneRegExp = /^(03|05|07|08|09|01[2|6|8|9]){1}([0-9]{8})$/;

export const dateFormat = "DD/MM/YYYY";

export const metaDefaults = ({origin, href}: any) => ({
    description: "Nothing",
    // image: `${ssrMode ? origin : window.location.origin}/images/thumbnail-seo.png`,
    image: '',
    title: "NCQ Profile",
    type: "website",
    url: ssrMode ? href : window.location.origin,
});