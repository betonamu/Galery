import React, {useState, useEffect, ReactNode} from "react";

import useDevices from "@hooks/useDevices";

type MediaProps = {
    children: ReactNode
}

const Desktop = ({children}: MediaProps) => {
    const {isDesktop} = useDevices();
    const [content, setContent] = useState(children);

    useEffect(() => {
        if (isDesktop) {
            setContent(children);
        } else {
            setContent(null);
        }
    }, [children, isDesktop])
    return content || <></>;
}

const Mobile = ({children}: MediaProps) => {
    const {isDesktop, isMobile} = useDevices();
    const [content, setContent] = useState<ReactNode>();

    useEffect(() => {
        if (!isDesktop) {
            setContent(children);
        } else {
            setContent(null);
        }
    }, [children, isDesktop])
    return content || <></>;
}

export {
    Desktop,
    Mobile
};