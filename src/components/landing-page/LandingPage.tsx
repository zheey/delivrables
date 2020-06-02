import React, { FC } from "react";
import Navbar from "../common/Navbar";
import LandingHeader from "./LandingHeader";

const LandingPage: FC = () => {
    return (
        <div className="landing-page-wrapper">
            <Navbar/>
            <LandingHeader/>
        </div>
    )
};

export default LandingPage;