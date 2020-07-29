import React from 'react';

import logo from '../../assets/logo-react.png'

const NavBar = () => (
    <nav className="navbar justify-content-between navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      <img src={logo} width="90" height="60" alt=""/>
    </a>
    <span className="navbar-text">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Mi Perfil</button>
    </span>
  </nav>
);

export default NavBar;