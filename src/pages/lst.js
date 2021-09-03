/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from 'react';

// Page wrapper
import Layout from '../shared/Layout';
import Seo from '../shared/Seo/index';

// Local page components
import MidSection from '../page-components/LSTPage/MidSection';
// import Ourstory from '../page-components/LSTPage/OurStory';

/* -------------------------------------------------------------------------- */
/*                               LST Page                                */
/* -------------------------------------------------------------------------- */
function LST() {
  /* ******************************** RENDERING ******************************* */
  return (
    <>
      <Seo title="LST" />
      <Layout>
        <MidSection />
      </Layout>
    </>
  );
}

export default LST;
