import React, {ClipboardEvent} from "react";
import classNames from "classnames";

import styles from "./OTP.module.scss";
import {useFormikContext} from "formik";

const numberRegex = /^\d+$/;

const OTPForm = ({error, otpCount, name}: any) => {
    const formikBag = useFormikContext();
    const {setFieldValue, values, errors: formikError, handleSubmit}: any = formikBag;

    const genFieldName = (index: number) => {
        return `${name}${index}`

    }

    const submitOtp = (focusIndex: number) => {
        if (focusIndex === otpCount && Object.values(values.otp).filter(item => !!item).length === 6)
            handleSubmit();
    }

    const onKeyUpOtp = (e: any) => {
        const {value, tabIndex} = e.target;
        if (e.key === 'Tab' || e.key === 'Control' || (!value && e.key !== "Delete" && e.key !== "Backspace")) return;

        if (e.key !== "Delete" && e.key !== "Backspace") {
            const next = tabIndex - 1;

            if (next <= otpCount) {
                e.target.form.elements[next].focus();
            }
        } else {
            const prev = tabIndex - 2;

            e.target.form.elements[prev].focus();
            e.target.form.elements[prev].select();
        }
        setFieldValue(name, {...values.otp, [genFieldName(tabIndex)]: value})
        submitOtp(tabIndex)
    }

    const onChangeValue = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        if (!numberRegex.test(value)) {
            setFieldValue(name, {...values.otp, [fieldName]: ''});
            return;
        }

        setFieldValue(name, {...values.otp, [fieldName]: value});
    }

    const onPaste = (e: any) => {
        const currentIndex = e.target.tabIndex - 1;
        e.preventDefault();

        // Get pastedData in an array of max size (num of inputs - current position)
        const pastedData = e.clipboardData
            .getData('text/plain')
            .slice(0, otpCount - currentIndex)
            .split('');

        // Paste data from focused input onwards
        const currentOtp = values.otp;
        for (let pos = 0; pos < otpCount; ++pos) {
            if (pos >= currentIndex && pastedData.length > 0) {
                const currentData = pastedData.shift() || '';
                if (!numberRegex.test(currentData)) {
                    currentOtp[genFieldName(pos + 1)] = '';
                } else {
                    currentOtp[genFieldName(pos + 1)] = currentData;
                }
            }

            setFieldValue(name, currentOtp)
        }

        const focusIndex = Object.values(currentOtp).length - 1;
        e.target.form.elements[focusIndex].focus();

        submitOtp(focusIndex);
    }

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    }

    return (
        <div className={styles.otpFormWrapper}>
            <div className={styles.groupOtpInput}>
                {Array.from(Array(otpCount).keys()).map((item, index) => {
                    const currentIndex = index + 1;
                    const fieldName = genFieldName(currentIndex);
                    const currentFieldValue = values.otp[fieldName];

                    return (
                        <input
                            key={fieldName}
                            name={fieldName}
                            tabIndex={currentIndex}
                            maxLength={1}
                            value={currentFieldValue}
                            onChange={(e) => onChangeValue(fieldName, e)}
                            onPaste={onPaste}
                            className={classNames({
                                [styles.hasNoValue]: !currentFieldValue,
                                [styles.hasError]: error
                            })}
                            onFocus={onFocus}
                            autoComplete={fieldName}
                            onKeyUp={onKeyUpOtp}/>
                    )
                })}
            </div>
            <p className='error-feedback'>{error}</p>
        </div>
    )
}
export default OTPForm;