import Become_Instractor from "./_components/BecomeInstructor/BecomeInstructor";
import Com_Logos from "./_components/ComLogos/ComLogos";
import Top_Categories from "./_components/TopCategories/TopCategories";
import Topics_Categories from "./_components/TopicsCategories/TopicsCategories";
import BroadSelection from "./broadSelection/page";
import LandingPage from "./landingPage/page";
import LandingPageSection4 from "./landingpageSection/page";
export default function Home() {
  return (
    <>
      <LandingPage />
      <Com_Logos />
      <BroadSelection />
      <LandingPageSection4/>
      <Top_Categories />
      <Topics_Categories />
      <Become_Instractor />
    </>
  );
}
