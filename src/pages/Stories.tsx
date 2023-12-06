// import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import IntroStory from '../components/stories/introStory'
import StoryCards from '../components/stories/storyCards'
import '../styles/stories/introStory.css'


const Stories = () => {
  return (
    <div className='page-container'>
      <Navbar/>
      <IntroStory></IntroStory>
      <StoryCards></StoryCards>
      <Footer></Footer>
    </div>
  )
}

export default Stories