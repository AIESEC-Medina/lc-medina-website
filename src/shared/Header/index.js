/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import './index.scss';

// Local page components
import Logo from '../../assets/medina-logo.png';
import Globe from '../../assets/icons/earth-icon.svg';

const Header = () => (
  <div id="navbar">
    <img src={Logo} alt="logo" />
    <div>
      <ul>
        <li>
          <a href>Home</a>
        </li>
        <li>
          <a href>About us</a>
        </li>
        <li>
          <a href>Our products</a>
        </li>
        <li>
          <a href>Our blog</a>
        </li>
        <li>
          <a href>Global Home</a>
        </li>
        <li>
          <a href>Partnership</a>
        </li>
        <li>
          <img src={Globe} alt="change language" />
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
