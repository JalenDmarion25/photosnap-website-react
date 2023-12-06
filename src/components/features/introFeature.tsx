// import React from 'react';
import '../../styles/features/introFeature.css';
import heroFeatureImage from '../../assets/features/desktop/hero.jpg';
import heroFeatureTabletImage from '../../assets/features/tablet/hero.jpg';
import heroFeatureMobileImage from '../../assets/features/mobile/hero.jpg';



const introFeature = () => {
  return (
    <div>
      <div className="intro-feature">
        <div className="intro-feature-content-one">
          <h1>Features</h1>
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photographers who wanted to share
            their stories.
          </p>
        </div>
        <div className="intro-feature-content-two">
            <img className='intro-feature-desk-img' src={heroFeatureImage} alt="" />
            <img className='intro-feature-tablet-img' src={heroFeatureTabletImage} alt="" />
            <img className='intro-feature-mobile-img' src={heroFeatureMobileImage} alt="" />

        </div>
      </div>
    </div>
  );
}

export default introFeature