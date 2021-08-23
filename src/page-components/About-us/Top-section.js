/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages

import React from 'react';
import Typical from 'react-typical';
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
          <h1>
            <Typical
              loop={Infinity}
              wrapper="w"
              steps={[
                'intership with aiesec',
                1000,
                'teach with aiesec',
                1000,
                'membership with aiesec',
                1000,
                'develop yourself with aiesec',
                1000,
              ]}
            />
          </h1>
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
