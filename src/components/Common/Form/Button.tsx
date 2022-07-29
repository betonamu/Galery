import React from 'react';
import cls from 'classnames';

import selfStyles from './Button.module.scss';

type ButtonProps = {
    children: React.ReactNode | string | undefined;
    className?: string;
    fullWidth?: boolean
    buttonStyle?: string;
    bold?: boolean;

    [x: string]: any;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         children,
         className,
         fullWidth,
         // primary, primary-outline, success, success-outline, warning, warning-outline, secondary, danger
         buttonStyle = 'primary',
         bold,
         ...rest
     }, ref) => {
        return (
            <button
                {...rest}
                className={cls(
                    selfStyles.pcButton,
                    selfStyles[buttonStyle] || selfStyles.primary,
                    className,
                    fullWidth && selfStyles.fullWidth,
                    bold && selfStyles.bold
                )}
                ref={ref}
            >
                {children}
            </button>
        );
    });

export default Button;