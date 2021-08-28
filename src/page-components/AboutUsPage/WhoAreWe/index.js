/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images
import AIESEC_IMG from '../../../assets/images/AIESEC.png';
import ALQ_IMG from '../../../assets/images/AIESEC-Leadership-Qualities.png';

/* -------------------------------------------------------------------------- */
/*                             Who Are We Section                             */
/* -------------------------------------------------------------------------- */
function WhoAreWe() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="who-are-we">
      <div className="section-1">
        <div className="left-side">
          <img src={AIESEC_IMG} alt="" />
          <img src={ALQ_IMG} alt="" />
        </div>
        <div className="right-side">
          <p className="what-we-do">We develop youth leaders</p>
          <p className="description">
            We believe that youth are the key to shaping a better future.
            Through our experiences we strive to develop youth leaders with the
            AIESEC Leadership Qualities.
          </p>
          <div className="all-counters">
            <div className="double-counters flex items-center">
              <div className="single-counter">
                <span>+20</span>
                <p>Partner Organizations</p>
              </div>
              <div className="single-counter">
                <span>+20</span>
                <p>Countries & Territoriess</p>
              </div>
            </div>
            <div className="double-counters flex items-center">
              <div className="single-counter">
                <span>+500</span>
                <p>Experience every year</p>
              </div>
              <div className="single-counter">
                <span>+30.000</span>
                <p>Student within campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2" />
    </div>
  );
}

export default WhoAreWe;
