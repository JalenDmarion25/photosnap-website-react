// import React from 'react'
import responeLogo from '../../assets/features/desktop/responsive.svg';
import noLimitLogo from '../../assets/features/desktop/no-limit.svg';
import embedLogo from '../../assets/features/desktop/embed.svg';
import  '../../styles/home/benefitsHome.css';
function benefitsHome() {
  return (
    <div className="benefits-container">
      <div className="ben-one">
        <img src={responeLogo} alt="" />

        <h3>100% Responsive</h3>

        <p>
          No matter which the device you're on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>

      <div className="ben-two">
        <img src={noLimitLogo} alt="" />
        <h3>No Photo Upload Limit</h3>

        <p>
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>

      <div className="ben-three">
        <img src={embedLogo} alt="" />
        <h3>Available to Embed</h3>

        <p>
          Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube
          videos, Google Maps, and more.
        </p>
      </div>
    </div>
  );
}

export default benefitsHome