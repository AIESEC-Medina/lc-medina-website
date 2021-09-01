/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';

// Page wrapper
import Layout from '../shared/Layout/index';
import Seo from '../shared/Seo/index';

// Local page components
import TopSection from '../page-components/AboutUsPage/TopSection';
import WhoAreWe from '../page-components/AboutUsPage/WhoAreWe';
import Ourstory from '../page-components/AboutUsPage/OurStory';

/* -------------------------------------------------------------------------- */
/*                               About us Page                                */
/* -------------------------------------------------------------------------- */
function AboutUs() {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Seo title="About us" />
      <Layout>
        <TopSection />
        <WhoAreWe />
        <Ourstory />
      </Layout>
    </>
  );
}

export default AboutUs;
