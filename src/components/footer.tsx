// import React from 'react'
import {Link} from 'react-router-dom';
import arrow from '../assets/shared/desktop/arrow.svg';
import logoWhiteSVG from '../assets/shared/desktop/logo-white.svg';

import '../styles/footer.css'

const footer = () => {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="logo_socials">
          <div className="foot_logo">
            <img src={logoWhiteSVG} alt="" />
          </div>

          <div className="foot_socials">
            <i className="ri-facebook-box-fill facebook"></i>
            <i className="ri-youtube-line youtube"></i>
            <i className="ri-twitter-x-line twitter"></i>
            <i className="ri-pinterest-fill pinterest"></i>
            <i className="ri-instagram-line insta"></i>
          </div>
        </div>
        <div className="foot_nav">
          <Link to="/">Home</Link>
          <Link to="/stories">Stories</Link>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="invite_copyright">
          <Link to="">
            <span>Get an invite</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={arrow} alt="" />
          </Link>
          <span>Copyright 2023. All Rights Reserved</span>
        </div>
      </div>
      <div className="footer_tablet">
        <div className="footer_tablet_left">
          <div className="foot_logo">
            <img src={logoWhiteSVG} alt="" />
          </div>

          <div className="foot_nav">
            <Link to="/home">Home</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="foot_socials">
            <i className="ri-facebook-box-fill facebook"></i>
            <i className="ri-youtube-line youtube"></i>
            <i className="ri-twitter-x-line twitter"></i>
            <i className="ri-pinterest-fill pinterest"></i>
            <i className="ri-instagram-line insta"></i>
          </div>
        </div>

        <div className="footer_tablet_right">
          <div className="invite_copyright">
          <Link to="">
            <span>Get an invite</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={arrow} alt="" />
          </Link>
            <span>Copyright 2023. All Rights Reserved</span>
          </div>
        </div>
      </div>

      <div className="footer_mobile">
        <div className="mobile_container">
          <div className="foot_logo">
            <img src={logoWhiteSVG} alt="" />
          </div>

          <div className="foot_socials">
            <i className="ri-facebook-box-fill facebook"></i>
            <i className="ri-youtube-line youtube"></i>
            <i className="ri-twitter-x-line twitter"></i>
            <i className="ri-pinterest-fill pinterest"></i>
            <i className="ri-instagram-line insta"></i>
          </div>

          <div className="foot_nav">
            <Link to="/home">Home</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
          </div>

          <div className="invite_copyright">
          <Link to="">
            <span>Get an invite</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={arrow} alt="" />
          </Link>
            <span>Copyright 2023. All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer