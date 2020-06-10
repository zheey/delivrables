import React, { FC } from "react";
import { ISignup } from "../../interfaces/componentProps";
import DrawerWrapper from "../common/DrawerWrapper";
import { TextHeader, TextPargraph } from "../common/Text";
import InputWrapper from "../common/InputWrapper";
import { PrimaryButton } from "../common/Button";

const SignUp: FC<ISignup> = ({ onClick=() => {}, onLogin=() => {} }) => {
    return(
        <DrawerWrapper onClick={onClick}>
            <div className="login-form-wrapper">
                    <TextHeader content="Welcome to Deliverable!"/>
                    <TextPargraph content="Enter your details to login to your account" className="mb-50"/>
                    
                    <InputWrapper className="mb-26">
                        <TextHeader content="Your Full Name"/>
                        <input placeholder="Zainab Adegoke" type="text"/>
                    </InputWrapper>
                    <InputWrapper className="mb-26">
                        <TextHeader content="Your Email"/>
                        <input placeholder="assuranceuwanguezz@gmail.com" type="email"/>
                    </InputWrapper>
                    <InputWrapper className="mb-26">
                        <TextHeader content="Your Phone"/>
                        <input placeholder="09098839983" type="phone"/>
                    </InputWrapper>
                    <InputWrapper className="mb-60">
                        <TextHeader content="Your password"/>
                        <input type="password"/>
                    </InputWrapper>

                    <PrimaryButton label="Sign Up"/>
                    <div className="signup-text">
                        <TextPargraph content="Already have an account?" className="navy-blue"/>
                        <TextPargraph content="Login" className="orange" onClick={onLogin}/>
                    </div>
                </div>
        </DrawerWrapper>
    )
}

export default SignUp;