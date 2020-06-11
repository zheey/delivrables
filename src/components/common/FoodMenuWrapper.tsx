import React, { FC } from 'react';
import { TextHeader, TextPargraph } from '../common/Text';
import { IMenuWrapper } from '../../interfaces/componentProps';

const FoodMenuWrapper:FC<IMenuWrapper> = ({ children, showNavigation=false, headerSubText, headerText, className='' }) => {
    const viewAllMenu = () => {
        window.location.href = "/all-menu"
    };

    return(
        <div className={`section-wrapper ${className}`}>
            <div className="section-menu-wrapper">
                <TextHeader content={headerText} className="header3"/>
                {
                    headerSubText ?
                        <TextPargraph content={headerSubText} className="light-blue"/>
                        :
                        ''
                }
                { 
                    showNavigation ?
                        <div className="wrapper">
                            <TextHeader content="View all" className="header4" onClick={viewAllMenu}/>
                            <div className="scroll-nav-wrapper">
                                <div className="scroll-nav">

                                </div>
                                <div className="scroll-nav">

                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </div>
            <div className="menu-wrapper">
                {
                    children
                }
            </div>
        </div>
    )
};

export default FoodMenuWrapper;
