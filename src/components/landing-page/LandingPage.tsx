import React, { FC, useState } from "react";
import Navbar from "../common/Navbar";
import LandingHeader from "./LandingHeader";
import SubscribeSection from "./SubcribeSection";
import Footer from "./Footer";
import Login from "../login/Login";
import { ILandingState } from "../../interfaces/componentsStates";

const LandingPage: FC = () => {
    const [landingPageState, setLandingPage] = useState<ILandingState>({
        showLoginDrawer: true
    });

    const toogleLoginModal: () => void = () => {
        setLandingPage(prevState => ({
            ...prevState,
            showLoginDrawer: !prevState.showLoginDrawer
        }));
    };

    return (
        <div className={`landing-page-wrapper ${landingPageState.showLoginDrawer ? "vh-sized" : ''}`}>
            <Navbar onLoginClick={toogleLoginModal}/>
            <LandingHeader/>
            <SubscribeSection/>
            <Footer/>
            {
                landingPageState.showLoginDrawer ? 
                    <Login/>
                    :
                    ''
            }
        </div>
    )
};

export default LandingPage;