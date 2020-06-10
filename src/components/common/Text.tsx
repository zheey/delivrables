import React, { FC } from 'react';
import { IText, IClick } from '../../interfaces/componentProps';

export const TextHeader:FC<IText & IClick> = ({className='', content, onClick=() => {}}) => {
    return(
    <h1 className={`header ${className}`} onClick={e => {onClick(e)}}>{content}</h1>
    )
};

export const TextPargraph:FC<IText & IClick> = ({className='', content, onClick=()=>{}}) => {
    return(
    <p className={`paragraph ${className}`} onClick={e => onClick(e)}>{content}</p>
    )
};

