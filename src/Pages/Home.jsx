import AboutOurWatches from "../Components/AboutOurWatches/AboutOurWatches"
import AdjustableStrap from "../Components/AdjustableStrap/AdjustableStrap"
import BestExperience from "../Components/BestExperience/BestExperience"
import Hero from "../Components/HeroArea/Hero"
import SeeForYourself from "../Components/SeeForYourself/SeeForYourself"
import SplendidFeatures from "../Components/SplendidFeatures/SplendidFeatures"
import CustomersSay from "../Components/CustomersSay/CustomersSay"
import SocialMedia from "../Components/SocialMedia/SocialMedia"




const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutOurWatches/>
      <SplendidFeatures/>
      <BestExperience/>
      <SeeForYourself/>
      <AdjustableStrap/>
      <CustomersSay/>
      <SocialMedia/>
    </div>
  )
}

export default Home