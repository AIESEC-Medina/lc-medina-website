/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Pakcages
import React from 'react';

// UI lib comoponents

// Local UI components
import PartnerImg from '../../assets/images/partner.png';
// @TODO: Import other locally-made dependencies here

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PartnerSlider() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div id="slider-main">
      <h2>Our premium partners</h2>
      <div id="slider">
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
        <img src={PartnerImg} alt="partner" />
      </div>
    </div>
  );
}

export default PartnerSlider;
