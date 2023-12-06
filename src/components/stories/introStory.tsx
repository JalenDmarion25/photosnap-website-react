// import React from 'react'
import '../../styles/stories/introStory.css'
import {Link} from 'react-router-dom';
import arrowWhite from '../../assets/shared/desktop/arrow.svg';
import mountainMobileImage from '../../assets/stories/mobile/moon-of-appalacia.jpg'

const introStory = () => {
  return (
    
    <div className="intro-Story">
      <div className="mobile-story-bg">
        <img src={mountainMobileImage} alt="" />
      </div>

      <div className="intro-story-infor">
        <h5>Last Month's Featured Story</h5>
        <h1>Hazy Full Moon of Appalachia</h1>

        <span>
          March 2nd 2020 <span>by John Appleseed</span>
        </span>

        <p>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>

        <Link to="">
          <span>Get an invite</span>
          &nbsp;&nbsp;&nbsp; <img src={arrowWhite} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default introStory