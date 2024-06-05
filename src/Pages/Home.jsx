import AboutOurWatches from "../Components/AboutOurWatches/AboutOurWatches"
import AdjustableStrap from "../Components/AdjustableStrap/AdjustableStrap"
import BestExperience from "../Components/BestExperience/BestExperience"
import Hero from "../Components/HeroArea/Hero"
import SeeForYourself from "../Components/SeeForYourself/SeeForYourself"
import SplendidFeatures from "../Components/SplendidFeatures/SplendidFeatures"


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutOurWatches/>
      <SplendidFeatures/>
      <BestExperience/>
      <SeeForYourself/>
      <AdjustableStrap/>
    </div>
  )
}

export default Home