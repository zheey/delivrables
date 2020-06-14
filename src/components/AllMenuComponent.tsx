import React, { FC, useState } from "react";
import LandingPageWrapper from "./common/LandingPageWrapper";
import RecentMenu from "./common/RecentMenu";
import PopularMenu from "./common/PopularMenu";
import { IAllMenu } from "../interfaces/componentsStates";
import { IMenu } from "../interfaces/componentProps";

const AllMenuComponent: FC<IMenu> = ({ toogleMenuDetails }) => {
    
    return (
        <LandingPageWrapper>
            <RecentMenu toogleMenuDetails={toogleMenuDetails}/>
            <PopularMenu toogleMenuDetails={toogleMenuDetails}/>
        </LandingPageWrapper>
    )
};

export default AllMenuComponent;