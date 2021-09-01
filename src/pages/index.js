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

/* -------------------------------------------------------------------------- */
/*                              Index Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <p>hey from main!</p>
      </Container>
    </Layout>
  );
}

export default IndexPage;
