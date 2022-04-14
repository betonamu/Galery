import React, { useState } from 'react';
import { useField } from 'formik';
import classNames from 'classnames';

import styles from './RadioBoxField.module.scss';

const RadioBoxField = ({
    children,
    name,
  items,
  propsValue,
  onUpdate,
  className
}) => {
    const [ field, meta ] = useField({ name });
    const [valueRadio, setValueRadio] = useState({value : propsValue})
  const onChange = (e) => {
      console.log("radio", e.target.value)
      let value = e.target.value;
      setValueRadio({ value: value }, () => typeof onUpdate === "function" ? onUpdate(value) : null)
  }

    return (
      <div
        className={classNames({
            [styles.radioBoxField]: true,
            [className]: !!className
        })}
      >
           {items?.map(item => {
                return (
                    <label key={item.value}>
                        <input
                            {...field}
                            type="radio"
                            checked={valueRadio.value === item.value}
                            disabled={item.disabled}
                            value={item.value}
                            name={name}
                            onChange={onChange}
                        />
                        <span>{item.label}</span>
                    </label>
                );
          })}
      </div>
    );
};

export default RadioBoxField;
