import {useLayoutEffect, useState} from "react";

import {getStringData, setStringData} from "@utils/localStorage";
import {storageKeys, THEME_DOM_KEY, THEME_MODE} from "@constants";

type DarkModeReturnType = {
    onSwitchTheme: (e: any) => void;
    isDarkMode: boolean;
}

const useDarkMode = (): DarkModeReturnType => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const onSetDataTheme = (dataTheme = THEME_MODE.LIGHT, isDarkMode = false) => {
        setIsDarkMode(isDarkMode);
        document.documentElement.setAttribute(THEME_DOM_KEY, dataTheme);
        setStringData(storageKeys.DATA_THEME, dataTheme);
    }

    const onSetDataThemeIntoDOM = (dataTheme: string | false | null) => {
        if (dataTheme === THEME_MODE.DARK) {
            onSetDataTheme(THEME_MODE.DARK, true);
        } else {
            onSetDataTheme(THEME_MODE.LIGHT);
        }
    }

    const onSwitchTheme = (checked: boolean) => {
        let nextTheme = THEME_MODE.LIGHT;
        let _isDarkMode: boolean = false;
        if (checked) {
            nextTheme = THEME_MODE.DARK;
            _isDarkMode = true;
        }
        onSetDataTheme(nextTheme, _isDarkMode);
    }

    useLayoutEffect(() => {
        //get init theme from localStorage and set when the first time page loaded.
        //if not, set init by tracking os theme. localStorage is priority
        const dataTheme = getStringData(storageKeys.DATA_THEME);
        if (dataTheme) {
            onSetDataThemeIntoDOM(dataTheme);
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                onSetDataThemeIntoDOM(THEME_MODE.DARK);
            }
        }

        //handle event listener to tracking OS theme.
        const darkModeTracking = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChangeThemeByTracking = (event: any) => {
            const nextTheme = event.matches ? THEME_MODE.DARK : THEME_MODE.LIGHT;
            onSetDataThemeIntoDOM(nextTheme);
        }

        darkModeTracking.addEventListener('change', handleChangeThemeByTracking);

        //delete event tracking theme when page dismount
        return () => {
            darkModeTracking.removeEventListener('change', handleChangeThemeByTracking);
        }
    }, []);

    return {
        onSwitchTheme,
        isDarkMode
    }
};

export default useDarkMode;