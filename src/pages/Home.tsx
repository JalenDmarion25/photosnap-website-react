// import React from 'react'
import Navbar from '../components/navbar';
import '../styles/index.css';
import Footer from '../components/footer';
import GridHome from '../components/home/gridHome'
import BenefitsHome from '../components/home/benefitsHome';
import StoriesPreviewHome from '../components/home/storiesPreviewHome';

const Home = () => {
  return (
    <div className='page-container'>
      <Navbar/>
      <GridHome/>
      <StoriesPreviewHome/>
      <BenefitsHome/>
      <Footer/>
    </div>
  )
}

export default Home;