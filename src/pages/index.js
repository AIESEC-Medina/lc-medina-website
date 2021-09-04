/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Page wrappers
import Layout from '../shared/Layout';
import Seo from '../shared/Seo';

// local UI Component
import TopSection from '../page-components/IndexPage/top-section';
import ProductsSection from '../page-components/IndexPage/products';
import HowItWorksSection from '../page-components/IndexPage/how-it-works';
import AIESECOpportunities from '../page-components/IndexPage/aiesec-opportunities';
import LST from '../page-components/LSTPage';

/* -------------------------------------------------------------------------- */
/*                              Index Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <Layout whiteLink>
      <Seo title="Home" />
      <TopSection />
      <ProductsSection />
      <HowItWorksSection />
      <AIESECOpportunities />
      <LST />
    </Layout>
  );
}

export default IndexPage;
