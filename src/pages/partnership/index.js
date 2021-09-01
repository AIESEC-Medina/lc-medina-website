/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Page wrappers
import Seo from '../../shared/Seo';

// Local images
import Logo from '../../assets/medina-logo.png';
import Partner from '../../assets/images/partner.png';
import Globe from '../../assets/icons/earth-icon.svg';

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                            Partnership Page                                */
/* -------------------------------------------------------------------------- */

function PartnershipPage() {
  return (
    <>
      <Seo title="Partnership" />
      <div id="main">
        <img src={Globe} alt="change language" id="language" />
        <div className="side-image">
          <img className="logo" src={Logo} alt="logo" />
          <div className="gradient" />
          <div id="textoverlay">
            <span>
              Have you thought about connecting and recruiting young national or
              international talent for your company?
            </span>
            <p>
              AIESEC is a global network that can connect your brand to young
              national and international talents from different areas, such as:
              Marketing, Customer Service, Sales, Design and others.
            </p>
            <p>
              With us, you can expand your focus on generating diversity and
              results, through expansion and global positioning.
            </p>
            <p>
              Schedule a conversation with us and understand how a more
              globalized, international and innovative work environment is just
              a step away and simpler than you might think.
            </p>
          </div>
        </div>
        <div id="formsection">
          <h1>Sign up for more information</h1>
          <form>
            <div className="formgroup">
              <label htmlFor="fullname" className="inputs">
                Full name &nbsp;
                <input id="fullname" type="text" />
              </label>
            </div>
            <div className="formgroup">
              <label htmlFor="email" className="inputs">
                Email &nbsp;
                <input id="email" type="email" />
              </label>
            </div>
            <div className="formgroup">
              <label htmlFor="telephone" className="inputs">
                Telephone &nbsp;
                <input id="telephone" type="tel" />
              </label>
            </div>
            <div className="formgroup">
              <label htmlFor="company" className="inputs">
                Company &nbsp;
                <input id="company" type="text" />
              </label>
            </div>
            <div className="formgroup">
              <label htmlFor="location" className="inputs">
                Location &nbsp;
                <input id="location" type="text" />
              </label>
            </div>
            <div className="formgroup">
              <label htmlFor="website" className="inputs">
                Website &nbsp;
                <input id="website" type="url" />
              </label>
            </div>
            <div className="formgroup">
              <label htmlFor="message" className="inputs">
                Message &nbsp;
                <textarea id="message" />
              </label>
            </div>
            <div id="lastchild">
              <label htmlFor="agreement">
                <input type="checkbox" id="agreement" />I agree to receive
                communications from AIESEC MEDINA
              </label>
            </div>
            <div className="submit-btn">
              <button type="submit">Sign me up</button>
            </div>
          </form>
          <div className="partners-section">
            <p className="title">Companies that already work with us:</p>
            <div className="partner-slider">
              <img src={Partner} alt="partner" />
              <img src={Partner} alt="partner" />
              <img src={Partner} alt="partner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnershipPage;
