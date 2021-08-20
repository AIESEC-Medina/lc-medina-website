/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// UI lib components
import { Container } from 'react-grid-system';

// Page wrappers
import Layout from '../shared/Layout';
import Seo from '../shared/Seo';

// Local page components
import PartnerSlider from '../page-components/Partnerslider';
// @TODO Import local components here

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <PartnerSlider />
      </Container>
    </Layout>
  );
}

export default IndexPage;
