import React, { FC } from 'react';
import MenuCard from "../common/MenuCard";
import menu from "../../images/food1.png";
import menu2 from "../../images/food7.png";
import menu3 from "../../images/food2.png";
import menu4 from "../../images/food5.png";
import menu5 from "../../images/food4.png";
import menu6 from "../../images/food7.png";
import FoodMenuWrapper from '../common/FoodMenuWrapper';
import { IMenu } from '../../interfaces/componentProps';

const MenuSection: FC<IMenu> = ({ toogleMenuDetails=() => {} }) => {
    return(
        <FoodMenuWrapper headerText="Food delivery in Lagos Island" 
                         showNavigation={true}>
            <MenuCard cardImage={menu} menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                    menuHeader="Mexican Style Lunch" 
                    price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
                <MenuCard 
                cardImage={menu2} 
                menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                menuHeader="Mexican Style Lunch" 
                price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
                <MenuCard cardImage={menu3} 
                menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                    menuHeader="Mexican Style Lunch" 
                    price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
                <MenuCard cardImage={menu4} menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                    menuHeader="Mexican Style Lunch" 
                    price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
                <MenuCard cardImage={menu5} menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                    menuHeader="Mexican Style Lunch" 
                    price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
                <MenuCard cardImage={menu6} menuDescription="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    tour sunnd incididunt ut labor" 
                    menuHeader="Mexican Style Lunch" 
                    price="NGN 3,000.00" toogleMenuDetails={toogleMenuDetails}/>
        </FoodMenuWrapper>
    )
};

export default MenuSection;
