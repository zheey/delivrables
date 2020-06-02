import React, { FC } from "react";
import { TextHeader } from "../common/Text";
import MenuSection from "./MenuSection";

const LandingHeader:FC = () => {
    return(
        <>
            <div className="landing-header">
                <TextHeader content="Your Favourite food delivered in no time"/>
            </div>
            <MenuSection/>
        </>
    )
};

export default LandingHeader;