import React from 'react';
import Layout from '../../shared/Layout';
import './index.scss';
import Seo from '../../shared/Seo';
// eslint-disable-next-line import/order
import { Link } from 'gatsby';
import GTA_IMG from '../../assets/icons/Eps-blog/GTa.svg';
import LeftIcon from '../../assets/icons/arrow-left-icon.svg';
import rightIcon from '../../assets/icons/arrow-right-icon.svg';
import BlogImage from '../../assets/icons/Eps-blog/volunteer-header.png';

function epsBlog() {
  return (
    <>
      <Seo title="Epsblog" />
      <Layout>
        <div className="Image-container">
          <h1> EPs blog </h1>
        </div>
        <div className="aiesec-definition">
          <h1>AIESEC IS THE LARGEST YOUNG LEADERSHIP MOVEMENT IN THE WORLD</h1>
          <p>
            we believe in leadership as the fundamental solution to the world s
            problems and we trust youth to lead that change.Through exchanges,
            we provide opportunities for young people to explore their
            leadership potential in challenging!
          </p>
          <Link className="aboutUs-btn" to="/about-us">
            about us
          </Link>
          +
          <div className="product-slider">
            <img src={LeftIcon} alt="icon-left" />
            <img src={GTA_IMG} alt="product aiesec" className="img-product" />
            <img src={rightIcon} alt="icon-right" />
          </div>
        </div>
        <div className="blogs-container">
          <div className="Blog">
            <img src={BlogImage} alt="Blog" />
            <div className="blog-content">
              <h1>Title comes over here ………… Title title title</h1>
              <h2>flen fouleni</h2>
              <p>
                hagkayjzhpaj hoizgha ouizg alzjf alzjkg faiu akzrjgfblakjzgr
                lajzkrg lakjrh pajkzh, gakjhzr aokzjt fajkzef gaokjzleh foakjzge
                azjlg flazjr lakzjrg akzjehf akjze foakjr gbflakjr gpaiur hf
                azkrh lakh pajkhz rgmlkazh falkrhg aklh …
              </p>
              <p className="R-more">Read more </p>
            </div>
          </div>
          <div className="Blog">
            <img src={BlogImage} alt="Blog" />
            <div className="blog-content">
              <h1>Title comes over here ………… Title title title</h1>
              <h2>flen fouleni</h2>
              <p>
                hagkayjzhpaj hoizgha ouizg alzjf alzjkg faiu akzrjgfblakjzgr
                lajzkrg lakjrh pajkzh, gakjhzr aokzjt fajkzef gaokjzleh foakjzge
                azjlg flazjr lakzjrg akzjehf akjze foakjr gbflakjr gpaiur hf
                azkrh lakh pajkhz rgmlkazh falkrhg aklh …
              </p>
              <p className="R-more">Read more </p>
            </div>
          </div>
          <div className="Blog">
            <img src={BlogImage} alt="Blog" />
            <div className="blog-content">
              <h1>Title comes over here ………… Title title title</h1>
              <h2>flen fouleni</h2>
              <p>
                hagkayjzhpaj hoizgha ouizg alzjf alzjkg faiu akzrjgfblakjzgr
                lajzkrg lakjrh pajkzh, gakjhzr aokzjt fajkzef gaokjzleh foakjzge
                azjlg flazjr lakzjrg akzjehf akjze foakjr gbflakjr gpaiur hf
                azkrh lakh pajkhz rgmlkazh falkrhg aklh …
              </p>
              <p className="R-more">Read more </p>
            </div>
          </div>
          <div className="Blog">
            <img src={BlogImage} alt="Blog" />
            <div className="blog-content">
              <h1>Title comes over here ………… Title title title</h1>
              <h2>flen fouleni</h2>
              <p>
                hagkayjzhpaj hoizgha ouizg alzjf alzjkg faiu akzrjgfblakjzgr
                lajzkrg lakjrh pajkzh, gakjhzr aokzjt fajkzef gaokjzleh foakjzge
                azjlg flazjr lakzjrg akzjehf akjze foakjr gbflakjr gpaiur hf
                azkrh lakh pajkhz rgmlkazh falkrhg aklh …
              </p>
              <p className="R-more">Read more </p>
            </div>
          </div>
          <div className="Blog">
            <img src={BlogImage} alt="Blog" />
            <div className="blog-content">
              <h1>Title comes over here ………… Title title title</h1>
              <h2>flen fouleni</h2>
              <p>
                hagkayjzhpaj hoizgha ouizg alzjf alzjkg faiu akzrjgfblakjzgr
                lajzkrg lakjrh pajkzh, gakjhzr aokzjt fajkzef gaokjzleh foakjzge
                azjlg flazjr lakzjrg akzjehf akjze foakjr gbflakjr gpaiur hf
                azkrh lakh pajkhz rgmlkazh falkrhg aklh …
              </p>
              <p className="R-more">Read more </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default epsBlog;
