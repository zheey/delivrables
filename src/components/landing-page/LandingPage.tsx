import React, { FC } from "react";
import Navbar from "../common/Navbar";
import LandingHeader from "./LandingHeader";
import SubscribeSection from "./SubcribeSection";
import Footer from "./Footer";

const LandingPage: FC = () => {
    return (
        <div className="landing-page-wrapper">
            <Navbar/>
            <LandingHeader/>
            <SubscribeSection/>
            <Footer/>
        </div>
    )
};

export default LandingPage;