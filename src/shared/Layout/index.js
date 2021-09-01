/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import PropTypes from 'prop-types';

// Page wrappers
import Header from '../Header';
import Footer from '../Footer';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           Layout Component                                 */
/* -------------------------------------------------------------------------- */
const Layout = ({ children }) => {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
