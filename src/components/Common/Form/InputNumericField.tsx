import React, {EventHandler} from 'react';
import {useField} from 'formik';
import classNames from 'classnames';

import styles from './InputTextField.module.scss';

interface IInputNumericField {
    iconLeft: string;
    iconRight: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    className: string;
    type: string;
    onChange: EventHandler<any>,
    hideErrorMessage: boolean,
    sizeLg: boolean,
    fullBorder: boolean,
    autocomplete: string,

    [x: string]: any
}

const InputNumericField: React.FC<IInputNumericField> = ({
                                                             iconLeft,
                                                             iconRight,
                                                             label,
                                                             placeholder,
                                                             disabled,
                                                             className,
                                                             type = 'text',
                                                             onChange,
                                                             hideErrorMessage,
                                                             sizeLg,
                                                             fullBorder,
                                                             autocomplete,
                                                             ...props
                                                         }) => {
    const [field, meta, helpers] = useField(props.name);
    const isError = meta.touched && meta.error

    const onChangeValue = (evt: any) => {
        const value = (evt.target.value || '').replace(/\D/g, '');
        const validValue = value === '' ? value : +value;
        helpers?.setValue(validValue);
        onChange && onChange(validValue);
    }

    const formatDisplayValue = (value: string) => {
        return (value + '').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div
            className={classNames(
                styles.inputTextField,
                isError && styles.error,
                className,
                fullBorder && styles.fullBorder,
                sizeLg && styles.sizeLg
            )}
        >
            {label && (
                <label>
                    {label}
                    {props.required && <span>*</span>}
                </label>
            )}
            <div className={styles.inputGroup}>
                {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
                <input
                    {...field}
                    value={formatDisplayValue(field.value)}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    className={classNames({
                        [className]: !!className,
                        [styles.hasIconLeft]: !!iconLeft,
                        [styles.hasIconRight]: !!iconRight
                    })}
                    autoComplete={autocomplete}
                    onChange={onChangeValue}
                />
                {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
            </div>
            {isError && !hideErrorMessage && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    );
};

export default InputNumericField;
