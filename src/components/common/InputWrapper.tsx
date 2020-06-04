import React, { FC } from 'react';
import { IInputWrapper } from '../../interfaces/componentProps';

const InputWrapper: FC<IInputWrapper> = ({ children, className='' }) => (
    <div className={`input-wrapper ${className}`}>
        { children }
    </div>
);

export default InputWrapper;
