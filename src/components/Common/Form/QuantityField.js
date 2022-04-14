import React from 'react'
import classNames from 'classnames';
import {useField} from "formik";

import PlusIcon from "@assets/icons/plus.svg";
import MinusIcon from "@assets/icons/minus.svg";

import styles from './QuantityField.module.scss'

const QuantityField = ({
                           onChange,
                           quantityAvailable,
                           readOnly = true,
                           className,
                           ...props
                       }) => {
    const [field, , helpers] = useField(props);

    const onChangeValue = (param, type) => {
        let currentValue = field?.value;
        if (type === "input") {
            currentValue = parseInt(param) || 0;
        } else
            currentValue = field.value + param;
        if (currentValue < 0) {
            currentValue = 0;
        }
        helpers?.setValue(currentValue || 0);
        onChange && onChange(currentValue);
    }

    return (
        <div className={classNames({
            [styles.quantity]: true,
            [styles.disableControl]: quantityAvailable < 1,
            [className]: !!className
        })}>
            <span className={classNames(field?.value < 1 && styles.disableButton, styles.left)}
                  onClick={() => onChangeValue(-1)}><MinusIcon/>
            </span>
            <input {...field}
                   onChange={(e) => onChangeValue(e.target.value, 'input')}
                   readOnly={false}
                   disabled={quantityAvailable < 1}/>
            <span className={classNames(quantityAvailable - field?.value < 1 && styles.disableButton, styles.right)}
                  onClick={() => onChangeValue(1)}><PlusIcon/>
            </span>
        </div>
    )
}

export default QuantityField;