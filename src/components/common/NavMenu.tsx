import React, { FC } from "react";
import { TextHeader } from "./Text";
import { IText, IClick } from "../../interfaces/componentProps";

const NavMenu:FC<IText & IClick> = ({content, className='', onClick=() => {}}) => {
    return(
        <TextHeader content={content} className={`nav-menu ${className}`} onClick={onClick}/>
    )
};

export default NavMenu;