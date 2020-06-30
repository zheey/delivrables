import React from "react";
import Circle from "./Circle";
import { TextHeader } from "./Text";

const MenuCounter = () => {
    return (
        <div className="menu-add-nav">
            <Circle className="nav-circle-blue">

            </Circle>
            <TextHeader content="1" className="number"/>
            <Circle className="nav-circle-light">
                                    
            </Circle>
            <TextHeader content="Latte"/>
        </div>
    )
};

export default MenuCounter;