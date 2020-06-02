import React, { FC } from 'react';
import { TextHeader } from '../common/Text';
import MenuCard from "../common/MenuCard";
import menu from "../../images/food1.png";
import menu2 from "../../images/food7.png";
import menu3 from "../../images/food2.png";
import menu4 from "../../images/food5.png";
import menu5 from "../../images/food4.png";
import menu6 from "../../images/food7.png";

const MenuSection: FC = () => {
    return(
        <div className="section-wrapper">
            <div className="section-menu-wrapper">
                <TextHeader content="Food delivery in Lagos Island" className="header3"/>
                <div className="wrapper">
                    <TextHeader content="View all" className="header4"/>
                    <div className="scroll-nav-wrapper">
                        <div className="scroll-nav">

                        </div>
                        <div className="scroll-nav">

                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-wrapper">
                <MenuCard cardImage={menu}/>
                <MenuCard cardImage={menu2} className="both-margin-30"/>
                <MenuCard cardImage={menu3}/>
                <MenuCard cardImage={menu4}/>
                <MenuCard cardImage={menu5}className="both-margin-30"/>
                <MenuCard cardImage={menu6}/>
            </div>
        </div>
    )
};

export default MenuSection;
