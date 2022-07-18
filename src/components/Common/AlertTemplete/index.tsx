import React, {HTMLAttributes} from 'react';
import {AlertTemplateProps} from "react-alert";

import InfoIcon from 'src/components/Common/AlertTemplete/icons/InfoIcon';
import SuccessIcon from 'src/components/Common/AlertTemplete/icons/SuccessIcon';
import ErrorIcon from 'src/components/Common/AlertTemplete/icons/ErrorIcon';
import CloseIcon from 'src/components/Common/AlertTemplete/icons/CloseIcon';

const alertStyle: React.CSSProperties = {
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

const buttonStyle: React.CSSProperties = {
    marginLeft: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#FFFFFF'
}

const AlertTemplate: React.FC<AlertTemplateProps> = ({message, options, style, close}) => {
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