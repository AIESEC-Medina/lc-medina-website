/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import Layout from '../../shared/Layout';
import Seo from '../../shared/Seo';
import '../../shared/styles/partnership.scss';

// Local page components
import Partimage from '../../assets/images/azza.png';
// @TODO Import local components here

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <Layout>
      <Seo title="Partnership" />
      <Container id="body">
        <Container id="image">
          <img src={Partimage} alt="azza" />
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
            <div className="formgroup">
              <label htmlFor="agreement">
                <input type="checkbox" id="agreement" />I agree to receive
                communications from AIESEC MEDINA
              </label>
            </div>
            <input type="submit" value="Sign me UP" />
          </form>
        </Container>
      </Container>
    </Layout>
  );
}

export default IndexPage;
