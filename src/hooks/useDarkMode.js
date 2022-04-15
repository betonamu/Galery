import React, {useEffect, useLayoutEffect, useState} from "react";
import {getStringData, setStringData} from "@utils/localStorage";
import {storageKeys} from "@constants";


const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const switchTheme = (e) => {
        let nextTheme = '';
        if (e.target?.checked) {
            nextTheme = 'dark';
            setIsDarkMode(true);
        } else {
            nextTheme = '';
            setIsDarkMode(false);
        }
        setStringData(storageKeys.DATA_THEME, nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
    }

    const setDataThemeIntoDOM = (dataTheme) => {
        if (dataTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', dataTheme);
            setStringData(storageKeys.DATA_THEME, dataTheme);
        } else {
            document.documentElement.setAttribute('data-theme', '');
            setStringData(storageKeys.DATA_THEME, '');
            setIsDarkMode(false);
        }
    }

    useLayoutEffect(() => {
        const dataTheme = getStringData(storageKeys.DATA_THEME);
        setDataThemeIntoDOM(dataTheme);
    }, []);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const nextTheme = event.matches ? "dark" : "";
            setDataThemeIntoDOM(nextTheme);
        });
    }, []);

    return {
        switchTheme,
        isDarkMode
    }
};

export default useDarkMode;