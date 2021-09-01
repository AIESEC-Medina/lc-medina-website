/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import Typical from 'react-typical';

// Local images
import Logo from '../../../assets/icons/LogoMedina.png';

// Style
import './index.scss';
/* -------------------------------------------------------------------------- */
/*                                Top Section                                 */
/* -------------------------------------------------------------------------- */
function TopSection() {
  return (
    <div className="TopSection-container">
      <div className="Informations-container">
        <img src={Logo} alt="MedinaLogo" />
        <div className="intro-info">
          <h1 className="animated-text">
            <Typical
              loop={Infinity}
              wrapper="w"
              steps={[
                'intership with aiesec',
                1500,
                'teach with aiesec',
                1500,
                'membership with aiesec',
                1500,
                'develop yourself with aiesec',
                1500,
              ]}
            />
          </h1>
          <h2 className="what-are-we">We are a youth leadership movement</h2>
          <p className="description">
            We are passionately driven by one cause, peace and fulfillment of
            humankinds potential.
          </p>
          <h3 className="badge">in Tunisia since 1989</h3>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
