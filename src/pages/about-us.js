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
import DepartmentsSlider from '../page-components/AboutUsPage/DepartmentsSlider';
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
        <DepartmentsSlider />
        <PartnerSlider />
      </Layout>
    </>
  );
}

export default AboutUs;
