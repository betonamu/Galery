import React, {ReactElement, InputHTMLAttributes, EventHandler} from 'react';
import {useField} from 'formik';
import classNames from 'classnames';

import styles from './InputTextField.module.scss';

type InputTextFieldType = {
    iconLeft?: ReactElement;
    iconRight?: ReactElement;
    label: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    type: string;
    onChange?: EventHandler<any>;
    hideErrorMessage?: boolean;
    sizeLg?: boolean;
    fullBorder?: boolean;
    autoComplete?: string | undefined;
    name: string;
    required?: boolean;
    props?: any;
};

const InputTextField: React.FC<InputTextFieldType> = ({
                                                          iconLeft,
                                                          iconRight,
                                                          label,
                                                          placeholder,
                                                          disabled,
                                                          className= '',
                                                          type = 'text',
                                                          onChange,
                                                          hideErrorMessage,
                                                          sizeLg,
                                                          fullBorder,
                                                          autoComplete = 'on',
                                                          ...props
                                                      }) => {
    const [field, meta, helpers] = useField(props);
    const isError = meta.touched && meta.error

    const onChangeValue = (evt: any) => {
        const value = evt.target.value;
        helpers?.setValue(value || '');
        onChange && onChange(value);
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
                {
                    iconLeft
                        ?
                        <span className={styles.iconLeft}>{iconLeft}</span>
                        :
                        null
                }
                <input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    className={classNames({
                        [className]: !!className,
                        [styles.hasIconLeft]: !!iconLeft,
                        [styles.hasIconRight]: !!iconRight
                    })}
                    onChange={onChangeValue}
                />
                {
                    iconRight
                        ?
                        <span className={styles.iconRight}>{iconRight}</span>
                        :
                        null
                }
            </div>
            {isError && !hideErrorMessage && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    );
};

export default InputTextField;
