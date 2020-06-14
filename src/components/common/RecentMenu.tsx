import React, { FC } from 'react';
import MenuCard from "../common/MenuCard";
import menu from "../../images/food1.png";
import menu2 from "../../images/food2.png";
import FoodMenuWrapper from '../common/FoodMenuWrapper';
import { IMenu } from '../../interfaces/componentProps';

const RecentMenu: FC<IMenu> = ({toogleMenuDetails}) => {
    return(
        <FoodMenuWrapper headerText="New on Delivrable" className="new-mwnu-section">
            <MenuCard cardImage={menu} menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                    menuHeader="Mexican Style Lunch" 
                    price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
                <MenuCard cardImage={menu2} 
                          menuDescription="Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor 
                                tour sunnd incididunt ut labor" 
                          menuHeader="Mexican Style Lunch" 
                          price="NGN 3,000.00"
                          toogleMenuDetails={toogleMenuDetails}/>
        </FoodMenuWrapper>
    )
};

export default RecentMenu;
