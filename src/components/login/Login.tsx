import React, { FC } from "react";
import { TextHeader } from "../common/Text";

const Login:FC = () => {
    return(
        <div className="login-wrapper">
            <div className="login-card">
                <div className="scroll-nav">    
                </div>
                <div className="login-form-wrapper">
                    <TextHeader content="Welcome Back!"/>
                </div>
            </div>
        </div>
    )
};

export default Login;