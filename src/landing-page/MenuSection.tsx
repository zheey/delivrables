import React, { FC } from 'react';
import { TextHeader } from '../common/Text';

const MenuSection: FC = () => {
    return(
        <div className="section-wrapper">
            <div className="section-menu-wrapper">
                <TextHeader content="Food delivery in Lagos Island" className="header3"/>
                <div className="wrapper">
                    <TextHeader content="View all" className="header4"/>
                    <div className="scroll-nav-wrapper">
                        <div className="scroll-nav">

                        </div>
                        <div className="scroll-nav">

                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-wrapper">

            </div>
        </div>
    )
};

export default MenuSection;
