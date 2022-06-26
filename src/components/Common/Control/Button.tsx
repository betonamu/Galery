import React, {MouseEventHandler, ReactChildren} from 'react';
import classNames from 'classnames';
import ClipLoader from "react-spinners/ClipLoader";

import styles from './Button.module.scss'
import css from "@emotion/css";

type ButtonType = {
    primary?: boolean;
    secondary?: boolean;
    gray?: boolean;
    type?: any;
    onClick?: MouseEventHandler;
    children: ReactChildren | string;
    className?: any;
    loading?: boolean;
    disabled?: boolean;
    icon?: string,
}

const Button: React.FC<ButtonType> = ({
                              primary,
                              secondary,
                              gray,
                              type,
                              onClick,
                              children,
                              className,
                              loading,
                              disabled,
                              icon
                          }) => {
    const customStyle = css`
      margin-right: 7px;
    `;

    return (
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
            {loading && <ClipLoader size={20} color={secondary ? '#1b74e7' : '#fff'} css={customStyle}/>}
            {children}
        </button>
    )
}

export default Button;
