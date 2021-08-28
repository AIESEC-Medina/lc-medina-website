/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';

// local images:
import Photo1 from '../../../assets/images/old-AIESEC.png';
import Photo2 from '../../../assets/images/medina.png';
import Photo3 from '../../../assets/images/global-village.png';
import Photo4 from '../../../assets/images/medina-up.png';

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                             Our Story Section                              */
/* -------------------------------------------------------------------------- */
function OurStory() {
  /* ******************************** RENDERING ******************************* */
  return (
    <div className="OurStory-container">
      <h1 className="story-heading">Our Story</h1>
      <div className="story-informations" />
      <section className="section1">
        <div className="content">
          <h2 className="Year">1999</h2>
          <div className="Paragraph right" style={{ order: 3 }}>
            <h1>AIESEC was established.</h1>
            <p>
              AIESEC was established in 1948 after World War II, where seven
              youth across seven countries had a dream of building
              cross-cultural understanding across nations. They hoped to change
              the world, one person and one internship at a time.
            </p>
          </div>
          <img className="left" src={Photo1} alt="" />
        </div>
      </section>
      <section className="section2">
        <div className="content">
          <h2 className="Year">1999</h2>
          <div className="Paragraph left">
            <h1>Lorem, ipsum.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              suscipit et necessitatibus quidem autem rerum temporibus, in nihil
              eum itaque cumque distinctio odio, quam laboriosam laudantium
              provident alias ex est. Magni repudiandae, temporibus quos sunt
              numquam unde esse laudantium distinctio error ratione, ut facere
              aliquam! Eaque aliquid quasi quis animi?
            </p>
          </div>
          <img className="right" style={{ order: 3 }} src={Photo2} alt="" />
        </div>
      </section>
      <section className="section3">
        <div className="content">
          <h2 className="Year">1999</h2>
          <div className="Paragraph right" style={{ order: 3 }}>
            <h1>Global Village CSR Project 2014 - IHET</h1>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de limprimeriedepuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
          <img className="left" src={Photo3} alt="" />
        </div>
      </section>
      <section className="section4">
        <div className="content">
          <h2 className="Year">1999</h2>
          <div className="Paragraph left">
            <h1>AIESEC MEDINA was established</h1>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de limprimeriedepuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte.
            </p>
          </div>
          <img className="right" style={{ order: 3 }} src={Photo4} alt="" />
        </div>
      </section>
    </div>
  );
}

export default OurStory;
