import React, { FC } from 'react';
import ImageWrapper from "./ImageWrapper";
import { IMenuCard } from '../../interfaces/componentProps';
import { TextHeader , TextPargraph} from './Text';

const MenuCard: FC<IMenuCard> = ({ cardImage, imageAlt="menu", className='', menuDescription='', menuHeader, price }) => {
    return(
        <div className={`menu-card-wrapper ${className}`}>
            <ImageWrapper image={cardImage} alt={imageAlt}/>
            <div className="menu-card">
                <div className="menu-list-tab">
                    <TextHeader content={menuHeader}/>
                    <TextPargraph content={menuDescription}/>
                </div>
                <div className="price-wrapper">
                    <TextHeader content={price}/>
                    <TextHeader content="Order Now"/>
                </div>
            </div>
        </div>
    )
};

export default MenuCard;
