import React, { FC, useState } from "react";
import Navbar from "../common/Navbar";
import LandingHeader from "./LandingHeader";
import SubscribeSection from "./SubcribeSection";
import Footer from "./Footer";
import Login from "../login/Login";
import { ILandingState } from "../../interfaces/componentsStates";
import SignUp from "../login/SignUp";

const LandingPage: FC = () => {
    const [landingPageState, setLandingPage] = useState<ILandingState>({
        showLoginDrawer: false,
        showSignupDrawer: false
    });

    const toogleLoginModal: () => void = () => {
        setLandingPage(prevState => ({
            ...prevState,
            showSignupDrawer: false,
            showLoginDrawer: !prevState.showLoginDrawer
        }));
    };

    const toogleSignupModal: () => void = () => {
        setLandingPage(prevState => ({
            ...prevState,
            showLoginDrawer: false,
            showSignupDrawer: !prevState.showSignupDrawer
        }));
    };

    const showDrawer = landingPageState.showLoginDrawer || landingPageState.showSignupDrawer;
    return (
        <div className={`landing-page-wrapper ${showDrawer ? "vh-sized" : ''}`}>
            <Navbar onLoginClick={toogleLoginModal} onSignupClick={toogleSignupModal}/>
            <LandingHeader/>
            <SubscribeSection/>
            <Footer/>
            {
                landingPageState.showLoginDrawer ? 
                    <Login onClick={toogleLoginModal} onSignUp={toogleSignupModal}/>
                    :
                    ''
            }
            {
                landingPageState.showSignupDrawer ? 
                    <SignUp onClick={toogleSignupModal} onLogin={toogleLoginModal}/>
                    :
                    ''
            }
        </div>
    )
};

export default LandingPage;