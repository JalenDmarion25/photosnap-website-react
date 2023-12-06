// import React from 'react'
import '../../styles/features/benefitsFeature.css'
import responeLogo from '../../assets/features/desktop/responsive.svg';
import noLimitLogo from '../../assets/features/desktop/no-limit.svg';
import embedLogo from '../../assets/features/desktop/embed.svg';
import boostLogo from '../../assets/features/desktop/boost-exposure.svg';
import customDomainLogo from '../../assets/features/desktop/custom-domain.svg';
import dragDropLogo from '../../assets/features/desktop/drag-drop.svg';

const benefitsFeature = () => {
  return (
    <div className='benefits-container-main'>
     <div className="feat-one">
        <img src={responeLogo} alt="" />

        <h3>100% Responsive</h3>

        <p>
          No matter which the device you're on, our site is fully responsive and
          stories look beautiful on any screen.
        </p>
      </div>

      <div className="feat-two">
        <img src={noLimitLogo} alt="" />
        <h3>No Photo Upload Limit</h3>

        <p>
          Our tool has no limits on uploads or bandwidth. Freely upload in bulk
          and share all of your stories in one go.
        </p>
      </div>

      <div className="feat-three">
        <img src={embedLogo} alt="" />
        <h3>Available to Embed</h3>

        <p>
          Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube
          videos, Google Maps, and more.
        </p>
      </div>
     <div className="feat-four">
        <img src={customDomainLogo} alt="" />

        <h3>Custom Domain</h3>

        <p>
          With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!
        </p>
      </div>

      <div className="feat-five">
        <img src={boostLogo} alt="" />
        <h3>Boost Your Exposure</h3>

        <p>
          Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailer list.
        </p>
      </div>

      <div className="feat-six">
        <img src={dragDropLogo} alt="" />
        <h3>Drag & Drop Image</h3>

        <p>
          Easily drag and drop you image and get beautiful shot everytime. No over the top tooling to add friction to creating stories.
        </p>
      </div>
     </div>
  )
}

export default benefitsFeature