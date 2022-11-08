import {useCallback, useEffect, useRef, KeyboardEvent} from "react";

// Description: function track event click outside element
// Rule:
// onClose: function onClose trigger function of parent
// flag: enable or disable function click outside
export const useOutsideClick = (onClose: any, flag: boolean, isMulti?: boolean) => {
    if (!flag || Object.prototype.toString.call(onClose) !== "[object Function]")
        return;

    const ref = useRef<any>(isMulti ? [] : null);

    const escapeListener = useCallback((e: any) => {
        if (e.key === "Escape") {
            onClose();
        }
    }, [onClose]);

    const clickListener = useCallback(
        (e: any) => {
            if (isMulti) {
                const isClickOutside = ref.current.every((ele: any) => !ele || !ele.contains(e.target))
                isClickOutside && onClose?.();
            } else {
                if (!ref.current?.contains(e.target)) {
                    onClose?.();
                }
            }
        },
        [ref.current]
    );

    useEffect(() => {
        document.addEventListener("click", clickListener);
        document.addEventListener("keyup", escapeListener);
        return () => {
            document.removeEventListener("click", clickListener);
            document.removeEventListener("keyup", escapeListener);
        };
    }, []);

    return ref;
};
