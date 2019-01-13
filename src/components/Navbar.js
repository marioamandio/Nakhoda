import React from 'react';

import arrowDown from '../img/icons/arrowdown.jpeg'
import "../styles/components/navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__navigator">
                <div className="navbar__navigator--item"><span>Iste Natus</span></div>
                <div className="navbar__navigator--item"><span>Explicabo</span></div>
                <div className="navbar__navigator--item"><span>Omnis</span></div>
                <div className="navbar__navigator--item"><span>Ipsa quae</span></div>
                <div className="navbar__navigator--item"><span>Perspiciatis Unde</span></div>
            </div>
            <div className="navbar__profile">
                <div className="navbar__profile--item">
                    <span> Veris Veritatis</span>
                    <img src={arrowDown} alt="img" className="icons--profile"/>
                </div>
                <div className="navbar__profile--item"><div className="avatar"><span>z</span></div></div>
            </div>
        </div>
    );
};

export default Navbar;