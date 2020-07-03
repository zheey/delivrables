import React, { FC, useState } from "react";
import LandingPageWrapper from "./common/LandingPageWrapper";
import RecentMenu from "./common/RecentMenu";
import PopularMenu from "./common/PopularMenu";
import { IAllMenu } from "../interfaces/componentsStates";
import { IMenu } from "../interfaces/componentProps";
import MenuDetailsOverlay from "./common/MenuDetailsOverlay";

const AllMenuComponent: FC<IMenu> = () => {
    const [menuPageState, setMenuPage] = useState<IAllMenu>({
        showMenu: false
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
                    <MenuDetailsOverlay toogleMenuDetails={toogleMenuDetails}/>
                    :
                    ''
            }
            </LandingPageWrapper>
            
        </>
    )
};

export default AllMenuComponent;