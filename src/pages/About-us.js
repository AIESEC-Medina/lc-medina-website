/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';
// Page wrapper
import Layout from '../shared/Layout/index';
import TopSection from '../page-components/About-us/Top-section';
import Seo from '../shared/Seo/index';
import Ourstory from '../page-components/About-us/ourStory';

function AboutUs() {
  return (
    <>
      <Seo title="About-Us" />
      <Layout>
        <TopSection />
        <Ourstory />
      </Layout>
    </>
  );
}

export default AboutUs;
