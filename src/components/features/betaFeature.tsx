// import React from 'react';
import arrow from '../../assets/shared/desktop/arrow.svg';
import {Link} from 'react-router-dom';
import '../../styles/features/betaFeature.css';

const betaFeature = () => {
  return (
    <div>
        <div className="beta-feature-container">
            <h1>We're in beta. Get your invite today!</h1>


            <Link to='/'><span>Get an invite</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={arrow} alt="" /></Link>
        </div>
    </div>
  )
}

export default betaFeature