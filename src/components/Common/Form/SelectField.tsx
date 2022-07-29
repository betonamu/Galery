import React from "react";
import {useField} from "formik";
import Select from 'react-select'
import classNames from "classnames";

import IconClose from '../../../assets/icons/close.svg';

import styles from './SelectField.module.scss';
import useDarkMode from "@hooks/useDarkMode";

const ClearIndicator: React.FC = (props: any) => {
    const {
        children = 'test',
        getStyles,
        innerProps: {ref, ...restInnerProps},
    } = props;

    return (
        <div
            {...restInnerProps}
            ref={ref}
            style={getStyles('clearIndicator', props)}
            className={styles.clearIndicatorIcon}
        >
            <IconClose stroke="inherit"/>
        </div>
    );
};

const customStyles: React.FC = (isError: any, outsideStyles = {}): any => {
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

    const mergeStyles = (outsideStyle: any, insideStyle: any) => (provided: any, state: any) => {
        // console.log(mergeStyles(control, ({isFocused}: any) => ({
        //     border: 'none',
        //     borderRadius: 0,
        //     borderBottom: '1px solid #E5E5E5',
        //     //white color get from root
        //     background: 'var(--white)',
        //     borderBottomColor: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5',
        //     boxShadow: 'none',
        //
        //     '&:hover': {
        //         borderBottomColor: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5',
        //     }
        // })));
        return {
            ...provided,
            ...insideStyle(state),
            ...(outsideStyle && outsideStyle({...state, isError}))
        };
    };

    const mergeStyle2 = (outsideStyle: any, insideStyle: any) => {
        return (provided: any, state: any) => {
            return {
                ...provided,
                ...insideStyle(state),
                ...(outsideStyle && outsideStyle({...state, isError}))
            }
        }
    }

    return {
        placeholder: mergeStyles(placeholder, () => ({
            fontSize: '0.938rem',
            lineHeight: '22px',
            color: '#B2BAC6'
        })),
        control: mergeStyles(control, ({isFocused}: any) => ({
            border: 'none',
            borderRadius: 0,
            borderBottom: '1px solid #E5E5E5',
            //white color get from root
            background: 'var(--white)',
            borderBottomColor: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5',
            boxShadow: 'none',

            '&:hover': {
                borderBottomColor: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5',
            }
        })),
        valueContainer: mergeStyles(valueContainer, () => ({
            paddingLeft: 0
        })),
        dropdownIndicator: mergeStyles(dropdownIndicator, ({isFocused}: any) => ({
            color: isError ? '#f33060' : isFocused ? '#0F62F9' : '#E5E5E5'
        })),
        loadingIndicator: mergeStyles(loadingIndicator, () => ({
            color: '#0F62F9'
        })),
        indicatorsContainer: mergeStyles(indicatorsContainer, () => ({
            '> *': {
                padding: '8px 5px !important'
            }
        })),
        clearIndicator: mergeStyles(clearIndicator, ({isFocused}: any) => ({
            stroke: isFocused ? '#adadad' : '#E5E5E5',
            "&:hover": {
                stroke: 'red'
            }
        })),
        ...(Object.keys(rest).reduce((rs, cur) => ({
            ...rs,
            [cur]: mergeStyles(rest[cur], () => ({}))
        }), {}))
    }
}

const SelectField: React.FC<any> = ({
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
    const [field, meta, helpers] = useField({name});
    const preparedOptions = (options || []).map((option: any) => ({
        value: option[optionValueKey],
        label: option[optionLabelKey],
        option
    }));
    const isError = meta.touched && meta.error;

    const onChangeValue = (item: any) => {
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
                value={preparedOptions.find((option: any) => option.value === field.value) || ''}
                onChange={onChangeValue}
                styles={customStyles(isError || false, selectStyles)}
                {...rest}
            />
            {isError && !hideErrorMessage && (
                <div className={styles.feedback}>{meta.error}</div>
            )}
        </div>
    )
}

export default SelectField;
