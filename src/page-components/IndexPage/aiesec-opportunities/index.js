/* eslint-disable max-len */
/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// Local images

// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                         AIESEC Opportunities Section                       */
/* -------------------------------------------------------------------------- */
function AIESECOpportunities() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="aiesec-opps-section flex flex-column items-center">
      <p className="heading">AIESEC Opportunities</p>
      <div className="opps-container">
        {/* <p>here goes ibrahim!</p> */}
        <span className="embed-container">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAIntTeam&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            // width="300"
            height="500"
            title="AI team"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </span>
        <span className="embed-container">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAIESECinTunisia5&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
            // width="300"
            height="500"
            title="Aiesec Medina"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </span>
      </div>
    </div>
  );
}

export default AIESECOpportunities;
