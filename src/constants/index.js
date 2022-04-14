export const defaultLocale = 'en';
export const locales = ['vi', 'en'];
export const ssrMode = typeof window === "undefined";

export const appMode = process.env.NEXT_PUBLIC_APP_MODE;
export const galleryApiUrl = process.env.NEXT_PUBLIC_PMC_API_GATEWAY_URL;
export const imagesUrl = process.env.NEXT_PUBLIC_PMC_API_GATEWAY_URL + "images/";

export const storageKeys = {
    USER_DATA: 'gallery-user-data',
    USER_TOKEN: 'gallery-user-token',
}

const baseUrl = "/";

export const paths = {
    home: baseUrl,
    signIn : `${baseUrl}accounts/sign-in`,
    createCollection: `${baseUrl}collections/management/create`,
    collectionList: `${baseUrl}collections/management/`,
}

export const phoneRegExp = /^(03|05|07|08|09|01[2|6|8|9]){1}([0-9]{8})$/;

export const dateFormat = "DD/MM/YYYY";