/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages

import React from 'react';
import Logo from '../../assets/icons/LogoMedina.png';
// Style
import './index.scss';
/* -------------------------------------------------------------------------- */
/*                                  component                                 */
/* -------------------------------------------------------------------------- */
function TopSection() {
  return (
    <div className="TopSection-container">
      <div className="Informations-container">
        <img src={Logo} alt="MedinaLogo" />
        <div className="intro-info">
          <h1>develop yourself with aiesec.</h1>
          <h2>We are a youth leadership movement</h2>
          <p>
            We are passionately driven by one cause, peace and fulfillment of
            humankinds potential.
          </p>
          <h3>in Tunisia since 1989</h3>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
