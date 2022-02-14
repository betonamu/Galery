import React from 'react';
import classNames from 'classnames';
import ClipLoader from "react-spinners/ClipLoader";

import styles from './Button.module.scss'

const Button = ({primary, secondary, gray, type, onClick, children, className, loading, disabled, icon}) => (
    <button
        disabled={disabled || loading}
        className={classNames({
            [styles.button]: true,
            [styles.button__primary]: primary,
            [styles.button__secondary]: secondary,
            [styles.button__gray]: gray,
            [styles.button__disabled]: disabled || loading,
            [className]: !!className
        })}
        type={type}
        onClick={onClick}
    >
        {icon}
        {loading && <ClipLoader size={20} color={secondary ? '#1b74e7' : '#fff'} css={{marginRight: '7px'}}/>}
        {children}

    </button>
)

export default Button;
