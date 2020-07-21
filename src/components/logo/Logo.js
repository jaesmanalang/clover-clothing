import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Logo.css';

const Logo = () => (
  <Link to="/">
    <div className="logo">
      <div className="logo__img">
        <img src={logo} alt="Clover Clothing" />
      </div>
      <span className="logo-title">
        <h1>Clover</h1>
      </span>
    </div>
  </Link>
);

export default Logo;
