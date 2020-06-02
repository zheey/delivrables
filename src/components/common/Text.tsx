import React, { FC } from 'react';
import { IText } from '../../interfaces/componentProps';

export const TextHeader:FC<IText> = ({className='', content}) => {
    return(
    <h1 className={`header ${className}`}>{content}</h1>
    )
};

export const TextPargraph:FC<IText> = ({className='', content}) => {
    return(
    <p className={`paragraph ${className}`}>{content}</p>
    )
};

