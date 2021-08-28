/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React, { useState, useEffect } from 'react';
import { Hidden } from 'react-grid-system';

import { Link } from 'gatsby';

import ResponsiveHeader from './ResponsiveHeader';

// Local images
import Logo from '../../assets/medina-logo.png';
import Globe from '../../assets/icons/earth-icon.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           Header Component                                 */
/* -------------------------------------------------------------------------- */
function Header() {
  /* ******************************** HOOKS ******************************* */
  const [isScrolled, setPageScrolling] = useState(false);
  const IS_BROWSER = typeof window !== 'undefined';
  useEffect(() => {
    if (IS_BROWSER) {
      const onScroll = (e) => {
        if (e.target.documentElement.scrollTop > 10) setPageScrolling(true);
        if (e.target.documentElement.scrollTop <= 9) setPageScrolling(false);
      };
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }
    return '';
  }, [IS_BROWSER]);
  /* ****************************** RENDER HELPERS **************************** */
  function getHeader() {
    return (
      <header className={`navbar ${isScrolled && 'active-navbar'}`}>
        <img className="logo" src={Logo} alt="logo" />
        <nav className="nav-content">
          <ul className="list">
            <li className="list-item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/about-us">
                About us
              </Link>
              <ul className="collapse-list">
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Our Departments
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Financial Statements
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Our Partners
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <Link className="link" to="/">
                Our products
              </Link>
              <ul className="collapse-list">
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Global Volunteer
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Global Talent
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Global Teacher
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <Link className="link" to="/">
                Our blog
              </Link>
              <ul className="collapse-list">
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Young people
                  </Link>
                </li>
                <li className="collapse-item">
                  <Link className="collapse-link" to="/about-us">
                    Business
                  </Link>
                </li>
              </ul>
            </li>
            <li className="list-item">
              <Link className="link" to="/">
                Global Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/partnership">
                Partnership
              </Link>
            </li>
          </ul>
          <img className="translation-img" src={Globe} alt="change language" />
        </nav>
      </header>
    );
  }
  function getResponsiveHeader() {
    return <ResponsiveHeader />;
  }
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Hidden md xs sm>
        {getHeader()}
      </Hidden>
      <Hidden lg xl xxl>
        {getResponsiveHeader()}
      </Hidden>
    </>
  );
}

export default Header;
