/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import React from 'react';
import Slider from 'react-slick';

// Local images
import IM_IMG from '../../../assets/images/im-department.png';
// import LEFT_ARROW from '../../../assets/icons/arrow-left-icon.svg';
// import RIGHT_ARROW from '../../../assets/icons/arrow-right-icon.svg';

// Style
import './index.scss';
/* -------------------------------------------------------------------------- */
/*                             Departments Slider                             */
/* -------------------------------------------------------------------------- */
function DepartmentsSlider() {
  /* ******************************** CONSTANTS ******************************* */
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    customPaging() {
      return <div className="dot-icon" />;
    },
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <img className="arrow-icon" src={RIGHT_ARROW} alt="" />,
    // prevArrow: <img className="arrow-icon" src={LEFT_ARROW} alt="" />,
  };

  /* ******************************** RENDERING ******************************* */
  return (
    <div className="departments-slider">
      <section>
        <div className="wave" />
      </section>
      <p className="heading">Our Departments</p>
      <Slider {...settings}>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
        <div className="single-slider">
          <img src={IM_IMG} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default DepartmentsSlider;
