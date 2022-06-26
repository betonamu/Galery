import React, {ChangeEventHandler, ReactChildren} from 'react';
import classNames from 'classnames';
import {useField} from 'formik';

import styles from './RadioButtonField.module.scss';

interface IRadioButtonField {
    children: ReactChildren,
    className?: string,
    onChange: ChangeEventHandler,
}

const RadioButtonField: React.FC<IRadioButtonField> = ({
                                                           children,
                                                           className,
                                                           onChange,
                                                           ...props
                                                       }) => {
    const [field, meta] = useField(props);

    const isChecked = meta.value === props.value

    const handleChange = e => {
        field.onChange(e)

        onChange && onChange(e)
    }

    return (
        <div className={classNames(
            styles.pcRadioButton,
            className,
            isChecked && styles.checked
        )}>
            <label className={styles.container}>
                <span className={styles.checkmark}/>
                <div>
                    {children}
                </div>
                <input
                    type="radio"
                    checked={isChecked}
                    {...field}
                    {...props}
                    onChange={handleChange}
                    // onChange={handleChange}
                />
            </label>
        </div>
    );
};

export default RadioButtonField;