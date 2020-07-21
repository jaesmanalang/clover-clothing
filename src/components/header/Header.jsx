import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import './Header.scss';

const Header = () => (
  <header className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </header>
);

export default Header;
