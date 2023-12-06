// import React from 'react'
// import {Link} from 'react-router-dom';
import '../../styles/home/storiesPreviewHome.css';
import arrow from '../../assets/shared/desktop/arrow.svg';



const storiesPreviewHome = () => {
  return (
    <div className="stories-preview">
      <div className="story-preview-one story-preview-cards">
        <div className="preview-card-info">
        <h3>The Mountains</h3>
        <p>by John Appleseed</p>
        <div className="preview-read-accent">
        <span>Read Story</span>
        <img src={arrow} alt="" />
        </div>
        </div>
      </div>
      <div className="story-preview-two story-preview-cards">
      <div className="preview-card-info">
        <h3>Sunset Cityscapes</h3>
        <p>by Benjamin Cruz</p>
        <div className="preview-read-accent">
          <span>Read Story</span>
          <img src={arrow} alt="" />
        </div>
        </div>
      </div>
      <div className="story-preview-three story-preview-cards">
      <div className="preview-card-info">

        <h3>18 Days Voyage</h3>
        <p>by Alexei Borodin</p>
        <div className="preview-read-accent">
          <span>Read Story</span>
          <img src={arrow} alt="" />
        </div>
        </div>
      </div>
      <div className="story-preview-four story-preview-cards">
      <div className="preview-card-info">

        <h3>Architecturals</h3>
        <p>by Samantha Brooke</p>
        <div className="preview-read-accent">
          <span>Read Story</span>
          <img src={arrow} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default storiesPreviewHome