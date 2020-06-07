import React, { FC } from "react";
import { TextHeader, TextPargraph } from "../common/Text";
import { NakedButton } from "../common/Button";
import InputWrapper from "../common/InputWrapper";

const Login:FC = () => {
    return(
        <div className="login-wrapper">
            <div className="login-card">
                <div className="scroll-nav">    
                </div>
                <div className="login-form-wrapper">
                    <TextHeader content="Welcome Back!"/>
                    <TextPargraph content="Enter your details to login to your account"/>
                    <NakedButton label="Sign In with Facebook"/>
                    <TextPargraph content="Or sign in with e-mail:" className="small-text"/>
                    <InputWrapper className="mb-26">
                        <TextHeader content="Your Email"/>
                        <input placeholder="assuranceuwanguezz@gmail.com" type="text"/>
                    </InputWrapper>
                    <InputWrapper>
                        <TextHeader content="Your password"/>
                        <input placeholder="assuranceuwanguezz@gmail.com" type="password"/>
                    </InputWrapper>
                </div>
            </div>
        </div>
    )
};

export default Login;