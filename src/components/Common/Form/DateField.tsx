import React, {ChangeEventHandler} from 'react';
import classNames from 'classnames';
import {useField} from 'formik';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
// @ts-ignore
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import styles from './DateField.module.scss';

import Calendar24 from '../../../assets/icons/calendar-24.svg';

interface IDateField {
    label: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    required: boolean;
    onChange: ChangeEventHandler;
    hideErrorMessage: boolean;
    format: string;

    [x: string]: any
}

const DateField: React.FC<IDateField> = ({
                                             label,
                                             placeholder,
                                             disabled,
                                             className,
                                             required,
                                             onChange,
                                             hideErrorMessage,
                                             format = "dd/MM/y",
                                             ...props
                                         }) => {
        const [field, meta, helpers] = useField(props.name);
        const isError = meta.touched && meta.error;

        const onChangeValue = (value: any) => {
            helpers.setValue(value || null);
            onChange && onChange(value);
        }

        return (
            <div
                className={
                    classNames({
                        [styles.dateField]: true,
                        [styles.error]: isError,
                        [`${className}`]: !!className
                    })
                }>
                {label && (
                    <label>
                        {label}
                        {required && <span> * </span>}
                    </label>
                )}
                <div className={styles.group}>
                    <DatePicker
                        {...field}
                        onChange={onChangeValue}
                        placeholder={placeholder}
                        disabled={disabled}
                        format={format}
                    />
                    < span
                        className={styles.iconRight}> {< Calendar24/>
                    }
                </span>
                </div>
                {isError && !hideErrorMessage && (
                    <div className={styles.feedback}> {meta.error} </div>
                )}
            </div>
        )
            ;
    }
;

export default DateField;
