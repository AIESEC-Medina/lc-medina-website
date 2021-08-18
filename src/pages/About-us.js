/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';
// Page wrapper
import Layout from '../shared/Layout/index';
import TopSection from '../page-components/About-us/Top-section';
import Seo from '../shared/Seo/index';

function AboutUs() {
  return (
    <>
      <Seo title="About-Us" />
      <Layout>
        <TopSection />
      </Layout>
    </>
  );
}

export default AboutUs;
