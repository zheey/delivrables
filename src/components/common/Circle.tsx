import React, { FC } from "react";
import { ICircle } from "./../../interfaces/componentProps";

const Circle:FC<ICircle> = ({ className, children, onClick=() => {} }) => {
    return (
        <div className={`circle ${className}`} onClick={e => onClick(e)}>
            {children}
        </div>
    )
};

export default Circle;