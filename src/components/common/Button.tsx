import React, { FC } from 'react';
import { IButton } from '../../interfaces/componentProps';

export const Button: FC<IButton> = ({ className='', label, onClick=() => {} }) => (
    <button className={`button ${className}`} onClick={onClick}>
        {label}
    </button>
);

export const PrimaryButton:FC<IButton> = ({label , className='', onClick=() => {}}) => (
    <Button className={`primary-button ${className}`} label={label} onClick={onClick}/>
);

export const NakedButton:FC<IButton> = ({label , className='', onClick=() => {}}) => (
    <Button className={`naked-button ${className}`} label={label} onClick={onClick}/>
);