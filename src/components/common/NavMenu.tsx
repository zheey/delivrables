import React, { FC } from "react";
import { TextHeader } from "./Text";
import { IText } from "../../interfaces/componentProps";

const NavMenu:FC<IText> = ({content, className=''}) => {
    return(
        <TextHeader content={content} className={`nav-menu ${className}`}/>
    )
};

export default NavMenu;