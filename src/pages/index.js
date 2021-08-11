/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';

// UI lib components
import WeatherApp from '../page-components/IndexPage/WeatherApp';

// Page wrappers
import Layout from '../shared/Layout';
import Seo from '../shared/Seo';

// Local page components
// @TODO Import local components here

/* -------------------------------------------------------------------------- */
/*                                    Page                                    */
/* -------------------------------------------------------------------------- */

function IndexPage() {
  return (
    <Layout>
      <Seo title="Weather APP" />
      <WeatherApp />
    </Layout>
  );
}

export default IndexPage;
