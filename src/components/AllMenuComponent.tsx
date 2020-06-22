import React, { FC, useState } from "react";
import LandingPageWrapper from "./common/LandingPageWrapper";
import RecentMenu from "./common/RecentMenu";
import PopularMenu from "./common/PopularMenu";
import { IAllMenu } from "../interfaces/componentsStates";
import { IMenu } from "../interfaces/componentProps";

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
                        <div>

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