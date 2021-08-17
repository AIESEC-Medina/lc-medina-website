/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import Seo from '../../shared/Seo';
import '../../shared/styles/partnership.scss';

// Local page components
import Logo from '../../assets/medina-logo.png';
import Partner from '../../assets/images/partner.png';
import Side from '../../assets/images/azza.png';
// @TODO Import local components here

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <>
      <Seo title="Partnership" />
      <Container id="main">
        <Container id="image">
          <img src={Logo} alt="logo" />
          <img src={Side} alt="partner" />
          <div id="gradient" />
          <div id="textoverlay">
            <h3>
              Have you thought about connecting and recruiting young national or
              international talent for your company?
            </h3>
            <p>
              AIESEC is a global network that can connect your brand to young
              national and international talents from different areas, such as:
              Marketing, Customer Service, Sales, Design and others. With us,
              you can expand your focus on generating diversity and results,
              through expansion and global positioning.
            </p>
            <p>
              Schedule a conversation with us and understand how a more
              globalized, international and innovative work environment is just
              a step away and simpler than you might think.
            </p>
          </div>
        </Container>
        <Container id="formsection">
          <h1 style={{ marginBottom: '60px' }}>Sign up for more information</h1>
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
            <input type="submit" value="Sign me UP" />
          </form>
          <p>Companies that already work with us:</p>
          <Container id="partner">
            <img src={Partner} alt="partner" />
            <img src={Partner} alt="partner" />
            <img src={Partner} alt="partner" />
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default IndexPage;
