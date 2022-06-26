import React, {HTMLAttributes} from 'react';

import InfoIcon from './icons/InfoIcon';
import SuccessIcon from './icons/SuccessIcon';
import ErrorIcon from './icons/ErrorIcon';
import CloseIcon from './icons/CloseIcon';

const alertStyle = {
    backgroundColor: '#fff',
    color: '#333333',
    fontWeight: '500',
    padding: '10px',
    // textTransform: 'uppercase',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 6px 15px 3px rgba(0, 0, 0, 0.25)',
//   fontFamily: 'Arial',
    width: '300px',
    boxSizing: 'border-box'
}

const buttonStyle = {
    marginLeft: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#FFFFFF'
}

interface IAlertTemplate {
    message?: string;
    options: { type: string };
    style: HTMLAttributes<any>;
    close: any;
}

const AlertTemplate: React.FC<IAlertTemplate> = ({message, options, style, close}) => {
    return (
        <div style={{...alertStyle, ...style}}>
            {options.type === 'info' && <InfoIcon/>}
            {options.type === 'success' && <SuccessIcon/>}
            {options.type === 'error' && <ErrorIcon/>}
            <span style={{flex: 2}}>{message}</span>
            <button onClick={close} style={buttonStyle}>
                <CloseIcon/>
            </button>
        </div>
    )
}

export default AlertTemplate;