import React from 'react';
import { Link } from 'react-router-dom';

import '../css/menu.css';

const Menu = (props) => (
    <nav className="Navbar">
        <div className="Navbar-contianer">
            <div>
                <Link to="/" className="Navbar__brand">
                    <p>Gene Data Loader</p>
                </Link>    
            </div>
        </div>
    </nav>
);

export default Menu;