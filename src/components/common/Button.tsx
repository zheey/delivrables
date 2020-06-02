import React, { FC } from 'react';
import { IButton } from '../../interfaces/componentProps';

export const Button: FC<IButton> = ({ className='', label }) => (
    <button className={`button ${className}`}>
        {label}
    </button>
);

export const PrimaryButton:FC<IButton> = ({label , className=''}) => (
    <Button className={`primary-button ${className}`} label={label}/>
);