import React, { FC } from "react";
import LandingPageWrapper from "./common/LandingPageWrapper";
import RecentMenu from "./common/RecentMenu";
import PopularMenu from "./common/PopularMenu";

const AllMenuComponent: FC = () => {
    return (
        <LandingPageWrapper>
            <RecentMenu/>
            <PopularMenu/>
        </LandingPageWrapper>
    )
};

export default AllMenuComponent;