import React, { FC } from "react";
import Navbar from "../common/Navbar";
import LandingHeader from "./LandingHeader";
import SubscribeSection from "./SubcribeSection";

const LandingPage: FC = () => {
    return (
        <div className="landing-page-wrapper">
            <Navbar/>
            <LandingHeader/>
            <SubscribeSection/>
        </div>
    )
};

export default LandingPage;