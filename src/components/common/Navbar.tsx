import React, { FC } from 'react';
import logo from "../../images/logo.png";
import ImageWrapper from './ImageWrapper';
import { TextHeader } from "./Text"
import NavMenu from './NavMenu';
import { PrimaryButton } from './Button';
import { INavbar } from '../../interfaces/componentProps';


const Navbar: FC<INavbar> = ({ onLoginClick }) => {
    return(
        <div className="navbar">
            <div className="logo-wrapper">
                <ImageWrapper image={logo} alt="logo" className="logo"/>
                <TextHeader className="logo-name" content="Delivrable"/>
            </div>
            <div className="nav-wrapper">
                <NavMenu content="Cart (0)"/>
                <NavMenu content="Log In" onClick={onLoginClick}/>
                <PrimaryButton label="Get Started"/>
            </div>
        </div>
    )
};

export default Navbar;