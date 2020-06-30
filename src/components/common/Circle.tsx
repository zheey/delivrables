import React, { FC } from "react";
import { IClassname } from "./../../interfaces/componentProps";

const Circle:FC<IClassname> = ({ className, children }) => {
    return (
        <div className={`circle ${className}`}>
            {children}
        </div>
    )
};

export default Circle;