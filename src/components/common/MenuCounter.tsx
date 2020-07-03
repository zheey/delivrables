import React, { FC } from "react";
import Circle from "./Circle";
import { TextHeader } from "./Text";
import { IMenuCounter } from "../../interfaces/componentProps";
import { PrimaryButton } from "./Button";

const MenuCounter:FC<IMenuCounter> = ({ counter=0, menuTitle, showFull=false, isMainMenu=false }) => {
    return (
        <div className={`menu-add-nav ${isMainMenu ? "main-add-nav" : ''}`}>
            <div className="counter-wrapper">
                <div className="wrap-counter">
                    {
                        showFull ?
                            <>
                                <Circle className="nav-circle-blue">

                                </Circle>
                                <TextHeader content={counter} className="number"/>
                            </>
                            :
                            ''
                    }
                    <Circle className="nav-circle-light">
                                            
                    </Circle>
                    <TextHeader content={ menuTitle }/>
                </div>
                {isMainMenu ?
                    <PrimaryButton label="Add to Cart"/>
                    :
                    <TextHeader content="NGN 500.00" className="amount"/>
                }
            </div>
        </div>
    )
};

export default MenuCounter;