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
import PartnerSlider from '../page-components/Partnerslider';

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
        <PartnerSlider />
      </Layout>
    </>
  );
}

export default AboutUs;
