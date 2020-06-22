import React, { FC, useState } from "react";
import LandingPageWrapper from "./common/LandingPageWrapper";
import RecentMenu from "./common/RecentMenu";
import PopularMenu from "./common/PopularMenu";
import { IAllMenu } from "../interfaces/componentsStates";
import { IMenu } from "../interfaces/componentProps";
import ImageWrapper from "./common/ImageWrapper";
import imageDetails from "../images/menuDetails.png";
import { TextHeader, TextPargraph } from "./common/Text";

const AllMenuComponent: FC<IMenu> = () => {
    const [menuPageState, setMenuPage] = useState<IAllMenu>({
        showMenu: true
    });
    const toogleMenuDetails = () => {
        setMenuPage(prevState => ({
            ...prevState,
            showMenu: !prevState.showMenu
        }));
    }
    
    return (
        <>
            <LandingPageWrapper>
                <RecentMenu toogleMenuDetails={toogleMenuDetails}/>
                <PopularMenu toogleMenuDetails={toogleMenuDetails}/>
                {
                menuPageState.showMenu ?
                    <div className="login-wrapper overlay-wrapper">
                        <div className="menu-details-card">
                            <ImageWrapper image={imageDetails} alt="menu"/>
                            <div className="menu-text-wrapper">
                                <TextHeader content="Buttermilk Fried Chicken Wrap"/>
                                <TextPargraph content="Allergies, intolerances and dietary requirements: before ordering, please contact the restaurant directly and ask to speak to the Manager who can help cater for your needs. For more information please see Costa."/>
                            </div>
                            <div className="sub-header">
                                <TextHeader content="Add-ons"/>
                                <TextPargraph content="Add some stuff to spice up your meal"/>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }
            </LandingPageWrapper>
            
        </>
    )
};

export default AllMenuComponent;