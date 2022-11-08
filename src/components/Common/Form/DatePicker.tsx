import React, {ChangeEvent, FocusEvent, KeyboardEvent, useState} from "react";
import {useField} from "formik";
import moment from "moment";

import styles from "@components/Common/Form/InputTextField.module.scss";

type DatePickerFieldType = {
    hideErrorMessage?: boolean
    [x: string]: any;
}

const DatePickerField: React.FC<DatePickerFieldType> = ({hideErrorMessage = false, ...props}) => {
    const [field, meta, helpers] = useField(props.name);
    const {setValue} = helpers;
    const isError = meta.error && meta.touched;
    const [isDelete, setIsDelete] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        let nextValue = value;
        const pattern = /[0-9]/;
        if (!pattern.test(value)) {
            nextValue = ''
        }
        if (value.length === 2 && !isDelete) {
            nextValue += '/';
        } else if (value.length === 5 && !isDelete) {
            nextValue += '/';
        }
        setValue(nextValue);
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            setIsDelete(true);
        } else {
            setIsDelete(false);
        }
    }

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        const {value} = e.target;
        console.log('12312', value)
        console.log('as', moment(value).isValid())
        if (!moment(field.value).isValid()) {
            setValue(value);
        }
    }

    return (
        <React.Fragment>
            <input type="text"
                   placeholder={"dd/MM/yyyy"}
                   {...field}
                   {...props}
                   onBlur={onBlur}
                   onChange={onChange}
                   onKeyDown={onKeyDown}
            />
            {isError && !hideErrorMessage && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
        </React.Fragment>
    )
}

export default DatePickerField;

