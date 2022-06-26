import React, { useEffect, useState } from "react";

import { ssrMode } from "@constants";

const calcDevices = (width: number | string) => {
    const isMobile = width <= 576;
    const isTablet = width > 576 && width <= 1024;
    const isDesktop = width > 1024;

    return { isMobile, isTablet, isDesktop };
}

const useDevices = () => {
    const windowInnerWidth = ssrMode ? 1024 : window.innerWidth;
    const [devices, setDevices] = useState(calcDevices(windowInnerWidth));

    const handleResize = (e : any) => {
        setDevices(calcDevices(e.target.innerWidth));
        console.log(e.target.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return devices;
}

export default useDevices;