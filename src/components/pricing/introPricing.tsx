// import React from 'react';
import '../../styles/pricing/introPricing.css';
import heroPricingImage from '../../assets/pricing/desktop/hero.jpg';
import heroPricingTabletImage from '../../assets/pricing/tablet/hero.jpg';
import heroPricingMobileImage from '../../assets/pricing/mobile/hero.jpg';



const introPricing = () => {
  return (
    <div>
        <div className="intro-pricing">
        <div className="intro-pricing-content-one">
          <h1>Pricing</h1>
          <p>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photographers who wanted to share
            their stories.
          </p>
        </div>
        <div className="intro-pricing-content-two">
            <img className='intro-pricing-desk-img' src={heroPricingImage} alt="" />
            <img className='intro-pricing-tablet-img' src={heroPricingTabletImage} alt="" />
            <img className='intro-pricing-mobile-img' src={heroPricingMobileImage} alt="" />

        </div>
      </div>
    </div>
  )
}

export default introPricing