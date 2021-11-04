import React from 'react';
import Layout from '../../shared/Layout';
import './index.scss';
import Seo from '../../shared/Seo';

function epsBlog() {
  return (
    <>
      <Seo title="Epsblog" />
      <Layout>
        <div className="Image-container">
          <h1>EPs blog</h1>
        </div>
      </Layout>
    </>
  );
}

export default epsBlog;
