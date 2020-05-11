import React from 'react';
import { Link } from 'react-router-dom';

import '../css/menu.css';
import adn from '../assets/adn.png';

const Menu = (props) => (
    <nav className="Navbar">
        <div className="Navbar-contianer">
            <div>
                <Link to="/" className="Navbar__brand">
                    <img className="Navbar__brand-logo" src={adn} alt="logo" />
                </Link>    
            </div>
        </div>
    </nav>
);

export default Menu;