import React, { FC } from 'react';
import logo from "../../images/logo.png";
import location from "../../images/location.png";
import search from "../../images/search.png";
import cart from "../../images/cart.png";
import ImageWrapper from './ImageWrapper';
import { TextHeader } from "./Text"
import NavMenu from './NavMenu';
import { PrimaryButton } from './Button';
import { INavbar } from '../../interfaces/componentProps';


const Navbar: FC<INavbar> = ({ onLoginClick, onSignupClick }) => {
    const isMenuPage = window.location.pathname === "/all-menu";
    return(
        <div className="navbar">
            {
                !isMenuPage ?
                    <>
                        <div className="logo-wrapper">
                            <ImageWrapper image={logo} alt="logo" className="logo"/>
                            <TextHeader className="logo-name" content="Delivrable"/>
                        </div>
                        <div className="nav-wrapper">
                            <NavMenu content="Cart (0)"/>
                            <NavMenu content="Log In" onClick={onLoginClick}/>
                            <PrimaryButton label="Get Started" onClick={onSignupClick}/>
                        </div>
                    </>
                    :
                    <>
                        <div className="logo-search-wrapper">
                            <div className="logo-wrapper">
                                <ImageWrapper image={logo} alt="logo" className="logo"/>
                                <TextHeader className="logo-name" content="Delivrable"/>
                            </div>
                            <div className="search-wrapper">
                                <ImageWrapper image={location} alt="location"/>
                                <input placeholder="Type a location"/>
                            </div>
                        </div>
                        <div className="nav-wrapper">
                            <div className="icon-nav">
                                <ImageWrapper image={search} alt="search"/>
                                <NavMenu content="Search"/>
                            </div>
                            <NavMenu content="Log In" onClick={onLoginClick}/>
                            <ImageWrapper image={cart} alt="cart"/>
                        </div>
                    </>
            }
        </div>
    )
};

export default Navbar;