import Become_Instractor from "../_components/BecomeInstructor/BecomeInstructor";
import BroadSelection from "../_components/broadSelection/page";
import Com_Logos from "../_components/ComLogos/ComLogos";
import LandingPage from "../_components/landingPage/page";
import LandingPageSection5 from "../_components/landingPageSection5/page";
import LandingPageSection8 from "../_components/landingPageSection8/page";
import LandingPageSection9 from "../_components/landingPageSection9/page";
import LearnersAchieves from "../_components/LearnersAchieves/LearnersAchieves";
import Top_Categories from "../_components/TopCategories/TopCategories";
import Topics_Categories from "../_components/TopicsCategories/TopicsCategories";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Com_Logos />
      <BroadSelection />
      <LearnersAchieves />
      <LandingPageSection5 />
      <Top_Categories />
      <LandingPageSection8 />
      <LandingPageSection9 />
      <Topics_Categories />
      <Become_Instractor />
    </>
  );
}
