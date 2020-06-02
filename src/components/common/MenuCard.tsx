import React, { FC } from 'react';
import ImageWrapper from "./ImageWrapper";
import { IMenuCard } from '../../interfaces/componentProps';

const MenuCard: FC<IMenuCard> = ({ cardImage, imageAlt="menu", className }) => {
    return(
        <div className={`menu-card-wrapper ${className}`}>
            <ImageWrapper image={cardImage} alt={imageAlt}/>
            <div className="menu-card"></div>
        </div>
    )
};

export default MenuCard;
