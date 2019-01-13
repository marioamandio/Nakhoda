import React from 'react';

import arrowDownMenu from '../img/icons/arrow-down-menu.jpeg'
import trash from '../img/icons/trash.jpeg'
import btnScrollLeft from '../img/icons/btn-scroll-left.jpeg'
import btnScrollRight from '../img/icons/btn-scroll-right.jpeg'
import message from '../img/icons/message.jpeg'
import "../styles/components/menu.css"
import "../styles/icons/icons.css"


const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__section">
                <span className="menu__section--1">Sunt</span>
            </div>
            <div className="menu__section">
                <div className="menu__icon menu__section--2">
                    <img src={arrowDownMenu} className="icon-menu-down" alt="img"/>
                    <span>beatae vita</span>
                </div>
                
            </div>
            <div className="menu__section">
                <span className="menu__section--3">Lorem ipsum dolor sit amet, consectetur</span>
            </div>
            <div className="menu__section menu__section--4">&nbsp;</div>
            <div className="menu__section--icon">
                <div className="menu__section--5">
                    <div className="menu__icon">
                        <div className="menu__section--4--icon">
                            <img src={trash} alt=""className="icon-menu-section-h"/>
                        </div>
                        <span>trash</span>
                    </div>
                    <div className="menu__icon">
                        <div className="menu__section--4--icon">
                            <img src={btnScrollLeft} alt="" className="icon-menu-section-w"/>
                        </div>
                        <span>left</span>
                    </div>
                    <div className="menu__icon">
                        <div className="menu__section--4--icon">
                            <img src={btnScrollRight} alt="" className="icon-menu-section-w"/>
                        </div>
                        <span>right</span>
                    </div>
                    <div className="menu__icon">
                        <div className="menu__section--4--icon">
                            <img src={message} alt="" className="icon-menu-section-w"/>
                        </div>
                        <span>message</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;