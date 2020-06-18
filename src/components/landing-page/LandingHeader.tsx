import React, { FC } from "react";
import { TextHeader } from "../common/Text";
import MenuSection from "./MenuSection";

const LandingHeader:FC = () => {
    const toogleMenuDetails = () => {

    }; 

    return(
        <>
            <div className="landing-header">
                <TextHeader content="Your Favourite food delivered in no time"/>
            </div>
            <MenuSection toogleMenuDetails={toogleMenuDetails}/>
        </>
    )
};

export default LandingHeader;