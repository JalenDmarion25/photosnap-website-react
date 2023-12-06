// import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BetaPricing from '../components/features/betaFeature';
import IntroPricing from '../components/pricing/introPricing';
import PlansComparePricing from '../components/pricing/plansComparePricing';


export const Pricing = () => {
  return (
    <div className='page-container'>
      <Navbar/>
      <IntroPricing></IntroPricing>
      <PlansComparePricing></PlansComparePricing>
      <BetaPricing></BetaPricing>
      <Footer></Footer>

    </div>
  )
}
