import React, { FC, useState } from "react";
import Navbar from "../common/Navbar";
import SubscribeSection from "../landing-page/SubcribeSection";
import Footer from "../landing-page/Footer";
import Login from "../login/Login";
import { ILandingState } from "../../interfaces/componentsStates";
import SignUp from "../login/SignUp";
import { ILandingPageWrapper } from "../../interfaces/componentProps";

const LandingPageWrapper: FC<ILandingPageWrapper> = ({ children }) => {
    const [landingPageState, setLandingPage] = useState<ILandingState>({
        showLoginDrawer: false,
        showSignupDrawer: false,
        showMenu: true
    });
    const toogleMenuDetails = () => {
        setLandingPage(prevState => ({
            ...prevState,
            showMenu: !prevState.showMenu
        }));
    }

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
            {
                children
            }
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

export default LandingPageWrapper;