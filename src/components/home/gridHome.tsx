// import React from 'react';
import '../../styles/home/gridHome.css';
import createAndShareImage from '../../assets/home/desktop/create-and-share.jpg';
import beautifulStroiesImage from '../../assets/home/desktop/beautiful-stories.jpg';
import designForEveryoneImage from '../../assets/home/desktop/designed-for-everyone.jpg';
import createAndShareTabletImage from '../../assets/home/tablet/create-and-share.jpg';
import beautifulStroiesTabletImage from '../../assets/home/tablet/beautiful-stories.jpg';
import designForEveryoneTabletImage from '../../assets/home/tablet/designed-for-everyone.jpg';
import createAndShareMobileImage from '../../assets/home/mobile/create-and-share.jpg';
import beautifulStroiesMobileImage from '../../assets/home/mobile/beautiful-stories.jpg';
import designForEveryoneMobileImage from '../../assets/home/mobile/designed-for-everyone.jpg';
import {Link} from 'react-router-dom';
import arrowWhite from '../../assets/shared/desktop/arrow.svg';
import arrowBlack from '../../assets/shared/desktop/black-arrow.svg'


function gridHome() {
  return (
    <div className="grid-container">
      <div className="left-panel-one">
        <h1>Create and share your photo stories.</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>

        <Link to="">
          <span>Get an invite</span>
          &nbsp;&nbsp;&nbsp; <img src={arrowWhite} alt="" />
        </Link>
      </div>
      <div className="right-panel-one">
        <img className='desktop-home-grid' src={createAndShareImage} alt="grid-image" />
        <img className='tablet-home-grid' src={createAndShareTabletImage} alt="grid-image" />
        <img className='mobile-home-grid' src={createAndShareMobileImage} alt="grid-image" />
      </div>
      <div className="left-panel-two">
        <img className='desktop-home-grid' src={beautifulStroiesImage} alt="grid-image" />
        <img className='tablet-home-grid' src={beautifulStroiesTabletImage} alt="grid-image" />
        <img className='mobile-home-grid' src={beautifulStroiesMobileImage} alt="grid-image" />

      </div>
      <div className="right-panel-two">
        <h1>Beautiful Stories Every Time</h1>
        <p>
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>

        <Link to="">
          <span>Get an invite</span>
          &nbsp;&nbsp;&nbsp; <img src={arrowBlack} alt="" />
        </Link>
      </div>
      <div className="left-panel-three">
        <h1>Designed for Everyone</h1>
        <p>
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>

        <Link to="">
          <span>Get an invite</span>
          &nbsp;&nbsp;&nbsp; <img src={arrowWhite} alt="" />
        </Link>
      </div>
      <div className="right-panel-three">
        <img className='desktop-home-grid' src={designForEveryoneImage} alt="grid-image" />
        <img className='tablet-home-grid' src={designForEveryoneTabletImage} alt="grid-image" />
        <img className='mobile-home-grid' src={designForEveryoneMobileImage} alt="grid-image" />
      </div>
    </div>
  );
}

export default gridHome