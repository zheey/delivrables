import React, { FC } from 'react';
import { IImage } from '../interfaces/componentProps';

const ImageWrapper: FC<IImage> = ({image, alt, className=''}) => (
    <div className={`image ${className}`}>
        <img src={image} alt={alt}/>
    </div>
);

export default ImageWrapper;