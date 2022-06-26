import
{useEffect, useLayoutEffect, useState} from "react";

import {getStringData, setStringData} from "@utils/localStorage";
import {storageKeys, THEME_DOM_KEY, THEME_MODE,} from "@constants";

type DarkModeReturnType = {
    switchTheme: (e: any) => void;
    isDarkMode: boolean;
}

const useDarkMode = (): DarkModeReturnType => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const switchTheme = (e: any): void => {
        let nextTheme = '';
        if (e.target?.checked) {
            nextTheme = THEME_MODE.DARK;
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
        setStringData(storageKeys.DATA_THEME, nextTheme);
        document.documentElement.setAttribute(THEME_DOM_KEY, nextTheme);
    }

    const setDataTheme = (dataTheme = THEME_MODE.LIGHT, isDarkMode = false): void => {
        setIsDarkMode(isDarkMode);
        document.documentElement.setAttribute(THEME_DOM_KEY, dataTheme);
        setStringData(storageKeys.DATA_THEME, dataTheme);
    }

    const setDataThemeIntoDOM = (dataTheme: string | false | null): void => {
        if (dataTheme === THEME_MODE.DARK) {
            setDataTheme(THEME_MODE.DARK, true);
        } else {
            setDataTheme();
        }
    }

    useLayoutEffect(() => {
        const dataTheme = getStringData(storageKeys.DATA_THEME);
        setDataThemeIntoDOM(dataTheme);
    }, []);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const nextTheme = event.matches ? THEME_MODE.DARK : THEME_MODE.LIGHT;
            setDataThemeIntoDOM(nextTheme);
        });
    }, []);

    return {
        switchTheme,
        isDarkMode
    }
};

export default useDarkMode;