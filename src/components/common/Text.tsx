import React, { FC } from 'react';
import { IText } from '../../interfaces/componentProps';

export const TextHeader:FC<IText> = ({className='', content}) => {
    return(
    <h1 className={`header ${className}`}>{content}</h1>
    )
};

