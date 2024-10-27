import Become_Instractor from "@/app/_components/BecomeInstructor/BecomeInstructor";
import Com_Logos from "@/app/_components/ComLogos/ComLogos";
import LearnersAchieves from "@/app/_components/LearnersAchieves/LearnersAchieves";
import Top_Categories from "@/app/_components/TopCategories/TopCategories";
import Topics_Categories from "@/app/_components/TopicsCategories/TopicsCategories";
import BroadSelection from "@/app/_components/broadSelection/page";
import LandingPage from "@/app/_components/landingPage/page";
import LandingPageSection5 from "@/app/_components/landingPageSection5/page";
import LandingPageSection8 from "@/app/_components/landingPageSection8/page";
import LandingPageSection9 from "@/app/_components/landingPageSection9/page";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("LandingPage");

  return (
    <>
      <LandingPage t={t} />
      <Com_Logos t={t}/>
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
