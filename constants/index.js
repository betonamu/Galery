export const defaultLocale = 'en';
export const locales = ['vi', 'en'];
export const ssrMode = typeof window === "undefined";

export const appMode = process.env.NEXT_PUBLIC_APP_MODE;
export const xiurenGaleryApiUrl = process.env.NEXT_PUBLIC_PMC_API_GATEWAY_URL;
export const imagesUrl = process.env.NEXT_PUBLIC_PMC_API_GATEWAY_URL + "images/";

export const storageKeys = {
    USER_DATA: 'pmc-ecom-user-data',
    USER_TOKEN: 'pmc-ecom-user-token',
    CHECKOUT_DATA: 'pmc-ecom-checkout-data',
    LOCALE: 'pmc-ecom-local',
    CHECK_PRESCRIPTION_DRUG: 'pmc-ecom-check-prescription-drug',
    CHECK_OTC_DRUG: 'pmc-ecom-check-otc-drugs'
}

export const dateFormat = "DD/MM/YYYY";