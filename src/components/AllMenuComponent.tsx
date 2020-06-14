import React, { FC, useState } from "react";
import LandingPageWrapper from "./common/LandingPageWrapper";
import RecentMenu from "./common/RecentMenu";
import PopularMenu from "./common/PopularMenu";
import { IAllMenu } from "../interfaces/componentsStates";

const AllMenuComponent: FC = () => {
    const [menuState, setMenuState] = useState<IAllMenu>({
        showMenu: false
    });

    const toogleMenuDetails = () => {
        setMenuState(prevState => ({
            ...prevState,
            showMenu: !prevState.showMenu
        }));
    }
    return (
        <LandingPageWrapper>
            <RecentMenu/>
            <PopularMenu/>
        </LandingPageWrapper>
    )
};

export default AllMenuComponent;