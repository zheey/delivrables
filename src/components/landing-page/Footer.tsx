import React, { FC } from 'react';
import { TextHeader, TextPargraph } from '../common/Text';
import { PrimaryButton, NakedButton } from '../common/Button';

const Footer:FC = () => {
    return(
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-header-wrapper">
                    <TextHeader content="Ready to get started?"/>
                    <TextPargraph content="Get in touch for updates or create an account."/>
                </div>
                <div className="footer-button-wrapper">
                    <PrimaryButton label="CREATE ACCOUNT"/>
                    <NakedButton label="get in touch"/>
                </div>
            </div>
            <div className="footer-menu-wrapper">
                <div className="footer-menu">
                    <TextHeader content="About Us"/>
                    <TextHeader content="Contact Us"/>
                    <TextHeader content="Add your Resturant"/>
                    <TextHeader content="Privacy Policy"/>
                </div>
                <hr/>
            </div>
        </footer>
    )
};

export default Footer;
