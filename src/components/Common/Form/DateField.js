import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';
import moment from 'moment';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import styles from './DateField.module.scss';

import Calendar24 from '../../../assets/icons/calendar-24.svg';

const DateField = ({
    label,
    placeholder,
    disabled,
    className,
    required,
    onChange,
    hideErrorMessage,
    format="dd/MM/y",
    ...props
}) => {

    const [ field, meta, helpers ] = useField(props);
    const isError = meta.touched && meta.error;

    const onChangeValue = (value) => {
        helpers.setValue(value || null);
        onChange && onChange(value);
    }

    return (
        <div
            className={classNames({
                [styles.dateField]: true,
                [styles.error]: isError,
                [className]: !!className
            })}
        >
            {label && (
                <label>
                    {label}
                    {required && <span>*</span>}
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
                <span className={styles.iconRight}>{<Calendar24/>}</span>
            </div>
            {isError && !hideErrorMessage && (
                 <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    );
};

export default DateField;
