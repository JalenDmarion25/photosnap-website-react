import Navbar from '../components/navbar';
import Footer from '../components/footer';
import IntroFeature from '../components/features/introFeature';
import BenefitsFeature from '../components/features/benefitsFeature';
import BetaFeature from '../components/features/betaFeature';



export const Features = () => {
  return (
    <div className='page-container'>
      <Navbar/>
      <IntroFeature></IntroFeature>
      <BenefitsFeature></BenefitsFeature>
      <BetaFeature></BetaFeature>
      <Footer></Footer>

    </div>
  )
}
