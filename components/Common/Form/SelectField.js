import classNames from "classnames";
import { useField } from "formik";
import React from "react";
import Select from 'react-select'

import IconClose from '../../../asstes/icons/close.svg';

import styles from './SelectField.module.scss';

const ClearIndicator = props => {
    const {
        children = 'test',
        getStyles,
        innerProps: { ref, ...restInnerProps },
    } = props;

    return (
        <div
            {...restInnerProps}
            ref={ref}
            style={getStyles('clearIndicator', props)}
            className={styles.clearIndicatorIcon}
        >
            <IconClose stroke="inherit" />
        </div>
    );
};

const customStyles = (isError, outsideStyles = {}) => {
    const {
        placeholder,
        control,
        valueContainer,
        dropdownIndicator,
        loadingIndicator,
        indicatorsContainer,
        clearIndicator,
        ...rest
    } = outsideStyles

    const mergeStyles = (outsideStyle, insideStyle) => (provided, state) => ({
        ...provided,
        ...insideStyle(state),
        ...(outsideStyle && outsideStyle({ ...state, isError }))
    })

    return {
        placeholder: mergeStyles(placeholder, _ => ({
            fontSize: '0.938rem',
            lineHeight: '22px',
            color: '#B2BAC6'
        })),
        control: mergeStyles(control, ({ isFocused }) => ({
            border: 'none',
            borderRadius: 0,
            borderBottom: '1px solid #E5E5E5',
            borderBottomColor: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5',
            boxShadow: 'none',

            '&:hover': {
                borderBottomColor: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5',
            }
        })),
        valueContainer: mergeStyles(valueContainer, _ => ({
            paddingLeft: 0
        })),
        dropdownIndicator: mergeStyles(dropdownIndicator, ({ isFocused }) => ({
            color: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5'
        })),
        loadingIndicator: mergeStyles(loadingIndicator, _ => ({
            color: '#0F62F9'
        })),
        indicatorsContainer: mergeStyles(indicatorsContainer, _ => ({
            '> *': {
                padding: '8px 5px !important'
            }
        })),
        clearIndicator: mergeStyles(clearIndicator, ({ isFocused }) => ({
            stroke: isFocused ? '#adadad': '#E5E5E5',
            "&:hover": {
                stroke: 'red'
            }
        })),
        ...(Object.keys(rest).reduce((rs, cur) => ({
            ...rs,
            [cur]: mergeStyles(rest[cur], _ => ({}))
        }), {}))
    }
}

const SelectField = ({
    label,
    required,
    className,
    name,
    options,
    optionLabelKey = 'label',
    optionValueKey = 'value',
    onChange,
    components,
    hideErrorMessage,
    selectStyles,
    ...rest
}) => {
    const [field, meta, helpers] = useField({ name });
    const preparedOptions = (options || []).map(option => ({ value: option[optionValueKey], label: option[optionLabelKey], option}));
    const isError = meta.touched && meta.error

    const onChangeValue = (item) => {
        helpers.setValue(item?.value || '');

        onChange && onChange(item);
    }

    return (
        <div
            className={classNames(styles.pcSelectField, {
                [className]: !!className,
                [styles.error]: isError
            })}
        >
            {label && (
                <label>
                    {label}
                    {required && <span>*</span>}
                </label>
            )}
            <Select
                classNamePrefix="select"
                components={{
                    IndicatorSeparator: () => null,
                    ClearIndicator,
                    ...components
                }}
                {...field}
                options={preparedOptions}
                value={preparedOptions.find(option => option.value === field.value) || ''}
                onChange={onChangeValue}
                styles={customStyles(isError, selectStyles)}
                {...rest}
            />
            {isError && !hideErrorMessage && (
                 <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    )

}

export default SelectField;
