import React, { FC } from "react";
import { TextHeader, TextPargraph } from "../common/Text";
import { NakedButton, PrimaryButton } from "../common/Button";
import InputWrapper from "../common/InputWrapper";
import { IClick } from "../../interfaces/componentProps";
import DrawerWrapper from "../common/DrawerWrapper";

const Login:FC<IClick> = ({ onClick=() => {} }) => {
    return(
        <DrawerWrapper onClick={onClick}>
                <div className="login-form-wrapper">
                    <TextHeader content="Welcome Back!"/>
                    <TextPargraph content="Enter your details to login to your account"/>
                    <NakedButton label="Sign In with Facebook"/>
                    <TextPargraph content="Or sign in with e-mail:" className="small-text"/>
                    <InputWrapper className="mb-26">
                        <TextHeader content="Your Email"/>
                        <input placeholder="assuranceuwanguezz@gmail.com" type="text"/>
                    </InputWrapper>
                    <InputWrapper className="mb-30">
                        <TextHeader content="Your password"/>
                        <input placeholder="assuranceuwanguezz@gmail.com" type="password"/>
                    </InputWrapper>
                    <div className="extra-wrapper">
                        <div className="checkbox-wrapper">
                            <input type="checkbox"/>
                            <TextPargraph content="Remeber me"/>
                        </div>
                        <TextPargraph content="Forgot Password?" className="forgot-parag"/>
                    </div>
                    <PrimaryButton label="Sign In"/>
                    <div className="signup-text">
                        <TextPargraph content="Don’t have an account?" className="navy-blue"/>
                        <TextPargraph content="Register Now" className="orange"/>
                    </div>
                </div>
        </DrawerWrapper>
    )
};

export default Login;