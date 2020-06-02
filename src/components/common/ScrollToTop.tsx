import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router";

const ScrollToTop: FC<RouteComponentProps> = ({location, children}) => {

    return(
        <>
            {children}       
        </>
    )
};

export default withRouter(ScrollToTop);