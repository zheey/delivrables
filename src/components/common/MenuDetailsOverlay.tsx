import React, { FC } from "react";
import ImageWrapper from "./ImageWrapper";
import { TextHeader, TextPargraph } from "./Text";
import imageDetails from "../../images/menuDetails.png";
import MenuCounter from "./MenuCounter";
import Circle from "./Circle";
import { IMenuDetailsOverlay } from "../../interfaces/componentProps";


const MenuDetailsOverlay:FC<IMenuDetailsOverlay> = ({ toogleMenuDetails }) => {
    return(
        <div className="login-wrapper overlay-wrapper">
        <div className="menu-details-card">
            <Circle className="nav-circle-light close-button" onClick={toogleMenuDetails}>
            </Circle>
            <ImageWrapper image={imageDetails} alt="menu"/>
            <div className="menu-text-wrapper">
                <TextHeader content="Buttermilk Fried Chicken Wrap"/>
                <TextPargraph content="Allergies, intolerances and dietary requirements: before ordering, please contact the restaurant directly and ask to speak to the Manager who can help cater for your needs. For more information please see Costa."/>
            </div>
            <div className="sub-header">
                <TextHeader content="Add-ons"/>
                <TextPargraph content="Add some stuff to spice up your meal"/>
            </div>
            <div className="side-margin-30">
                <MenuCounter counter={1} menuTitle="Latte" showFull={true}/>
                <MenuCounter menuTitle="Extra Egg"/>
                <MenuCounter menuTitle="White Americano"/>
                <MenuCounter menuTitle="Chocolate Twist"/>
                <MenuCounter menuTitle="Lemon Muffin"/>
            </div>
            <div className="sub-header height-17"/>
            <div className="side-margin-30">
                <MenuCounter counter={1} showFull={true} isMainMenu={true}/>
            </div>
        </div>
    </div>
    )
};

export default MenuDetailsOverlay;