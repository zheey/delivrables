import React, { FC } from "react";
import LandingHeader from "./LandingHeader";
import LandingPageWrapper from "../common/LandingPageWrapper";

const LandingPage: FC = () => {
    return (
        <LandingPageWrapper>
            <LandingHeader/>
        </LandingPageWrapper>
    )
};

export default LandingPage;