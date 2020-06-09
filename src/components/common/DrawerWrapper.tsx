import React, { FC } from "react";
import { IClick, IComponent } from "../../interfaces/componentProps";

const DrawerWrapper:FC<IClick & IComponent> = ({ onClick=()=> {}, children }) => {
    return(
        <div className="login-wrapper">
            <div className="login-card">
                <div className="scroll-nav" onClick={e => {onClick(e)}}>  
                </div>  
                {
                    children
                }
            </div>
        </div>
    )
};

export default DrawerWrapper;
